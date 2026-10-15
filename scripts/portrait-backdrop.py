"""Replace the white studio backdrop with a coloured gradient, for the portrait's
colour layer (public/portrait_color.jpg). The grayscale keeps the original.

  .venv/bin/python scripts/portrait-backdrop.py ~/Pictures/photo.png \
      public/portrait_depth.png public/portrait_color.jpg "#b7c2a0" "#5d6e4c"

The two colours are the backdrop's centre and edges (defaults: warm beige).

The backdrop is what is both far away (low in the depth map) and bright and
neutral in the photo; the mask is feathered so hair edges blend.
"""
import sys
import numpy as np
from PIL import Image, ImageFilter

photo, depth_path, out = sys.argv[1], sys.argv[2], sys.argv[3]
inner, outer = (sys.argv[4] if len(sys.argv) > 4 else "#efe3d0"), (sys.argv[5] if len(sys.argv) > 5 else "#cdb596")
img = np.asarray(Image.open(photo).convert("RGB"), dtype=np.float32) / 255
depth = np.asarray(Image.open(depth_path).convert("L"), dtype=np.float32) / 255
h, w, _ = img.shape

far = np.clip((0.45 - depth) / 0.25, 0, 1)                 # 1 where far away
bright = img.mean(axis=2)
neutral = 1 - np.clip((img.max(axis=2) - img.min(axis=2)) / 0.12, 0, 1)
light = np.clip((bright - 0.70) / 0.15, 0, 1)
mask = far * np.maximum(light * neutral, far ** 3)
# Grow the backdrop a couple of pixels into the edge before feathering: the
# outermost pixels still carry the old white and showed as a pale outline.
m = Image.fromarray((mask * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(5))
mask = np.asarray(m.filter(ImageFilter.GaussianBlur(1.5)), dtype=np.float32) / 255

def hex_rgb(s):
    s = s.lstrip("#"); return np.array([int(s[i:i + 2], 16) for i in (0, 2, 4)], dtype=np.float32) / 255

# Studio backdrop: lighter behind the head, warmer and deeper towards the edges.
yy, xx = np.mgrid[0:h, 0:w]
r = np.sqrt(((xx - w * 0.5) / (w * 0.7)) ** 2 + ((yy - h * 0.38) / (h * 0.75)) ** 2)
t = np.clip(r, 0, 1)[..., None] ** 1.3
backdrop = hex_rgb(inner) * (1 - t) + hex_rgb(outer) * t

# Keep the photo's own shading on the backdrop (the soft shadow beside the
# shoulders) so it doesn't look pasted in.
shade = np.clip(bright / np.percentile(bright[mask > 0.9], 60), 0.75, 1.05)[..., None]
result = img * (1 - mask[..., None]) + backdrop * shade * mask[..., None]
Image.fromarray((np.clip(result, 0, 1) * 255).astype(np.uint8)).save(out, quality=92)
Image.fromarray((mask * 255).astype(np.uint8)).save(out.rsplit(".", 1)[0] + "_mask.png")
print("saved", out)
