import { React , useEffect , useState} from 'react';
import Dash from './Dash';
const HomePageQuote = (props) => {
    const [position, setPosition] = useState(0);
    

    useEffect(() => { 
        let timer = setTimeout(function () { handlePosition(1) }, 4000);
        return () => { clearTimeout(timer) }
    })
    
      const handlePosition = (i) => { 
            if (i == -1) {
                if (position == 0) setPosition(props.quotes.length -1);
                else  setPosition(position - 1);
            }
            else {
                if (position == props.quotes.length-1) setPosition(0);
                else  setPosition(position + 1);
                
            } 
    }
    return (
        <>
            <div className="w-[80%]  mb-20 flex items-center   mx-auto homepagequoteimage relative"   data-aos="fade-up">
                  <div className=" w-full  my-auto" >
                      <h3    
                          className="text-4xl font-bold  text-center text-white "
                          
                    >
                            {props.quotes[position]}
                      </h3>
                      
                </div>
                
                 <div className='  absolute  bottom-0 right-0 mb-5  mr-10'>
                    <div className='flex space-x-2'>
                        {
                            props.quotes.map((item, index) => { 
                                return <div  onClick={function(e) {
                               setPosition(index);    
                        }}><Dash color={position == index ? 'bg-white' : 'bg-slate-500'} /></div>  
                            })
                        }
                     
                      
                        
                        
                   
                </div>
            </div>
               
            </div>
        </>
    )
}

export default HomePageQuote;