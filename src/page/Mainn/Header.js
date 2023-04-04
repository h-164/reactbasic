import React from "react";
import { Button, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

function Header(){

return(
    <Stack
        style={{
            heigt: "300px",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "black",
            width: "100%",
            position: "fixed",

            padding: "10px 0px 10px 20px",
            justifyContent: "space-between",
            }}>
            <Stack
            style={{ fontSize: "40px", fontWeight: "bold", color: "#ECD8A4" }}>
            GLOG
            </Stack>
            <Button
          startIcon={<HomeIcon />}
          sx={{
            ":hover": {
              backgroundColor: "#D6D0C0",
            },
          }}>
        </Button>
    </Stack>
);
}

export default Header;