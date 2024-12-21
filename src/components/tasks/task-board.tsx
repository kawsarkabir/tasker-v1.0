import { useState } from "react";
import SearchTask from "./search-task";
import TaskAction from "./task-action";
import TaskList from "./task-list";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Complete Assingment 02",
    description: "Complete the assignment 02 before the deadline",
    tag: ["lws", "react", "assignment"],
    priority: "high",
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
