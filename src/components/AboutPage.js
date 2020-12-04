import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const AboutPage = () => {
  return (
    <Container className="mt-5">
      <Card className="">
      <h1 className="mb-4">About</h1>
      <h4>Simple Application To Get Jobs from GitHub Jobs API Using React.<br />
      React App that works with the GitHub Jobs API that includes search, filter, pagination, etc</h4>
      <p>In this App we can see the name of the job, the name and picture of the company, the date when it was created, the location 
        of the job, we will also be able to see a link or information to go to about job applications, 
        and we can see a description of the job that is being searched for. 
        We can also search by filling in the description or location of the job we want. <br />API GitHub Jobs https://jobs.github.com/positions.json</p>
      <p style={{color: "blue"}}>Made by Fernando Vincentius Sean Piay || Tutorial by Traversy Media Colab with Web Dev Simplified</p>
      </Card>
    </Container>
  );
}

export default AboutPage;