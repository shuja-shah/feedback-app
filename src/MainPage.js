import {
  Avatar,
  Box,
  Button,
  Grid,
  ProgressBar,
  Rating,
  TextField,
  Tooltip,
  Typography,
} from "./Componenets/MUI";
import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EmojiRatings from "./Componenets/StyledRating";
import { CircularProgress } from "@mui/material";
import Logo from "./_assets/Check1.jpg";
import Check2 from "./_assets/Check2.png";
import Check3 from "./_assets/Check3.jpg";
import NotFound from "./_assets/NotFound.png";

export const fontFamily = "Poppins";

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

const RightSideIllustration = ({ style }) => {
  return (
    <svg
      width={112}
      height={125}
      viewBox="0 0 112 125"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="35.4209"
        width={90}
        height="24.699"
        transform="rotate(-23.1765 0 35.4209)"
        fill="#7F8CFF"
      />
      <path
        d="M106.207 57.913C102.738 51.7566 97.8692 46.5034 91.9932 42.5789C86.1172 38.6544 79.3996 36.1687 72.3842 35.3233C65.3689 34.4778 58.2531 35.2963 51.6129 37.7124C44.9728 40.1286 38.9949 44.0745 34.1634 49.2306C29.3318 54.3868 25.7824 60.6082 23.8025 67.3913C21.8227 74.1743 21.468 81.3283 22.7672 88.2739C24.0664 95.2195 26.983 101.762 31.2808 107.37C35.5786 112.979 41.1368 117.497 47.5054 120.558L55.8939 103.106C52.2658 101.362 49.0992 98.7882 46.6508 95.5928C44.2023 92.3975 42.5408 88.6705 41.8006 84.7136C41.0605 80.7567 41.2625 76.6811 42.3905 72.8168C43.5184 68.9525 45.5405 65.4082 48.293 62.4707C51.0455 59.5333 54.4511 57.2853 58.234 55.9088C62.0169 54.5323 66.0708 54.0661 70.0674 54.5477C74.064 55.0294 77.891 56.4454 81.2386 58.6812C84.5862 60.917 87.3602 63.9097 89.336 67.417L106.207 57.913Z"
        fill="white"
      />
    </svg>
  );
};

const RightSideMiddleIllustration = ({ style }) => {
  return (
    <svg
      width={145}
      height={89}
      viewBox="0 0 145 89"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.4231 17.7976L131.607 88.1009L144.184 71.2518L50 0.948524L37.4231 17.7976Z"
        fill="#7F8CFF"
      />
      <circle
        cx="33.8608"
        cy="42.8608"
        r={24}
        transform="rotate(48.9435 33.8608 42.8608)"
        fill="white"
      />
    </svg>
  );
};

const RightSideLeftBottomIllustration = ({ style }) => {
  return (
    <svg
      width={61}
      height={57}
      viewBox="0 0 61 57"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="22.3473"
        width="55.6001"
        height="9.94658"
        transform="rotate(-23.6989 0 22.3473)"
        fill="white"
      />
      <path
        d="M23.0844 21C20.9403 26.0219 20.8789 31.6898 22.9138 36.7569C24.9487 41.824 28.9131 45.8752 33.935 48.0193C38.9568 50.1634 44.6247 50.2248 49.6918 48.1899C54.7589 46.155 58.8101 42.1906 60.9542 37.1687L23.0844 21Z"
        fill="#7F8CFF"
      />
    </svg>
  );
};

const LargeCircle = ({ style }) => {
  return (
    <svg
      width={55}
      height={55}
      viewBox="0 0 55 55"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="27.5" cy="27.5" r="27.5" fill="#7F8CFF" />
    </svg>
  );
};

const QuestionCard = ({
  questions,
  currQ,
  handleNext,
  currentQuestion,
  handleBack,
}) => {
  const currentTarget = currQ;
  const [score, setScore] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // gap: "0.5rem",
        my: "1rem",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          // m: "1rem 0",
          fontFamily,
          fontWeight: "600",
          color: "#344563",
          fontSize: "1.2rem",
        }}
      >
        {currentTarget?.Question ?? "no_question"}
      </Typography>

      {currentTarget?.question_type === "hearts" ? (
        <Rating
          size="large"
          sx={{
            width: "70%",
            fontSize: "2.6rem",
            justifyContent: "space-between",
          }}
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
          sx={{
            width: "70%",
            fontSize: "2.6rem",
            justifyContent: "space-between",
          }}
        />
      ) : (
        <Rating
          size="large"
          sx={{
            width: "70%",
            justifyContent: "space-between",
            fontSize: "2.6rem",
          }}
          value={score}
          onChange={(_, newValue) => {
            setScore(newValue);
          }}
        />
      )}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          // gap: "0.5rem",

          transition: "all 0.5s ease-in-out",
          opacity: score ? 1 : 0,
        }}
      >
        <Typography
          sx={{
            fontFamily,
            fontWeight: "400",
            color: "#091E42",
            fontSize: "1rem",
          }}
        >
          {score === 1
            ? currentTarget.Score_1_Display_Message
            : score === 2
            ? currentTarget.Score_2_Display_Message
            : score === 3
            ? currentTarget.Score_3_Display_Message
            : score === 4
            ? currentTarget.Score_4_Display_Message
            : score === 5
            ? currentTarget.Score_5_Display_Message
            : null}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontFamily,
              fontWeight: "600",
              color: "#091E42",
              fontSize: "1rem",
            }}
          >
            {score === 1
              ? currentTarget.Score_1_FollowUp_Question
              : score === 2
              ? currentTarget.Score_2_FollowUp_Question
              : score === 3
              ? currentTarget.Score_3_FollowUp_Question
              : score === 4
              ? currentTarget.Score_4_FollowUp_Question
              : score === 5
              ? currentTarget.Score_5_FollowUp_Question
              : null}
          </Typography>
          <Tooltip title="Provide more details on why you choose this rating">
            <InfoIcon
              sx={{
                cursor: "pointer",
                fill: "#6070FF",
              }}
            />
          </Tooltip>
        </Box>

        <TextField
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",

              "&:hover fieldset": {
                borderColor: "#6070FF",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#6070FF",
              },
            },
          }}
          multiline
          rows={3}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: currentQuestion > 1 ? "space-between" : "flex-end",
          alignItems: "center",
          my: "1rem",
        }}
      >
        {currentQuestion > 1 && (
          <Button
            onClick={(e) => {
              handleBack(e);
              setScore(0);
            }}
            sx={{
              borderRadius: "8px",
              border: "1px solid #7F8CFF",
              background: "#FFF",
              transition: "all 0.3s ease-in-out",
              fontFamily,
              cursor: "pointer",
              color: "7F8CFF",

              "&:hover": {
                background: "#2230D2",
                color: "#fff",
                fontWeight: "600",
              },
              "&:active": {
                background: "#2230D2",
                color: "#fff",
                fontWeight: "600",
              },
            }}
          >
            Back
          </Button>
        )}

        <Button
          onClick={(e) => {
            handleNext(e);
            setScore(0);
          }}
          sx={{
            borderRadius: "8px",
            border: "1px solid #7F8CFF",
            background: "#FFF",
            transition: "all 0.3s ease-in-out",
            fontFamily,
            cursor: "pointer",
            color: "7F8CFF",

            "&:hover": {
              background: "#2230D2",
              color: "#fff",
              fontWeight: "600",
            },
            "&:active": {
              background: "#2230D2",
              color: "#fff",
              fontWeight: "600",
            },
          }}
        >
          {currentQuestion === questions.length ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

const Illustration = ({ params }) => {
  return (
    <Grid
      item
      xl={6}
      lg={6}
      md={6}
      sm={5}
      xs={0}
      sx={{
        height: "100%",
        backgroundColor: "#6070FF",
        borderRadius: "8px",
        position: "relative",
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px",
        display: {
          xl: "block",
          lg: "block",
          md: "block",
          sm: "block",
          xs: "none",
        },
      }}
    >
      <RightSideIllustration
        style={{
          position: "absolute",
          right: "6%",
          top: "11%",
        }}
      />

      <RightSideMiddleIllustration
        style={{
          position: "absolute",
          left: "-7%",
          top: "45%",
        }}
      />
      <RightSideLeftBottomIllustration
        style={{
          position: "absolute",
          bottom: "7%",
          left: "4%",
        }}
      />
      <LargeCircle
        style={{
          position: "absolute",
          top: "65%",
          left: "50%",
        }}
      />
    </Grid>
  );
};

const IntroRow = ({ params, currentQuestion }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: "0.88rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
          }}
        >
          <img
            // src={params?.BU_Logo}
            src={Check3}
            alt="logo"
            style={{
              width: "auto",
              height: "120px",
            }}
          />
        </div>
        {/* <Typography
          sx={{
            fontFamily,
            fontWeight: "600",
            color: "#6070FF",
            fontSize: "1.1rem",
          }}
        >
          {params?.BU_Name ?? ""}{" "}
        </Typography> */}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          textAlign: "right",
        }}
      >
        <Typography
          sx={{
            fontFamily,
            fontWeight: "600",
            fontSize: "1rem",
            color: "#091E42",
          }}
        >
          {currentQuestion ? currentQuestion : 1} of{" "}
          {params?.orders?.questions.length ?? 1}
        </Typography>
        <ProgressBar
          obt={currentQuestion}
          total={params.orders.questions.length}
        />
        <Typography
          sx={{
            fontFamily,
            fontSize: "0.9rem",
            color: "#344563",
          }}
        >
          {(currentQuestion / params.orders.questions.length) * 100}% Completed
        </Typography>
      </Box>
    </Box>
  );
};

const FormStack = ({ params, isFinished, setIsFinished }) => {
  const [questions, setQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currQ, setCurrQ] = useState();

  useEffect(() => {
    const realTarget = params;
    const realOrder = realTarget?.orders;
    setQuestions(realOrder?.questions);
    setCurrQ(realOrder?.questions[0]);
  }, [params]);

  useEffect(() => {
    if (params?.orders?.feedback_completed) {
      setIsFinished(true);
    }
  }, [params]);

  const handleNext = (_) => {
    if (currentQuestion < params.orders.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setCurrQ(questions[currentQuestion]);
    }

    if (currentQuestion === params.orders.questions.length) {
      setIsFinished(true);
    }
  };

  const handleBack = (_) => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prev) => prev - 1);
      setCurrQ(questions[currentQuestion - 2]);
    }
  };

  return (
    <Grid
      item
      container
      alignItems="center"
      direction="column"
      xl={isFinished ? 12 : 6}
      lg={isFinished ? 12 : 6}
      xs={12}
      sm={7}
      sx={{
        backgroundColor: "#fff",
        height: "100%",
        position: "relative",
        borderRadius: "8px",
        transition: "all 0.5s ease-in-out",
      }}
    >
      {!isFinished ? (
        <>
          <IntroRow params={params} currentQuestion={currentQuestion} />
          <Box
            sx={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              margin: "130px 0 0 0",

              //   height: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily,
                fontWeight: "600",
                fontSize: "1.3rem",
                color: "#091E42",
              }}
            >
              {params?.FdBk_Page_Title ?? "Welcome to this Survey"}
            </Typography>
            <Typography
              sx={{
                fontFamily,
                fontWeight: "400",
                fontSize: "1.1rem",
                color: "#344563",
              }}
            >
              {params?.FdBk_Page_SubTitle ?? "Thank you for your time"}
            </Typography>
            <QuestionCard
              questions={questions}
              currQ={currQ}
              handleNext={handleNext}
              currentQuestion={currentQuestion}
              handleBack={handleBack}
            />
          </Box>
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            transition: "all 0.7s ease-in-out",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Tooltip title="Your average Score">
              <Rating
                value={3.5}
                readOnly
                sx={{
                  fontSize: "3rem",
                }}
                precision={0.5}
              />
            </Tooltip>
            <Typography
              sx={{
                fontFamily,
                fontWeight: "600",
                fontSize: "2rem",
                color: "#091E42",
              }}
            >
              Thank you for your feedback!
            </Typography>
            <Typography
              sx={{
                fontFamily,
                fontWeight: "400",
                fontSize: "1.5rem",
                color: "#344563",
              }}
            >
              We appericiate your time and effort
            </Typography>
            <Button
              sx={{
                my: "1rem",
                borderRadius: "8px",
                border: "1px solid #7F8CFF",
                background: "#FFF",
                transition: "all 0.3s ease-in-out",
                fontFamily,
                cursor: "pointer",
                color: "7F8CFF",

                "&:hover": {
                  background: "#2230D2",
                  color: "#fff",
                  fontWeight: "600",
                },
                "&:active": {
                  background: "#2230D2",
                  color: "#fff",
                  fontWeight: "600",
                },
              }}
            >
              Let&apos;s Roll!
            </Button>
          </Box>
        </Box>
      )}
      <UpperLeftIllustration
        style={{
          position: "absolute",
          top: "17%",
          left: "4%",
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
          bottom: "7%",
          left: "4%",
        }}
      />
    </Grid>
  );
};

const PageNotFound = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        transition: "all 0.7s ease-in-out",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={NotFound} alt="not found" />
        <Typography
          sx={{
            fontFamily,
            fontWeight: "600",
            fontSize: "2rem",
            color: "#091E42",
          }}
        >
          Oops!
        </Typography>
        <Typography
          sx={{
            fontFamily,
            fontWeight: "400",
            fontSize: "1.5rem",
            color: "#344563",
          }}
        >
          We couldn't find the order you are looking for
        </Typography>
      </Box>
    </Box>
  );
};

const MainPage = ({ data, params }) => {
  const url = new URL(window.location.href);
  const bu_id = url.searchParams.get("bu_id");
  const order_id = url.searchParams.get("order_id");
  const [isFinished, setIsFinished] = useState(false);
  const [target, setTarget] = useState();
  const [orderFound, setOrderFound] = useState(true);

  useEffect(() => {
    console.log(target, "Target");
  }, [target]);

  useEffect(() => {
    const realTarget = data.find((ele) => Number(ele.id) === Number(bu_id));
    const realOrder = realTarget?.orders.find(
      (odr) => Number(odr.id) === Number(order_id)
    );
    if (!realOrder) {
      setTimeout(() => {
        setOrderFound(false);
      }, 5000);
    } else {
      setTimeout(() => {
        setTarget({
          ...realTarget,
          orders: { ...realOrder },
        });
      }, 3600);
    }
  }, [data]);

  return target && "id" in target.orders ? (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        alignItems: "center",
        justifyContent: {
          xl: "center",
          lg: "center",
          md: "center",
          sm: "center",
          xs: null,
        },
        backgroundColor: "#e5e5e5",
      }}
    >
      <Grid
        container
        sx={{
          width: { xl: "75%", lg: "75%", md: "85%", sm: "90%", xs: "100%" },
          height: { xl: "80%", lg: "80%", md: "85%", sm: "85%", xs: "100%" },
          borderRadius: "8px",
          //   border: "1.5px solid #d9d9d9",
          flexWrap: "nowrap",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <FormStack
          params={target}
          isFinished={isFinished}
          setIsFinished={setIsFinished}
        />
        {!isFinished && <Illustration params={params} />}
      </Grid>
    </Box>
  ) : orderFound ? (
    <PreLoader />
  ) : (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        alignItems: "center",
        justifyContent: {
          xl: "center",
          lg: "center",
          md: "center",
          sm: "center",
          xs: null,
        },
        backgroundColor: "#e5e5e5",
      }}
    >
      <PageNotFound />
    </Box>
  );
};

export default MainPage;
