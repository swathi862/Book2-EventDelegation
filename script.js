
// //TODO: refactor to make less repetitive


// //When the user clicks on the submit button in the new task form, print that task to the DOM
// document.querySelector("#page-content").addEventListener("click", function(){
//     if(event.target.id === "new-task-submit-btn"){
//         console.log("You clicked on the submit button")
//         const taskValue = document.querySelector("#new-task-input").value

//         //Print task to DOM
//         document.querySelector("#page-content").innerHTML += buildSingleTask(taskValue)
//     }
// })


// document.querySelector("#my-todo-list").addEventListener("click", function(){

//     //Print heading and build form
//     const pageContentContainer = document.querySelector("#page-content");
//     pageContentContainer.innerHTML = `<h1>My To Do List</h1>`;
//     pageContentContainer.innerHTML += buildTaskForm();
// })

// document.querySelector("#family-todo-list").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `
//     <h1>Family To Do List</h1>`
// })

// document.querySelector("#completed-tasks").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `
//     <h1>Completed Tasks</h1>`
// })

// // Practice 1: SPA Navigation Bar

// //In order to write pass parameters through an .addEventListener, either rewrite function to not need parameters (i.e. use if/else statements) or nest the function inside an empty one (i.e. () => headerPageFunction("About Me"))

// function headerPageFunction(){
//         console.log(event.target.id)
//         let headerName;
//         if(event.target.id == "contact-page"){
//             headerName = "Contact me"
//         } else if (event.target.id ==" "){

//         }        document.querySelector("#page-content").innerHTML = `<h1>${headerName}</h1>`
//     }

// document.querySelector("#contact-page").addEventListener("click", headerPageFunction)

// function headerPageFunction(headerName){
//     document.querySelector("#page-content").innerHTML = `<h1>${headerName}</h1>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Posuere ac ut consequat semper viverra nam. Lacinia quis vel eros donec. Morbi blandit cursus risus at ultrices mi. Arcu dui vivamus arcu felis. Leo a diam sollicitudin tempor. Sodales ut etiam sit amet nisl purus in mollis nunc. Nec dui nunc mattis enim ut tellus elementum sagittis. In cursus turpis massa tincidunt. Vivamus arcu felis bibendum ut tristique et egestas quis. Eget mauris pharetra et ultrices neque ornare. Facilisis mauris sit amet massa. Adipiscing elit duis tristique sollicitudin. Gravida in fermentum et sollicitudin ac orci.<br>

//     Vitae suscipit tellus mauris a diam maecenas sed enim. Ullamcorper malesuada proin libero nunc. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Rutrum quisque non tellus orci ac auctor. Odio tempor orci dapibus ultrices in iaculis nunc sed. Lectus sit amet est placerat in. Lectus nulla at volutpat diam ut venenatis tellus in metus.<br>
    
//     Sit amet consectetur adipiscing elit. Pulvinar sapien et ligula ullamcorper malesuada proin. Enim diam vulputate ut pharetra sit amet aliquam. Nisl pretium fusce id velit ut. Volutpat sed cras ornare arcu. In arcu cursus euismod quis viverra nibh cras. Pellentesque elit ullamcorper dignissim cras tincidunt. Vitae nunc sed velit dignissim. Purus ut faucibus pulvinar elementum integer.</p>`
//     // console.log("success!")
// }

// document.querySelector("#home-page").addEventListener("click", () => headerPageFunction("Home"))

// document.querySelector("#about-page").addEventListener("click", () => headerPageFunction("About Me"))

// document.querySelector("#projects-page").addEventListener("click", () => headerPageFunction("My Projects"))

// document.querySelector("#contact-page").addEventListener("click", () => headerPageFunction("Contact Me"))

// document.querySelector("#contact-page").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML += buildContactForm();
// })

// document.querySelector("#page-content").addEventListener("click", function(){
//     if(event.target.id === "submit-btn"){
//         console.log("You clicked on the submit button")

//         document.querySelector("#page-content").innerHTML += `<h3>Your message has been sent! I look forward to getting your message and responding back to you.</h3>`
//     }
// })

// Challenge: Dynamic Cards
document.querySelector("#create-btn").addEventListener("click", function(){
    // console.log("You clicked on the Create button")
    const textValue = document.querySelector("#text-area").value

    document.querySelector("#page-content").innerHTML += buildCardComponent(textValue)
})

document.querySelector("#page-content").addEventListener("click", function(){
    if (event.target.id.includes("delete")){
        const cardToDelete = document.getElementById(`card--${event.target.id.split("--")[1]}`)
        cardToDelete.remove();
    }
})

