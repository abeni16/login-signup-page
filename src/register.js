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

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const SignUp = (props) => {
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
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !Boolean(errors.password) &&
      !Boolean(errors.phone) &&
      !Boolean(errors.password) &&
      !Boolean(errors.confirmPassword)
    ) {
      const data = new FormData(event.currentTarget);
      console.log({
        name: data.get("name"),
        phone: data.get("phone"),
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
          maxWidth="xs"
          sx={{
            borderRadius: "10px",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
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
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="name"
                    label="user Name"
                    required
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.name ? errors.name : ""}
                    error={touched.name && Boolean(errors.name)}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={8}>
                  <TextField
                    id="phone"
                    required
                    label="Phone Number"
                    name="phone"
                    type="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.phone ? errors.phone : ""}
                    error={touched.phone && Boolean(errors.phone)}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    required
                    label="Password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.password ? errors.password : ""}
                    error={touched.password && Boolean(errors.password)}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="confirmPassword"
                    required
                    label="Confirm Password"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      touched.confirmPassword ? errors.confirmPassword : ""
                    }
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    margin="dense"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isSubmitting}
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
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>

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
        </Container>
      </ThemeProvider>
    </div>
  );
};
const Form = withFormik({
  mapPropsToValues: ({
    name,

    phone,

    password,
    confirmPassword,
  }) => {
    return {
      name: name || "",

      phone: phone || "",

      password: password || "",
      confirmPassword: confirmPassword || "",
    };
  },

  validationSchema: yup.object().shape(validationsForm),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(SignUp);
export default Form;
