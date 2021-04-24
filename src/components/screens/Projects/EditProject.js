import { useState } from "react";

import Form from "components/shared/Form";
import Button from "components/shared/Button";

import ProjectService from "services/ProjectService";
import Fields from "./ProjectFormFields";

export default function EditProject({
  closeModal,
  project,
  setProject,
  updateProjects,
}) {
  const [dirty, setDirty] = useState(false);
  const [editProject, setEditProject] = useState({ ...project });

  const handleSubmit = (e) => {
    console.log("editProject: ", editProject);
    e.preventDefault();
    ProjectService.updateProject(editProject)
      .then((data) => {
        console.log("edit data: ", data);
        updateProjects(data);
        setProject(data);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });

    closeModal();
  };

  function handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setEditProject({ ...editProject, [name]: value });

    if (!dirty) {
      setDirty(true);
    }
  }

  return (
    <Form handleSubmit={handleSubmit} name="editProject">
      <Form.Header title="edit project" />
      <Form.Body>{Fields(editProject, handleChange)}</Form.Body>
      <Form.Footer>
        <Button onClick={closeModal}>Cancel</Button>
        <Button type="submit" disabled={!dirty}>
          Save Changes
        </Button>
      </Form.Footer>
    </Form>
  );
}
