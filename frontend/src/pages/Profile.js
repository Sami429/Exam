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
  Popover,
  Row,
  TabContent,
  Table,
  TabPane,
  PopoverHeader,
  PopoverBody,
  Form,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

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
  // const tokenApp = window.localStorage.getItem("token");
  const logoutFunction = () => {
    axios
      .post("http://127.0.0.1:8000/users/logout/", {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
        navigate("/");
      });
  };

  const [updateUserFname, setUpdateUserFname] = useState("");
  const [updateUserLname, setUpdateUserLname] = useState("");
  const [updateUserEmail, setUpdateUserEmail] = useState("");
  const updateFname = (e) => {
    if (e.target.value) setUpdateUserFname(e.target.value);
    else setUpdateUserFname(null);
  };
  const updateLname = (e) => {
    if (e.target.value) setUpdateUserLname(e.target.value);
    else setUpdateUserLname(null);
  };
  const updateEmail = (e) => {
    if (e.target.value) setUpdateUserEmail(e.target.value);
    else setUpdateUserFname(null);
  };
  const updateUser = () => {
    axios.put(
      "http://127.0.0.1:8000/users/update-user-details/",
      {
        fname: updateUserFname,
        lname: updateUserLname,
        email: updateUserEmail,
      },
      { withCredentials: true }
    );
  };

  const [newPassword, setNewPassword] = useState("");
  const [resetPassword, setRestPassword] = useState("");
  const [popoverStatus, setPopoverStatus] = useState(false);
  const newPass = (e) => {
    console.log(e.target.value);
    setNewPassword(e.target.value);
  };
  const resetNewPass = (e) => {
    console.log(e.target.value);
    setRestPassword(e.target.value);
  };
  const changePassword = () => {
    if (newPassword === resetPassword) {
      axios.put(
        "http://127.0.0.1:8000/users/reset-password/",
        {
          new_password: newPassword,
        },
        { withCredentials: true }
      );
    } else {
      setPopoverStatus(!popoverStatus);
    }
  };

  let [allCourses, setAllCourses] = useState("");
  const getCourses = () => {
    axios
      .get("http://127.0.0.1:8000/courses/course/course-list/")
      .then((response) => {
        setAllCourses(response.data);
        console.log(allCourses);
      });
  };
  let [myCourses, setMyCourses] = useState("");
  const getMyCourses = () => {
    axios
      .get("http://127.0.0.1:8000/courses/student-course/get-student-course/")
      .then((response) => {
        setMyCourses(response.data);
        console.log(myCourses);
      });
  };
  let [allTests, setAllTests] = useState("");
  const getTests = () => {
    axios
      .get("http://127.0.0.1:8000/courses/test/test-list/")
      .then((response) => {
        setAllTests(response.data);
        console.log(allTests);
      });
  };

  let [myTests, setMyTests] = useState("");
  const getMyTests = () => {
    axios
      .get("http://127.0.0.1:8000/courses/student-test/get-student-test/")
      .then((response) => {
        setMyTests(response.data);
        console.log(myTests);
      });
  };

  const [selectedCourse, setSelectedCourse] = useState("");
  const enrollCourse = (e) => {
    setSelectedCourse(e.target.value);
  };
  const enrollStudent = () => {
    axios.post(
      "http://127.0.0.1:8000/courses/student-course/add-student-course/",
      {
        course_id: selectedCourse,
      },
      {
        withCredentials: true,
      }
    );
  };

  const [deenrollCourse, setDeenrollCourse] = useState("");
  const deenrollFromCourse = (e) => {
    setDeenrollCourse(e.target.value);
  };
  const deenrollStudent = () => {
    axios({
      method: "DELETE",
      url: `http://127.0.0.1:8000/courses/student-course/delete-student-course`,
      params: {
        course: deenrollCourse
      }
    });
  };
  return (
    <div style={{ padding: "5%" }}>
      <Button
        color="danger"
        size="sm"
        style={{ float: "right" }}
        onClick={logoutFunction}
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
          <NavLink
            className={tab3}
            onClick={function (event) {
              activeTab("3");
              getCourses();
            }}
          >
            All Courses
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={tab4}
            onClick={function (event) {
              activeTab("4");
              getMyCourses();
            }}
          >
            Your Courses
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={tab5}
            onClick={function (event) {
              activeTab("5");
              getTests();
            }}
          >
            All Tests
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={tab6}
            onClick={function (event) {
              activeTab("6");
              getMyTests();
            }}
          >
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
                  onChange={updateFname}
                />
              </Col>
              <Col>
                <Label for="lname">Last Name</Label>
                <Input
                  id="lname"
                  type="text"
                  placeholder="Enter your last name"
                  onChange={updateLname}
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
                  onChange={updateEmail}
                />
              </Col>
            </Row>
            <Row style={{ paddingTop: "1%" }}>
              <Col>
                <Button block color="primary" onClick={updateUser}>
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
                <Input id="new-password" type="password" onChange={newPass} />
              </Col>
              <Col>
                <Label for="re-enter-password">Re-enter your password</Label>
                <Input
                  id="re-enter-password"
                  type="password"
                  onChange={resetNewPass}
                />
              </Col>
            </Row>
            <Row style={{ padding: "1%" }}>
              <Button
                id="submitResetPassword"
                color="primary"
                block
                onClick={changePassword}
              >
                Reset Password
              </Button>
            </Row>
            <Row>
              <Popover
                placement="bottom"
                isOpen={popoverStatus}
                target="submitResetPassword"
              >
                <PopoverHeader>Unequal passwords</PopoverHeader>
                <PopoverBody>
                  The two passwords are not same. Please re-enter the same
                  password again.
                </PopoverBody>
              </Popover>
            </Row>
          </Container>
        </TabPane>
        <TabPane tabId="3">
          <div style={{ padding: "2%" }}>
            <Table hover responsive size="" striped>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Creator Name</th>
                  {/* <th>Enroll</th> */}
                </tr>
              </thead>
              <tbody>
                {allCourses &&
                  allCourses.map((course) => {
                    return (
                      <tr>
                        <td>{course.course_name}</td>
                        <td>{course.creater_name}</td>
                        {/* <td>
                          <Button outline>Enroll Now</Button>
                        </td> */}
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
            <Container style={{ paddingLeft: "25%", PaddingRight: "25%" }}>
              <Row>
                <Col>
                  <Input
                    id="enroll-course"
                    type="text"
                    placeholder="Enter the course you want to enroll into"
                    onChange={enrollCourse}
                  />
                </Col>
                <Col>
                  <Button color="primary" onClick={enrollStudent}>
                    Enroll
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </TabPane>
        <TabPane tabId="4">
          <div style={{ padding: "2%" }}>
            <Table hover responsive size="" striped>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Creator Name</th>
                </tr>
              </thead>
              <tbody>
                {myCourses &&
                  myCourses.map((course) => {
                    return (
                      <tr>
                        <td>{course.course.course_name}</td>
                        <td>{course.course.creater_name}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
            <Container style={{ paddingLeft: "25%", PaddingRight: "25%" }}>
              <Row>
                <Col>
                  <Input
                    id="enroll-course"
                    type="text"
                    placeholder="Enter the course you want to de-enroll from"
                    onChange={deenrollFromCourse}
                  />
                </Col>
                <Col>
                  <Button color="danger" onClick={deenrollStudent}>
                    Enroll
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </TabPane>
        <TabPane tabId="5">
          <div style={{ padding: "2%" }}>
            <Table hover responsive size="" striped>
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Test Duration</th>
                  <th>Course</th>
                  <th>Start Test</th>
                </tr>
              </thead>
              <tbody>
                {allTests &&
                  allTests.map((test) => {
                    return (
                      <tr>
                        <td>{test.test_name}</td>
                        <td>{test.test_duration}</td>
                        <td>{test.fk_course.course_name}</td>
                        <td>
                          <Button outline>Start Test</Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </TabPane>
        <TabPane tabId="6">
          <div style={{ padding: "2%" }}>
            <Table hover responsive size="" striped>
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Test Start Time</th>
                  <th>Test End Time</th>
                  <th>Score</th>
                  <th>Inspect Answers</th>
                </tr>
              </thead>
              <tbody>
                {myTests &&
                  myTests.map((test) => {
                    return (
                      <tr>
                        <td>{test.test.test_name}</td>
                        <td>{test.start_time}</td>
                        <td>{test.end_time}</td>
                        <td>{test.score}</td>
                        <td>
                          <Button outline>Inspect</Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Profile;
