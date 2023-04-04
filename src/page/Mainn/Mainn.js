import React from "react";
import { Stack } from "@mui/material";
import Header from './Header';
import Slider from './Slider';


function Mainn() {

  return (
    <Stack 
    style={{backgroundColor:"black", height:"100%"}}>
        <Header></Header>
        <Slider
             style={{
                    paddingTop: "300px",
                    height: "5000px"
                    }}>

        </Slider>
    </Stack>
  );
};

export default Mainn;
