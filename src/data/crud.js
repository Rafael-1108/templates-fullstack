import {
    HardDrive,
    KeyRound,
    Layers3,
    List,
    PlusCircle,
    Server,
    SquarePen,
    Trash2,
} from 'lucide-react';

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
  {
    id: 4,
    method: "Fullstack",
    route: "fullstack",
    verb: "Get",
    description: "Lista séries via API Route - Backend Intermediário",
    color: "purple",
    Icon: Layers3,
  },
];

export const crud = [
  {
    id: 1,
    method: "Create",
    verb: "Post",
    route: "create",
    description: "Cria uma nova série via modal e API Route.",
    color: "orange",
    Icon: PlusCircle,
  },
  {
    id: 2,
    method: "Read",
    verb: "Get",
    route: "read",
    description: "Lista séries no SSR e busca pelo id em rota dinâmica.",
    color: "green",
    Icon: List,
  },
  {
    id: 3,
    method: "Update",
    verb: "Put",
    route: "update",
    description: "Atualiza uma série existente pelo id.",
    color: "blue",
    Icon: SquarePen,
  },
  {
    id: 4,
    method: "Delete",
    verb: "Delete",
    route: "delete",
    description: "Remove uma série existente pelo id.",
    color: "red",
    Icon: Trash2,
  },
];
