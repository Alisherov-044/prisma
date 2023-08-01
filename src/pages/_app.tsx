import type { AppProps } from "next/app";
import "@/style/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
