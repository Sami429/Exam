import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [rSelected, setRSelected] = useState(null);
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [email, setEmail] = useState("");
   const [group, setGroup] = useState("");

   const updateUsername = (e) => {
     setUsername(e.target.value);
   };
   const updatePassword = (e) => {
     setPassword(e.target.value);
   };
   const updateFname = (e) => {
     setFname(e.target.value);
   };
   const updateLname = (e) => {
     setLname(e.target.value);
   };
   const updateEmail = (e) => {
     setEmail(e.target.value);
   };
   const updateGroup = (val) => {
     setGroup(val);
   };
  const navigate = useNavigate();
  const signupFunction = () => {
    axios
      .post("http://127.0.0.1:8000/users/signup/", {
        username: username,
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        group: group,
      },
      {withCredentials: true})
      .then(function (response) {
        console.log(response);
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img
              src="./images/image.jpg"
              alt="student"
              style={{ width: "100%", height: "80%", "margin-top": "20%" }}
            />
          </Col>
          <Col>
            <Form style={{ paddingTop: "20%" }}>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  type="text"
                  onChange={updateUsername}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  onChange={updatePassword}
                />
              </FormGroup>
              <FormGroup>
                <Label for="fname">First Name</Label>
                <Input
                  id="fname"
                  name="fname"
                  placeholder="Enter your first name"
                  type="text"
                  onChange={updateFname}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lname">Last Name</Label>
                <Input
                  id="lname"
                  name="lname"
                  placeholder="Enter your last name"
                  type="text"
                  onChange={updateLname}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  onChange={updateEmail}
                />
              </FormGroup>
              <FormGroup style={{ paddingLeft: "40%", paddingRight: "40%" }}>
                <ButtonGroup>
                  <Button
                    color="primary"
                    outline
                    onClick={() => {
                      setRSelected(1);
                      updateGroup("Student");
                    }}
                    active={rSelected === 1}
                  >
                    Student
                  </Button>
                  <Button
                    color="primary"
                    outline
                    onClick={() => {
                      setRSelected(2);
                      updateGroup("Staff");
                    }}
                    active={rSelected === 2}
                  >
                    Staff
                  </Button>
                </ButtonGroup>
              </FormGroup>
              <FormGroup>
                <Button color="primary" block onClick={signupFunction}>
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


export default Signup;
