import { Bai_Jamjuree } from 'next/font/google';
import './globals.css';

const baiJamjuree = Bai_Jamjuree({
  sans: ['Bai Jamjuree', 'sans-serif'],
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Clipboard Landing Page',
  description: 'Clipboard landing page built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={baiJamjuree.className}>{children}</body>
    </html>
  );
}
