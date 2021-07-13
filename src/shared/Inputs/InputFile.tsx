import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme | any) =>
  createStyles({
    root: { display: "flex", alignItems: "center", width: "100%" },
    input: {
      display: "none",
    },
    containedPrimary: {
      border: `solid 1px ${theme.palette.common.border}`,
      borderRadius: 8,
      height: "100%",
      backgroundColor: theme.palette.common.border,
      "&:hover": { backgroundColor: theme.palette.common.border },
    },
    fileIcon: { height: 68, width: 68, margin: 0 },
    text: {},
  }),
);

export default function UploadInput({ buttonIcon, className, text, ...rest }: any) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <input accept='image/*' className={classes.input} id='contained-button-file' multiple type='file' {...rest} />
      <label htmlFor='contained-button-file' className={classes.fileIcon}>
        <Button variant='contained' color='primary' component='span' classes={{ containedPrimary: classes.containedPrimary }}>
          {buttonIcon || "Upload"}
        </Button>
      </label>
      {text && <span>{text}</span>}
    </div>
  );
}
