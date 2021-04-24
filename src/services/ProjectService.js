import axiosInstance from "./authService/axios";

const ProjectService = {
  getProjects: async function () {
    try {
      const response = await axiosInstance.get("/projects");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getProjectById: async function (id) {
    try {
      const response = await axiosInstance.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  postNewProject: async function (newProject) {
    try {
      const response = await axiosInstance.post("/projects", newProject);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateProject: async function (project) {
    try {
      const response = await axiosInstance.patch(
        `/projects/${project.id}`,
        project
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteProject: async function (project) {
    try {
      const response = await axiosInstance.delete(`/projects/${project.id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ProjectService;
