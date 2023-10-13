'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPaperPlane } from 'react-icons/fa';
import Button from '../Button';
import { AddTaskTodo } from '../../services/todo';
import { toast } from '../Alert';

const TodoForm = (props) => {
  const { tasks, setTasks } = props;
  const [newTaskText, setNewTaskText] = useState('');

  const handleInputChange = (event) => {
    setNewTaskText(event.target.value);
  };

  const addTask = async (newTask) => {
    try {
      const userData = JSON.parse(localStorage.getItem('UserState'));
      const { id, token } = userData;

      const { status, data } = await AddTaskTodo(id, token, newTask);
      if (status === 200) {
        const updatedTasks = [...tasks, data];
        toast.success('The task has been added successfully');
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      }
    } catch (error) {
      toast.error('There was an error in the request');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTaskText.trim() !== '') {
      const postData = {
        description: newTaskText,
        completed: false,
        meta: {},
      };
      addTask(postData);
      setNewTaskText('');
    }
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        className="Input-submit-todo"
        type="text"
        placeholder="Enter todo here"
        value={newTaskText}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        onSubmit={addTask}
        classColor="buttons-btn-submit"
        classSize="buttons-btn"
      >
        <FaPaperPlane />
        Submit
      </Button>
    </form>
  );
};

TodoForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default TodoForm;
