import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/Remove";
import ExpandMore from "@material-ui/icons/Add";
import { DRAWER_WIDTH } from "../../constants";
import { CustomToolbar } from "../../shared";
import { sideMenuItems } from "./llistItems";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme | any) =>
  createStyles({
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
      borderRight: "solid 1px " + theme.palette.common.border,
      backgroundColor: theme.palette.common.white,
    },
    drawerContainer: {
      overflow: "auto",
    },
    menuListItem: {
      height: 64,
    },
    listItemIcon: {
      color: theme.palette.primary.main,
    },
    menuListItemNested: {
      paddingLeft: theme.spacing(8),
      height: 64,
    },
    subList: {
      backgroundColor: theme.palette.common.hover,
    },
    activeItem: { color: theme.palette.action.active },
  }),
);

export default function SideMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClick = () => setOpen(!open);
  const onPush = (path: string) => history.push(path);

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      elevation={4}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <CustomToolbar />
      <div className={classes.drawerContainer}>
        <List>
          {sideMenuItems.map((menu) => {
            return (
              <React.Fragment key={menu.name}>
                <ListItem button onClick={() => (menu.subItems ? handleClick() : onPush(menu.link))} className={classes.menuListItem}>
                  <ListItemIcon classes={{ root: classes.listItemIcon }}>{<menu.icon />}</ListItemIcon>
                  <ListItemText primary={menu.title} className={clsx({ [classes.activeItem]: menu.link === history.location.pathname })} />
                  {(menu.subItems || []).length ? open ? <ExpandLess /> : <ExpandMore /> : <ExpandMore />}
                </ListItem>
                {(menu.subItems || []).length > 0 && (
                  <Collapse in={open} timeout='auto'>
                    <List component='div' disablePadding classes={{ root: classes.subList }}>
                      {(menu.subItems || []).map((subMenu) => {
                        const path = menu.link + subMenu.link;
                        return (
                          <ListItem key={subMenu.name} button className={classes.menuListItemNested} onClick={() => onPush(path)}>
                            <ListItemText primary={subMenu.title} className={clsx({ [classes.activeItem]: path === history.location.pathname })} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
}
