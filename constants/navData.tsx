import {
  IconBulb,
  IconHome,
  IconMessage,
  IconScreenShare,
  IconUser,
} from "@tabler/icons-react";

export const navItems = [
  {
    name: "Lamps",
    link: "/dashboard",
    icon: <IconBulb className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Monitoring",
    link: "/monitoring",
    icon: (
      <IconScreenShare className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];
