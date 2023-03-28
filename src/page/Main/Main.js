import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Stack } from "@mui/material";

function Main() {
  return (
    <Stack style={{ backgroundColor: "black", width: "100%", height: "100vh" }}>
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "5000px",
        }}>
        <Stack
          style={{
            backgroundColor: "black",
            width: "210px",
            height: "5000px",
            borderRight: "1px solid white",
            position: "fixed",
            paddingLeft: "10px",
          }}>
          <Button
            startIcon={<HomeIcon />}
            sx={{
              ":hover": {
                backgroundColor: "#D6D0C0",
              },
            }}
            style={{
              color: "#ECD8A4",
              fontWeight: "bold",
              fontSize: "21",
              padding: "90px 0px 10px 0px",
              display: "flex",
              alignItems: "center",
            }}>
            CHAEYEON'S BLOG
          </Button>
          <Stack
            style={{
              color: "white",
              fontSize: "21",
              padding: "0px 0px 10px 0px",
            }}>
            페이지
          </Stack>
          <Stack>
            <Stack
              style={{
                fontSize: "18px",
                color: "#ECD8A4",
                paddingBottom: "10px",
              }}>
              ● 파이썬
            </Stack>
            <Stack>
              <Stack
                style={{
                  fontSize: "16px",
                  padding: "0px 0px 5px 20px",
                  color: "#ECD8A4",
                }}>
                - 알고리즘
              </Stack>
              <Stack
                style={{
                  color: "white",
                  fontSize: "16px",
                  padding: "0px 0px 5px 20px",
                }}>
                - ML
              </Stack>
              <Stack
                style={{
                  color: "white",
                  fontSize: "16px",
                  padding: "0px 0px 5px 20px",
                }}>
                - 데이터분석
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Stack
              style={{
                fontSize: "18px",
                color: "white",
                padding: "25px 0px 10px 0px",
              }}>
              ● 프론트엔드
            </Stack>
            <Stack>
              <Stack
                style={{
                  fontSize: "16px",
                  padding: "0px 0px 5px 20px",

                  color: "white",
                }}>
                - HTML
              </Stack>
              <Stack
                style={{
                  color: "white",
                  fontSize: "16px",
                  padding: "0px 0px 5px 20px",
                }}>
                - CSS
              </Stack>
              <Stack
                style={{
                  color: "white",
                  fontSize: "16px",
                  padding: "0px 0px 5px 20px",
                }}>
                - javascript
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          style={{
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
          <Stack
            style={{
              backgroundColor: "#D9D9D9",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
            }}></Stack>
        </Stack>
        <Stack
          style={{
            backgroundColor: "black",
            width: "900px",
            heiht: "40px",
            paddingLeft: "240px",
          }}>
          <Stack
            style={{
              color: "white",
              fontSize: "27px",
              padding: "120px 0px 20px 120px",
              fontWeight: "bold",
            }}>
            알고리즘에 대해 배워보자!
          </Stack>
          <Stack>
            <Stack
              style={{
                color: "white",
                fontSize: "23px",
                fontWeight: "bold",
                padding: " 20px 0px 0px 120px",
              }}>
              알고리즘
            </Stack>
            <Stack
              style={{
                color: "white",
                fontSize: "15px",
                padding: " 0px 0px 0px 120px",
              }}>
              알고리즘은 신기하다.
            </Stack>
            <Stack
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                padding: " 20px 0px 0px 120px",
              }}>
              알고리즘이 신기한 이유?
            </Stack>
            <Stack
              style={{
                color: "white",
                fontSize: "15px",
                padding: " 0px 0px 0px 120px",
              }}>
              모르겠다.
            </Stack>
            <Stack
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                padding: " 20px 0px 0px 120px",
              }}>
              알고리즘이 안신기해지려면?
            </Stack>
            <Stack
              style={{
                color: "white",
                fontSize: "15px",
                padding: " 0px 0px 0px 120px",
              }}>
              모르겠다.
            </Stack>
          </Stack>
        </Stack>
        <Stack
          style={{ backgroundColor: "black", width: "500px", heiht: "800px" }}>
          <Stack
            style={{
              margin: "250px 0px 0px 0px",
              height: "120px",
              borderLeft: "1px solid white",
            }}>
            <Stack
              style={{
                fontSize: "18px",
                color: "white",
                width: "400px",
                padding: "0px 0px 0px 15px",
              }}>
              ● 알고리즘
            </Stack>
            <Stack style={{}}>
              <Stack
                style={{
                  color: "#ECD8A4",
                  fontSize: "16px",
                  padding: "10px 0px 0px 30px",
                }}>
                - 알고리즘이 신기한 이유?
              </Stack>
              <Stack
                style={{
                  color: "white",
                  fontSize: "16px",
                  padding: "10px 0px 0px 30px",
                }}>
                - 알고리즘이 안신기해지려면?
              </Stack>
            </Stack>
          </Stack>
          <Stack></Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Main;
