import { Avatar, Box, Grid, Rating, Typography } from "./Componenets/MUI";

export const fontFamily = "Lato";

const QuestionCard = ({ questions, params }) => {
  const currentTarget = {};
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
        }}
      >
        {params?.FdBk_Page_Title ?? "Welcome to this Survey"}
      </Typography>

      <Typography
        sx={{ m: "1rem 0", fontFamily, fontWeight: "400", width: "70%" }}
      >
        {currentTarget?.Question ??
          "Q:1 On a Scale of one two 5, How would you rate the recent support that we have given you?"}
      </Typography>

      <Rating
        size="large"
        sx={{ width: "70%", justifyContent: "space-between" }}
      />
    </Box>
  );
};

const Illustration = ({ params }) => {
  return (
    <Grid
      item
      xl={6}
      lg={6}
      sx={{ height: "100%", backgroundColor: "#711fff" }}
    >
      Illustration
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
  return (
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
          width: "93%",
          height: "93%",
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
  );
};

export default MainPage;
