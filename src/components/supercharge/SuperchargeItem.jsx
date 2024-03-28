import Image from 'next/image';

const SuperchargeItem = ({ imgSrc, heading, paragraph }) => {
  return (
    <div className='flex flex-col items-center space-y-5'>
      <Image
        src={imgSrc}
        alt='Supercharge'
        width={50}
        height={50}
        className='mb-6'
      />
      <h5>{heading}</h5>
      <p className='max-w-md text-grayishBlue'>{paragraph}</p>
    </div>
  );
};

export default SuperchargeItem;
