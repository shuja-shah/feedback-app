import {
  Alert,
  Typography,
  Box,
  Grid,
  Avatar,
  Rating,
  Button,
  TextField,
  Tooltip,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const ProgressBar = ({ obt, total }) => {
  return (
    <BorderLinearProgress
      variant="determinate"
      value={(obt / total) * 100}
      sx={{ width: "100%" }}
    />
  );
};
export {
  Alert,
  Typography,
  Box,
  Grid,
  Avatar,
  Rating,
  Button,
  ProgressBar,
  TextField,
  Tooltip,
};
