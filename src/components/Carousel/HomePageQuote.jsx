import { React , useEffect , useState} from 'react';
import Dash from './Dash';
const HomePageQuote = () => {
    const [quote, setQuote] = useState("“Gudina Tumsa is “our St.Paul.” He and his wife “showed our people Jesus Christ  they shared our hunger and suffering.” -Rev. Girma Kassa");
    const [position, setPosition] = useState(0);
    const quotes = [
        "“Gudina Tumsa is “our St.Paul.” He and his wife “showed our people Jesus Christ  they shared our hunger and suffering.” -Rev. Girma Kassa",
        "“Gudina was not afraid of anything.” -Tsheay Tolesa",
        "“On 28 July 1979 Gudina Tumsa was abducted and killed by strangulation. His murder brought to an end the possiblity of creative and visionary theological reflection in the church.” - Øyvind M. Eide "
    ];

    useEffect(() => { 
        let timer = setTimeout(function () { handlePosition(1) }, 4000);
        return () => { clearTimeout(timer) }
    })
    
      const handlePosition = (i) => { 
            if (i == -1) {
                if (position == 0) setPosition(quotes.length -1);
                else  setPosition(position - 1);
            }
            else {
                if (position == quotes.length-1) setPosition(0);
                else  setPosition(position + 1);
                
            } 
    }
    return (
        <>
            <div className="w-[70%] h-[25%] mb-20 flex items-center   mx-auto homepagequoteimage relative"   data-aos="fade-up">
                  <div className=" w-full  my-auto" >
                      <h3    
                          className="text-4xl font-bold  text-center text-white "
                          style={{
                          fontFamily: "Odibee Sans"}}>
                            {quotes[position]}
                      </h3>
                      
                </div>
                
                 <div className='  absolute  bottom-0 right-0 mb-5  mr-10'>
                <div className='flex space-x-2'>
                     <div  onClick={function(e) {
                               setPosition(0);    
                        }}><Dash color={position == 0 ? 'bg-white' : 'bg-slate-500'} /></div>  
                        <div
                        onClick={function(e) {
                               setPosition(1);    
                        }}>
                            <Dash color = { position == 1 ? 'bg-white' : 'bg-slate-500'} onClick = {()=>{ setPosition(1)}} />
                        </div>
                        <div onClick={function(e) {
                               setPosition(2);    
                        }}>
                            <Dash color = { position == 2 ? 'bg-white' : 'bg-slate-500'} onClick = {()=>{ setPosition(2)}} />
                        </div>
                        
                        
                   
                </div>
            </div>
               
            </div>
        </>
    )
}

export default HomePageQuote;