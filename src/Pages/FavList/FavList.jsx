import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import uniqid from "uniqid"

const mapStateToProps = (state) => 
{console.log("State", state)
return state;}

const mapDispatchToProps = (dispatch) => ({
  removeFromFavs: (jobId) =>
    dispatch({ type: "REMOVE_JOB_FROM_FAVS", payload: jobId }),
});

class FavList extends Component {
  render() {
    const list = this.props.favourites.jobs.map((jobId) =>
      list.find((job) => job.id === jobId)
    );
    return (
      <div className="row">
        <ul className="col-sm-12" style={{ listStyle: "none" }}>
          {list && list.map((job) => (
            <li key={uniqid} className="my-4">
              <Button
                variant="danger"
                onClick={() => this.props.removeFromFavs(job?.id)}
              >
                <FontAwesomeIcon icon={faTrash} id="trashIcon" />
              </Button>
              <img
                className=""
                src={job?.company_logo}
                alt="company's logo"
              />
              {job?.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavList);
