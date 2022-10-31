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

function StaffLogin() {
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
      .post(
        "http://127.0.0.1:8000/users/login/",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        },
      )
      .then(function (response) {
        console.log(response);
        navigate("/staff-profile");
      })
      .catch(function (error) {
        console.log(error);
        navigate("/");
      });
  };
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
}

export default StaffLogin;
