import { useState } from "react";
import AddTaskModal from "./add-task-modal";
import SearchTask from "./search-task";
import TaskAction from "./task-action";
import TaskList from "./task-list";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Complete Assingment 02",
    description: "Complete the assignment 02 before the deadline",
    tags: ["lws", "react", "assignment"],
    priority: "high",
    isFavorite: false,
  };e
  const [tasks, setTasks] = useState([defaultTask]);
  const [addShowModal, setAddShowModal] = useState(false);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
    setAddShowModal(false);
  }

  return (
    <section className="mb-20" id="tasks">
      {addShowModal && <AddTaskModal onSave={handleAddTask} />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction handleAddTask={() => setAddShowModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
