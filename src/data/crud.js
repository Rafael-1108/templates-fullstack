import { HardDrive, KeyRound, Server, List } from "lucide-react";

export const examples = [
  {
    id: 1,
    method: "ApiKey",
    verb: "Get",
    route: "apiKey",
    description: "Lista series com api-key exposta.",
    color: "purple",
    Icon: KeyRound,
  },
  {
    id: 2,
    method: "SSR",
    verb: "Get",
    route: "ssr",
    description: "Lista series renderizadas no servidor com api-key oculta.",
    color: "purple",
    Icon: Server,
  },
  {
    id: 3,
    method: "Offline",
    verb: "Get",
    route: "offline",
    description:
      "Lista de séries consumidas no SessionStorage, com api-key oculta no servidor.",
    color: "purple",
    Icon: HardDrive,
  },
];

export const crud = [
  {
    id: 2,
    method: "Read",
    verb: "Get",
    route: "read",
    description: "Lista todas as séries.",
    color: "green",
    Icon: List,
  },
];
