import { Box, useMediaQuery } from '@mui/material';
import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox';
import { useGetApplicantListInfoQuery } from '@/state/api';
import { useMemo } from 'react';
import Image from './Image';
import Details from './Details';
import ApplicantList from './ApplicantList';

const Dashboard = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 1200px");
  const { data: applicantData } = useGetApplicantListInfoQuery();

  const applicantList = useMemo(() => {
    if (applicantData) {
      return applicantData.map(({ fullName, email, phone, hobby, image }) => ({
        fullName: fullName,
        email: email,
        phone: phone,
        hobby: hobby,
        image: image,
      }));
    }
    return [];
  }, [applicantData])

  const gridTemplateLarge = `
  "a a c"
  "a a c"
  "a a c"
  "a a c"
  "a a c"
  "a a c"
  "a a c"
  "b b c"
  "b b c"
  `;

  const gridTemplateSmall = `
  "a"
  "a"
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "c"
  "c"
  "c"
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
          gridTemplateRows: "repeat(9, minmax(60px, 1fr))",
          gridTemplateAreas: gridTemplateLarge,
        } : {
          gridAutoColumns: "1fr",
          gridAutoRows: "80px",
          gridTemplateAreas: gridTemplateSmall,
        }
      }
    >
      <DashboardBox gridArea="a">
        <BoxHeader
        title="Selected Applicant"
        />
        <Image />
      </DashboardBox>
      <DashboardBox gridArea="b">
        <BoxHeader
          title="Applicant Details"
        />
        <Details />
      </DashboardBox>
      <DashboardBox gridArea="c">
        <BoxHeader
          title="List of Applicants"
          sideText={`${applicantList.length} Applicants`}
        />
        <ApplicantList />
      </DashboardBox>
    </Box>
  )
}

export default Dashboard;