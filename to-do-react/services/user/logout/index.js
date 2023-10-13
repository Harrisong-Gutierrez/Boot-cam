import axios from 'axios';
import { getApiUrl, getApiKey } from '../../../utils';

const handleLogout = async (token) => {
  try {
    const response = await axios.post(
      `${getApiUrl()}/logout?apikey=${getApiKey()}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return { status: response.status, data: response.data };
  } catch (error) {
    return { status: error.response.status, data: error.response.data };
  }
};

export default handleLogout;
