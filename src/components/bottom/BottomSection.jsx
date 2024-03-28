import Link from 'next/link';

const BottomSection = () => {
  return (
    <section id='bottom'>
      <div className='section-container my-20'>
        <h3>clipboard for iOS and MacOS</h3>
        <p className='section-content mb-10 text-xl'>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you&apos;re ready to start adding to your clipboard.
        </p>
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

export default BottomSection;
