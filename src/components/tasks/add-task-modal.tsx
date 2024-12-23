import { useState } from "react";

export default function AddTaskModal({ onSave }) {
  const [task, setTask] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTask({ ...task, [name]: value });
  };
  return (
    <>
      <div className="bg-[#191D26] opacity-80  h-full w-full z-10 absolute top-0 left-0"></div>
      <form class="mx-auto w-full max-w-[640px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-8 max-md:px-4 z-10 absolute top-3/4 left-[28%]">
        <h2 class="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Add New Task
        </h2>

        <div class="space-y-5 text-white">
          <div class="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              class="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div class="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              class="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div class="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div class="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                class="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleChange}
                required
              />
            </div>

            <div class="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                class="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
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

        <div class="mt-16 flex justify-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              onSave(task);
            }}
            type="submit"
            class="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Create new Task
          </button>
        </div>
      </form>
    </>
  );
}
