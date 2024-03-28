const FeaturesItem = ({ heading, paragraph }) => {
  return (
    <div>
      <h5>{heading}</h5>
      <p className='max-w-md text-grayishBlue'>{paragraph}</p>
    </div>
  );
};

export default FeaturesItem;
