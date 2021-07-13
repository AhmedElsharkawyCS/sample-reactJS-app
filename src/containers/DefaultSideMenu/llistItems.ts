import { ISideMenuItems } from "../../@types";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

export const sideMenuItems: Array<ISideMenuItems> = [
  {
    icon: ListAltIcon,
    link: "/products",
    name: "products",
    title: "All Products",
  },
  {
    icon: MarkunreadMailboxIcon,
    link: "/transfers",
    name: "Transfers",
    title: "Transfers",
  },
  {
    icon: AccountBalanceWalletIcon,
    link: "/e-pay",
    name: "e-pay",
    title: "E-Pay",
    subItems: [
      {
        link: "/manage-payers",
        name: "manage payers",
        title: "Manage Payers",
      },
      {
        link: "/production-services",
        name: "production services",
        title: "Production Services",
      },
    ],
  },
  {
    icon: AccountBalanceWalletIcon,
    link: "/manage-salaries",
    name: "manage salaries",
    title: "Manage Salaries",
  },
];
