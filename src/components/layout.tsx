import sytles from "./layout.module.css";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return <div className={sytles.container}>{children}</div>;
}
