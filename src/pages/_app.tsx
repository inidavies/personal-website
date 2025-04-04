import type { AppProps } from "next/app";
import "../../public/styles/global.css";
import "../../public/styles/sayhi.css";
import "../../public/styles/name.css";
import "../../public/styles/aboutandskills.css";
import "../../public/styles/projects.css";
import "../../public/styles/projectdata.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

library.add(fab, faEnvelope, faPaperclip);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}></Component>;
}
