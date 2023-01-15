import React from "react";

export type LayoutProps = {
    children: React.ReactNode | React.ReactNode[];
    pageTitle: string;
};

export interface INavbarItem {
    id: string;
    label: string;
    href: string;
};
