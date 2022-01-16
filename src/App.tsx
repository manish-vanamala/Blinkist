import "./App.css";
import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import HeaderComponent from "./components/organisms/Header/Header";
import BookCard from "./components/organisms/BookCard/BookCard";
/*import CustomButton from './components/atoms/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import Typographys from './components/atoms/typography/Typographys';
import { Typography } from '@mui/material';
import BookCard from "./components/organisms/BookCard/BookCard";*/
import image1 from './components/molecules/Card/3.png';
import CardItems from "./components/molecules/Card/Card";
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <BookCard/> */}
      {/* <HeaderComponent/> */}
      <div className="box">
      <CardItems
        role="explore"
        content="add to Library"
        title="Bring Your Human to Work"
        author="Erica Keswin"
        image={image1}
      />
      <CardItems
        role="current"
        content="add to Library"
        title="Bring Your Human to Work"
        author="Erica Keswin"
        image={image1}
      />
      <CardItems
        role="finished"
        content="Finished"
        title="Bring Your Human to Work"
        author="Erica Keswin"
        image={image1}
      />
      </div>

    </ThemeProvider>
  );
}

export default App;
