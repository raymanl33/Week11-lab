const TodoList = [{todo:"clone repo for starter code",status:"complete"},
                {todo:"clean up repo", status:"started"}]
const completedTodos = []


for (const element of Object.values(TodoList)) {
    if (element.status === 'complete') {
        completedTodos.push(element)
    }
}


for (word in completedTodos) {
    const [{todo}] = completedTodos
    console.log(todo)
}

