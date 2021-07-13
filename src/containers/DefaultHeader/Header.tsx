import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import LogoIcon from "../../assets/images/logo.svg";
import InboxIcon from "../../assets/images/ic-inbox.svg";
import NotificationIcon from "../../assets/images/ic-notifications.svg";
import LogoutIcon from "../../assets/images/ic-logout.svg";
import { HEADER_HEIGHT } from "../../constants";
import { CustomToolbar } from "../../shared";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows[1],
      height: HEADER_HEIGHT,
    },
    toolbar: {
      minHeight: HEADER_HEIGHT,
    },
    icIcon: {
      width: 30,
      height: 30,
      marginInlineStart: 30,
      cursor: "pointer",
    },
    badge: {
      backgroundColor: theme.palette.action.active,
      width: 10,
      height: 11,
      minWidth: 10,
      top: 10,
    },
    avatar: {
      width: 36,
      height: 36,
      marginInlineStart: 13,
    },
    info: {
      fontSize: "13px",
      lineHeight: 1.38,
      display: "flex",
      justifyContent: "flex-end",
      flexDirection: "column",
      alignItems: "flex-end",
      color: theme.palette.primary.light,
      minWidth: 135,
    },
    userName: { margin: "0 0 3px 0" },
    loginInfo: {
      margin: 0,
      fontSize: 11,
      lineHeight: 1.18,
    },
  }),
);

export default function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar} elevation={0}>
        <CustomToolbar>
          <Grid container spacing={3}>
            <Grid item xs={3} container justifyContent='flex-start' alignItems='center'>
              <img alt='logo' loading='lazy' width='102' height='55' src={LogoIcon} />
            </Grid>
            <Grid container item xs={9} justifyContent='flex-end' alignItems='center'>
              <div className={classes.info}>
                <p className={classes.userName}>Abdullah Mohamed</p>
                <p className={classes.loginInfo}>Last Login 23 Aug 19 | 20:30</p>
              </div>
              <Avatar alt='User Avatar' className={classes.avatar}>
                A
              </Avatar>
              <img alt='inbox' loading='lazy' width='30' height='30' src={InboxIcon} className={classes.icIcon} />
              <Badge color='secondary' overlap='circular' badgeContent=' ' classes={{ badge: classes.badge }}>
                <img alt='notifications' loading='lazy' width='30' height='30' src={NotificationIcon} className={classes.icIcon} />
              </Badge>
              <img alt='logout' loading='lazy' width='30' height='30' src={LogoutIcon} className={classes.icIcon} />
            </Grid>
          </Grid>
        </CustomToolbar>
      </AppBar>
    </React.Fragment>
  );
}
