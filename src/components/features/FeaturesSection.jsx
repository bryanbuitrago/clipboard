import Image from 'next/image';
import FeaturesItem from './FeaturesItem';
import { FEATURES_DATA } from './featuresData';

const FeaturesSection = () => {
  return (
    <section id='features'>
      <div className='section-container my-20'>
        <div className='relative flex flex-col md:flex-row md:space-x-32'>
          <div className='md:w-1/2'>
            <Image
              src='/images/image-computer.png'
              width={500}
              height={500}
              alt='Computer'
              className='md:absolute top-24 right-[50%]'
            />
          </div>
          <div className='flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16'>
            {FEATURES_DATA.map(({ heading, paragraph }, index) => (
              <FeaturesItem
                key={index}
                heading={heading}
                paragraph={paragraph}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
