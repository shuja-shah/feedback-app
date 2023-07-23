import { Avatar, Box, Grid, Rating, Typography } from "./Componenets/MUI";

export const fontFamily = "Lato";

const UpperLeftIllustration = ({ style }) => {
  return (
    <svg
      width={83}
      height={121}
      viewBox="0 0 83 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <rect
        x={13}
        y="57.6843"
        width={80}
        height="19.4403"
        transform="rotate(-46.1415 13 57.6843)"
        fill="#EBEBFF"
      />
      <path
        d="M11.7799 65C8.65566 72.3174 9.05073 80.7831 12.8782 88.5347C16.7056 96.2863 23.6519 102.689 32.1889 106.334C40.7259 109.979 50.1544 110.567 58.4001 107.97C66.6459 105.374 73.0335 99.8038 76.1577 92.4863L11.7799 65Z"
        fill="#6070FF"
      />
    </svg>
  );
};

const BottomRightIllustration = ({ style }) => {
  return (
    <svg
      width={143}
      height={87}
      viewBox="0 0 143 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <rect
        x="11.4399"
        y={4}
        width={141}
        height="28.875"
        transform="rotate(23.34 11.4399 4)"
        fill="#EBEBFF"
      />
      <circle cx="119.5" cy="23.5" r="23.5" fill="#6070FF" />
    </svg>
  );
};

const BottomLeftIllustration = ({ style }) => {
  return (
    <svg
      width={60}
      height={70}
      viewBox="0 0 60 70"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M47.234 54.4083C49.5562 51.6423 51.1945 48.3684 52.0161 44.8515C52.8377 41.3347 52.8195 37.6737 51.9631 34.1652C51.1067 30.6567 49.4361 27.3991 47.0866 24.6563C44.7371 21.9135 41.7747 19.7625 38.4392 18.3775C35.1038 16.9926 31.489 16.4125 27.8877 16.6844C24.2864 16.9563 20.7998 18.0724 17.71 19.9424C14.6203 21.8124 12.0144 24.3838 10.1033 27.4483C8.19215 30.5127 7.02954 33.9842 6.70958 37.5815L16.5676 38.4583C16.7499 36.4089 17.4122 34.4312 18.501 32.6854C19.5897 30.9396 21.0743 29.4747 22.8345 28.4093C24.5947 27.344 26.5811 26.7081 28.6328 26.5533C30.6844 26.3984 32.7437 26.7288 34.6439 27.5178C36.5441 28.3068 38.2318 29.5322 39.5703 31.0948C40.9089 32.6574 41.8606 34.5132 42.3485 36.512C42.8364 38.5109 42.8467 40.5965 42.3786 42.6C41.9106 44.6036 40.9773 46.4687 39.6543 48.0445L47.234 54.4083Z"
        fill="#EBEBFF"
      />
      <path
        d="M20.2608 5.96311e-06C19.9264 4.88126 21.5448 9.69543 24.7599 13.3834C27.9751 17.0714 32.5236 19.3312 37.4048 19.6656C42.2861 20 47.1002 18.3816 50.7883 15.1664C54.4763 11.9513 56.736 7.4028 57.0704 2.52154L20.2608 5.96311e-06Z"
        fill="#6070FF"
      />
    </svg>
  );
};

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
        position: "relative",
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
      <UpperLeftIllustration
        style={{
          position: "absolute",
          top: "11%",
          left: "7%",
        }}
      />

      <BottomRightIllustration
        style={{
          position: "absolute",
          bottom: "2%",
          right: "11%",
        }}
      />

      <BottomLeftIllustration
        style={{
          position: "absolute",
          bottom: "11%",
          left: "4%",
        }}
      />
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
