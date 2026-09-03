import type { Spec } from "@/lib/systems";
import { cn } from "@/lib/utils";

export function SpecGrid({ specs, className }: { specs: Spec[]; className?: string }) {
  return (
    <dl className={cn("grid grid-cols-2 gap-px bg-line", className)}>
      {specs.map((spec) => (
        <div key={spec.label} className="bg-bg px-3 py-4">
          <dt className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">{spec.label}</dt>
          <dd className="font-display mt-1 text-xl tracking-[0.06em] text-fg uppercase">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
