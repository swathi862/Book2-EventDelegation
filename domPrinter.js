// //Builds and returns a task form for the my to do list page
// function buildTaskForm(){
//     return`
//      <form>
//         <input id= "new-task-input" type = "text" placeholder = "New Task"/>
//      </form>
//      <button id = "new-task-submit-btn"> Submit </button>
//      `
// }

// function buildSingleTask(nameOfTask){
//     return`
//     <section>
//         <p>${(new Date().getMonth()+1)+'-'+new Date().getDate()+'-'+new Date().getFullYear()}</p>
//         <p>New Task: ${nameOfTask}</p>
//     </section>`
// }

// Practice 1: SPA Navigation Bar
// function buildContactForm(){
//     return`
//      <form>
//         <input id= "user-name-input" type = "text" placeholder = "Name"/>
//         <input id= "message-input" type = "text" placeholder = "Message"/>
//      </form>
//      <button id = "submit-btn"> Submit </button>
//      `
// }


//Challenge: Dynamic Cards
let counter = 0;
function buildCardComponent(nameOfCard){
    counter++;
    return`
    <article class = "new-card" id = card--${counter}>
        <p>Date: ${(new Date().getMonth()+1)+'-'+new Date().getDate()+'-'+new Date().getFullYear()}</p>
        <p>${nameOfCard}</p>
        <div>
            <button id= "delete--${counter}" type = "reset">Delete</button>
        </div>
    </article>
    `
}
