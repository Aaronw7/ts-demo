import { useGetApplicantListInfoQuery } from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";

const Details = () => {
  const { palette } = useTheme();
  const { data: applicantData } = useGetApplicantListInfoQuery();

  const applicantList = useMemo(() => {
    if (applicantData) {
      return applicantData.map(({ id, fullName, email, phone, hobby, image }) => ({
        id: id,
        fullName: fullName,
        email: email,
        phone: phone,
        hobby: hobby,
        image: image,
      }));
    }
    return [];
  }, [applicantData])

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
    >
      {applicantList.length > 0 ? (
        <Box
          display="flex"
          flexDirection="column"
        >
          <Typography component="div" variant="h3" color={palette.secondary[500]}>
            Name: <Typography display="inline" variant="h3">{applicantList[0].fullName}</Typography>
          </Typography>
          <Typography component="div" variant="h3" color={palette.secondary[500]}>
            E-mail: <Typography display="inline" variant="h3">{applicantList[0].email}</Typography>
          </Typography>
          <Typography component="div" variant="h3" color={palette.secondary[500]}>
            Phone: <Typography display="inline" variant="h3">{applicantList[0].phone}</Typography>
          </Typography>
          <Typography component="div" variant="h3" color={palette.secondary[500]}>
            Hobby: <Typography display="inline" variant="h3">{applicantList[0].hobby}</Typography>
          </Typography>
        </Box>
      ) : (
        <Box>
          <Typography>No Applicants</Typography>
        </Box>
      )}
    </Box>
  )
}

export default Details;