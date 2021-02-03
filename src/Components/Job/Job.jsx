import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import "../Job/Job.css";


function Job(props) {
  const { job } = props;
  console.log("ComponentJob: job", job); //single

  return (
    <div>
      <Col md={3} className="my-3">
        <Card className="">
          <Card.Img
            variant="top"
            src={
              job.company_logo
                ? job.company_logo
                : "http://placehold.it/100x100"
            }
            className="company-logo-card"
          />
          <Card.Body className="company-card">
            <Card.Title >{job.company}</Card.Title>
            <Link to={`/details/${job.id}`}>
              <Button variant="primary" className="every-button">                    <FontAwesomeIcon icon={faForward} className="icon-padding"/>See more</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default Job;
