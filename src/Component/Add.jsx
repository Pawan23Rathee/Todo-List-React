import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaEdit, FaTrash } from "react-icons/fa";

const Add = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const updateLocalStorage = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleAdd = () => {
    if (todo.trim() === "") return;
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    updateLocalStorage(newTodos);
    setTodo("");
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    updateLocalStorage(newTodos);
  };

  const handleEdit = (id) => {
    const itemToEdit = todos.find((item) => item.id === id);
    setTodo(itemToEdit.todo);
    handleDelete(id);
  };

  const handleCheckbox = (id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newTodos);
    updateLocalStorage(newTodos);
  };

  return (
    <div className="container mx-auto p-4 rounded-xl bg-green-100 mt-5 min-h-[70vh] flex justify-center">
      <div className="w-full max-w-xl bg-green-100 p-6 rounded-lg  mx-auto">
        <h2 className="text-xl font-bold text-center mb-4">iTask - Manage your todos at one place</h2>
        <div className="flex items-center space-x-2">
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            placeholder="Enter your Task"
            className="flex-1 border-2 border-green-400 rounded-lg p-2"
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Save
          </button>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showFinished}
            onChange={() => setShowFinished(!showFinished)}
          />
          <label className="text-sm">Show Finished</label>
        </div>
        <h2 className="text-lg font-bold mt-4">Your Todos</h2>
        <div className="mt-2">
          {todos.length === 0 && <div className="text-center">No Task Added</div>}
          {todos.map((item) =>
            showFinished || !item.isCompleted ? (
              <div
                key={item.id}
                className="flex justify-between items-center p-2 border-2 border-green-400 rounded-xl my-2"
              >
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => handleCheckbox(item.id)}
                />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="text-green-600 hover:text-green-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
