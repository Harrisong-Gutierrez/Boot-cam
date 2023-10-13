/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
import axios from 'axios';
import { getApiUrl, getApiKey } from '../../utils';

export const GetAllTodo = async (id, token) => {
  const { status, data } = await axios.get(
    `${getApiUrl()}/${id}/todos?apikey=${getApiKey()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return { status, data };
};

export const DeleteTaskTodo = async (user_id, id, token) => {
  const { status, data } = await axios.delete(
    `${getApiUrl()}/${user_id}/todos/${id}?apikey=${getApiKey()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return { status, data };
};

export const AddTaskTodo = async (user_id, token, newTask) => {
  const { status, data } = await axios.post(
    `${getApiUrl()}/${user_id}/todos?apikey=${getApiKey()}`,
    newTask,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return { status, data };
};

export const EditTaskTodo = async (user_id, id, token, updatedTask) => {
  const { status, data } = await axios.put(
    `${getApiUrl()}/${user_id}/todos/${id}?apikey=${getApiKey()}`,
    updatedTask,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return { status, data };
};
