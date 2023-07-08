import { useGetApplicantListInfoQuery } from "@/state/api";
import { Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemButton, Stack, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";

const ApplicantList = () => {
  const { palette } = useTheme();
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
      mt="2rem"
      p="0 0.5rem"
      height="85%"
      sx={{ overflow:"auto" }}
    >
      {applicantList.length > 0 ? (
        <Box display="flex" flexDirection="column">
          {applicantList.map((applicant) => (
            <Button
              sx={{
                justifyContent:"start"
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                marginLeft="30%"
              >
                <Avatar
                  variant="square"
                  src={applicant.image}
                  sx={{ marginRight:"1rem" }}
                />
                  <Typography variant="h3">{applicant.name}</Typography>
              </Box>
            </Button>
          ))}
        </Box>
        // <List sx={{ textAlign: "center" }}>
        //   {applicantList.map((applicant) => (
        //     <ListItem key={applicant.id}>
        //       <ListItemButton sx={{ display:"inline-block", textAlign:"left" }}>
        //         <ListItemAvatar>
        //           <Avatar
        //           variant="square"
        //           src={applicant.image}
        //           />
        //         </ListItemAvatar>
        //         <Typography variant="h3">{applicant.name}</Typography>
        //       </ListItemButton>
        //     </ListItem>
        //   ))}
        // </List>
      ) : (
      <Typography>No Applicants</Typography>
      )}
    </Box>
  )
}

export default ApplicantList