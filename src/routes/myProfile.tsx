import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myProfile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myProfile"!</div>
}
