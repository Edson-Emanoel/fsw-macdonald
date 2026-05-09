import { ChevronLeft, ChevronRight } from "lucide-react";

interface QuantityControlProps {
  quantity: number;
  onDecrease?: () => void;
  onIncrease?: () => void;
}

export function QuantityControl({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityControlProps) {
  return (
    <div className="flex h-11 items-center gap-3">
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Diminuir quantidade"
        className="grid h-9 w-9 place-items-center rounded-xl border border-[#edf0f4] bg-white text-[#333333] shadow-sm transition hover:bg-[#f7f7f8]"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <span className="w-3 text-center text-sm font-medium text-[#333333]">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Aumentar quantidade"
        className="grid h-9 w-9 place-items-center rounded-xl bg-[#df2a22] text-white shadow-sm transition hover:bg-[#ca211a]"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
