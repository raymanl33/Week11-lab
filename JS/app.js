const TodoList = [{todo:"clone repo for starter code",status:"complete"},
                {todo:"clean up repo", status:"started"}]
const completedTodos = []


for (word in TodoList) {
    if (TodoList[word] === TodoList[0]) {
        completedTodos.push(TodoList[0])
    }
}

for (word in completedTodos) {
    const [{todo}] = completedTodos
    console.log(todo)
}

