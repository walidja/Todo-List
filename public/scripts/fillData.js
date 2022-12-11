const create_btn = () => {
  const button = document.createElement("button");
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
  </svg>`;
  button.classList.add("btn-outline-danger");
  button.classList.add("btn");
  return button;
};
export const addProjects = (projects) => {
  return projects.then((projects) => {
    const lists = document.querySelector(".lists");
    lists.innerHTML = "";
    for (let project of projects) {
      let { id, title, is_done } = project;
      const item = document.createElement("li");
      const lable = document.createElement("label");
      const updateProject = document.createElement("input");
      updateProject.setAttribute("id", "update_project");
      updateProject.value = title;
      updateProject.style.display = "none";
      item.append(updateProject);
      lable.innerText = title;
      lable.classList.add("proj_title");
      item.append(create_btn());
      item.append(lable);
      item.setAttribute("data-id", id);
      item.setAttribute("data-is_done", is_done);
      lists.append(item);
    }
    return lists;
  });
};

export const addTasks = (projectID, tasks) => {
  return tasks.then((tasks) => {
    const listElement = document.querySelector(".tasks .list_of_content");
    listElement.innerHTML = "";
    listElement.setAttribute("data-projectid", projectID);
    for (let task of tasks) {
      let { id, description, is_completed, priority, target_day } = task;
      const lable = document.createElement("div");
      lable.classList.add("container");

      const span = document.createElement("span");
      span.classList.add("task_desc");
      span.innerText = description;
      lable.append(span);

      const form = document.createElement("form");
      form.classList.add("task_options");
      const delet_btn = document.createElement("input");
      delet_btn.setAttribute("type", "button");
      delet_btn.setAttribute("value", "Delete");
      delet_btn.setAttribute("data-id", id);
      delet_btn.classList.add("delete_btn", "btn");
      form.append(delet_btn);

      const update_btn = document.createElement("input");
      update_btn.setAttribute("type", "button");
      update_btn.setAttribute("value", "Update");
      update_btn.setAttribute("data-id", id);
      update_btn.setAttribute("data-description", description);
      update_btn.setAttribute("data-priority", priority);
      update_btn.setAttribute("data-target_day", target_day);
      update_btn.classList.add("update_btn", "btn");
      form.append(update_btn);

      lable.append(form);

      // lable.append(span);
      listElement.append(lable);
    }
    return tasks;
  });
};
