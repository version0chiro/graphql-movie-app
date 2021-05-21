import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LoginEntity, createEmptyLogin } from "../../model/login";

interface PropsForm {
  onLogin: (login: LoginEntity) => void;
}

// https://material-ui.com/styles/api/#makestyles-styles-options-hook
const useFormStyles = makeStyles((theme) =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    resize: {
      fontSize: 50,
    },
  })
);

export const LoginComponent: React.FC<PropsForm> = (props) => {
  const { onLogin } = props;
  const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
    createEmptyLogin()
  );
  const classes = useFormStyles();
  const onTexFieldChange =
    (fieldId: string) => (e: { target: { value: any } }) => {
      setLoginInfo({
        ...loginInfo,
        [fieldId]: e.target.value,
      });
    };

  return (
    <div className={classes.formContainer}>
      <TextField
        label="Name"
        margin="normal"
        value={loginInfo.login}
        onChange={onTexFieldChange("login")}
        InputLabelProps={{style: {fontSize: 20}}} 
      />
      <TextField
        label="Password"
        type="password"
        margin="normal"
        value={loginInfo.password}
        onChange={onTexFieldChange("password")}
      />
      <Button
        style={{ padding: "10px", margin: "10px", marginTop: "40px" }}
        variant="contained"
        color="primary"
        onClick={() => onLogin(loginInfo)}
      >
        Login
      </Button>
    </div>
  );
};
