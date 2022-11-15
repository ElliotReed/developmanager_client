import * as React from "react";
import { useAxios } from "libs/authentication/axios/useAxios";
import { useNavigate } from "react-router-dom";

export default function useProjects() {
  const axiosInstance = useAxios();
  let navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [projects, setProjects] = React.useState([]);
  const [requestError, setRequestError] = React.useState("");

  const addToProjects = (newProject) => {
    const newProjectList = [...projects, newProject];
    newProjectList.sort((a, b) => (a.name > b.name ? 1 : -1));
    setProjects(newProjectList);
    navigate.push(`/projects/${newProject.id}`);
  };

  const deleteProject = (projectId) => {
    navigate.push("/projects");
    const filteredList = projects.filter((project) => project.id !== projectId);
    setProjects(filteredList);
  };

  const getProjects = async () => {
    setLoading(true);
    try {
      const projectList = await axiosInstance
        .get(`/projects`)
        .then(({ data }) => data);
      setProjects(projectList);
    } catch (err) {
      setRequestError(err.message);
    }
    setLoading(false);
  };

  const updateProjects = (updatedProject) => {
    const filteredList = projects.filter(
      (project) => project.id !== updatedProject.id
    );
    setProjects([...filteredList, updatedProject]);
  };

  React.useEffect(() => {
    getProjects();
    return () => setProjects([]);
    // eslint-disable-next-line
  }, []);

  return {
    addToProjects,
    deleteProject,
    loading,
    projects,
    requestError,
    updateProjects,
  };
}
