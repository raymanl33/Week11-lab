const TodoList = [
    {todo:"clone repo for starter code",status:"complete"},
    {todo:"clean up repo", status:"complete"},   
    {todo: "link css and JS", status:"started"},
    {todo: "push complete", status:"started"}
]

const completedTodos = []


for (const todoObject of TodoList) {
    if (todoObject.status === 'complete') {
        completedTodos.push(todoObject)
    }
}


for (const word of completedTodos) {
    const {todo} = word
    console.log(todo)
}

