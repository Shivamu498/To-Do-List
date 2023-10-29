function addTask() {
    var task = document.getElementById("newTask").value;
    if (task !== "") {
      var ul = document.getElementById("taskList");
      var li = document.createElement("li");
      li.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
      `;
      ul.appendChild(li);
      document.getElementById("newTask").value = "";
    }
  }
  
  function removeTask(element) {
    element.parentElement.remove();
  }

 