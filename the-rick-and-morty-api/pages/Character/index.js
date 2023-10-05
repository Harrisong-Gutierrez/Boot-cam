import React, { useState } from 'react';
import UserInput from '../../components/UserInput';
import CharacterList from '../../components/CharacterList';
import Layout from '../../components/Layout';

const Character = () => {
  const [text, setText] = useState('');

  const handleInputChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <Layout>
      <div className="Characters-gap" />
      <UserInput
        placeholder="Search Character"
        value={text}
        onChange={handleInputChange}
      />
      <CharacterList text={text} searchName={text} />
    </Layout>
  );
};

export default Character;
