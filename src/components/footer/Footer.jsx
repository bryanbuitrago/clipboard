import Image from 'next/image';
import Link from 'next/link';
import FooterMenuItem from './FooterMenuItem';
import { MENU_ITEMS_DATA, SOCIAL_LINKS_DATA } from './footerData';

const Footer = () => {
  return (
    <footer className='bg-gray-50 py-6'>
      <div className='section-container'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <Image
            src='/images/logo.svg'
            alt='Clipboard'
            width={100}
            height={100}
            className='scale-50'
          />
          <div className='flex flex-col items-center justify-between flex-1 mb-100 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue'>
            <div className='flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0'>
              {MENU_ITEMS_DATA.map((column, index) => (
                <div
                  key={index}
                  className='flex flex-col space-y-4 text-center md:text-left'
                >
                  {column.map((item, itemIndex) => (
                    <FooterMenuItem
                      key={itemIndex}
                      title={item.title}
                      href={item.href}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className='flex justify-between w-32 py-1'>
              {SOCIAL_LINKS_DATA.map((link, index) => (
                <Link key={index} href={link.href}>
                  <Image
                    src={link.src}
                    alt={link.alt}
                    width={24}
                    height={24}
                    className='duration-200 ficon'
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
