import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { LinearProgress } from "@mui/material";
import Typographys from "../../atoms/typography/Typographys";
import CustomButton from "../../atoms/Button/Button";
import TimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";

type CardItemsProps = {
  image: string;
  title: string;
  author: string;
  Typo_variant?: "text" | "outlined" | "contained" | undefined;
  content: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  role: string;
};
const CardItems = (props: CardItemsProps) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 284,

      boxShadow: "none",
      paddingRight: "0px",
    },

    icon: {
      paddingRight: "0px",
      minWidth: 5,
    },

    frame: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    MoreHoriz: {
      position: "relative",
      left: "247px",
    },
  });
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}
          width={284}
          height={285}
        />
        <CardContent>
          <Typographys variant="subtitle1" content={props.title} />
          <Typographys variant="body1" content={props.author} />

          <div className={classes.frame}>
            <TimeIcon fontSize="small" />
            <Typographys variant="caption3" content="13-minutes read" />

            <PersonOutlineIcon fontSize="small" />
            <Typographys variant="caption3" content="1.9k reads" />
          </div>
        </CardContent>
      </CardActionArea>
      {props.role === "explore" && (
        <CardActions>
          <CustomButton
            size="large"
            variant={props.Typo_variant}
            color="secondary"
            startIcon={<AddIcon />}
            onClick={props.onClick}
            fullWidth={true}
          >
            {props.content}
          </CustomButton>
        </CardActions>
      )}
      {props.role === "current" && (
        <CardActions>
          <MoreHorizIcon fontSize="small" className={classes.MoreHoriz} />
          <div>
            <LinearProgress
              value={30}
              sx={{
                marginTop: "35px",
                height: "15px",
                overflow: "unset",
                borderRadius: "0px 0px 8px 8px",
                width: "263px",
                backgroundColor: "#F1F6F4",
              }}
              variant="determinate"
            />
          </div>
        </CardActions>
      )}
      {props.role === "finished" && (
        <CardActions>
          <CustomButton
            size="large"
            variant={props.Typo_variant}
            color="secondary"
            onClick={props.onClick}
            fullWidth={true}
          >
            {props.content}
          </CustomButton>
          
        </CardActions>
      )}
    </Card>
  );
};

export default CardItems;
