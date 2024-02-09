import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "use-shopping-cart";
import Layout from "./layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string}
      currency="EUR"
      shouldPersist
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
