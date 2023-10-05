import React, { useState } from 'react';
import UserInput from '../../components/UserInput';

import Layout from '../../components/Layout';
import LocationsList from '@/components/LocationList';

const Location = () => {
  const [text, setText] = useState('');

  const handleInputChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <Layout>
      <div className="Location-gap" />
      <UserInput
        placeholder="Search Location"
        value={text}
        onChange={handleInputChange}
      />
      <LocationsList text={text} searchName={text} />
    </Layout>
  );
};

export default Location;
