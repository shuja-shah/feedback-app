import { Avatar, Box, Grid, Rating, Typography } from "./Componenets/MUI";

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
      <Typography
        sx={{
          fontFamily: "Lato",
          fontWeight: "600",
        }}
      >
        {params?.FdBk_Page_Title ?? "Welcome to this Survey"}
      </Typography>

      <Typography sx={{ m: "1rem 0", fontFamily, fontWeight: "400" }}>
        {currentTarget?.Question ?? "This is a question?"}
      </Typography>

      <Rating />
    </Box>
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
    >
      <Avatar src={params?.BU_Logo ?? ""} alt={params?.BU_Name ?? ""}>
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
      <Grid container sx={{ width: "85%", height: "85%", borderRadius: "8px" }}>
        <FormStack params={params} />
      </Grid>
    </Box>
  );
};

export default MainPage;
