import { useState } from "react";
import { Redirect } from "react-router-dom";

import Button from "components/shared/Button";
import styles from "./AddEdit.module.scss";

import ProjectService from "services/ProjectService";

const AddEdit = ({
  project = { name: "", archive: false },
  type = "add",
  close,
  setProjects,
}) => {
  const [dirty, setDirty] = useState(false);
  const [newProject, setNewProject] = useState({ ...project });
  const [title, setTitle] = useState(initializeTitle());

  function initializeTitle() {
    if (type === "add") {
      return "Add project";
    }
    if (type === "edit") {
      return "Edit project";
    }
  }

  function createProject() {
    ProjectService.postNewProject(newProject)
      .then((data) => {
        // console.log("data: ", data);
        setNewProject(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateProject() {
    ProjectService.updateProject(newProject)
      .then((data) => {
        // console.log("data: ", data);
        setNewProject(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newProject.id) {
      updateProject();
      return;
    }
    createProject();
    console.log("adding: ", newProject);
  }

  function handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setNewProject({ ...newProject, [name]: value });

    if (!dirty) {
      setDirty(true);
    }
  }

  return (
    <form className={styles.AddEdit} onSubmit={handleSubmit}>
      <header>
        <h3>{title}</h3>
      </header>
      <main className={styles.mainContent}>
        <label>
          project name
          <input
            name="name"
            type="text"
            value={newProject.name}
            onChange={handleChange}
          />
        </label>
        <label>
          archive
          <input
            name="archive"
            type="checkbox"
            checked={newProject.archive}
            onChange={handleChange}
          />
        </label>
      </main>
      <footer>
        <Button onClick={close}>Cancel</Button>
        <Button type="submit" disabled={!dirty}>
          Save Changes
        </Button>
      </footer>
    </form>
  );
};

export default AddEdit;
