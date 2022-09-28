import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Field, Formik } from "formik";
import { TextField } from "formik-mui";
import React from "react";

export function Home() {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      {() => {
        return (
          <Box display="flex" justifyContent="center">
            <Paper sx={{ p: 2, width: "50%" }}>
              <Typography variant="h2" align="center">
                Prepaid
              </Typography>
              <Divider />
              <Grid container justifyContent="center">
                <Grid lg={12} item>
                  <Field
                    name="phoneNumber"
                    component={TextField}
                    variant="outlined"
                    label="Phone Number"
                    margin="normal"
                  />
                </Grid>
                <Grid lg={12} item>
                  <Field
                    name="phoneNumber"
                    component={TextField}
                    variant="outlined"
                    label="Phone Number"
                    margin="normal"
                  />
                </Grid>
                <Grid lg={12} item>
                  <Field
                    name="phoneNumber"
                    component={TextField}
                    variant="outlined"
                    label="Phone Number"
                    margin="normal"
                  />
                </Grid>
              </Grid>
              <Box mt={2} display="flex" flexDirection="row-reverse">
                <Button sx={{ marginLeft: 2 }}>Submit</Button>

                <Button color="secondary">Cancel</Button>
              </Box>
            </Paper>
          </Box>
        );
      }}
    </Formik>
  );
}
