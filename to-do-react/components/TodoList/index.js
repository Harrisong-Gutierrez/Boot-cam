'use client';

import React from 'react';
import Task from '../Task';

const renderTaskList = (UserState, onEditTask, onCheckEdit, onDeleteTask) =>
  UserState.map((task) => (
    <Task
      key={task.id}
      task={task}
      onEdit={onEditTask}
      onCheckEdit={onCheckEdit}
      onDelete={onDeleteTask}
    />
  ));

const TodoList = (props) => {
  const { tasks, onEditTask, onCheckEdit, onDeleteTask } = props;

  return (
    <section className="ListGroup">
      <ul className="list-group">
        {renderTaskList(tasks, onEditTask, onCheckEdit, onDeleteTask)}
      </ul>
    </section>
  );
};

export default TodoList;
