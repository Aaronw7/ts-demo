import { Box, useMediaQuery } from '@mui/material';
import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox';
import { useGetApplicantListInfoQuery } from '@/state/api';
import { useMemo } from 'react';
import ApplicantList from './ApplicantList';

const Dashboard = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 1200px");
  const { data: applicantData } = useGetApplicantListInfoQuery();
  console.log('this is the data: ', applicantData);

  const applicantList = useMemo(() => {
    if (applicantData) {
      return applicantData.map(({ fullName, email, phone, hobby, image }) => ({
        name: fullName,
        email: email,
        phone: phone,
        hobby: hobby,
        image: image,
      }));
    }
    return [];
  }, [applicantData])
  console.log('this is the applicant list: ', applicantList);

  const gridTemplateLarge = `
  "a a b"
  "a a b"
  "a a b"
  "a a b"
  "a a b"
  "a a b"
  "a a b"
  "c c b"
  "c c b"
  "c c b"
  `;

  const gridTemplateSmall = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  `

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx= {
        isAboveSmallScreens ? {
          gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
          gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
          gridTemplateAreas: gridTemplateLarge,
        } : {
          gridAutoColumns: "1fr",
          gridAutoRows: "80px",
          gridTemplateAreas: gridTemplateSmall,
        }
      }
    >
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b">
        <BoxHeader
          title="List of Applicants"
          sideText={`${applicantList.length} Applicants`}
        />
        <ApplicantList />
      </DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </Box>
  )
}

export default Dashboard;