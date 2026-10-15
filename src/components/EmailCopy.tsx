import React, { useState } from "react";

/**
 * The address shown in full with a copy button: a mailto: link does nothing
 * for anyone without a mail app set up, so the address must be readable too.
 */
export default function EmailCopy({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Older or locked-down browsers: select it so ⌘C / Ctrl+C works.
      const range = document.createRange();
      const node = document.getElementById("contact-email");
      if (node) {
        range.selectNodeContents(node);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);
      }
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="flex items-center gap-2 self-center mt-3 font-mono text-sm">
      <a id="contact-email" href={`mailto:${email}`} className="text-slate-700 hover:text-primary-500 tracking-wide">
        {email}
      </a>
      <button
        onClick={copy}
        aria-label={`Copy ${email}`}
        className="rounded border border-primary-500 px-1.5 py-0.5 text-[11px] font-bold tracking-widest text-primary-500 transition-colors hover:bg-primary-50"
      >
        {copied ? "COPIED!" : "COPY"}
      </button>
    </div>
  );
}
