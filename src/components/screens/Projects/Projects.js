import React, { useState, useEffect } from "react";
import Selector from "./Selector";
import styles from "./Projects.module.scss";

import ProjectService from 'services/ProjectService.js'

const Projects = ({ match, children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("match: ", match);
    setLoading(true);
    ProjectService.getProjects()
    .then((data) => {
      setProjects(data)
    }).catch((err) => {
      console.log(err)
    })
    setLoading(false);
  }, [match]);

  return (
    <div className={styles.manager}>
      <Selector projects={projects} loading={loading} />
      {children}
    </div>
  );
};

export default Projects;
