import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

function Profile() {
  const [tab1, setTab1] = useState("");
  const [tab2, setTab2] = useState("");
  const [tab3, setTab3] = useState("");
  const [tab4, setTab4] = useState("");
  const [tab5, setTab5] = useState("");
  const [tab6, setTab6] = useState("");
  const [currentTab, setCurrentTab] = useState("1");
  const activeTab = (id) => {
    if (id === "1") {
      setTab2("");
      setTab3("");
      setTab4("");
      setTab5("");
      setTab6("");
      setTab1("active");
      setCurrentTab("1");
    } else if (id === "2") {
      setTab1("");
      setTab3("");
      setTab4("");
      setTab5("");
      setTab6("");
      setTab2("active");
      setCurrentTab("2");
    } else if (id === "3") {
      setTab1("");
      setTab2("");
      setTab4("");
      setTab5("");
      setTab6("");
      setTab3("active");
      setCurrentTab("3");
    } else if (id === "4") {
      setTab1("");
      setTab2("");
      setTab3("");
      setTab5("");
      setTab6("");
      setTab4("active");
      setCurrentTab("4");
    } else if (id === "5") {
      setTab1("");
      setTab2("");
      setTab3("");
      setTab4("");
      setTab6("");
      setTab5("active");
      setCurrentTab("5");
    } else if (id === "6") {
      setTab1("");
      setTab2("");
      setTab3("");
      setTab4("");
      setTab5("");
      setTab6("active");
      setCurrentTab("6");
    }
  };
  const navigate = useNavigate();

  const logoutUser = () => {
    axios.post("http://127.0.0.1:8000/users/logout/", {
      withCredentials: true,
    })
    .then(function (response) {
        console.log(response);
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div style={{ padding: "5%" }}>
      <Button
        color="danger"
        size="sm"
        style={{ float: "right" }}
        onClick={logoutUser}
      >
        Logout
      </Button>
      <Nav tabs>
        <NavItem>
          <NavLink className={tab1} onClick={() => activeTab("1")}>
            Update Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={tab2} onClick={() => activeTab("2")}>
            Reset Password
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={tab3} onClick={() => activeTab("3")}>
            All Courses
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={tab4} onClick={() => activeTab("4")}>
            Your Courses
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={tab5} onClick={() => activeTab("5")}>
            All Tests
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={tab6} onClick={() => activeTab("6")}>
            Your Tests
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={currentTab}>
        <TabPane style={{ paddingTop: "2%" }} tabId="1">
          <Container>
            <Row>
              <Col>
                <Label for="fname">First Name</Label>
                <Input
                  id="fname"
                  type="text"
                  placeholder="Enter your first name"
                />
              </Col>
              <Col>
                <Label for="lname">Last Name</Label>
                <Input
                  id="lname"
                  type="text"
                  placeholder="Enter your last name"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label for="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </Col>
            </Row>
            <Row style={{ paddingTop: "1%" }}>
              <Col>
                <Button block color="primary">
                  Update Profile
                </Button>
              </Col>
            </Row>
          </Container>
        </TabPane>
        <TabPane style={{ paddingTop: "2%" }} tabId="2">
          <Container>
            <Row>
              <Col>
                <Label for="new-password">Enter your new password</Label>
                <Input id="password" type="password" />
              </Col>
              <Col>
                <Label for="re-enter-password">Re-enter your password</Label>
                <Input id="re-enter-password" type="password" />
              </Col>
            </Row>
            <Row style={{ padding: "1%" }}>
              <Button color="primary" block>
                Reset Password
              </Button>
            </Row>
          </Container>
        </TabPane>
        <TabPane tabId="3">
          <div style={{ padding: "2%" }}>
            <Table hover responsive size="" striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Course Name</th>
                  <th>Creator Name</th>
                  <th>Enroll</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>DBMS</td>
                  <td>Instructor 1</td>
                  <td>
                    <Button outline>Enroll Now</Button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">2</th>
                  <td>DSA</td>
                  <td>Instructor 2</td>
                  <td>
                    <Button outline>Enroll Now</Button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">3</th>
                  <td>Python </td>
                  <td>Instructor 3</td>
                  <td>
                    <Button outline>Enroll Now</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </TabPane>
        <TabPane tabId="4">
          <div style={{ padding: "2%" }}>
            <Table hover responsive size="" striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Course Name</th>
                  <th>Creator Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>DBMS</td>
                  <td>Instructor 1</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>DSA</td>
                  <td>Instructor 2</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Python </td>
                  <td>Instructor 3</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </TabPane>
        <TabPane tabId="5">
          <div style={{ padding: "2%" }}>
            <Table hover responsive size="" striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Test Name</th>
                  <th>Test Duration</th>
                  <th>Course</th>
                  <th>Start Test</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Test 1</td>
                  <td>2 hrs</td>
                  <td>DBMS</td>
                  <td>
                    <Button outline>Start Test</Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Test 2</td>
                  <td>2 hrs</td>
                  <td>DBMS</td>
                  <td>
                    <Button outline>Start Test</Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Test 3</td>
                  <td>2 hrs</td>
                  <td>DBMS</td>
                  <td>
                    <Button outline>Start Test</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </TabPane>
        <TabPane tabId="6">
          <div style={{ padding: "2%" }}>
            <Table hover responsive size="" striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Test Name</th>
                  <th>Test Duration</th>
                  <th>Course</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Test 1</td>
                  <td>2 hrs</td>
                  <td>DBMS</td>
                  <td>80/100</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Test 2</td>
                  <td>2 hrs</td>
                  <td>DBMS</td>
                  <td>80/100</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Test 3</td>
                  <td>2 hrs</td>
                  <td>DBMS</td>
                  <td>80/100</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Profile;
