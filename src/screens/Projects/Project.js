import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import ProjectService from "services/ProjectService.js";

import DateDisplay from "components/common/datetime/DateDisplay";
import DeleteProject from "./DeleteProject";
import EditProject from "./EditProject";
import Heading from "components/common/Heading";
import Modal from "components/common/Modal";
import Task from "components/Task";
import Toolbar from "components/common/Toolbar";
import ToolbarButton from "components/common/Button/ToolbarButton";

import styles from "./Project.module.scss";

function ProjectHistory({ project }) {
  return (
    <div className={styles.history}>
      <p>
        created:
        <span>
          <DateDisplay date={project?.createdAt} />
        </span>
      </p>
      <p>
        last update:
        <span>
          <DateDisplay date={project?.updatedAt} />
        </span>
      </p>
    </div>
  );
}

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

export default function Project({ updateProjects, deleteProject }) {
  const initialState = {
    name: "",
    archive: false,
    createdAt: false,
    updatedAt: false,
  };

  const [project, setProject] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const modal = useRef(null);
  const deleteModal = useRef(null);
  let params = useParams();

  useEffect(() => {
    if (params.projectId) {
      setLoading(true);
      ProjectService.getProjectById(params.projectId)
        .then((data) => {
          setProject(data);
        })
        .catch((err) => {
          console.error(err);
        });
      setLoading(false);
    }
  }, [params]);

  return (
    <>
      {loading ? (<div>Loading...</div>) : null}

      {project.name.length ? (
        <div className={styles.project}>
          <Heading level={2} className={classnames(project.archive ? styles.inactive : null)}>
            {project.name}
          </Heading>

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

          <ProjectHistory project={project} />

          <Task foreignId={project.id} />

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
        </div>
      ) : null}
    </>
  );
}
