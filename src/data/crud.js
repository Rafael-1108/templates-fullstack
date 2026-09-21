import { HardDrive, KeyRound } from "lucide-react";
import Server from "next/dist/server/base-server";

export const examples = [
  {
    id: 1,
    method: "ApiKey",
    route: "apiKey",
    verb: "Get",
    description: "Lista series com api-key exposta.",
    color: "purple",
    Icon: KeyRound,
  },
  {
    id: 2,
    method: "SSR",
    route: "ssr",
    verb: "Get",
    description: "Lista series renderizadas no servidor com api-key oculta.",
    color: "purple",
    Icon: KeyRound,
  },
];

export const crud = [
  {
    id: 1,
    method: "Create",
    route: "create",
    verb: "Post",
    description: "Cria uma nova série.",
    color: "green",
    Icon: KeyRound,
  },
  {
    id: 2,
    method: "Read",
    route: "read",
    verb: "Get",
    description:
      "Lista de séries renderizadas no SSR, com api-key oculta no servidor.",
    color: "purple",
    Icon: Server,
  },
  {
    id: 3,
    method: "Offline",
    route: "offline",
    verb: "Get",
    description:
      "Lista de séries consumidas no SessionStorage, com api-key oculta no servidor.",
    color: "purple",
    Icon: HardDrive,
  },
];
