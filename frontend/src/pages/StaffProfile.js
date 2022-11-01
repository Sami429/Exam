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
  InputGroup,
  InputGroupText,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      .then((response) => {
        if (response.status === 200) {
          toast("Successfully Logged Out!!", { type: "success" });
          navigate("/staff-login");
        }
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
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
    axios
      .put(
        "http://127.0.0.1:8000/users/update-user-details/",
        {
          fname: updateUserFname,
          lname: updateUserLname,
          email: updateUserEmail,
        },
        { withCredentials: true }
      )
      .then((response) => {
        // toast.success("Successful Login");
        if (response.status === 200) {
          toast("User Updated Successfully!!", { type: "success" });
        }
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
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
      axios
        .put(
          "http://127.0.0.1:8000/users/reset-password/",
          {
            new_password: newPassword,
          },
          { withCredentials: true }
        )
        .then((response) => {
          // toast.success("Successful Login");
          if (response.status === 200) {
            toast("Successfully Reset Password!!", { type: "success" });
          }
        })
        .catch((error) => {
          toast("Failure!!", { type: "error" });
        });
    } else {
      toast("Passwords are not equal!!", { type: "warning" });
    }
  };

  let [allCourses, setAllCourses] = useState("");
  const getCourses = () => {
    axios
      .get("http://127.0.0.1:8000/courses/course/course-list/")
      .then((response) => {
        setAllCourses(response.data);
        console.log(allCourses);
      })
      .then((response) => {
        toast("List Fetched Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
  };

  const [questions, setQuestions] = useState("");
  const getQuestions = () => {
    axios
      .get("http://127.0.0.1:8000/courses/question/question-list/")
      .then((response) => {
        setQuestions(response.data);
        console.log(questions);
      })
      .then((response) => {
        // toast.success("Successful Login");
        toast("List Fetched Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
  };
  let [allTests, setAllTests] = useState("");
  const getTests = () => {
    axios
      .get("http://127.0.0.1:8000/courses/test/test-list/")
      .then((response) => {
        setAllTests(response.data);
        console.log(allTests);
      })
      .then((response) => {
        // toast.success("Successful Login");
        toast("List Fetched Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
  };

  const [selectedCourse, setSelectedCourse] = useState("");
  const enrollCourse = (e) => {
    setSelectedCourse(e.target.value);
  };
  const enrollStudent = () => {
    axios
      .post(
        "http://127.0.0.1:8000/courses/student-course/add-student-course/",
        {
          course_id: selectedCourse,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        // toast.success("Successful Login");
        toast("Added Course Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
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
    })
      .then((response) => {
        // toast.success("Successful Login");
        toast("De-enrolled Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
  };

  const [newCourse, setNewCourse] = useState("");

  const setCourseName = (e) => {
    console.log(e.target.value);
    setNewCourse(e.target.value);
  };

  const createCourse = () => {
    axios
      .post(
        "http://127.0.0.1:8000/courses/course/create-course/",
        {
          course_name: newCourse,
          //   creater_name: newCourseCreater
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        // toast.success("Successful Login");
        toast("Created Course Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
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
    axios
      .put(
        "http://127.0.0.1:8000/courses/course/update-course",
        {
          course_name: updatedCourseName,
        },
        {
          params: {
            course: originalCourseName,
          },
        }
      )
      .then((response) => {
        // toast.success("Successful Login");
        toast("Course Updated Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
  };

  const [deleteCourseName, setDeleteCourseName] = useState("");
  const getDeleteCourseName = (e) => {
    setDeleteCourseName(e.target.value);
  };

  const deleteCourse = () => {
    axios({
      method: "DELETE",
      url: "http://127.0.0.1:8000/courses/course/delete-course",
      params: { course: deleteCourseName },
    })
      .then((response) => {
        // toast.success("Successful Login");
        toast("Course Deleted Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
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
    axios
      .post(
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
      )
      .then((response) => {
        // toast.success("Successful Login");
        toast("Question Created Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
  };
  const updateQuestions = () => {
    axios
      .put(
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
      )
      .then((response) => {
        // toast.success("Successful Login");
        toast("Question Updated Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
  };

  const deleteQuestion = () => {
    axios({
      method: "DELETE",
      url: "http://127.0.0.1:8000/courses/question/delete-question",
      params: { question: questionName },
    })
      .then((response) => {
        // toast.success("Successful Login");
        toast("Question Deleted Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
  };

  const [newTestName, setNewTestName] = useState("");
  const [testDuration, setTestDuration] = useState("");
  const [relatedCourse, setRelatedCourse] = useState("");

  const createNewTestName = (e) => {
    setNewTestName(e.target.value);
    console.log(e.target.value);
  };
  const createNewTestDuration = (e) => {
    setTestDuration(e.target.value);
    console.log(e.target.value);
  };
  const createRelatedCourse = (e) => {
    setRelatedCourse(e.target.value);
    console.log(e.target.value);
  };

  const createTest = () => {
    axios
      .post(
        "http://127.0.0.1:8000/courses/test/create-test/",
        {
          test_name: newTestName,
          test_duration: testDuration,
          fk_course_id: relatedCourse,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        // toast.success("Successful Login");
        toast("Test Created Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
  };

  const updateTest = () => {
    axios
      .put(
        "http://127.0.0.1:8000/courses/test/update-test/",
        {
          test_name: newTestName,
          test_duration: testDuration,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        // toast.success("Successful Login");
        toast("Test Updated Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
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
    })
      .then((response) => {
        // toast.success("Successful Login");
        toast("Test Deleted Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
  };
  const [deactivateUsername, setDeactivateUsername] = useState("");
  const deactiveUser = (e) => {
    setDeactivateUsername(e.target.value);
  };

  const deactivateUser = () => {
    axios
      .post(
        "http://127.0.0.1:8000/users/deactivate/",
        {
          username: deactivateUsername,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        // toast.success("Successful Login");
        toast("User Deactivated Successfully!!", { type: "success" });
      })
      .catch((error) => {
        toast("Failure!!", { type: "error" });
      });
  };

  const [userList, setUserList] = useState("");
  const createUserList = () => {
    axios
      .get("http://localhost:8000/users/get-student-list/", {
        withCredentials: true,
      })
      .then(function (response) {
        setUserList(response.data);
        console.log(response.data);
      });
  };

  const [createCourseTab, setCreateCourseTab] = useState("");
  const [updateCourseTab, setUpdateCourseTab] = useState("");
  const [deleteCourseTab, setDeleteCourseTab] = useState("");
  const [currentCourseTab, setCurrentCourseTab] = useState("createCourse");
  const courseTab = (id) => {
    if (id === "create") {
      setCreateCourseTab("active");
      setUpdateCourseTab('')
      setDeleteCourseTab('')
      setCurrentCourseTab("createCourse");
    } else if (id === "update") {
      setUpdateCourseTab("active")
      setCreateCourseTab('')
      setDeleteCourseTab('')
      setCurrentCourseTab("updateCourse");
    } else if (id === "delete") {
      setDeleteCourseTab("active");
      setUpdateCourseTab('')
      setCurrentCourseTab("deleteCourse");
    }
  };

  const [createTestTab, setCreateTestTab] = useState("");
  const [updateTestTab, setUpdateTestTab] = useState("");
  const [deleteTestTab, setDeleteTestTab] = useState("");
  const [currentTestTab, setCurrentTestTab] = useState("createTest");
  const testTab = (id) => {
    if (id === "create") {
      setCreateTestTab("active");
      setUpdateTestTab("");
      setDeleteTestTab("");
      setCurrentTestTab("createTest");
    } else if (id === "update") {
      setUpdateTestTab("active");
      setCreateTestTab("");
      setDeleteTestTab("");
      setCurrentTestTab("updateTest");
    } else if (id === "delete") {
      setDeleteTestTab("active");
      setUpdateTestTab("");
      setCurrentTestTab("deleteTest");
    }
  };

  const [createQuestionTab, setCreateQuestionTab] = useState("");
  const [updateQuestionTab, setUpdateQuestionTab] = useState("");
  const [deleteQuestionTab, setDeleteQuestionTab] = useState("");
  const [currentQuestionTab, setCurrentQuestionTab] = useState("createQuestion");
  const questionTab = (id) => {
    if (id === "create") {
      setCreateQuestionTab("active");
      setUpdateQuestionTab("");
      setDeleteQuestionTab("");
      setCurrentQuestionTab("createQuestion");
    } else if (id === "update") {
      setUpdateQuestionTab("active");
      setCreateQuestionTab("");
      setDeleteQuestionTab("");
      setCurrentQuestionTab("updateQuestion");
    } else if (id === "delete") {
      setDeleteQuestionTab("active");
      setUpdateQuestionTab("");
      setCurrentQuestionTab("deleteQuestion");
    }
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
              createUserList();
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
                <InputGroup style={{ padding: "1%" }}>
                  <InputGroupText>First Name</InputGroupText>
                  <Input
                    id="fname"
                    type="text"
                    placeholder="Enter your first name"
                    onChange={updateFname}
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup style={{ padding: "1%" }}>
                  <InputGroupText>Last Name</InputGroupText>
                  <Input
                    id="lname"
                    type="text"
                    placeholder="Enter your last name"
                    onChange={updateLname}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup style={{ padding: "1%" }}>
                  <InputGroupText>Email</InputGroupText>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    onChange={updateEmail}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row style={{ paddingLeft: "40%", paddingRight: "40%" }}>
              <Col>
                <Button color="primary" onClick={updateUser}>
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
                <InputGroup style={{ padding: "1%" }}>
                  <InputGroupText>Enter Password</InputGroupText>
                  <Input id="new-password" type="password" onChange={newPass} />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup style={{ padding: "1%" }}>
                  <InputGroupText>Re-enter Password</InputGroupText>
                  <Input
                    id="re-enter-password"
                    type="password"
                    onChange={resetNewPass}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row style={{ paddingLeft: "40%", paddingRight: "40%" }}>
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
            <Nav pills style={{ paddingLeft: "30%", paddingRight: "30%" }}>
              <NavItem>
                <NavLink
                  className={createCourseTab}
                  onClick={function (event) {
                    courseTab("create");
                  }}
                >
                  Create Course
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={updateCourseTab}
                  onClick={function (event) {
                    courseTab("update");
                  }}
                >
                  Update Course
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={deleteCourseTab}
                  onClick={function (event) {
                    courseTab("delete");
                  }}
                >
                  Delete Course
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent
              activeTab={currentCourseTab}
              // style={{ paddingLeft: "30%", paddingRight: "30%" }}
            >
              <TabPane tabId="createCourse">
                <Container>
                  <Row style={{ padding: "1%" }}>
                    <InputGroup>
                      <InputGroupText>Course Name</InputGroupText>
                      <Input
                        id="new-course"
                        type="text"
                        placeholder="Enter the name of the course you want to add"
                        onChange={setCourseName}
                      />
                    </InputGroup>
                  </Row>
                  <Row style={{ paddingLeft: "40%", paddingRight: "40%" }}>
                    <Button color="primary" onClick={createCourse}>
                      Create New Course
                    </Button>
                  </Row>
                </Container>
              </TabPane>
              <TabPane tabId="updateCourse">
                <Container>
                  <Row style={{ padding: "1%" }}>
                    <Col>
                      <InputGroup>
                        <InputGroupText>Course Name</InputGroupText>
                        <Input
                          id="original-name"
                          type="text"
                          onChange={originalCourse}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupText>Course Name</InputGroupText>
                        <Input
                          id="option-a"
                          type="text"
                          onChange={updateCoursename}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row style={{ paddingLeft: "40%", paddingRight: "40%" }}>
                    <Button color="primary" onClick={updateCourse}>
                      Update Course
                    </Button>
                  </Row>
                </Container>
              </TabPane>
              <TabPane tabId="deleteCourse">
                <Container>
                  <Row style={{ padding: "1%" }}>
                    <InputGroup>
                      <InputGroupText>Course Name</InputGroupText>
                      <Input
                        id="delete-course"
                        type="text"
                        placeholder="Enter the name of the course you want to delete"
                        onChange={getDeleteCourseName}
                      />
                    </InputGroup>
                  </Row>
                  <Row style={{ paddingLeft: "40%", paddingRight: "40%" }}>
                    <Button color="danger" onClick={deleteCourse}>
                      Delete Course
                    </Button>
                  </Row>
                </Container>
              </TabPane>
            </TabContent>
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
            <Nav pills style={{ paddingLeft: "25%", paddingRight: "25%" }}>
              <NavItem>
                <NavLink
                  className={createQuestionTab}
                  onClick={function (event) {
                    questionTab("create");
                  }}
                >
                  Create Question
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={updateQuestionTab}
                  onClick={function (event) {
                    questionTab("update");
                  }}
                >
                  Update Question
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={deleteQuestionTab}
                  onClick={function (event) {
                    questionTab("delete");
                  }}
                >
                  Delete Question
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={currentQuestionTab}>
              <TabPane tabId="createQuestion">
                <Container>
                  <Row style={{ padding: "1%" }}>
                    <Col>
                      <InputGroup>
                        <InputGroupText>Question</InputGroupText>
                        <Input
                          id="question"
                          type="text"
                          placeholder="Enter the question"
                          onChange={createQuestion}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row style={{ padding: "1%" }}>
                    <Col>
                      <InputGroup>
                        <InputGroupText>A</InputGroupText>
                        <Input
                          id="option-a"
                          type="text"
                          placeholder="Enter the options"
                          onChange={createOptionA}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupText>B</InputGroupText>
                        <Input
                          id="option-b"
                          type="text"
                          placeholder="Enter the options"
                          onChange={createOptionB}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupText>C</InputGroupText>
                        <Input
                          id="option-c"
                          type="text"
                          placeholder="Enter the options"
                          onChange={createOptionC}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupText>D</InputGroupText>
                        <Input
                          id="option-d"
                          type="text"
                          placeholder="Enter the options"
                          onChange={createOptionD}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row style={{ padding: "1%" }}>
                    <Col>
                      <InputGroup>
                        <InputGroupText>Answer</InputGroupText>
                        <Input
                          id="answer"
                          type="text"
                          placeholder="Enter the correct answer"
                          onChange={createAnswer}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupText>Test</InputGroupText>
                        <Input
                          id="test"
                          type="text"
                          placeholder="Enter the related test"
                          onChange={associatedTest}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row style={{ paddingLeft: "40%", paddingRight: "40%" }}>
                    <Button color="primary" onClick={createQuestions}>
                      Submit Question
                    </Button>
                  </Row>
                </Container>
              </TabPane>

              <TabPane tabId="updateQuestion">
                <Container>
                  <Row style={{ padding: "1%" }}>
                    <Col>
                      <InputGroup>
                        <InputGroupText>Question</InputGroupText>
                        <Input
                          id="question"
                          type="text"
                          placeholder="Enter the question"
                          onChange={createQuestion}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row style={{ padding: "1%" }}>
                    <Col>
                      <InputGroup>
                        <InputGroupText>A</InputGroupText>
                        <Input
                          id="option-a"
                          type="text"
                          placeholder="Enter the options"
                          onChange={createOptionA}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupText>B</InputGroupText>
                        <Input
                          id="option-b"
                          type="text"
                          placeholder="Enter the options"
                          onChange={createOptionB}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupText>C</InputGroupText>
                        <Input
                          id="option-c"
                          type="text"
                          placeholder="Enter the options"
                          onChange={createOptionC}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupText>D</InputGroupText>
                        <Input
                          id="option-d"
                          type="text"
                          placeholder="Enter the options"
                          onChange={createOptionD}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row style={{ padding: "1%" }}>
                    <Col>
                      <InputGroup>
                        <InputGroupText>Answer</InputGroupText>
                        <Input
                          id="answer"
                          type="text"
                          placeholder="Enter the correct answer"
                          onChange={createAnswer}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row style={{ paddingLeft: "40%", paddingRight: "40%" }}>
                    <Button color="primary" onClick={updateQuestions}>
                      Update Question
                    </Button>
                  </Row>
                </Container>
              </TabPane>
              <TabPane tabId="deleteQuestion">
                <Container>
                  <Row style={{ padding: "1%" }}>
                    <InputGroup>
                      <InputGroupText>Question</InputGroupText>
                      <Input
                        id="question"
                        type="text"
                        placeholder="Enter the question you want to delete"
                        onChange={createQuestion}
                      />
                    </InputGroup>
                  </Row>
                  <Row style={{ paddingLeft: "40%", paddingRight: "40%" }}>
                    <Button color="danger" onClick={deleteQuestion}>
                      Delete Course
                    </Button>
                  </Row>
                </Container>
              </TabPane>
            </TabContent>
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
            <Nav pills style={{ paddingLeft: "30%", paddingRight: "30%" }}>
              <NavItem>
                <NavLink
                  className={createTestTab}
                  onClick={function (event) {
                    testTab("create");
                  }}
                >
                  Create Test
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={updateTestTab}
                  onClick={function (event) {
                    testTab("update");
                  }}
                >
                  Update Test
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={deleteTestTab}
                  onClick={function (event) {
                    testTab("delete");
                  }}
                >
                  Delete Test
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={currentTestTab}>
              <TabPane tabId="createTest">
                <Container>
                  <Row style={{ padding: "1%" }}>
                    <Col>
                      <InputGroup>
                        <InputGroupText>Name</InputGroupText>
                        <Input
                          id="test-name"
                          type="text"
                          placeholder="Enter the name of the test"
                          onChange={createNewTestName}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupText>Duration</InputGroupText>
                        <Input
                          id="test-duration"
                          type="text"
                          placeholder="Enter the duration of the test"
                          onChange={createNewTestDuration}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupText>Course</InputGroupText>
                        <Input
                          id="related-course"
                          type="text"
                          placeholder="Enter the related course"
                          onChange={createRelatedCourse}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row style={{ paddingLeft: "40%", paddingRight: "40%" }}>
                    <Col>
                      <Button color="primary" block onClick={createTest}>
                        Create Test
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </TabPane>

              <TabPane tabId="updateTest">
                <Container>
                  <Row style={{ padding: "1%" }}>
                    <Col>
                      <InputGroup>
                        <InputGroupText>Name</InputGroupText>
                        <Input
                          id="test-name"
                          type="text"
                          placeholder="Enter the name of the test to be updated"
                          onChange={createNewTestName}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupText>Duration</InputGroupText>
                        <Input
                          id="test-duration"
                          type="text"
                          placeholder="Enter the duration of the test to be updated"
                          onChange={createNewTestDuration}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row style={{ paddingLeft: "40%", paddingRight: "40%" }}>
                    <Col>
                      <Button color="primary" block onClick={updateTest}>
                        Update Test
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </TabPane>

              <TabPane tabId="deleteTest">
                <Container>
                  <Row style={{ padding: "1%" }}>
                    <InputGroup>
                      <InputGroupText>Name</InputGroupText>
                      <Input
                        id="question"
                        type="text"
                        placeholder="Enter the test you want to delete"
                        onChange={setTestNameDelete}
                      />
                    </InputGroup>
                  </Row>
                  <Row style={{ paddingLeft: "40%", paddingRight: "40%" }}>
                    <Button color="danger" onClick={deleteTest}>
                      Delete Test
                    </Button>
                  </Row>
                </Container>
              </TabPane>
            </TabContent>
          </div>
        </TabPane>
        <TabPane tabId="6">
          <div>
            <Table hover responsive size="" striped>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                {userList &&
                  userList.map((user) => {
                    return (
                      <tr>
                        <td>{user.username}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        {/* <td>{user.is_active}</td> */}
                        {user.is_active && <td>Active</td>}
                        {!user.is_active && <td>Inactive</td>}
                      </tr>
                    );
                  })}
              </tbody>
            </Table>

            <Container>
              <Row style={{ padding: "1%" }}>
                <InputGroup>
                  <InputGroupText>Username</InputGroupText>
                  <Input
                    type="text"
                    placeholder="Enter username to be deactivated."
                    onChange={deactiveUser}
                  />
                </InputGroup>
              </Row>
              <Row style={{ paddingLeft: "40%", paddingRight: "40%" }}>
                <Button color="danger" onClick={deactivateUser}>
                  Deactivate User
                </Button>
              </Row>
            </Container>
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default StaffProfile;
