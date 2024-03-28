import Image from 'next/image';
const AccesAnywhereSection = () => {
  return (
    <section id='access'>
      <div className='section-container my-20'>
        <h3>Access your Clipboard anywhere</h3>
        <p className='section-content mb-24 text-xl'>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <Image
          src='/images/image-devices.png'
          alt='Devices'
          width={500}
          height={500}
          className='mx-auto'
        />
      </div>
    </section>
  );
};

export default AccesAnywhereSection;
