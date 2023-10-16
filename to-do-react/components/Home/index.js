'use client';

import { useState, useEffect, useContext } from 'react';

import Navbar from '../Navbar';
import BoxHeader from '../BoxHeader';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import { ThemeContext } from '../../context/ThemeContext';
import { GetAllTodo, DeleteTaskTodo, EditTaskTodo } from '../../services/todo';
import { toast } from '../Alert';

const HomeTodo = () => {
  const [tasks, setTasks] = useState([]);
  const { toggleDarkMode } = useContext(ThemeContext);
  const { isDarkMode } = useContext(ThemeContext);
  const darkModeClassBox = isDarkMode ? 'BoxTodoDark' : 'BoxTodoLight';
  const darkModeClassMain = isDarkMode ? 'BoxTodoMainDark' : 'BoxTodoMainLight';

  useEffect(async () => {
    const userData = JSON.parse(localStorage.getItem('UserState'));
    const { id, token } = userData;
    const { data } = await GetAllTodo(id, token);
    console.log('This is my data', data);
    setTasks(data);
  }, []);

  const editTask = async (taskId, editedText) => {
    try {
      const userData = JSON.parse(localStorage.getItem('UserState'));
      const { id, token } = userData;

      const updatedTaskData = {
        description: editedText,
        completed: false,
      };

      const { status } = await EditTaskTodo(id, taskId, token, updatedTaskData);

      if (status === 200) {
        const updatedTasks = tasks.map((task) =>
          task.id === taskId ? { ...task, description: editedText } : task,
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        toast.success('The task has been edited successfully');
      }
    } catch (error) {
      toast.error('There was an error in the connection.');
    }
  };

  const editCheck = (taskId, editedCheck) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: editedCheck } : task,
    );
    console.log(updatedTasks);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = async (taskId) => {
    try {
      const userData = JSON.parse(localStorage.getItem('UserState'));
      const { id, token } = userData;
      const { status, data } = await DeleteTaskTodo(id, taskId, token);

      if (status === 200) {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        toast.success('The task has been deleted successfully');
      }
    } catch (error) {
      toast.error('There was an error in the connection.');
    }
  };

  return (
    <main className={`Main ${darkModeClassBox}`}>
      <Navbar textName="user:" textLogOut="Logout" />
      <div className={`BoxTodo ${darkModeClassBox}`}>
        <div className={`BoxTodo-main ${darkModeClassMain}`}>
          <BoxHeader
            headerText="Todos"
            taskCount={tasks.length}
            onDarkModeChange={toggleDarkMode}
          />
          <TodoForm tasks={tasks} setTasks={setTasks} />
          <TodoList
            tasks={tasks}
            onEditTask={editTask}
            onCheckEdit={editCheck}
            onDeleteTask={deleteTask}
          />
        </div>
      </div>
    </main>
  );
};

export default HomeTodo;
