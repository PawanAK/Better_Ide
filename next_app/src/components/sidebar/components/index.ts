import { LucideIcon } from 'lucide-react';

import Files from "./files";
import AllProjects from "./projects";
import Packages from "./packages";
import SQLite from "./sqlite-explorer"

export type TSidebarItem = {
    icon: LucideIcon;
    label: string;
    value: TSidebarOptions;
}

const sidebarItems:TSidebarItem[] = [Files, AllProjects, Packages, SQLite]

export default sidebarItems;
export type TSidebarOptions = null | "SETTINGS" | "FILES" | "ALL_PROJECTS" | "PACKAGES" | "SQLITE_EXPLORER";