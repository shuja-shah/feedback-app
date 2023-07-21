import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Rating,
  TextField,
  Typography,
} from "./Componenets/MUI";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const fontFamily = "Lato";

import Ill from "./assets/ill.png";
import EmojiRatings from "./Componenets/StyledRating";
import { CircularProgress } from "@mui/material";

const PreLoader = () => (
  <Box
    sx={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#fff",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <CircularProgress
      sx={{ animation: "spin 2s linear infinite", color: "#711fff" }}
    />
  </Box>
);

const QuestionCard = ({ questions, params }) => {
  const currentTarget = { question_type: "hearts" };
  const [score, setScore] = useState();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontFamily,
          fontWeight: "600",
          m: "1rem 0 0 0",
          fontSize: "1.5rem",
        }}
      >
        {params?.FdBk_Page_Title ?? "Welcome to this Survey"}
      </Typography>

      <Typography
        sx={{ m: "1rem 0 0 0", fontFamily, fontWeight: "400", width: "70%" }}
      >
        {currentTarget?.Question ??
          "Q:1 On a Scale of one two 5, How would you rate the recent support that we have given you?"}
      </Typography>
      {currentTarget?.question_type === "hearts" ? (
        <Rating
          size="large"
          sx={{ width: "70%", justifyContent: "space-between" }}
          value={score}
          onChange={(_, newValue) => {
            setScore(newValue);
          }}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      ) : currentTarget?.question_type === "emoji" ? (
        <EmojiRatings
          value={score}
          onChange={(_, newValue) => {
            setScore(newValue);
          }}
          sx={{ width: "70%", justifyContent: "space-between" }}
        />
      ) : (
        <Rating
          size="large"
          sx={{ width: "70%", justifyContent: "space-between" }}
          value={score}
          onChange={(_, newValue) => {
            setScore(newValue);
          }}
        />
      )}
      {score && (
        <TextField
          sx={{ width: "70%" }}
          label="Whats driving your review (Optional)"
          multiline
          rows={4}
        />
      )}

      <Button
        sx={{
          width: "70%",
          height: "3rem",
          borderRadius: "8px",
          backgroundColor: "#711fff",
          color: "#fff",
          fontFamily,
          fontWeight: "600",
          fontSize: "1.2rem",
          "&:hover": {
            backgroundColor: "#711fff",
            color: "#fff",
          },

          "&.Mui-disabled": {
            backgroundColor: "#ccc",
            color: "#fff",
            opacity: "0.5",
          },
        }}
        disabled={!score}
      >
        Next
      </Button>
    </Box>
  );
};

const Illustration = ({ params }) => {
  return (
    <Grid
      item
      xl={6}
      lg={6}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={Ill} alt="Illustration" />
    </Grid>
  );
};

const FormStack = ({ params }) => {
  const questions = [];
  return (
    <Grid
      item
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      xl={6}
      lg={6}
      sx={{
        backgroundColor: "#efeff5",
        height: "100%",
      }}
    >
      <Avatar
        sx={{
          m: "0 auto",
        }}
        src={params?.BU_Logo ?? ""}
        alt={params?.BU_Name ?? ""}
      >
        L
      </Avatar>
      <QuestionCard questions={questions} />
    </Grid>
  );
};

const MainPage = ({ params }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);
  return !loading ? (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        sx={{
          width: "73%",
          height: "73%",
          borderRadius: "8px",
          border: "1.5px solid #d9d9d9",
          flexWrap: "nowrap",
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <FormStack params={params} />
        <Illustration params={params} />
      </Grid>
    </Box>
  ) : (
    <PreLoader />
  );
};

export default MainPage;
