import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tabs from "./Tabs";
import Title from "./Title";
import Form from "./Form";
import GroupIcon from "../../assets/images/group-19.svg";

const useStyles = makeStyles((theme: any) => ({
  root: {},
  card: {
    border: `solid 1px ${theme.palette.common.border}`,
    borderRadius: 8,
    marginTop: 16,
    padding: "29px 65px 23px 24px",
  },
  backContainer: {},
  formTitle: { fontSize: 17, fontWeight: "bold", lineHeight: 1.27, paddingTop: 10 },
}));
export default function ProductionService() {
  const classes = useStyles();
  return (
    <div>
      <Title>Add new product / service</Title>
      <Tabs />
      <div className={classes.card}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <div>
              <IconButton aria-label='back' color='primary' title={"Back"}>
                <ArrowBackIosIcon />
              </IconButton>
              <small>Back</small>
            </div>
            <Typography variant='h4' gutterBottom className={classes.formTitle}>
              Enter Item details
            </Typography>
            <Form />
          </Grid>
          <Grid item xs={5}>
            <img src={GroupIcon} alt='group-19' width='100%' />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
