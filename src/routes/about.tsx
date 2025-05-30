import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="w-full h-8 flex flex-row justify-center items-center">
        Hello world!
      </div>
    </div>
  );
}
