import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProjectService from 'services/ProjectService.js'
import Button from "../../shared/Button";

import styles from "./Project.module.scss";

const dateFormat = "dddd, MMMM Do, YYYY";

const Project = ({ match }) => {
  const [changed, setChanged] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    name: "",
    archive: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log("match: ", match);
    setLoading(true);
    ProjectService.getProjectById(match.params.projectId)
    .then(data => {
      setSelectedProject(data)
    }).catch(err => {
      console.log(err)
    })
    setLoading(false);
  }, [match]);

  function handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setSelectedProject({ ...selectedProject, [name]: value });
    setChanged(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submited: ", selectedProject);
  }

  return (
    <div className={styles.Project}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>
            created:
            <span>
              <Moment format={dateFormat}>{selectedProject.createdAt}</Moment>
            </span>
          </p>
          <p>
            last update:
            <span>
              <Moment format={dateFormat}>{selectedProject.updatedAt}</Moment>
            </span>
          </p>
          <label>
            project name
            <input
              name="name"
              type="text"
              value={selectedProject.name}
              onChange={handleChange}
            />
          </label>
          <label>
            archive
            <input
              name="archive"
              type="checkbox"
              checked={selectedProject.archive}
              onChange={handleChange}
            />
          </label>
          <Button type="submit" disabled={!changed}>
            Save Changes
          </Button>
          <p title="Add a project">
            <Button>
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </Button>
          </p>
        </form>
      )}
    </div>
  );
};

export default Project;
