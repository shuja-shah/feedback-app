import { Avatar, Box, Grid, Rating, Typography } from "./Componenets/MUI";

export const fontFamily = "Lato";

const QuestionCard = ({ questions, params }) => {
  const currentTarget = {};
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <Avatar
        sx={{
          m: "auto auto",
        }}
        src={params?.BU_Logo ?? ""}
        alt={params?.BU_Name ?? ""}
      >
        L
      </Avatar>
      <Typography
        sx={{
          fontFamily,
          fontWeight: "600",
        }}
      >
        {params?.FdBk_Page_Title ?? "Welcome to this Survey"}
      </Typography>

      <Typography sx={{ m: "1rem 0", fontFamily, fontWeight: "400" }}>
        {currentTarget?.Question ?? "This is a question?"}
      </Typography>

      <Rating size="large" />
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
      xl={6}
      lg={6}
      sx={{
        backgroundColor: "#efeff5",
        height: "100%",
      }}
    >
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
