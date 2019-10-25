import React from "react";
import { useRoutes } from "hookrouter";

import { Home, Profile, PageNotFound, PhotoDetail, Albums } from "../scenes/";
const routes = {
  "/": () => <Home />,
  "/profile": () => <Profile />,
  "/PhotoDetail/": () => <PhotoDetail />,
  "/Albums/": () => <Albums />
};

const WebRouter = (): JSX.Element => {
  const match = useRoutes(routes);
  return match || <PageNotFound />;
};
