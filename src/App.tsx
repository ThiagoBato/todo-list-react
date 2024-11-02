import { FormEvent, useState } from "react";
import { Header } from "./components/Header/index";
import { TasksForm } from "./components/TasksForm/index";
import { TasksList } from './components/TasksList/index';
import { TasksHeader } from "./components/TasksHeader/index";

function App() {
  const [tasksList, setTasksList] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');
  const [taskChecked, setTaskChecked] = useState<string[]>([]);

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
    if (newTask.trim() === "") return;
    setTasksList([...tasksList, newTask]);
    setNewTask('');
  }

  function handleCreateNewTask(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleInputChecked(task: string) {
    const isTaskChecked = taskChecked.includes(task);

    const updatedCheckedTasks = isTaskChecked
      ? taskChecked.filter(t => t !== task)
      : [...taskChecked, task];

    setTaskChecked(updatedCheckedTasks);
  }

  function handleRemoveTask(task: string) {
    setTasksList(tasksList.filter(t => t !== task));
    setTaskChecked(taskChecked.filter(t => t !== task));
  }

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <TasksForm 
            onHandleSubmitForm={handleSubmitForm} 
            onInputChange={handleCreateNewTask} 
            inputValue={newTask} 
            disabled={!newTask.trim()} 
          />
          <TasksHeader 
            tasksCreated={tasksList.length} 
            tasksCompleted={taskChecked.length} 
          />
          {tasksList.length === 0 ? (
            <TasksList tasksCount={tasksList.length} />
          ) : (
            tasksList.map(task => (
              <div key={task}>
                <TasksList 
                  tasksCount={tasksList.length} 
                  content={task} 
                  onInputChecked={() => handleInputChecked(task)}
                  onBtnRemove={() => handleRemoveTask(task)}
                  taskChecked={taskChecked.includes(task)}
                />
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
}

export default App;
