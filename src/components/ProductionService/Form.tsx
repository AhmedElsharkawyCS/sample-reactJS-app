import React from "react";
import { Controller, useForm } from "react-hook-form";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { InputFile, MuiButton, TextInput } from "../../shared";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    input: {
      marginTop: 18,
    },
    buttons: { marginTop: 40, display: "flex" },
  }),
);
const schema = yup.object().shape({
  files: yup.array().required("File input is required!"),
  itemName: yup.string().required("Item name field is required"),
  price: yup.number().positive().required("Price field is required"),
});
export default function Form() {
  const classes = useStyles();
  const { handleSubmit, register, control, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <InputFile
        // {...register("files")}
        buttonIcon={<PhotoCamera />}
        className={classes.input}
        text={"Click to Upload Your files"}
      />
      {/* <Controller
        name='itemName'
        control={control}
        defaultValue={""}
        render={({ field }) => ( */}
      <TextInput
        //  {...field}
        style={{ maxWidth: 310 }}
        className={classes.input}
        placeholder='Enter item'
        label='Item name'
        variant='outlined'
      />
      {/* )} */}

      {/*TODO: country */}
      {/* <Controller
        name='price'
        control={control}
        defaultValue={""}
        render={({ field, fieldState }) => ( */}
      <TextInput
        // {...field}
        style={{ maxWidth: 310 }}
        className={classes.input}
        placeholder='KWD 20.500'
        label='Price ( Per piece )'
        variant='outlined'
      />
      {/* )} */}

      <div className={classes.buttons}>
        <MuiButton type='submit' variant='contained' color='primary' title={"Submit"} style={{ marginInlineEnd: 24 }} />
        <MuiButton title={"Cancel"} variant='contained' color='secondary' />
      </div>
    </div>
    // </form>
  );
}
