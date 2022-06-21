import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Google } from "@mui/icons-material";
import validationsForm from "./validationSchema";
import { withFormik } from "formik";
import * as yup from "yup";
import Me from "./toppng.com-listening-music-2949x3993.png";
import { hover } from "@testing-library/user-event/dist/hover";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    ></Typography>
  );
}

const theme = createTheme();

const SignIn = (props) => {
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    // handleSubmit,
    handleReset,
    isValid,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Boolean(errors.password)) {
      const data = new FormData(event.currentTarget);
      console.log({
        name: data.get("name"),
        password: data.get("password"),
      });
    } else {
      console.log("errors");
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(to left, rgba(255, 166, 0, 0.75), rgba(255, 68, 0, 0.795)),url(${Me}) `,
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          sx={{
            background: "",
            borderRadius: "10px",
          }}
          maxWidth="xs"
        >
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgb(255,215,181)",
              padding: "25px",
              borderRadius: "10px",
              color: "black",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                mt: 1,
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                disabled={isSubmitting}
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background: "white",
                  color: "black",
                  "&:hover": {
                    background: "#efefef",
                  },
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background: "white",
                  color: "black",
                  "&:hover": {
                    background: "#efefef",
                  },
                }}
              >
                <Google />
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4, display: "flex" }} />
        </Container>
      </ThemeProvider>
    </div>
  );
};

const Form = withFormik({
  mapPropsToValues: ({ name, password }) => {
    console.log("in form");
    return {
      name: name || "",

      password: password || "",
    };
  },

  validationSchema: yup.object().shape(validationsForm),

  handleSubmit: (values) => {
    setTimeout(() => {
      // submit to the server

      alert(JSON.stringify(values, null, 2));
    }, 1000);
  },
})(SignIn);

export default Form;
