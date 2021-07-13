import React from "react";
import { IRoute } from "../@types";

const ProductionServices = React.lazy(() => import("../pages/ProductionServices"));
export const routes: Array<IRoute> = [
  {
    component: ProductionServices,
    name: "Production Services",
    path: "/e-pay/production-services",
    exact: true,
  },
];
