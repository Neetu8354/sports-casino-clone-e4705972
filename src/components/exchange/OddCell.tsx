import { cn } from "@/lib/utils";

export type OddTone = "back-strong" | "back-weak" | "lay-strong" | "lay-weak";

const toneMap: Record<OddTone, string> = {
  "back-strong": "bg-[#7FC3E8]",
  "back-weak": "bg-[#A9A98A]",
  "lay-strong": "bg-[#F9B597]",
  "lay-weak": "bg-[#F1C7C7]",
};

interface OddCellProps {
  price: string;
  size: string;
  tone: OddTone;
  active?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

export const OddCell = ({ price, size, tone, active, onClick, ariaLabel }: OddCellProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel ?? `${price} at size ${size}`}
    className={cn(
      "flex h-[52px] sm:h-[56px] md:h-[60px] w-[64px] sm:w-[70px] md:w-[76px] flex-col items-center justify-center rounded-[2px] text-slate-900 transition-all duration-150 active:scale-[0.97]",
      toneMap[tone],
      active && "ring-2 ring-amber-500 ring-offset-1 ring-offset-white",
    )}
  >
    <span className="text-base sm:text-lg md:text-xl font-bold leading-none">{price}</span>
    <span className="mt-1 text-[10px] sm:text-[11px] md:text-xs font-medium text-slate-700">{size}</span>
  </button>
);