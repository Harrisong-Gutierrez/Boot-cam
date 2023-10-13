'use client';

import { ThemeContextProvider } from '../context/ThemeContext';
import HomeTodo from '../components/Home/index';

const Page = () => (
  <ThemeContextProvider>
    <HomeTodo />
  </ThemeContextProvider>
);

export default Page;
