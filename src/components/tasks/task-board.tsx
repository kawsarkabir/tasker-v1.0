import { useState } from "react";
import { defaultTasks } from "../../utils/tasks";
import AddTaskModal from "./add-task-modal";
import SearchTask from "./search-task";
import TaskAction from "./task-action";
import TaskList from "./task-list";

export default function TaskBoard() {
  const [tasks, setTasks] = useState(defaultTasks);
  const [addShowModal, setAddShowModal] = useState(false);
  const [taskEdit, setTaskEdit] = useState(null);

  const handleAddTask = (newTask, isAddTask) => {
    if (isAddTask) {
      setTasks([...tasks, newTask]);
    } else {
      const updatedTasks = tasks.map((task) =>
        task.id === newTask.id ? newTask : task
      );
      setTasks(updatedTasks);
    }
    setAddShowModal(false);
  };

  const handleEditTask = (task) => {
    setTaskEdit(task);
    setAddShowModal(true);
  };

  const handleDeleteTask = (id) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  };

  const handleDeleteAllTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFavariteTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].isFavorite = !updatedTasks[taskIndex].isFavorite;
    setTasks(updatedTasks);
  };

  const handleSearch = (search) => {
    console.log(search);
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
    setTasks(filteredTasks);
  };

  const closeModal = () => {
    setAddShowModal(false);
    setTaskEdit(null);
  };

  return (
    <section className="mb-20" id="tasks">
      {addShowModal && (
        <AddTaskModal
          onSave={handleAddTask}
          taskEdit={taskEdit}
          closeModal={closeModal}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            handleAddTask={() => setAddShowModal(true)}
            handleDeleteAllTask={handleDeleteAllTask}
          />
          <TaskList
            tasks={tasks}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
            handleFavariteTask={handleFavariteTask}
          />
        </div>
      </div>
    </section>
  );
}
