import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeContextProvider } from '../context/ThemeContext';
import { Alert } from '../components/Alert';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'To do List SMBS',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }) => (
  <ThemeContextProvider>
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Alert />
      </body>
    </html>
  </ThemeContextProvider>
);

export default RootLayout;
