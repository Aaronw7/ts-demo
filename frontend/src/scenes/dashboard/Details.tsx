import { useGetApplicantListInfoQuery } from "@/state/api";
import { Box, Typography } from "@mui/material";
import { useMemo } from "react";

const Details = () => {
  const { data: applicantData } = useGetApplicantListInfoQuery();

  const applicantList = useMemo(() => {
    if (applicantData) {
      return applicantData.map(({ id, fullName, email, phone, hobby, image }) => ({
        id: id,
        name: fullName,
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
      <Typography component="div">
        Does this work? <Box display="inline" fontWeight="fontWeightBold">Bold!</Box>
      </Typography>
    ) : (
      <Typography>No Applicants</Typography>
    )}
  </Box>
  )
}

export default Details;