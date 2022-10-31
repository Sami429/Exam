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
  Badge,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function StaffProfile() {
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

  const [questions, setQuestions] = useState("");
  const getQuestions = () => {
    axios
      .get("http://127.0.0.1:8000/courses/question/question-list/")
      .then((response) => {
        setQuestions(response.data);
        console.log(questions);
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
      url: "http://127.0.0.1:8000/courses/student-course/delete-student-course/",
      params: { course: deenrollCourse },
    });
  };

  const [newCourse, setNewCourse] = useState("");

  const setCourseName = (e) => {
    console.log(e.target.value);
    setNewCourse(e.target.value);
  };

  const createCourse = () => {
    axios.post(
      "http://127.0.0.1:8000/courses/course/create-course/",
      {
        course_name: newCourse,
        //   creater_name: newCourseCreater
      },
      {
        withCredentials: true,
      }
    );
  };

  const [originalCourseName, setOriginalCourseName] = useState("");
  const [updatedCourseName, setUpdatedCourseName] = useState("");
  const originalCourse = (e) => {
    setOriginalCourseName(e.target.value);
  };
  const updateCoursename = (e) => {
    setUpdatedCourseName(e.target.value);
  };
  const updateCourse = () => {
    axios.put(
      "http://127.0.0.1:8000/courses/course/create-course/",
      {
        course_name: updatedCourseName,
      },
      {
        params: {
          course: originalCourseName,
        },
      }
    );
  };

  const [deleteCourseName, setDeleteCourseName] = useState('');
  const getDeleteCourseName = (e) => {
    setDeleteCourseName(e.target.value)
  }

  const deleteCourse = () => {
    axios({
      method: "DELETE",
      url: "http://127.0.0.1:8000/courses/course/delete-course",
      params: { course: deleteCourseName },
    });
  };
  const [questionName, setQuestionName] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [answer, setAnswer] = useState("");
  const [testName, setTestName] = useState("");

  const createQuestion = (e) => {
    setQuestionName(e.target.value);
  };
  const createOptionA = (e) => {
    setOptionA(e.target.value);
  };
  const createOptionB = (e) => {
    setOptionB(e.target.value);
  };
  const createOptionC = (e) => {
    setOptionC(e.target.value);
  };
  const createOptionD = (e) => {
    setOptionD(e.target.value);
  };
  const createAnswer = (e) => {
    setAnswer(e.target.value);
  };
  const associatedTest = (e) => {
    setTestName(e.target.value);
  };

  const createQuestions = () => {
    axios.post(
      "http://127.0.0.1:8000/courses/question/create-question/",
      {
        question: questionName,
        option_a: optionA,
        option_b: optionB,
        option_c: optionC,
        option_d: optionD,
        answer: answer,
        fk_test_id: testName,
      },
      {
        withCredentials: true,
      }
    );
  };
  const updateQuestions = () => {
    axios.put(
      "http://127.0.0.1:8000/courses/question/update-question",
      {
        question: questionName,
        option_a: optionA,
        option_b: optionB,
        option_c: optionC,
        option_d: optionD,
        answer: answer,
      },
      {
        params: {
          question: questionName,
        },
      },
      {
        withCredentials: true,
      }
    );
  };

  const deleteQuestion = () => {
    axios({
      method: "DELETE",
      url: "http://127.0.0.1:8000/courses/question/delete-question",
      params: { question: questionName },
    });
  };

  const [newTestName, setNewTestName] = useState("");
  const [testDuration, setTestDuration] = useState("");
  const [relatedCourse, setRelatedCourse] = useState("");

  const createNewTestName = (e) => {
    setNewTestName(e.target.value);
  };
  const createNewTestDuration = (e) => {
    setTestDuration(e.target.value);
  };
  const createRelatedCourse = (e) => {
    setRelatedCourse(e.target.value);
  };

  const createTest = () => {
    axios.post(
      "http://127.0.0.1:8000/courses/test/create-test/",
      {
        test_name: newTestName,
        test_duration: testDuration,
        fk_course_id: relatedCourse,
      },
      {
        withCredentials: true,
      }
    );
  };

  const updateTest = () => {
    axios.put(
      "http://127.0.0.1:8000/courses/test/update-test/",
      {
        test_name: newTestName,
        test_duration: testDuration.replace,
        fk_course_id: relatedCourse,
      },
      {
        withCredentials: true,
      }
    );
  };
  const [deleteTestName, setDeleteTestName] = useState("");

  const setTestNameDelete = (e) => {
    setDeleteTestName(e.target.value);
  };
  const deleteTest = () => {
    axios({
      method: "DELETE",
      url: "http://127.0.0.1:8000/courses/test/delete-test",
      params: { test: deleteTestName },
    });
  };
  const [deactivateUsername, setDeactivateUsername] = useState('');
  const deactiveUser = (e) => {
    setDeactivateUsername(e.target.value)
  }

  const deactivateUser = () => {
    axios.post("http://127.0.0.1:8000/users/deactivate/", {
      username: deactivateUsername,
    },
    {
        withCredentials: true,
    });
  }


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
              getQuestions();
            }}
          >
            Questions
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
            }}
          >
            Deactivate User
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
                        <td>{course.creater_name.username}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
            <Container>
              <Row style={{ padding: "1%" }}>
                <Badge>Create Course</Badge>
              </Row>
              <Row style={{ padding: "1%" }}>
                <Col>
                  <Input
                    id="new-course"
                    type="text"
                    placeholder="Enter the name of the new course"
                    onChange={setCourseName}
                  />
                </Col>
                <Col>
                  <Button color="primary" onClick={createCourse}>
                    Create New Course
                  </Button>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row style={{ padding: "1%" }}>
                <Badge>Update Course</Badge>
              </Row>
              <Row style={{ padding: "1%" }}>
                <Col>
                  <Input
                    id="original-name"
                    type="text"
                    placeholder="Enter the original course name"
                    onChange={originalCourse}
                  />
                </Col>
                <Col>
                  <Input
                    id="option-a"
                    type="text"
                    placeholder="Enter the new course name"
                    onChange={updateCoursename}
                  />
                </Col>
                <Col>
                  <Button color="primary" onClick={updateCourse}>
                    Update Course
                  </Button>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row style={{ padding: "1%" }}>
                <Badge>Delete Course</Badge>
              </Row>
              <Row style={{ padding: "1%" }}>
                <Col>
                  <Input
                    id="delete-course"
                    type="text"
                    placeholder="Enter the name of the course you want to delete"
                    onChange={getDeleteCourseName}
                  />
                </Col>
                <Col>
                  <Button color="danger" onClick={deleteCourse}>
                    Delete Course
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
                  <th>Question</th>
                  <th>Option A</th>
                  <th>Option B</th>
                  <th>Option C</th>
                  <th>Option D</th>
                  <th>Answer</th>
                  <th>Test</th>
                </tr>
              </thead>
              <tbody>
                {questions &&
                  questions.map((question) => {
                    return (
                      <tr>
                        <td>{question.question}</td>
                        <td>{question.option_a}</td>
                        <td>{question.option_b}</td>
                        <td>{question.option_c}</td>
                        <td>{question.option_d}</td>
                        <td>{question.answer}</td>
                        <td>{question.fk_test.test_name}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>

            <Container>
              <Row style={{ padding: "1%" }}>
                <Badge>Create Question</Badge>
              </Row>
              <Row style={{ padding: "1%" }}>
                <Col>
                  <Input
                    id="question"
                    type="text"
                    placeholder="Enter the question"
                    onChange={createQuestion}
                  />
                </Col>
              </Row>
              <Row style={{ padding: "1%" }}>
                <Col>
                  <Input
                    id="option-a"
                    type="text"
                    placeholder="Enter the options"
                    onChange={createOptionA}
                  />
                </Col>
                <Col>
                  <Input
                    id="option-b"
                    type="text"
                    placeholder="Enter the options"
                    onChange={createOptionB}
                  />
                </Col>
                <Col>
                  <Input
                    id="option-c"
                    type="text"
                    placeholder="Enter the options"
                    onChange={createOptionC}
                  />
                </Col>
                <Col>
                  <Input
                    id="option-d"
                    type="text"
                    placeholder="Enter the options"
                    onChange={createOptionD}
                  />
                </Col>
              </Row>
              <Row style={{ padding: "1%" }}>
                <Col>
                  <Input
                    id="answer"
                    type="text"
                    placeholder="Enter the correct answer"
                    onChange={createAnswer}
                  />
                </Col>
                <Col>
                  <Input
                    id="test"
                    type="text"
                    placeholder="Enter the related test"
                    onChange={associatedTest}
                  />
                </Col>
              </Row>
              <Row>
                <Button color="primary" onClick={createQuestions}>
                  Submit Question
                </Button>
              </Row>
            </Container>
            <Container>
              <Row style={{ padding: "1%" }}>
                <Badge>Update Question</Badge>
              </Row>
              <Row style={{ padding: "1%" }}>
                <Col>
                  <Input
                    id="question"
                    type="text"
                    placeholder="Enter the question"
                    onChange={createQuestion}
                  />
                </Col>
              </Row>
              <Row style={{ padding: "1%" }}>
                <Col>
                  <Input
                    id="option-a"
                    type="text"
                    placeholder="Enter the options"
                    onChange={createOptionA}
                  />
                </Col>
                <Col>
                  <Input
                    id="option-b"
                    type="text"
                    placeholder="Enter the options"
                    onChange={createOptionB}
                  />
                </Col>
                <Col>
                  <Input
                    id="option-c"
                    type="text"
                    placeholder="Enter the options"
                    onChange={createOptionC}
                  />
                </Col>
                <Col>
                  <Input
                    id="option-d"
                    type="text"
                    placeholder="Enter the options"
                    onChange={createOptionD}
                  />
                </Col>
              </Row>
              <Row style={{ padding: "1%" }}>
                <Col>
                  <Input
                    id="answer"
                    type="text"
                    placeholder="Enter the correct answer"
                    onChange={createAnswer}
                  />
                </Col>
              </Row>
              <Row>
                <Button color="primary" onClick={updateQuestions}>
                  Update Question
                </Button>
              </Row>
            </Container>
            <Container>
              <Row style={{ padding: "1%" }}>
                <Badge>Delete Question</Badge>
              </Row>
              <Row>
                <Col>
                  <Input
                    id="question"
                    type="text"
                    placeholder="Enter the question you want to delete"
                    onChange={createQuestion}
                  />
                </Col>
                <Col>
                  <Button color="danger" onClick={deleteQuestion}>
                    Delete Course
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
            <Container>
              <Row style={{ padding: "1%" }}>
                <Badge>Add Test</Badge>
              </Row>
              <Row>
                <Col>
                  <Input
                    id="test-name"
                    type="text"
                    placeholder="Enter the name of the test"
                    onChange={createNewTestName}
                  />
                </Col>
                <Col>
                  <Input
                    id="test-duration"
                    type="text"
                    placeholder="Enter the duration of the test"
                    onChange={createNewTestDuration}
                  />
                </Col>
                <Col>
                  <Input
                    id="related-course"
                    type="text"
                    placeholder="Enter the related course"
                    onChange={createRelatedCourse}
                  />
                </Col>
              </Row>
              <Row style={{ padding: "1%" }}>
                <Col>
                  <Button color="primary" block onClick={createTest}>
                    Create Test
                  </Button>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row style={{ padding: "1%" }}>
                <Badge>Update Test</Badge>
              </Row>
              <Row>
                <Col>
                  <Input
                    id="test-name"
                    type="text"
                    placeholder="Enter the name of the test"
                    onChange={createNewTestName}
                  />
                </Col>
                <Col>
                  <Input
                    id="test-duration"
                    type="text"
                    placeholder="Enter the duration of the test"
                    onChange={createNewTestDuration}
                  />
                </Col>
              </Row>
              <Row style={{ padding: "1%" }}>
                <Col>
                  <Button color="primary" block onClick={updateTest}>
                    Update Test
                  </Button>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row style={{ padding: "1%" }}>
                <Badge>Delete Test</Badge>
              </Row>
              <Row>
                <Col>
                  <Input
                    id="question"
                    type="text"
                    placeholder="Enter the test you want to delete"
                    onChange={setTestNameDelete}
                  />
                </Col>
                <Col>
                  <Button color="danger" onClick={deleteTest}>
                    Delete Test
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </TabPane>
        <TabPane tabId="6">
          <div>
            <Container>
              <Row style={{ padding: "1%" }}>
                <Col>
                  <Input
                    type="text"
                    placeholder="Enter username to be deactivated."
                    onChange={deactiveUser}
                  />
                </Col>
                <Col>
                  <Button color="danger" onClick={deactivateUser}>
                    Deactivate User
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default StaffProfile;
