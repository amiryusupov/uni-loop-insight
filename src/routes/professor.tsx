import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/professor")({
  component: () => <AppShell role="professor" />,
});
