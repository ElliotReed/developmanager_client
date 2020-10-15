import axiosInstance from './axios'

export default {

  getProjects: async function() {
    try {
      const response = await axiosInstance.get('/projects');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getProjectById: async function(id) {
    try {
      const response = await axiosInstance.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
}