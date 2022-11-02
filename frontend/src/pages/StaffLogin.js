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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        "/users/login/",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          toast("Successfully Logged In!!", { type: "success" });
          navigate("/staff-profile");
        }
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
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
