
import { React } from 'react'

const TimeLineElement = (props) => {
    return (
         <div className="super-box  flex flex-col items-center justify-center   ">
              <div className="box flex flex-col items-center">
                  <p className="hiddentext text-black">{ props.name}</p>
              </div>
              <div className="icon">
                  <h2 className="text-4xl font-bold  yeartext " style={{ fontFamily: "Odibee Sans"  ,transform: `translateY(${-props.offsetYOther}px) translateX(${-props.offsetXOther}px)`, }}>{props.year}</h2>
              </div>
          
        </div>
      )
}

export default TimeLineElement;