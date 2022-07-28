import { Carousel } from 'antd';
//  <img className='w-full h-full object-cover mix-blend-overlay' src={nature} alt="/" />

const contentStyle = {
  height: '200px',
  textAlign: 'center',
  background: '#364d79',
};

const QuoteCarousel = (props) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
          {
              props.quote.map((item, index) => { 
                  return      <div className="h-[230px]   flex items-center  relative  bg-[#364d79]"   >
                    
                                    <div className="relative z-1 mt-10  ">
                                          <h3
                                              className="text-4xl font-bold  text-center text-white "
                                              style={{
                                              fontFamily: "Odibee Sans"}}> { "\""} { item}{ "\""} </h3>
                                    </div>
                              </div>
              })
          }
      
     
    </Carousel>
  );
};

export default QuoteCarousel;
