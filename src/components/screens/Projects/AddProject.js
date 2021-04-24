import { useState } from "react";

import Form from "components/shared/Form";
import Button from "components/shared/Button";

import ProjectService from "services/ProjectService";
import Fields from "./ProjectFormFields";

const AddProject = ({ closeModal, addToProjects }) => {
  const [dirty, setDirty] = useState(false);
  const [project, setProject] = useState({ name: "", archive: false });

  function handleSubmit(e) {
    e.preventDefault();
    ProjectService.postNewProject(project)
      .then((data) => {
        addToProjects(data);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setProject({ ...project, [name]: value });

    if (!dirty) {
      setDirty(true);
    }
  }

  return (
    <Form handleSubmit={handleSubmit} name="addProject">
      <Form.Header title="Add project" />
      <Form.Body>{Fields(project, handleChange)}</Form.Body>
      <Form.Footer>
        <Button onClick={closeModal}>Cancel</Button>
        <Button type="submit" disabled={!dirty}>
          Save
        </Button>
      </Form.Footer>
    </Form>
  );
};

export default AddProject;
