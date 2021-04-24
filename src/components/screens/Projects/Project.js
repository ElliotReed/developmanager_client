import React, { useState, useEffect, useRef } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

import ProjectService from "services/ProjectService.js";
import Toolbar from "components/shared/Toolbar";
import ToolbarButton from "components/shared/Button/ToolbarButton";
import Modal from "components/shared/Modal";
import EditProject from "./EditProject";
import DeleteProject from "./DeleteProject";

import styles from "./Project.module.scss";

const dateFormat = "dddd, MMMM Do, YYYY";

const ProjectStatus = ({ isArchived }) => {
  return (
    <p className={styles.status}>
      Status:{" "}
      <span className={classnames(isArchived ? styles.inactive : "")}>
        {isArchived ? `inactive` : `active`}
      </span>
    </p>
  );
};

export default function Project({ match, updateProjects, deleteProject }) {
  const initialState = {
    name: "",
    archive: false,
  };
  const [project, setProject] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const modal = useRef(null);
  const deleteModal = useRef(null);

  useEffect(() => {
    if (match.params.projectId) {
      setLoading(true);
      ProjectService.getProjectById(match.params.projectId)
        .then((data) => {
          setProject(data);
        })
        .catch((err) => {
          console.error(err);
        });
      setLoading(false);
    }
  }, [match]);

  return (
    <div className={styles.project}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2 className={classnames(project.archive ? styles.inactive : "")}>
            {project.name}
          </h2>
          <Toolbar>
            <ToolbarButton title="Edit" onClick={() => modal.current.open()}>
              <FontAwesomeIcon icon={["fas", "edit"]} />
            </ToolbarButton>
            <ToolbarButton
              title="Delete"
              onClick={() => deleteModal.current.open()}
            >
              <FontAwesomeIcon icon={["fas", "times"]} />
            </ToolbarButton>
          </Toolbar>
          <ProjectStatus isArchived={project.archive} />
          <p>
            created:
            <span>
              <Moment format={dateFormat}>{project.createdAt}</Moment>
            </span>
          </p>
          <p>
            last update:
            <span>
              <Moment format={dateFormat}>{project.updatedAt}</Moment>
            </span>
          </p>
          <Modal ref={modal} fade={true}>
            <EditProject
              project={project}
              setProject={setProject}
              closeModal={() => modal.current.close()}
              updateProjects={updateProjects}
            />
          </Modal>
          <Modal ref={deleteModal} fade={true}>
            <DeleteProject
              project={project}
              setProject={setProject}
              closeDeleteModal={() => deleteModal.current.close()}
              deleteProject={deleteProject}
            />
          </Modal>
        </>
      )}
    </div>
  );
}
