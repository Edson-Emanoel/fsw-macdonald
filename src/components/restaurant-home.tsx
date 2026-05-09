import Link from "next/link";
import { ClipboardList, Search } from "lucide-react";

import { formatCurrency, products, restaurant } from "@/lib/demo-food";

const groupedProducts = products.reduce<Record<string, typeof products>>(
  (groups, item) => {
    groups[item.category] = [...(groups[item.category] ?? []), item];
    return groups;
  },
  {},
);

export function RestaurantHome() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto min-h-screen w-full max-w-[390px] bg-white pb-8">
        <header className="relative h-[154px] bg-[#f3f3f3] mb-10">
          <img
            src="https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQac8bHYlkBUjlHSKiuseLm2hIFzVY0OtxEPnw"
            alt=""
            className="h-full w-full object-cover object-[center_58%]"
          />
          <div className="absolute inset-0 bg-black/20" />
          <Link
            href={`/${restaurant.slug}/orders`}
            aria-label="Ver pedidos"
            className="absolute right-5 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-[#333333] shadow-sm"
          >
            <ClipboardList className="h-5 w-5" />
          </Link>
        </header>

        <div className="px-5">
          <div className="-mt-7 flex items-end gap-3">
            <img
              src={restaurant.avatarImageUrl}
              alt={restaurant.name}
              className="h-16 w-16 rounded-xl border-4 border-white bg-white object-contain p-1 shadow-sm"
            />
            <div className="pb-1">
              <h1 className="text-xl font-semibold text-[#333333]">
                {restaurant.name}
              </h1>
              <p className="mt-1 text-xs text-[#77777f]">
                O melhor fast food do mundo
              </p>
            </div>
          </div>

          <label className="mt-6 flex h-12 items-center gap-3 rounded-2xl border border-[#edf0f4] px-4 text-[#9b9ba1]">
            <Search className="h-5 w-5" />
            <input
              placeholder="Buscar produto"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#9b9ba1]"
            />
          </label>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {Object.keys(groupedProducts).map((category) => (
              <a
                key={category}
                href={`#${category}`}
                className="whitespace-nowrap rounded-full bg-[#f4f4f6] px-4 py-2 text-xs font-semibold text-[#55555d]"
              >
                {category}
              </a>
            ))}
          </div>

          <div className="mt-7 space-y-8">
            {Object.entries(groupedProducts).map(([category, items]) => (
              <section key={category} id={category} className="scroll-mt-4">
                <h2 className="text-lg font-semibold text-[#333333]">
                  {category}
                </h2>
                <div className="mt-4 space-y-3">
                  {items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/${restaurant.slug}/menu/${item.id}`}
                      className="flex gap-3 rounded-lg border border-[#edf0f4] p-3 transition hover:border-[#ffb000]"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-24 w-24 rounded-lg bg-[#f3f3f3] object-contain p-2"
                      />
                      <div className="min-w-0 flex-1 py-1">
                        <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-[#333333]">
                          {item.name}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#77777f]">
                          {item.description}
                        </p>
                        <strong className="mt-2 block text-sm font-semibold text-[#333333]">
                          {formatCurrency(item.price)}
                        </strong>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
