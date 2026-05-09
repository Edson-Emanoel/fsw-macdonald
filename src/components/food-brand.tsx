import { restaurant } from "@/lib/demo-food";

interface FoodBrandProps {
  compact?: boolean;
}

export function FoodBrand({ compact = false }: FoodBrandProps) {
  return (
    <div className="flex min-w-0 items-center gap-1.5">
      <img
        src={restaurant.avatarImageUrl}
        alt=""
        className={compact ? "h-4 w-4 rounded-full" : "h-5 w-5 rounded-full"}
      />
      <span
        className={
          compact
            ? "truncate text-sm font-semibold text-[#333333]"
            : "truncate text-sm font-medium text-[#9b9ba1]"
        }
      >
        {restaurant.name}
      </span>
    </div>
  );
}
