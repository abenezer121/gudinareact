import { Carousel } from 'antd';
//  <img className='w-full h-full object-cover mix-blend-overlay' src={nature} alt="/" />
import nature from './../../assets/nature.jpg';
const contentStyle = {
  height: '200px',
 
 
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
                  return <div className=' ' >
                         <h3 style={contentStyle} className="pt-10 text-3xl font-medium object-fill ">{ item}</h3>
                      </div>
              })
          }
      
     
    </Carousel>
  );
};

export default QuoteCarousel;
