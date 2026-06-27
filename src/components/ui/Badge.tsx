import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  className?: string;
}

export function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        "bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-700/10",
        "dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/30",
        className
      )}
    >
      {label}
    </span>
  );
}