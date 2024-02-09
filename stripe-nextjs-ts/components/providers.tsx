import React, { ReactNode } from 'react'
import { CartProvider } from "use-shopping-cart";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <CartProvider
        cartMode="checkout-session"
        stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string}
        currency="EUR"
        shouldPersist
      >
        {children}
      </CartProvider>
  )
}
