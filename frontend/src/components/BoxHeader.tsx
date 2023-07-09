import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

type Props = {
  title: string;
  sideText?: string;
};

const BoxHeader = ({ title, sideText }: Props) => {
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
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5" fontWeight={700} color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </Box>
  )
}

export default BoxHeader;