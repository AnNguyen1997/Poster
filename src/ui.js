class UI {
    constructor() {
        this.post = document.querySelector("#posts");
        this.titleInput = document.querySelector("#title");
        this.bodyInput = document.querySelector("#body");
        this.idInput = document.querySelector("#id");
        this.postSubmit = document.querySelector(".post-submit");
        this.formState = "add";
    }

    showPosts(posts) {
        let output = "";

        posts.forEach(post => {
            output += `
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">${post.title}</h4>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="edit card-link" data-id="${post.id}">
                        <i class="fa fa-pencil"></i>
                    </a>
                    <a href="#" class="delete card-link" data-id="${post.id}">
                    <i class="fa fa-remove"></i>
                </a>
                </div>
            </div>
            `
        });
        this.post.innerHTML = output;
    }

    fillForm(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;

        this.changeFormState("edit");
    }

    showAlert(message, className) {
        //clear exist alert
        this.clearAlert();
        //create div
        const div = document.createElement("div");
        //Add classname
        div.className = className;
        //Append text to div
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector(".post-container");
        //Get posts
        const posts = document.querySelector("#posts");
        container.insertBefore(div, posts);

        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
        this.titleInput.value = "";
        this.bodyInput.value = "";
    }

    clearIdInput() {
        this.idInput.value = "";
    }

    changeFormState(type) {
        if (type === "edit") {
            this.postSubmit.textContent = "Update post";
            this.postSubmit.className = "post-submit btn btn-secondary btn-block";

            //Create cancel button
            const button = document.createElement("button");
            button.textContent = "Cancel";
            button.className = "post-cancel btn btn-info btn-block"
            const cardForm = document.querySelector(".card-form");
            const formEnd = document.querySelector(".form-end");
            cardForm.insertBefore(button, formEnd);
        } else {
            this.postSubmit.textContent = "Post it";
            this.postSubmit.className = "post-submit btn btn-primary btn-block";

            //Remove cancel button
            if (document.querySelector(".post-cancel")) {
                document.querySelector(".post-cancel").remove();
                
            }

            this.clearIdInput();

            this.clearFields();
        }
    }

    
}

export const ui = new UI();