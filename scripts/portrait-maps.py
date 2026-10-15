"""Depth and normal maps for the portfolio portrait.

  python3 -m venv .venv && .venv/bin/pip install torch transformers pillow numpy
  .venv/bin/python scripts/portrait-maps.py ~/Pictures/photo.png public

Writes public/portrait.jpg, portrait_depth.png and portrait_normal.png, which
ThreeJSPicture loads. Runs locally; the photo never leaves the machine.

Depth comes from Depth Anything V2 (white = near, like the old map). Normals
are worked out from the depth's slopes, in OpenGL convention (green = up).
"""
import sys
import numpy as np
import torch
from PIL import Image, ImageFilter
from transformers import pipeline

src, out_dir = sys.argv[1], sys.argv[2]
img = Image.open(src).convert("RGB")

device = "mps" if torch.backends.mps.is_available() else "cpu"
estimate = pipeline("depth-estimation", model="depth-anything/Depth-Anything-V2-Base-hf", device=device)
raw = estimate(img)["predicted_depth"]
d = torch.nn.functional.interpolate(raw[None, None] if raw.dim() == 2 else raw[None],
                                    size=img.size[::-1], mode="bicubic", align_corners=False)[0, 0].cpu().numpy()

# Normalise: the model gives relative depth where larger means nearer.
lo, hi = np.percentile(d, 1), np.percentile(d, 99.5)
d = np.clip((d - lo) / (hi - lo), 0, 1)
depth = Image.fromarray((d * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2))
depth.save(f"{out_dir}/portrait_depth.png")

# Normals from the full-precision depth: the 8-bit image has only 256 steps,
# and their edges showed up as contour rings in the normals.
def gaussian_blur(a, sigma):
    r = int(sigma * 3)
    k = np.exp(-np.arange(-r, r + 1) ** 2 / (2 * sigma ** 2)); k /= k.sum()
    a = np.pad(a, r, mode="edge")
    a = np.apply_along_axis(lambda v: np.convolve(v, k, mode="valid"), 1, a)
    return np.apply_along_axis(lambda v: np.convolve(v, k, mode="valid"), 0, a)

h = gaussian_blur(d.astype(np.float32), 2.5)
relief = img.size[0] * 0.12          # how tall the face stands, in pixels
hy, hx = np.gradient(h * relief)
n = np.dstack([-hx, hy, np.ones_like(h)])   # image y runs down; OpenGL y runs up
n /= np.linalg.norm(n, axis=2, keepdims=True)
Image.fromarray(((n * 0.5 + 0.5) * 255).astype(np.uint8)).save(f"{out_dir}/portrait_normal.png")
img.save(f"{out_dir}/portrait.jpg", quality=90)
print("done", img.size, device)
