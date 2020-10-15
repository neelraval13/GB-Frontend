import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import logoImage from "../../assets/company/gb.png";
import "./Login.scss";

function Login() {
  return (
    <div className="login__bgImage">
      <Container>
        <Row className="header">
          <Col>
            <img src={logoImage} alt="GB logo" className="header__logo" />
          </Col>
        </Row>
        <Row className="login__body">
          <Col lg={8} className="body__left">
            <div className="heading">
              <h2 className="welcome">Welcome to the Gaming Social Network</h2>
              <h6>
                We are the best and biggest social network with 5 billion active
                users all around the world.
                <br /> Share you thoughts, write blog posts, show your favourite
                music via Stopify, earn badges
                <br /> and much more!
              </h6>
            </div>
            <Button>Register Now</Button>
          </Col>
          <Col lg={4} className="body__right">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <p>or</p>
            <FacebookLoginButton onClick={() => alert("Hello")} />
            <GoogleLoginButton onClick={() => alert("Hello")} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
