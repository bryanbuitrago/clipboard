import Link from 'next/link';
const FooterMenuItem = ({ title, href }) => {
  return (
    <Link href={href} className='hover:text-strongCyan'>
      {title}
    </Link>
  );
};
export default FooterMenuItem;
