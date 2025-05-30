import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="px-20 py-4 max-h-16 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">
          Groom
        </Link>
        <div className="flex gap-4">
          <Link to="/chat">chat</Link>
          <Link to="/myProfile">My Profile</Link>
        </div>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
