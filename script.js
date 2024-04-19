let task = [];

function addTodo() {
    let title = document.querySelector('.title').value;
    let descriptions = document.querySelector('.description').value;

    if (title.trim() === '' || descriptions.trim() === '') {
        alert("Please enter title and description");
        return;
    }

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let btn = document.createElement("button");
    btn.classList.add('todo-button');
    p1.textContent = title;
    p2.textContent = descriptions;
    btn.textContent = "X";

    document.querySelector('.todo-task').appendChild(p1);
    document.querySelector('.todo-task').appendChild(p2);
    document.querySelector('.todo-task').appendChild(btn);
    
    // Push elements to the task array
    task.push({ title: p1, description: p2, button: btn });

    btn.addEventListener("click", function () {
      // Find the index of the task object with matching properties
      let index = task.findIndex(item => item.title === p1 && item.description === p2 && item.button === btn);
      if (index !== -1) {
          task.splice(index, 1); // Remove 1 element from the array at the given index
          p1.remove(); // Remove the title paragraph
          p2.remove(); // Remove the description paragraph
          btn.remove(); // Remove the button
      }
  });
  

    // Clear input fields
    document.querySelector('.title').value = "";
    document.querySelector('.description').value = "";
  }
