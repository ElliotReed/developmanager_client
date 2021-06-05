import ProjectService from "services/ProjectService";

import Button from "components/common/Button";
import Form from "components/common/Form";

export default function DeleteProject({
  closeDeleteModal,
  deleteProject,
  project,
  setProject,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    ProjectService.deleteProject(project)
      .then((data) => {
        deleteProject(data);
        setProject({});
      })
      .catch((err) => {
        if (err.status === 403) {
          console.log(err);
        }
      });
    closeDeleteModal();
  };

  return (
    <Form handleSubmit={handleSubmit} name="deleteProject">
      <Form.Header title="Delete project" />
      <Form.Body>
        <p>
          This cannot be undone, are you sure you wish to delete this project?
        </p>
      </Form.Body>
      <Form.Footer>
        <Button onClick={closeDeleteModal}>Cancel</Button>
        <Button type="submit">Delete</Button>
      </Form.Footer>
    </Form>
  );
}
