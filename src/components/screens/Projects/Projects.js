import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Selector from "./Selector";
import Project from "./Project";

import styles from "./Projects.module.scss";

import ProjectService from "services/ProjectService.js";

export default function Projects({ match, children }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  // TODO add sorting function LODASH?
  const addToProjects = (newProject) => {
    const newProjectList = [...projects, newProject];
    newProjectList.sort((a, b) => (a.name > b.name ? 1 : -1));
    setProjects(newProjectList);
    history.push(`/projects/${newProject.id}`);
  };

  const updateProjects = (updatedProject) => {
    const filteredList = projects.filter(
      (project) => project.id !== updatedProject.id
    );
    setProjects([...filteredList, updatedProject]);
  };

  const deleteProject = (projectId) => {
    history.push("/projects");
    const filteredList = projects.filter((project) => project.id !== projectId);
    setProjects(filteredList);
  };

  useEffect(() => {
    setLoading(true);
    ProjectService.getProjects()
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        if (err.status === 403) {
          console.log(err);
        }
      });
    setLoading(false);
  }, []);

  return (
    <div className={styles.manager}>
      <Selector
        projects={projects}
        loading={loading}
        addToProjects={addToProjects}
      />
      <Project
        match={match}
        projects={projects}
        updateProjects={updateProjects}
        deleteProject={deleteProject}
      />
      {children}
    </div>
  );
}
