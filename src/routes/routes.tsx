import React from "react";
import { useRoutes } from "hookrouter";

import {
  Home,
  Profile,
  PageNotFound,
  PhotoDetail,
  Albums,
  Friends
} from "../scenes/";
const routes = {
  "/": () => <Home />,
  "/profile/:id": ({ id }: any) => <Profile id={id} />,
  "/profile": () => <Profile />,
  "/photodetail": () => <PhotoDetail />,
  "/albums": () => <Albums />,
  "/friends": () => <Friends />
};

const WebRouter = (): JSX.Element => {
  const match = useRoutes(routes);
  return match || <PageNotFound />;
};
export default WebRouter;
