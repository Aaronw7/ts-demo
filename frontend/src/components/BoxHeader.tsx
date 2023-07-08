import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

type Props = {
  title: string;
  sideText: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();
  return(
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      color={palette.grey[400]}
      margin="1.5rem 1rem 0rem 1rem"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </Box>
      <Typography variant="h5" fontWeight={700} color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </Box>
  )
}

export default BoxHeader;