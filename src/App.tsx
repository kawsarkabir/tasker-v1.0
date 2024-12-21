import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import TaskBoard from "./components/tasks/task-board";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}
