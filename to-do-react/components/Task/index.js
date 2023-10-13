import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Button from '../Button';
import CheckBox from '../CheckBox';
import { ThemeContext } from '../../context/ThemeContext';

const Task = (props) => {
  const { task, onEdit, onDelete } = props;
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.description);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {}, [isDarkMode]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditSave = () => {
    if (editedText.trim() !== '') {
      onEdit(task.id, editedText);
      setEditing(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleEditSave();
    }
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleCheckBoxChange = (event) => {
    console.log('The checkbox was toggled. Checked:', event.target.checked);
  };
  const renderEditButton = () => {
    if (editing) {
      return (
        <Button
          type="button"
          classColor="buttons-btn-buttons-edit"
          classSize="buttons-btn-buttons"
          onClick={handleEditSave}
        >
          Save
        </Button>
      );
    }
    return (
      <Button
        type="button"
        classColor="buttons-btn-buttons-edit"
        classSize="buttons-btn-buttons"
        onClick={handleEditClick}
      >
        <FaEdit />
      </Button>
    );
  };

  const RenderContent = (() => {
    if (editing) {
      return (
        <input
          className="Task-input"
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      );
    }
    return (
      <span className={`Task-value ${task.completed ? 'Task-completed' : ''}`}>
        {task.description}
      </span>
    );
  })();

  return (
    <li className={`Task ${isDarkMode ? 'TaskDark' : 'TaskLight'}`}>
      <div className="Task-check">
        <CheckBox
          isChecked={task.completed}
          checkInput="inputTodo"
          onCheckBoxChange={handleCheckBoxChange}
          classColorInput="inputTodo"
        />
        {RenderContent}
      </div>
      <div className="buttons-btn-btn-box">
        {renderEditButton()}
        <Button
          classColor="buttons-btn-buttons-trash"
          classSize="buttons-btn-buttons"
          onClick={handleDeleteClick}
        >
          <FaTrash />
        </Button>
      </div>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
