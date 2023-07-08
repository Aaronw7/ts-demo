import {Box, useMediaQuery } from '@mui/material';
import DashboardBox from '@/components/DashboardBox';
import { useGetUserInfoQuery } from '@/state/api';

const Dashboard = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 1200px");
  const { data } = useGetUserInfoQuery();
  console.log('this is the data: ', data);

  const gridTemplateLarge = `
  "a a b"
  "a a b"
  "a a b"
  "a a c"
  "a a c"
  "a a c"
  "a a d"
  "f f d"
  "f f e"
  "f f e"
  `;

  const gridTemplateSmall = `
  "a"
  "a"
  "a"
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
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
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </Box>
  )
}

export default Dashboard;