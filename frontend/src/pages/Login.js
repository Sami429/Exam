import React, { useState } from "react";
import {
  Form,
  Input,
  Label,
  FormGroup,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
function Login() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const updateName = (e) => {
     setUsername(e.target.value);
   };
   const updatePassword = (e) => {
     setPassword(e.target.value);
   };
  const navigate = useNavigate();
  const loginFunction = () => {
    axios
      .post("http://127.0.0.1:8000/users/login/", {
        username: username,
        password: password,
      },
      {withCredentials: true})
      .then(function (response) {
        console.log(response);
        navigate("/profile");
      })
      .catch(function (error) {
        console.log(error);
        navigate("/");
      });
    }

    //   axios({
    //     url: "http://127.0.0.1:8000/users/login/",
    //     method: "POST",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //     },
    //     data: {
    //       username: username,
    //       password: password,
    //     }
    //   })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // };
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <img
                src="./images/image.jpg"
                alt="student"
                style={{ width: "100%", height: "100%", marginTop: "20%" }}
              />
            </Col>
            <Col>
              <Form style={{ paddingTop: "40%" }}>
                <FormGroup>
                  <Label for="username" size="default">
                    Username
                  </Label>
                  <Input
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    type="text"
                    onChange={updateName}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password" size="default">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    onChange={updatePassword}
                  />
                </FormGroup>
                <FormGroup>
                  <Button color="primary" outline block onClick={loginFunction}>
                    Submit
                  </Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };


export default Login;
