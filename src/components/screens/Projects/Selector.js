import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddProject from "./AddProject";
import Modal from "components/shared/Modal";

import LoadingSpinner from "components/shared/LoadingSpinner";
import Toolbar from "components/shared/Toolbar";
import ToolbarButton from "components/shared/Button/ToolbarButton";
import styles from "./Selector.module.scss";

export default function Selector({ projects = [], loading, addToProjects }) {
  const modal = useRef(null);

  return (
    <nav className={styles.selector}>
      <header>
        <h2>Projects</h2>
        <Toolbar>
          <ToolbarButton title="Edit" onClick={() => modal.current.open()}>
            <FontAwesomeIcon icon={["fas", "plus"]} />
          </ToolbarButton>
        </Toolbar>
      </header>
      <ul>
        {loading ? <LoadingSpinner /> : null}
        {projects.length >= 1 &&
          projects.map((project) => {
            return (
              <li
                key={project.id}
                data-created={project.createdAt}
                data-updated={project.updatedAt}
                data-archived={project.archived}
              >
                <Link to={`/projects/${project.id}`}>{project.name}</Link>
              </li>
            );
          })}
      </ul>
      <Modal ref={modal} fade={true}>
        <AddProject
          addToProjects={addToProjects}
          closeModal={() => modal.current.close()}
        />
      </Modal>
    </nav>
  );
}
