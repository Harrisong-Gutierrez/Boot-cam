import axios from 'axios';
import { getApiUrl, getApiKey } from '../../../utils';

const handleSignUp = async (email, firstName, password) => {
  const newUser = {
    email,
    name: firstName,
    password,
  };

  const { status, data } = await axios.post(
    `${getApiUrl()}/register?apikey=${getApiKey()}`,
    newUser,
  );

  return { status, data };
};

export default handleSignUp;
