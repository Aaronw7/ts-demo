import { Box, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const applicantState = (state: RootState) => state.applicant.applicant;

const Details = () => {
  const { palette } = useTheme();
  const selectedApplicant = useSelector(applicantState);

  function formatPhoneNumber(phoneNumber: string): string {
    const cleaned = phoneNumber.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return phoneNumber;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
    >
      {selectedApplicant !== null ? (
        <Box
          display="flex"
          flexDirection="column"
        >
          <Typography component="div" variant="h3" color={palette.secondary[500]}>
            Name: <Typography display="inline" variant="h3">{selectedApplicant.fullName}</Typography>
          </Typography>
          <Typography component="div" variant="h3" color={palette.secondary[500]}>
            E-mail: <Typography display="inline" variant="h3">{selectedApplicant.email}</Typography>
          </Typography>
          <Typography component="div" variant="h3" color={palette.secondary[500]}>
            Phone: <Typography display="inline" variant="h3">{formatPhoneNumber(selectedApplicant.phone)}</Typography>
          </Typography>
          <Typography component="div" variant="h3" color={palette.secondary[500]}>
            Hobby: <Typography display="inline" variant="h3">{selectedApplicant.hobby}</Typography>
          </Typography>
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3" color={palette.secondary[500]}>Select an Applicant</Typography>
        </Box>
      )}
    </Box>
  )
}

export default Details;