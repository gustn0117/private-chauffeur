"use client";

import { useState, type ReactNode } from "react";

type Props = {
  name: string;
  icon: ReactNode;
  color: string;
  className?: string;
} & (
  | { type: "link"; href: string; handle: string }
  | { type: "copy"; copyValue: string; handleLabel: string }
);

export default function ChannelButton(props: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (props.type !== "copy") return;
    try {
      await navigator.clipboard.writeText(props.copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // noop
    }
  };

  const baseClass = `group flex items-center gap-4 px-5 py-4 rounded-sm transition-all duration-300 hover:translate-x-1 ${props.color} ${props.className ?? ""}`;

  if (props.type === "link") {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        <div className="shrink-0">{props.icon}</div>
        <div className="flex-1 text-left">
          <div className="font-bold text-sm">{props.name}</div>
          <div className="text-xs font-medium opacity-95">{props.handle}</div>
        </div>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity font-bold">
          →
        </span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`${baseClass} cursor-pointer`}
    >
      <div className="shrink-0">{props.icon}</div>
      <div className="flex-1 text-left">
        <div className="font-bold text-sm">{props.name}</div>
        <div className="text-xs font-medium opacity-95 font-mono tracking-wide">
          {props.handleLabel}
        </div>
      </div>
      <span className="flex items-center gap-1 text-[10px] tracking-wider uppercase font-bold">
        {copied ? (
          <>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
            </svg>
            Copy
          </>
        )}
      </span>
    </button>
  );
}
