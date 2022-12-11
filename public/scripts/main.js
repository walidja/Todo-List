import {
  createTask,
  createProject,
  getAllProjects,
  updateProject,
  updateTask,
  deleteTask,
  getTasks,
  deleteProject,
} from "./data_handler.js";
import { addProjects, addTasks } from "./fillData.js";

const modal = document.querySelector(".modal");
const inputDesc = modal.querySelector("#desc");
const inputPrio = modal.querySelector("#prio");
const inputTarget = modal.querySelector("#target");
const listElement = document.querySelector(".tasks .list_of_content");
const update_task_btn = document.querySelector("#update_task_btn");
// Show all tasks
const refreshTasks = (projID) => {
  addTasks(projID, getTasks(projID)).then((tasks) => {
    const update_btns = listElement.querySelectorAll(".update_btn");
    for (let update_btn of update_btns) {
      update_btn.addEventListener("click", () => {
        let task = update_btn.dataset;
        console.log(`Task: ${task}`);
        inputDesc.value = task.description;
        inputPrio.value = task.priority;
        inputTarget.value = task.target_day;
        submit_btn.style.display = "none";
        update_task_btn.style.display = "block";
        modal.style.display = "block";
        modal.setAttribute("data-taskId", task.id);
      });
    }
    const delete_btns = listElement.querySelectorAll(".delete_btn");
    for (let delete_btn of delete_btns) {
      delete_btn.addEventListener("click", () => {
        let projectID = listElement.dataset.projectid;
        console.log(
          `Delete task '${delete_btn.dataset.id}' form project ${projectID}`
        );
        deleteTask(projectID, delete_btn.dataset.id).then(() => {
          refreshTasks(projectID);
        });
      });
    }
  });
};

// Present all projects
const refreshProjects = () => {
  addProjects(getAllProjects()).then((lists) => {
    // Show all tasks for the specified projects
    const projItems = document.querySelectorAll(".lists li");
    for (let projItem of projItems) {
      let projectID = projItem.dataset.id;
      projItem.addEventListener("click", () => {
        console.log(`Show task for projID: ${projectID}`);
        const projName = document.querySelector("#project_name");
        projName.innerHTML = projItem.innerText.toUpperCase();
        refreshTasks(projectID);
      });
      // Update project
      projItem.addEventListener("dblclick", () => {
        console.log("Update project");
        const updateField = document.querySelector("#update_project");
        updateField.style.display = "block";
        updateField.addEventListener("keydown", (event) => {
          if (event.keyCode !== 13) return;
          let updated_title = event.target.value;
          updateProject(projectID, { title: updated_title }).then((value) => {
            refreshProjects();
          });
        });
      });
      // Delete project
      const deletBtn = projItem.querySelector(".btn-outline-danger");
      deletBtn.addEventListener("click", () => {
        console.log(`Delete project: ${projectID}`);
        deleteProject(projectID).then(() => {
          refreshProjects();
        });
      });
    }
  });
};

refreshProjects();

// Add new projects
document.querySelector(".title_form button").addEventListener("click", () => {
  console.log("new project created");
  const input = document.querySelector(".title_form input");
  createProject({ title: input.value }).then((value) => {
    console.log("Refresh projects");
    refreshProjects();
  });
});

// Create new task
document.querySelector(".btn_task").addEventListener("click", () => {
  modal.style.display = "block";
});

const submit_btn = document.querySelector("#submit_task_btn");
submit_btn.addEventListener("click", () => {
  let projectID = listElement.dataset.projectid;
  console.log(`project ID: ${projectID}`);
  const task = {
    description: inputDesc.value,
    priority: inputPrio.value,
    target_day: inputTarget.value,
    ProjectId: projectID,
  };
  createTask(projectID, task).then((value) => {
    refreshTasks(projectID);
  });
  modal.style.display = "none";
  inputDesc.value = "";
  inputPrio.value = "";
  inputTarget.value = "";
});

// Update selected task
update_task_btn.addEventListener("click", () => {
  const updatedTask = {
    description: inputDesc.value,
    priority: inputPrio.value,
    target_day: inputTarget.value,
  };
  let projId = listElement.dataset.projectid;
  let taskId = modal.dataset.taskid;
  updateTask(projId, taskId, updatedTask).then(() => {
    refreshTasks(projId);
  });
  inputDesc.value = "";
  inputPrio.value = "";
  inputTarget.value = "";
  modal.style.display = "none";
  submit_btn.style.display = "block";
  update_task_btn.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
