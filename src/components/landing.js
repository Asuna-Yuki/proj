import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import DefaultCard from "./DefaultCard";

export const Landing = () => {
  return (
    <Container>
      <Button variant='primary'>Dashboard</Button>
      <Button variant='primary'>Login Now</Button>
      <Button variant='primary'>Back to Website</Button>
      <DefaultCard />
      <div>hello</div>
    </Container>
  );
};
