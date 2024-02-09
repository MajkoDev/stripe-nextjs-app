import { useShoppingCart } from "use-shopping-cart";

export default function Home() {
  const { addItem } = useShoppingCart();

  return (
    <main className="flex flex-col items-center justify-center p-24">
    <h1 className="text-center text-3xl">Hello, World.</h1>
  </main>
  );
}
