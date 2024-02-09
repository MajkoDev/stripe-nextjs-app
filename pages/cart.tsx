"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const { cartCount, cartDetails, removeItem, totalPrice, clearCart, redirectToCheckout } =
    useShoppingCart();

  function handleCheckout() {}

  return (
    <main className="flex flex-col items-center justify-center p-24">
      {cartCount === 0 ? (
        <>
          <h1 className="text-4xl py-6 text-slate-600 font-semibold text-center">
            Your Shopping Cart is Empty.
          </h1>
        </>
      ) : (
        <>
          <h1 className="text-4xl py-6 text-slate-800 font-semibold text-center">
            Your Shopping Cart:
          </h1>

          <div className="my-8 flex flex-col justify-center items-start gap-3">
            {Object.values(cartDetails ?? {}).map((entry) => (
              <li key={entry.id} className=" flex py-2">
                <div className="flex flex-1 flex-row justify-between gap-4">
                  <h3>{entry.name}</h3>
                  <h4>{entry.price}</h4>
                  <h4>{entry.quantity}</h4>
                  <button
                    onClick={() => removeItem(entry.id)}
                    className="font-medium text-primary hover:text-primary/80"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-center text-slate-500 my-2">
              {totalPrice}
            </h2>
          </div>
          <div className="flex flex-row">
            <Button variant="destructive" className="m-3" onClick={() => clearCart()}>
              Clean Cart
            </Button>
            <Button className="m-3" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </>
      )}
    </main>
  );
};

export default CartPage;
