import React from 'react'
import { Input, Label, List } from 'reactstrap'

function Test() {
  return (
    <div>
      <List type="unstyled" style={{ padding: "7%" }}>
        <li>
          <List type="unstyled" style={{ padding: "2%" }}>
            <h5>Question 1</h5>
            <li>
              <Input id="a" type="radio"></Input>&nbsp;
              <Label for="a"> Option 1</Label>
            </li>
            <li>
              <Input id="b" type="radio"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
            <li>
              <Input id="c" type="radio"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
            <li>
              <Input id="d" type="radio"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
          </List>
        </li>
        <li>
          <List style={{ padding: "2%" }} type="unstyled">
            <h5>Question 2</h5>
            <li>
              <Input id="a" type="radio"></Input>&nbsp;
              <Label for="a"> Option 1</Label>
            </li>
            <li>
              <Input id="b" type="radio"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
            <li>
              <Input id="c" type="radio"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
            <li>
              <Input id="d" type="radio"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
          </List>
        </li>
        <li>
          <List style={{ padding: "2%" }} type="unstyled">
            <h5>Question 3</h5>
            <li>
              <Input id="a" type="radio"></Input>&nbsp;
              <Label for="a"> Option 1</Label>
            </li>
            <li>
              <Input id="b" type="radio"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
            <li>
              <Input id="c" type="radio"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
            <li>
              <Input id="d" type="radio"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
          </List>
        </li>
        <li>
          <List style={{ padding: "2%" }} type="unstyled">
            <h5>Question 4</h5>
            <li>
              <Input id="a" type="radio"></Input>&nbsp;
              <Label for="a"> Option 1</Label>
            </li>
            <li>
              <Input id="b" type="radio"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
            <li>
              <Input id="c" type="radio"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
            <li>
              <Input id="d" type="radio"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
          </List>
        </li>
      </List>
      {/* <Card style={{ padding: "7%" }}>
        <CardTitle>Question 1</CardTitle>
        <CardBody>
          <List type="unstyled">
            <li>
              <Input id="a" type="switch"></Input>&nbsp;
              <Label for="a"> Option 1</Label>
            </li>
            <li>
              <Input id="b" type="switch"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
            <li>
              <Input id="c" type="switch"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
            <li>
              <Input id="d" type="switch"></Input>&nbsp;
              <Label for="a">Option 1</Label>
            </li>
          </List>
        </CardBody>
      </Card> */}
      {/* <Card style={{ padding: "7%" }}>
        <CardTitle>Question 1</CardTitle>
        <List type="unstyled">
          <li>
            <Input id="a" type="switch"></Input>&nbsp;
            <Label for="a"> Option 1</Label>
          </li>
          <li>
            <Input id="b" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="c" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="d" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
        </List>
      </Card>
      <Card style={{ padding: "7%" }}>
        <CardTitle>Question 1</CardTitle>
        <List type="unstyled">
          <li>
            <Input id="a" type="switch"></Input>&nbsp;
            <Label for="a"> Option 1</Label>
          </li>
          <li>
            <Input id="b" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="c" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="d" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
        </List>
      </Card>
      <Card style={{ padding: "7%" }}>
        <CardTitle>Question 1</CardTitle>
        <List type="unstyled">
          <li>
            <Input id="a" type="switch"></Input>&nbsp;
            <Label for="a"> Option 1</Label>
          </li>
          <li>
            <Input id="b" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="c" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="d" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
        </List>
      </Card>
      <Card style={{ padding: "7%" }}>
        <CardTitle>Question 1</CardTitle>
        <List type="unstyled">
          <li>
            <Input id="a" type="switch"></Input>&nbsp;
            <Label for="a"> Option 1</Label>
          </li>
          <li>
            <Input id="b" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="c" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="d" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
        </List>
      </Card>
      <Card style={{ padding: "7%" }}>
        <CardTitle>Question 1</CardTitle>
        <List type="unstyled">
          <li>
            <Input id="a" type="switch"></Input>&nbsp;
            <Label for="a"> Option 1</Label>
          </li>
          <li>
            <Input id="b" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="c" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="d" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
        </List>
      </Card>
      <Card style={{ padding: "7%" }}>
        <CardTitle>Question 1</CardTitle>
        <List type="unstyled">
          <li>
            <Input id="a" type="switch"></Input>&nbsp;
            <Label for="a"> Option 1</Label>
          </li>
          <li>
            <Input id="b" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="c" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="d" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
        </List>
      </Card>
      <Card style={{ padding: "7%" }}>
        <CardTitle>Question 1</CardTitle>
        <List type="unstyled">
          <li>
            <Input id="a" type="switch"></Input>&nbsp;
            <Label for="a"> Option 1</Label>
          </li>
          <li>
            <Input id="b" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="c" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
          <li>
            <Input id="d" type="switch"></Input>&nbsp;
            <Label for="a">Option 1</Label>
          </li>
        </List>
      </Card> */}
    </div>
  );
}

export default Test