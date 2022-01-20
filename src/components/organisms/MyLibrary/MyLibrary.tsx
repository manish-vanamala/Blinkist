import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Typography from "../../atoms/typography/Typographys";
import Tab from "../Tab/Tab";
import Card from "../../molecules/Card/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: string;
  value: number;
}
const MyLibrary = () => {
  const useStyles = makeStyles({
    title: {
      marginBottom: "30px",
      marginLeft: "10px",
    },
  });
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = useState<Book[]>([]);
  const [currState, setCurrState] = useState("current");
  useEffect(() => {
    const processor = async () => {
      let response = await fetch("http://localhost:8086/books");
      let result = await response.json();
      setData(result);
    };
    processor();
  }, []);
  const handleState = (state: string) => {
    setCurrState(state);
  };

  const cards = () => {
    console.log(data);
    let currentlyReading = data.filter((book) => book.status === "current");

    let finishedReading = data.filter((book) => book.status === "finished");
    if (data == null) {
      return <CircularProgress />;
    } else {
      if (currState === "current") {
        return currentlyReading.map((currData: Book) => {
          return (
            <Card
              key={currData.id}
              image={currData.image}
              role={currData.status}
              title={currData.title}
              author={currData.author}
              value={currData.value}
            />
          );
        });
      } else {
        return finishedReading.map((currData: Book) => {
          return (
            <Card
              key={currData.id}
              image={currData.image}
              role={currData.status}
              title={currData.title}
              author={currData.author}
              value={currData.value}
              onClick={() => {
                navigate("/book");
              }}
            />
          );
        });
      }
    }
  };
  return (
    <Container>
      <div className={classes.title}>
        <Typography variant="h1" content="My Library" />
      </div>
      <Tab stateHandler={handleState} />
      <Box
        sx={{
          display: "flex",

          alignItems: "center",
          margin: "10px",
          flexWrap: "wrap",
        }}
      >
        {cards()}
      </Box>
    </Container>
  );
};

export default MyLibrary;
