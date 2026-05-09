import Link from "next/link";
import { ArrowLeft, ClipboardList } from "lucide-react";

import { FoodBrand } from "@/components/food-brand";
import { formatCurrency, product, products, restaurant } from "@/lib/demo-food";

const orders = [
  { status: "Em preparo", finished: false },
  { status: "Finalizado", finished: true },
];

export function OrdersPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto min-h-screen w-full max-w-[390px] bg-white px-5 pb-8 pt-8">
        <header className="flex items-center justify-between">
          <Link
            href={`/${restaurant.slug}/menu/${product.id}`}
            aria-label="Voltar"
            className="grid h-8 w-8 place-items-center rounded-full text-[#333333]"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <Link
            href={`/${restaurant.slug}/menu/${product.id}`}
            aria-label="Sacola"
            className="grid h-8 w-8 place-items-center rounded-full text-[#333333]"
          >
            <ClipboardList className="h-5 w-5" />
          </Link>
        </header>

        <div className="mt-9 flex items-center gap-3">
          <ClipboardList className="h-5 w-5 text-[#333333]" />
          <h1 className="text-xl font-semibold text-[#333333]">Meus Pedidos</h1>
        </div>

        <div className="mt-7 space-y-4">
          {orders.map((order) => (
            <article
              key={order.status}
              className="rounded-lg border border-[#edf0f4] px-[18px] py-5"
            >
              <span
                className={
                  order.finished
                    ? "inline-flex rounded-full bg-[#61ce70] px-3 py-1 text-xs font-semibold text-white"
                    : "inline-flex rounded-full bg-[#f4f4f6] px-3 py-1 text-xs font-semibold text-[#9b9ba1]"
                }
              >
                {order.status}
              </span>
              <div className="mt-4">
                <FoodBrand compact />
              </div>
              <div className="mt-4 flex items-center gap-2 border-y border-[#edf0f4] py-3">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#8f97a6] text-xs font-semibold text-white">
                  1
                </span>
                <span className="text-xs text-[#55555d]">{product.name}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-[#333333]">
                  {formatCurrency(product.price)}
                </span>
                <Link
                  href={`/${restaurant.slug}/menu/${product.id}`}
                  className={
                    order.finished
                      ? "text-xs font-semibold text-[#df2a22]"
                      : "text-xs font-semibold text-[#f2c7c5]"
                  }
                >
                  Adicionar à Sacola
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-base font-semibold text-[#333333]">
            Pedir novamente
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {products.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href={`/${restaurant.slug}/menu/${item.id}`}
                className="rounded-lg border border-[#edf0f4] p-2"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-24 w-full rounded-md bg-[#f3f3f3] object-contain p-2"
                />
                <p className="mt-2 line-clamp-2 text-xs font-semibold leading-4 text-[#333333]">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
