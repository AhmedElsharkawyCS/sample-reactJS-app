import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs, { TabsProps } from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

interface IProps extends TabsProps {
  tabs?: Array<{
    title: string;
  }>;
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
    fontSize: 13,
    lineHeight: 1.38,
    borderRadius: 8,
  },
  tabs: { borderRadius: 8 },
  activeTab: { color: theme.palette.primary.main },
  inactiveTab: { color: theme.palette.secondary.main },
  indicator: { backgroundColor: theme.palette.action.active },
  flexContainer: {
    backgroundColor: theme.palette.common.white,
    border: `solid 1px ${theme.palette.common.border}`,
    borderRadius: 8,
  },
}));

export default function CustomTabs({ tabs, ...props }: IProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Paper className={classes.root} elevation={0}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        {...props}
        classes={{ indicator: classes.indicator, flexContainer: classes.flexContainer, root: classes.root }}
      >
        {(tabs || []).map((tab, idx) => {
          return <Tab label={tab.title} key={idx} classes={{}} />;
        })}
      </Tabs>
    </Paper>
  );
}
