import React from "react";
import styled from "styled-components"

const LinkTutorial = () => { 

  const TimeLineElement = (props) => {
    return (
         <div className="super-box  flex flex-col items-center justify-center ">

              <div className="box flex flex-col items-center">
              <p className="hiddentext">{ props.name}</p>
              </div>

              <div className="icon">
          <h2 className="text-4xl font-bold" style={{ fontFamily: "Odibee Sans" }}>{props.year}</h2>
              </div>
            
        </div>
      )
    }

  return (
    <div className="w-full h-full">
      <div className="  h-[70px] w-[100%] md:w-[50%] m-auto  grid  gap-0 grid-cols-3 md:grid-cols-5  ">
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
          <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
            <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
         <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
            <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
         <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
          <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
         <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
          <TimeLineElement name={"Begins to attend local evangelical school in Bodji (Accepts Christ, Cuts down Hommi Tree)"} year={"1991"} />
        
               
      </div>
      
      </div> 
    );
}

export default LinkTutorial;