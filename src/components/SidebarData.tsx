import React, { ReactNode } from "react";
import { ReactComponent as SwitchOrganizationIcon } from "../assets/vectors/guarantors.svg";
import { ReactComponent as DashboardIcon } from "../assets/vectors/dashboard.svg";
import { ReactComponent as UsersIcon } from "../assets/vectors/users.svg";

interface SidebarDataProps {
  title: any;
  exact: boolean;
  path: string;
  paths: string[];
  icon: ReactNode;
  cName: string;
  section?: string;
}

export const SidebarData: SidebarDataProps[] = [
  {
    title: "Switch Organization",
    exact: true,
    path: "/",
    paths: ["/"],
    icon: <SwitchOrganizationIcon />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    exact: true,
    path: "/",
    paths: ["/dashboard"],
    icon: <DashboardIcon />,
    cName: "nav-text",
  },
  {
    section: "customers",
    title: "Users",
    exact: true,
    path: "/users",
    paths: ["/users"],
    icon: <UsersIcon />,
    cName: "nav-text",
  },
];
