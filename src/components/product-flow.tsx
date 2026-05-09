"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Check,
  ClipboardList,
  CookingPot,
  Trash2,
  X,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { FoodBrand } from "@/components/food-brand";
import { QuantityControl } from "@/components/quantity-control";
import { DemoProduct, formatCurrency, restaurant } from "@/lib/demo-food";

interface ProductFlowProps {
  product: DemoProduct;
}

export function ProductFlow({ product }: ProductFlowProps) {
  const [quantity, setQuantity] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const total = product.price * quantity;

  const openCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const finishOrder = () => {
    setCheckoutOpen(false);
    setSuccessOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative mx-auto min-h-screen w-full max-w-[390px] overflow-hidden bg-white">
        <div className="relative h-[333px] bg-[#f3f3f3]">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-contain object-center p-4"
          />
          <Link
            href={`/${restaurant.slug}`}
            aria-label="Voltar"
            className="absolute left-5 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-[#333333] shadow-sm"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label="Abrir sacola"
            className="absolute right-5 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-[#333333] shadow-sm"
          >
            <ClipboardList className="h-5 w-5" />
          </button>
        </div>

        <div className="-mt-1 rounded-t-[20px] bg-white px-5 pb-6 pt-5">
          <FoodBrand />
          <h1 className="mt-1 text-[17px] font-semibold leading-tight text-[#333333]">
            {product.name}
          </h1>

          <div className="mt-5 flex items-center justify-between gap-4">
            <strong className="text-[20px] font-semibold text-[#333333]">
              {formatCurrency(product.price)}
            </strong>
            <QuantityControl
              quantity={quantity}
              onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
              onIncrease={() => setQuantity((current) => current + 1)}
            />
          </div>

          <div className="mt-5 space-y-3">
            <h2 className="text-sm font-semibold text-[#333333]">Sobre</h2>
            <p className="text-[15px] leading-6 text-[#77777f]">
              {product.description}
            </p>
          </div>

          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-2 text-[#333333]">
              <CookingPot className="h-5 w-5" />
              <h2 className="text-sm font-semibold">Ingredientes</h2>
            </div>
            <ul className="list-disc space-y-1 pl-7 text-[15px] leading-5 text-[#77777f]">
              {product.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <Button
            type="button"
            onClick={() => setCartOpen(true)}
            className="mt-7 h-12 w-full rounded-2xl bg-[#ffb000] text-[15px] font-semibold text-white hover:bg-[#efa500]"
          >
            Adicionar à Sacola
          </Button>
        </div>

        {cartOpen && (
          <CartPanel
            product={product}
            quantity={quantity}
            total={total}
            onClose={() => setCartOpen(false)}
            onCheckout={openCheckout}
            onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
            onIncrease={() => setQuantity((current) => current + 1)}
          />
        )}

        {checkoutOpen && (
          <div className="absolute inset-0 z-20 grid place-items-center bg-black/40 px-9">
            <div className="w-full rounded-lg bg-white px-5 pb-5 pt-6 text-center shadow-xl">
              <h2 className="text-base font-semibold text-[#333333]">Quase lá!</h2>
              <p className="mx-auto mt-3 max-w-[250px] text-sm leading-6 text-[#9b9ba1]">
                Para finalizar o seu pedido, insira os seus dados abaixo.
              </p>

              <form className="mt-5 space-y-4 text-left">
                <label className="block text-sm font-semibold text-[#333333]">
                  Seu nome
                  <input
                    placeholder="Digite seu nome"
                    className="mt-2 h-12 w-full rounded-2xl border border-[#edf0f4] px-4 text-sm font-normal outline-none placeholder:text-[#a1a1a8] focus:border-[#ffb000]"
                  />
                </label>
                <label className="block text-sm font-semibold text-[#333333]">
                  Seu CPF
                  <input
                    placeholder="Digite seu CPF"
                    className="mt-2 h-12 w-full rounded-2xl border border-[#edf0f4] px-4 text-sm font-normal outline-none placeholder:text-[#a1a1a8] focus:border-[#ffb000]"
                  />
                </label>
              </form>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  onClick={() => setCheckoutOpen(false)}
                  className="h-12 rounded-2xl bg-[#f4f4f6] text-sm font-semibold text-[#333333] hover:bg-[#ececf0]"
                >
                  Cancelar
                </Button>
                <Button
                  type="button"
                  onClick={finishOrder}
                  className="h-12 rounded-2xl bg-[#df2a22] text-sm font-semibold text-white hover:bg-[#ca211a]"
                >
                  Finalizar
                </Button>
              </div>
            </div>
          </div>
        )}

        {successOpen && (
          <div className="absolute inset-0 z-20 grid place-items-center bg-black/40 px-9">
            <div className="w-full rounded-lg bg-white px-6 pb-5 pt-6 text-center shadow-xl">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#df2a22] text-white">
                <Check className="h-9 w-9 stroke-[3]" />
              </div>
              <h2 className="mt-6 text-base font-semibold text-[#333333]">
                Pedido Efetuado!
              </h2>
              <p className="mt-3 text-sm text-[#9b9ba1]">
                Seu pedido foi realizado com sucesso!
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Button
                  asChild
                  className="h-12 rounded-2xl bg-white text-sm font-semibold text-[#df2a22] hover:bg-[#fff5f4]"
                >
                  <Link href={`/${restaurant.slug}/orders`}>Ver pedidos</Link>
                </Button>
                <Button
                  type="button"
                  onClick={() => setSuccessOpen(false)}
                  className="h-12 rounded-2xl bg-[#f4f4f6] text-sm font-semibold text-[#333333] hover:bg-[#ececf0]"
                >
                  Continuar
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

interface CartPanelProps {
  product: DemoProduct;
  quantity: number;
  total: number;
  onClose: () => void;
  onCheckout: () => void;
  onDecrease: () => void;
  onIncrease: () => void;
}

function CartPanel({
  product,
  quantity,
  total,
  onClose,
  onCheckout,
  onDecrease,
  onIncrease,
}: CartPanelProps) {
  return (
    <div className="absolute inset-0 z-10 bg-black/40">
      <aside className="ml-auto flex h-full w-[348px] max-w-[calc(100%-42px)] flex-col bg-white px-5 pb-7 pt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#333333]">Sacola</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar sacola"
            className="grid h-8 w-8 place-items-center rounded-full text-[#333333] transition hover:bg-[#f4f4f6]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex items-start gap-3">
          <img
            src={product.imageUrl}
            alt=""
            className="h-[74px] w-[76px] rounded-lg bg-[#f3f3f3] object-contain p-2"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-medium text-[#333333]">
              {product.shortName}
            </p>
            <strong className="mt-1 block text-sm font-semibold text-[#333333]">
              {formatCurrency(product.price)}
            </strong>
            <QuantityControl
              quantity={quantity}
              onDecrease={onDecrease}
              onIncrease={onIncrease}
            />
          </div>
          <button
            type="button"
            aria-label="Remover item"
            className="mt-6 grid h-9 w-9 place-items-center rounded-xl border border-[#edf0f4] bg-white text-[#333333] shadow-sm"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-auto">
          <div className="rounded-2xl border border-[#edf0f4] px-5 py-4 text-sm">
            <div className="flex items-center justify-between border-b border-[#edf0f4] pb-3 text-[#77777f]">
              <span>Subtotal</span>
              <span className="text-[#333333]">{formatCurrency(total)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#edf0f4] py-3 text-[#77777f]">
              <span>Descontos</span>
              <span className="text-[#333333]">{formatCurrency(0)}</span>
            </div>
            <div className="flex items-center justify-between pt-3 font-semibold text-[#333333]">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
          <Button
            type="button"
            onClick={onCheckout}
            className="mt-6 h-12 w-full rounded-2xl bg-[#ffb000] text-[15px] font-semibold text-white hover:bg-[#efa500]"
          >
            Finalizar Pedido
          </Button>
        </div>
      </aside>
    </div>
  );
}
