import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Card from "../../molecules/Card/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Input from "@mui/material/Input";
import CustomSearch from "../../atoms/Search/CustomSearch";
import './Enterpreneurship.css';
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: string;
  value: number;
}
const Enterpreneurship = () => {
  const navigate = useNavigate();
  const useStyles = makeStyles({
    container: {
     "&.MuiContainer-root":{
       margin:"5px 5px 5px 40px",
       position:"relative",
       left:"20px"
     },
    },
  })
  const classes = useStyles();
  const [input, setInput] = useState("");
  const ariaLabel = { "aria-label": "description" };
  const [data, setData] = useState<Book[]>([]);
  useEffect(() => {
    const processor = async () => {
        let uri = "http://localhost:8086/books?status=explore";
      
      if (input) {
        uri += `&q=${input}`;
    }
    let {data} = await axios.get(uri);
      console.log(data);
      setData(data);
    };
    processor();
  }, [input]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  

  const cards = () => {
    
    if (data == null) {
      return <CircularProgress />;
    } else {
        return data.map((currData: Book) => {
          return (
            <Card testid={`card-${currData.id}`}
              key={currData.id}
              image={currData.image}
              role={currData.status}
              title={currData.title}
              author={currData.author}
              value={currData.value}
              onClick={()=>{
                localStorage.setItem("id",(currData.id).toString());
                console.log(localStorage.getItem("id"));
                navigate("/book");
              }}
            />
          );
        });
      
    }
  };
  return (
    <>
      <div className="input">
        
        <Input
            startAdornment={<CustomSearch />}
          placeholder="Search by Title or Author"
          name="text"
          value={input}
          inputProps={ariaLabel}
          onChange={handleChange}
          fullWidth={true}
          sx={{position:"relative",left:"10%",width:"800px"}}
        />
        
      </div>
      <Container className={classes.container}>
       
        <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        >
          {cards()}
        </Grid>
      </Container>
    </>
  );
};

export default Enterpreneurship;


