import React from "react";

export interface IRoute {
  path: string;
  name: string;
  component: React.FC<any>;
  exact?: boolean;
}

export interface ISideMenuItems {
  icon: React.FC<any>;
  name: string;
  title: string;
  link: string;
  subItems?: Array<{
    name: string;
    title: string;
    link: string;
  }>;
}
