import type { AppProps } from "next/app";
import "../../public/styles/global.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
