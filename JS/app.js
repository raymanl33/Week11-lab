const TodoList = [{todo: "clone repo for starter code"}, {status:"complete"}]
const completedTodos = []


for (word in TodoList) {
    if (TodoList[word] === TodoList[1]) {
        completedTodos.push(TodoList[0], TodoList[1])
    }
}


for (word in completedTodos) {
    if (completedTodos[word] === completedTodos[1]) {
        const [{todo}] = completedTodos
        console.log(todo)
    }
}


