import { Box, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const applicantState = (state: RootState) => state.applicant.applicant;

const Image = () => {
  const { palette } = useTheme();
  const selectedApplicant = useSelector(applicantState);

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignContent="center"
    height="55vh"
    marginTop={2}
  >
    {selectedApplicant !== null ? (
      <img
        height="100%"
        object-fit="contain"
        src={selectedApplicant.image}
        alt="applicant"
      />
    ) : (
      <Typography variant="h3" color={palette.secondary[500]}>Select an Applicant</Typography>
    )}
  </Box>
  )
}

export default Image;