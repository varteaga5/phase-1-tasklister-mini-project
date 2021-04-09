document.addEventListener('DOMContentLoaded', () => {
    console.log('timmy!')

    // figure out how to react to the submit happening
        // select the form element
        // attach a submit event listener
        // on submit (in our callback)
    const taskForm = document.querySelector('#create-task-form');
    taskForm.addEventListener('submit', submitEvent);
    // grabs the taskList
    const taskList = document.querySelector('#tasks');
    taskList.addEventListener('click', deleteEvent);

    function submitEvent (e) {
        e.preventDefault();
        // create new li element
        const newElement = document.createElement('li');
        const input = document.querySelector('#new-task-description');
        // doesnt add if text box is empty
        if(input.value !== ""){
            // captures input to the textbox
            const addedText = document.createTextNode(input.value + ' ');
            // append the text node/adds to the list
            newElement.appendChild(addedText);
            // append to the tasklist
            taskList.appendChild(newElement);
            // delete button creation
            const deleteBtn = document.createElement('button');
            // add classes to the delete button
            deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
            // append text node
            deleteBtn.appendChild(document.createTextNode('delete'));
            // append to new element
            newElement.appendChild(deleteBtn);
        }
        // resets the form after submit button is clicked
        taskForm.reset();
    }

    function deleteEvent(e) {
        // selects the unordered tasks list
        const ul = document.querySelector('#tasks');
        // 
        console.log(e.target.parentElement);
        // removes the li in the ul, e.target will give me the delete button, and .parentElement will give the parent which is the li
        ul.removeChild(e.target.parentElement);

    }    
    });
    