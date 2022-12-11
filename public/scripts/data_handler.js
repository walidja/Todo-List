const API_URL = "http://localhost:4000/projects/";
const handleRout = async (url, method = "GET", data = null) => {
  console.log(`URL: ${url} || Method: ${method} || data: ${data}`);
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: method,
    body: data ? JSON.stringify(data) : null,
  });
  const values = await response.json();
  console.log(`request response: ${values}`);
  return values;
};

export const getAllProjects = () => {
  return handleRout(API_URL);
};

export const createProject = (project) => {
  return handleRout(API_URL, "POST", project);
};

export const updateProject = (projectId, updatedProject) => {
  return handleRout(`${API_URL}${projectId}`, "PUT", updatedProject);
};

export const deleteProject = (projectId) => {
  return handleRout(`${API_URL}${projectId}`, "DELETE");
};

export const getTasks = (projectId) => {
  return handleRout(`${API_URL}${projectId}`);
};

export const createTask = (projectId, task) => {
  return handleRout(`${API_URL}${projectId}`, "POST", task);
};

export const updateTask = (projectId, taskId, updatedTask) => {
  return handleRout(`${API_URL}${projectId}/${taskId}`, "PUT", updatedTask);
};

export const deleteTask = (projectId, taskId) => {
  return handleRout(`${API_URL}${projectId}/${taskId}`, "DELETE");
};
