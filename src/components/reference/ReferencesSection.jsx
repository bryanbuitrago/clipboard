import Image from 'next/image';
const ReferencesSection = () => {
  return (
    // === References Section ===
    <section id='references'>
      <div className='flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0'>
        <Image
          src='/images/logo-google.png'
          alt='Google'
          width={150}
          height={150}
        />
        <Image src='/images/logo-ibm.png' alt='IBM' width={150} height={150} />
        <Image
          src='/images/logo-microsoft.png'
          alt='Microsoft'
          width={150}
          height={150}
        />
        <Image src='/images/logo-hp.png' alt='HP' width={150} height={150} />
        <Image
          src='/images/logo-vector-graphics.png'
          alt='Vector Graphics'
          width={150}
          height={150}
        />
      </div>
    </section>
  );
};

export default ReferencesSection;
