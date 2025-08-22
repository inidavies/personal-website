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
import { preload } from 'react-dom';

export default function App({ Component, pageProps }: AppProps) {
  // preload("https://embed.figma.com/design/mEeVQ6cfpGXO0e57ezC59z/Portfolio-Website?node-id=10-9&embed-host=share", {as: "document"});
  // preload("https://embed.figma.com/slides/DcEP6Pnq7LOLutLxwjvz7T/Scoutmaster-Mobile-Screens?node-id=1-856&embed-host=share", {as: "document"});
  return <Component {...pageProps}></Component>;
}
