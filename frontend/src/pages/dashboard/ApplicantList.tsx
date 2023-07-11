import { useDeleteApplicantMutation, useGetApplicantListInfoQuery } from "@/state/api";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setApplicant } from "@/state/applicantSlice";
import { getApplicantsResponse } from "@/state/types";

const ApplicantList = () => {
  const dispatch = useDispatch();
  const { data: applicantData } = useGetApplicantListInfoQuery();
  const [deleteApplicant] = useDeleteApplicantMutation();

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

  const handleClick = (applicant: getApplicantsResponse) => {
    dispatch(setApplicant(applicant));
  }

  // const handleDelete = async (id: number) => {
  //   try {
  //     await deleteApplicant(id).unwrap();
  //   } catch (error) {
  //     console.error("Error deleting applicant:", error);
  //   }
  // };

  return (
    <Box
      mt="2rem"
      p="0 0.5rem"
      height="85%"
      sx={{ overflow:"auto" }}
    >
      {applicantList.length > 0 ? (
        <Box display="flex" flexDirection="column">
          {applicantList.map((applicant) => (
            <Box
              display="flex"
              justifyContent="space-between"
              key={applicant.id}
            >
              <Button
                sx={{
                  justifyContent:"start",
                  marginLeft:"2rem"
                }}
                onClick={() => handleClick(applicant)}
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                 >
                  <Avatar
                    variant="square"
                    src={applicant.image}
                    sx={{ marginRight:"1rem" }}
                  />
                    <Typography variant="h3">{applicant.fullName}</Typography>
                </Box>
              </Button>
              <Button
                onClick={() => deleteApplicant(applicant.id)}
              >
                Delete
              </Button>
            </Box>
          ))}
        </Box>
      ) : (
      <Typography>No Applicants</Typography>
      )}
    </Box>
  )
}

export default ApplicantList