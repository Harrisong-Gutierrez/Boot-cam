import { useState } from 'react';
import Image from 'next/image';
import { TabContent, NavLink } from 'reactstrap';
import CharacterList from '../CharacterList';
import EpisodesList from '../EpisodesList';
import LocationsList from '../LocationList';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="Tabs">
      <div className="Tabs-box">
        <NavLink
          className={activeTab === 0 ? 'Button-tabs active' : 'Button-tabs'}
          onClick={() => handleTabClick(0)}
        >
          Characters
        </NavLink>
        <NavLink
          className={activeTab === 1 ? 'Button-tabs active' : 'Button-tabs'}
          onClick={() => handleTabClick(1)}
        >
          Episodes
        </NavLink>
        <NavLink
          className={
            activeTab === 2
              ? 'Button-tabs active Button-tabs-border'
              : 'Button-tabs Button-tabs-border'
          }
          onClick={() => handleTabClick(2)}
        >
          Location
        </NavLink>
      </div>
      <TabContent className="Tabs-content">
        {activeTab === 0 && (
          <div className="Tabs-main">
            <section className="Tabs-container">
              <p className="Tabs-paragraph">
                "Rick and Morty" is an animated series that stands out for its
                diverse and memorable cast of characters. Created by Dan Harmon
                and Justin Roiland, the series offers a rich variety of
                personalities, each adding their own unique spark to the story.
                Here I present a brief but interesting review of some of the
                most prominent characters: Rick Sanchez – Rick is the central
                character and often the most unpredictable. He is a genius
              </p>
              <p className="Tabs-paragraph">
                Rick is the central character and often the most unpredictable.
                He is an alcoholic scientific genius with an apparent disregard
                for social norms and morality. His intellect is second to none,
                but his complex personality makes him a fascinating anti-hero.
                His quest for knowledge and adventure takes him through multiple
                dimensions and often places his grandson Morty in dangerous
                situations.
              </p>
              <div className="Tabs-img-container">
                <Image
                  src="/img-3.jpg"
                  width={900}
                  height={500}
                  alt="Picture of the author"
                  className="tab-img"
                />
              </div>
            </section>
            <CharacterList />
            <div className="list" />
          </div>
        )}
        {activeTab === 1 && (
          <div className="Tabs-main">
            <section className="Tabs-container">
              <p className="Tabs-paragraph">
                "Rick and Morty" is an animated series that shines for its
                ability to surprise, challenge, and make its audience laugh.
                Created by Dan Harmon and Justin Roiland, each episode of the
                series is a cosmic adventure unto itself. The central premise
                follows Rick Sanchez, an alcoholic scientific genius, and his
                grandson Morty Smith, as they explore different dimensions,
                planets, and parallel realities.
              </p>
              <p className="Tabs-paragraph">
                Each episode is an opportunity to explore new dimensions, meet
                wacky characters, and face unlikely challenges. From episodes in
                which Rick and Morty become wish-fulfilling "Mr. Meeseeks" to
                intergalactic adventures where they face off against cosmic and
                existential beings, the series never ceases to amaze. his
                ability to mix scatological humor and pop culture references
                with complex themes such as existence, morality and identity.
              </p>
              <div className="Tabs-img-container">
                <Image
                  src="/img-4.jpg"
                  width={900}
                  height={500}
                  alt="Picture of the author"
                  className="tab-img"
                />
              </div>
            </section>
            <EpisodesList />
            <div className="list" />
          </div>
        )}

        {activeTab === 2 && (
          <div className="Tabs-main">
            <section className="Tabs-container">
              <p className="Tabs-paragraph">
                "Rick and Morty" are an essential component of its appeal. The
                series benefits greatly from his ability to take the characters
                and audience to new and exciting places with each episode. This
                approach allows for a wide range of wacky and comedic
                situations, while bringing to life a multiverse brimming with
                imagination and visual creativity. "Rick and Morty" is an
                experience that takes you to places you never imagined.
              </p>
              <p className="Tabs-paragraph">
                The series also explores a variety of intergalactic locations,
                from planets inhabited by strange and alien beings to space bars
                and futuristic cities. These locations are often the backdrop
                for comical and outlandish situations, and each one is designed
                with an impressive level of visual detail and conceptual
                creativity. In addition to the diversity of locations, "Rick and
                Morty" also plays with the notion of parallel.
              </p>
              <div className="Tabs-img-container">
                <Image
                  src="/img-5.jpg"
                  width={900}
                  height={500}
                  alt="Picture of the author"
                  className="tab-img"
                />
              </div>
            </section>
            <LocationsList />
            <div className="list" />
          </div>
        )}
      </TabContent>
    </div>
  );
};

export default Tab;
