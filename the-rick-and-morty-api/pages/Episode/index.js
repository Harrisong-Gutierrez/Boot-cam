import React, { useState } from 'react';
import UserInput from '../../components/UserInput';
import EpisodeList from '../../components/EpisodesList';
import Layout from '../../components/Layout';

const Episode = () => {
  const [text, setText] = useState('');

  const handleInputChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <Layout>
      <div className="Episode-gap" />
      <UserInput
        placeholder="Search Episode"
        value={text}
        onChange={handleInputChange}
      />
      <EpisodeList text={text} searchName={text} />
    </Layout>
  );
};

export default Episode;
