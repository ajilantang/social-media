import React, { Suspense, ReactNode } from "react";
import { useRoutes } from "hookrouter";

const HomeComponent = React.lazy(() => import("../scenes/Home"));
const ProfileComponent = React.lazy(() => import("../scenes/Profile"));
const PageNotFoundComponent = React.lazy(() =>
  import("../scenes/PageNotFound")
);
const AlbumsComponent = React.lazy(() => import("../scenes/Albums"));
const FriendsComponent = React.lazy(() => import("../scenes/Friends"));
const AlbumsDetail = React.lazy(() => import("../scenes/AlbumDetail"));

function LazyComponent({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
}
const routes = {
  "/": () => (
    <LazyComponent>
      <HomeComponent />
    </LazyComponent>
  ),
  "/profile/:id": ({ id }: any) => (
    <LazyComponent>
      <ProfileComponent id={id} />
    </LazyComponent>
  ),
  "/albums": () => (
    <LazyComponent>
      <AlbumsComponent />
    </LazyComponent>
  ),
  "/album_photo/:id": ({ id }: any) => (
    <LazyComponent>
      <AlbumsDetail albumId={id} />
    </LazyComponent>
  ),
  "/friends": () => (
    <LazyComponent>
      <FriendsComponent />
    </LazyComponent>
  )
};

const WebRouter = (): JSX.Element => {
  const match = useRoutes(routes);
  return (
    match || (
      <LazyComponent>
        <PageNotFoundComponent />
      </LazyComponent>
    )
  );
};
export default WebRouter;
