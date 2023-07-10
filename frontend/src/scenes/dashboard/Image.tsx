import { useGetApplicantListInfoQuery } from "@/state/api";
import { Box, Typography } from "@mui/material";
import { useMemo } from "react";

const Image = () => {
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
    height="55vh"
    marginTop={2}
  >
    {applicantList.length > 0 ? (
      <img
        height="100%"
        object-fit="contain"
        src={applicantList[0].image}
        alt="applicant"
      />
    ) : (
      <Typography>No Applicants</Typography>
    )}
  </Box>
  )
}

export default Image;