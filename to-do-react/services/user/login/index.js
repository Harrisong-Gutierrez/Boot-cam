import axios from 'axios';
import { getApiUrl, getApiKey } from '../../../utils';

const handleLogin = async (email, password) => {
  if (!email || !password) {
    alert('Please fill out all the fields.');
    return;
  }

  const dataUser = {
    email,
    password,
  };

  const { status, data } = await axios.post(
    `${getApiUrl()}/login?apikey=${getApiKey()}`,
    dataUser,
  );

  return { status, data };
};
export default handleLogin;
