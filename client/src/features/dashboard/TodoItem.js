export default function TodoItem({ todo }) {
  //console.log(props)
  function handleStatus(status) {
    console.log("hello!");
    // PATCH
    // '/todos/:todoId'
    request.patch("/todos/" + todo.id, { status: status });
  }
  function handleDelete() {
    request.delete("/todos/" + todo.id);
  }
  return (
    <div>
      {todo.description}
      {todo.status}
      <button onClick={() => handleStatus("active")}>active</button>
      <button onClick={() => handleStatus("completed")}>completed</button>
      <button onClick={handleDelete}>x</button>
    </div>
  );
}
