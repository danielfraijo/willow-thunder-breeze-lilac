import { cn } from "@/lib/utils";

export function MediaFrame({
  children,
  label,
  meta,
  className,
}: {
  children: React.ReactNode;
  label?: string;
  meta?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden border border-line bg-bg-elevated", className)}>
      <div className="pointer-events-none absolute inset-3 z-10 border border-line/50" />
      <span className="pointer-events-none absolute top-3 left-3 z-10 h-3 w-3 border-t border-l border-fg/70" />
      <span className="pointer-events-none absolute top-3 right-3 z-10 h-3 w-3 border-t border-r border-fg/70" />
      <span className="pointer-events-none absolute bottom-3 left-3 z-10 h-3 w-3 border-b border-l border-fg/70" />
      <span className="pointer-events-none absolute right-3 bottom-3 z-10 h-3 w-3 border-r border-b border-fg/70" />
      {children}
      {label ? (
        <div className="pointer-events-none absolute bottom-4 left-5 z-10 font-mono text-[10px] tracking-[0.24em] text-fg/80 uppercase">
          {label}
        </div>
      ) : null}
      {meta ? (
        <div className="pointer-events-none absolute top-4 right-5 z-10 font-mono text-[10px] tracking-[0.24em] text-fg/70 uppercase">
          {meta}
        </div>
      ) : null}
    </div>
  );
}
