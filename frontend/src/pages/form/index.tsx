import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { tokens } from "@/theme";
import { Formik } from "formik";
import * as yup from "yup";
import BoxHeader from "@/components/BoxHeader";
import { useCreateApplicantMutation } from "@/state/api";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  hobby: "",
  image: ""
}

const userSchema = yup.object().shape({
  fullName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phone: yup.string().required("required"),
  hobby: yup.string().required("required")
})

const Apply = () => {
  const colors = tokens;
  const isAboveSmallScreens = useMediaQuery("(min-width: 1200px");
  const [addApplicant] = useCreateApplicantMutation();

  const inputStyles = {
    input: {
      color: colors.grey[300],
    },
    "& .MuiFilledInput-root": {
      backgroundColor: colors.background["light"],
    },
    "& .MuiFormLabel-root": {
      color: colors.primary[300],
    },
    "& .MuiFormHelperText-root": {
      color: "#FF0000",
    },
  };

  const handleFormSubmit = (values: object) => {
    // Hardcoded Image Upload
    addApplicant({ ...values, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11/111746/7737320-leoyell.jpg" });
  }

  return (
    <Box
      m="20px"
    >
      <BoxHeader title="Create Applicant"/>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="1.5rem"
              mt="1.5rem"
              sx= {
                  isAboveSmallScreens ? {
                  gridTemplateColumns: "repeat(4, (0, 1fr))",
                } : {
                  gridAutoColumns: "1fr",
                }
              }
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Full Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
                name="fullName"
                error={!!touched.fullName && !!errors.fullName}
                helperText={touched.fullName && errors.fullName}
                sx= {[inputStyles,
                  // {    "& .MuiFilledInput-root": {
                  //   backgroundColor: colors.background['light'],
                  // },
                  // "& .MuiFormLabel-root": {
                  //   color: "#666666",
                  // },
                  // "& .MuiOutlinedInput-notchedOutline": {
                  //   borderColor: "#CCCCCC",
                  // },
                  // "& .MuiFormHelperText-root": {
                  //   color: "#FF0000",
                  // }},
                  { gridColumn: "span 4" }]}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx= {[inputStyles, { gridColumn: "span 4" }]}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx= {[inputStyles, { gridColumn: "span 2" }]}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Hobby"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.hobby}
                name="hobby"
                error={!!touched.hobby && !!errors.hobby}
                helperText={touched.hobby && errors.hobby}
                sx= {[inputStyles, { gridColumn: "span 2" }]}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Image"
                onChange={handleChange}
                value={values.image}
                name="image"
                inputProps={{
                  readOnly: true,
                  style: { cursor: 'not-allowed', pointerEvents: 'none' },
                }}
                error={!!touched.image && !!errors.image}
                helperText={touched.image && errors.image}
                sx= {[inputStyles, { gridColumn: "span 4" }]}
                InputProps={{
                  endAdornment: (
                    <input
                      name="image"
                      type="file"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          handleChange({
                            target: {
                              name: "image",
                              value: file,
                            },
                          });
                        }
                      }}
                    />
                  )
                }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="1.5rem">
              <Button type="submit" color="secondary" variant="contained">
                APPLY
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default Apply;