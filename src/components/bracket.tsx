import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const shell =
  "inline-flex min-h-11 items-center justify-center gap-2 px-4 font-display text-xs uppercase tracking-[0.22em] transition-colors duration-150";

type BracketLinkProps = {
  to: string;
  hash?: string;
  params?: Record<string, string>;
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "solid" | "ghost";
};

export function BracketLink({
  to,
  hash,
  params,
  children,
  className,
  variant = "outline",
}: BracketLinkProps) {
  const styles =
    variant === "solid"
      ? "bg-fg text-bg hover:bg-accent"
      : variant === "ghost"
        ? "min-h-11 px-0 text-muted hover:text-fg"
        : "border border-line text-fg hover:border-fg";

  return (
    <Link
      to={to}
      hash={hash}
      params={params}
      className={cn(shell, styles, className)}
    >
      <span className="text-muted">[[</span>
      <span>{children}</span>
      <span className="text-muted">]]</span>
    </Link>
  );
}

export function BracketButton({
  children,
  className,
  active,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        shell,
        "border",
        active ? "border-fg text-fg" : "border-line text-muted hover:border-fg hover:text-fg",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function BracketAnchor({
  href,
  children,
  className,
  download,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      download={download}
      className={cn(shell, "border border-line text-fg hover:border-fg", className)}
    >
      <span className="text-muted">[[</span>
      <span>{children}</span>
      <span className="text-muted">]]</span>
    </a>
  );
}
