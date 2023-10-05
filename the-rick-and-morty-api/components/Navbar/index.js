import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const items = [
  { text: 'Home', href: '/' },
  { text: 'Characters', href: '/Character' },
  { text: 'Episode', href: '/Episode' },
  { text: 'Location', href: '/Location' },
  { text: 'Favorites', href: '/Favorites' },
];

const mappedItems = items.map((item, index) => (
  <li key={index}>
    <Link className="Navbar-text" href={item.href}>
      <p>{item.text}</p>
    </Link>
  </li>
));

const Navbar = () => (
  <nav className="Navbar">
    <div className="Navbar-main">
      <div className="img-nadvar">
        <Link href="/">
          <Image
            src="/img-1.png"
            width={150}
            height={50}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <ul className="Navbar-list">{mappedItems}</ul>
    </div>
    <div className="Navbar-cover">
      <Image
        src="/img-2.png"
        width={370}
        height={380}
        alt="Picture of the author"
        className="cover-img"
      />
    </div>
  </nav>
);

export default Navbar;
