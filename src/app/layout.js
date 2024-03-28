import { Bai_Jamjuree } from 'next/font/google';
import './globals.css';

const baiJamjuree = Bai_Jamjuree({
  sans: ['Bai Jamjuree', 'sans-serif'],
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={baiJamjuree.className}>{children}</body>
    </html>
  );
}
