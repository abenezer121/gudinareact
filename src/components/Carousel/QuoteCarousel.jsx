import { Carousel } from 'antd';
//  <img className='w-full h-full object-cover mix-blend-overlay' src={nature} alt="/" />
import nature from './../../assets/nature.jpg';
const contentStyle = {
  height: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
    background: '#364d79',
  //  //  backgroundImage: 'url(' + nature + ')',
};

const QuoteCarousel = (props) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
      <Carousel afterChange={onChange}>
          {
              props.quote.map((item, index) => { 
                  return <div>
                         <h3 style={contentStyle} className="text-4xl font-bold ">{ item}</h3>
                      </div>
              })
          }
      
     
    </Carousel>
  );
};

export default QuoteCarousel;
