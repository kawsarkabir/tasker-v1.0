import { ChangeEvent, useState } from "react";

type TTasks = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  priority: string;
  isFavorite: boolean;
};

export default function AddTaskModal({
  onSave,
  taskEdit,
  closeModal,
}: {
  onSave: (task: TTasks, isAddTask: boolean) => void;
  taskEdit: TTasks | null;
  closeModal: () => void;
}) {
  const [task, setTask] = useState<TTasks>(
    taskEdit || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );
  const [isAddTask] = useState(taskEdit === null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    let value: string | string[] = e.target.value;

    if (name === "tags") {
      value = value.split(",");  
    }

    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  return (
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-[#191D26] bg-opacity-80 z-10"
      ></div>
      <form className="mx-auto w-full max-w-[640px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-8 max-md:px-4 z-10 absolute top-[78%] left-[28%]">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAddTask ? "Add New Task" : "Edit Task"}
        </h2>

        <div className="space-y-5 text-white">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={task.tags.join(",")}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={closeModal}
            type="button"
            className="rounded bg-red-500 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Close
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              onSave(task, isAddTask);
            }}
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            {isAddTask ? "Add Task" : "Update Task"}
          </button>
        </div>
      </form>
    </>
  );
}
