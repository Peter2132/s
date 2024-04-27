document.addEventListener("DOMContentLoaded", function() {
    var objectsContainer = document.getElementById("objects-container");
    var objectForm = document.getElementById("object-form");
    var nameInput = document.querySelector("#name");
    var descriptionInput = document.querySelector("#description");
    var objects = [];

    function renderObjects() {
        var objectsHTML = ""; 
        objects.forEach(function(object, index) {
            objectsHTML += "<div class='object'>";
            objectsHTML += "<strong>" + object.name + "</strong> - " + object.description;
            objectsHTML += "<button class='edit-btn' data-index='" + index + "'>Edit</button>";
            objectsHTML += "<button class='delete-btn' data-index='" + index + "'>Delete</button>";
            objectsHTML += "</div>";
        });
        objectsContainer.innerHTML = objectsHTML; 
    }

    function addObject(name, description) {
        objects.push({ name: name, description: description });
        renderObjects();
    }

    function deleteObject(index) {
        objects.splice(index, 1);
        renderObjects();
    }

    function editObject(index) {
        var newName = prompt("Enter new name:");
        var newDescription = prompt("Enter new description:");
        if (newName && newDescription) {
            objects[index].name = newName;
            objects[index].description = newDescription;
            renderObjects();
        } else {
            alert("Error");
        }
    }

    objectForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var name = nameInput.value.trim();
        var description = descriptionInput.value.trim();
        if (name && description) {
            addObject(name, description);
            nameInput.value = "";
            descriptionInput.value = "";
        } else {
            alert("Error");
        }
    });

    objectsContainer.addEventListener("click", function(event) {
        var index = event.target.getAttribute("data-index");
        if (event.target.classList.contains("edit-btn")) {
            editObject(index);
        } else if (event.target.classList.contains("delete-btn")) {
            deleteObject(index);
        }
    });
});