import React from "react";
import { OpenInStore } from "./OpenInStore";
import { blackUrl } from "../../constants";

export const OnelinkView = () => {
  const link = blackUrl || "";
  if (!link) {
    return null;
  }

  return <OpenInStore link={link} />;
};
