import SuperchargeItem from './SuperchargeItem';
import { SUPERCHARGE_DATA } from './superchargeData';

const SuperchargeSection = () => {
  return (
    <section id='supercharge' className='section-container my-20'>
      <h3>Supercharge your workflow</h3>
      <p className='section-content mb-16 text-xl'>
        We’ve got the tools to boost your productivity.
      </p>
      <div className='flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12'>
        {SUPERCHARGE_DATA.map(({ imgSrc, heading, paragraph }, index) => (
          <SuperchargeItem
            key={index}
            imgSrc={imgSrc}
            heading={heading}
            paragraph={paragraph}
          />
        ))}
      </div>
    </section>
  );
};

export default SuperchargeSection;
