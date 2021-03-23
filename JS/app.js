const TodoList = { todo: "clone repo for starter code", status:"complete" }
const completedTodos = []

for (word in TodoList) {
    if (TodoList[word] === "complete") {
        completedTodos.push(TodoList.todo)
    }
}


