import React from "react";
import { InputGroup, FormControl, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import "../Search/Search.css";


export default function Search(props) {
  let { updateSearch, handleSearch } = props;
  let { position, location } = props.values;

  return (
    <div className="search-fields-container">
      <Col sm={12}>
        <InputGroup className="mt-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon-design" />

            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Location (ex: Berlin)"
            aria-label="location"
            aria-describedby="location"
            value={location}
            onChange={updateSearch}
            id="location"
          />
        </InputGroup>
        <InputGroup className="mt-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="position">
            <FontAwesomeIcon icon={faBriefcase} className="input-icon-design"/>

            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Job Position (ex: Full Stack)"
            aria-label="position"
            aria-describedby="position"
            value={position}
            onChange={updateSearch}
            id="position"
          />
        </InputGroup>
        <Button
          className="d-flex align-items-center mt-2 every-button"
          onClick={handleSearch}
        >
          <FontAwesomeIcon icon={faSearch} className="mr-2 icon-padding" />
          Search
        </Button>
      </Col>
    </div>
  );
}
