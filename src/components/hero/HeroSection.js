import Image from 'next/image';
import Link from 'next/link';
const HeroSection = () => {
  return (
    // === Hero section ===
    <section id='hero'>
      <div className='section-container mb-40 pt-16'>
        <Image
          src='/images/logo.svg'
          width={200}
          height={200}
          alt='Clipboard'
          className='mx-auto my-16'
        />
        <h3>A history of everything you copy</h3>
        <p className='section-content mb-10 text-2xl'>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        {/* === Button container === */}
        <div className='button-container'>
          <Link
            className='p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80'
            href='#'
          >
            Download for iOS
          </Link>
          <Link
            className='p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80'
            href='#'
          >
            Download for Mac
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
