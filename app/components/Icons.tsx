type IconProps = { size?: number };

const base = (size: number, fill = "none") => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill,
  stroke: fill === "none" ? "currentColor" : "none",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export function ArrowUpRight({ size = 16 }: IconProps) {
  return <svg {...base(size)}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>;
}

export function Check({ size = 16 }: IconProps) {
  return <svg {...base(size)}><path d="M4.5 12.5 9.5 17.5 19.5 6.5" /></svg>;
}

export function ChevronDown({ size = 14 }: IconProps) {
  return <svg {...base(size)}><path d="m6 9 6 6 6-6" /></svg>;
}

export function Phone({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M15.6 21A13.6 13.6 0 0 1 3 8.4 3 3 0 0 1 6 5.4h1.7a1 1 0 0 1 1 .78l.55 2.6a1 1 0 0 1-.5 1.08l-1.3.7a11.6 11.6 0 0 0 5.4 5.4l.7-1.3a1 1 0 0 1 1.08-.5l2.6.55a1 1 0 0 1 .78 1V18a3 3 0 0 1-3 3z" />
    </svg>
  );
}

export function Mail({ size = 18 }: IconProps) {
  return <svg {...base(size)}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.8 7.2 8.2 5.6 8.2-5.6" /></svg>;
}

export function Clock({ size = 18 }: IconProps) {
  return <svg {...base(size)}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.2V12l3.2 1.9" /></svg>;
}

export function MapPin({ size = 18 }: IconProps) {
  return <svg {...base(size)}><path d="M12 21.2s7-5.6 7-11.2a7 7 0 1 0-14 0c0 5.6 7 11.2 7 11.2z" /><circle cx="12" cy="10" r="2.6" /></svg>;
}

export function Send({ size = 17 }: IconProps) {
  return <svg {...base(size)}><path d="M21 3 10.8 13.2" /><path d="M21 3 14.4 21l-3.6-7.8L3 9.6 21 3z" /></svg>;
}

export function WhatsApp({ size = 20 }: IconProps) {
  return (
    <svg {...base(size, "currentColor")}>
      <path d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.76.46 3.45 1.34 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.44 9.9-9.9C21.95 6.44 17.5 2 12.04 2zm0 17.94a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.16 8.16 0 0 1-1.25-4.36c0-4.53 3.69-8.21 8.23-8.21a8.17 8.17 0 0 1 8.22 8.22c0 4.53-3.69 8.23-8.22 8.23z" />
      <path d="M16.55 14.13c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.16.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.2 3.71.59.26 1.05.41 1.4.52.59.19 1.13.16 1.55.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.3z" />
    </svg>
  );
}

export function Facebook({ size = 16 }: IconProps) {
  return (
    <svg {...base(size, "currentColor")}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.9 3.77-3.9 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94z" />
    </svg>
  );
}

export function Instagram({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedIn({ size = 16 }: IconProps) {
  return (
    <svg {...base(size, "currentColor")}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function XIcon({ size = 15 }: IconProps) {
  return (
    <svg {...base(size, "currentColor")}>
      <path d="M17.53 3h2.97l-6.49 7.41L21.75 21h-5.99l-4.7-6.14L5.6 21H2.62l6.94-7.93L2.25 3h6.15l4.25 5.62L17.53 3zm-1.06 16.2h1.64L7.6 4.72H5.84L16.47 19.2z" />
    </svg>
  );
}

export function Pinterest({ size = 16 }: IconProps) {
  return (
    <svg {...base(size, "currentColor")}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.31-.09-.79-.17-2 .04-2.87.18-.78 1.18-4.98 1.18-4.98s-.3-.6-.3-1.49c0-1.4.81-2.44 1.82-2.44.86 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.34-.24 1 .5 1.81 1.48 1.81 1.78 0 3.15-1.88 3.15-4.59 0-2.4-1.72-4.08-4.19-4.08-2.85 0-4.53 2.14-4.53 4.35 0 .86.33 1.79.75 2.29.08.1.09.19.07.29-.08.32-.25 1-.28 1.14-.04.19-.15.23-.34.14-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.47 0 6.16 2.47 6.16 5.77 0 3.45-2.17 6.22-5.19 6.22-1.01 0-1.97-.53-2.29-1.15l-.62 2.37c-.23.87-.83 1.96-1.24 2.63.93.29 1.92.45 2.95.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}
