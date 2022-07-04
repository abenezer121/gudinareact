import { React } from 'react'
import LeftTimeLine from './LeftTimeLine';
import RightTimeLine from './RightTimeLine';
const TimeLine2 = () => { 


    const returnRight = ( year = "1994" , text ="lorem") => {
        return (
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl px-2 py-2 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">1992</h1>
                    </div>
                <RightTimeLine text={text} />
                </div>
        )
    }
    const returnLeft = (year = "1994" , text ="lorem") => {
        return (
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl px-2 py-2 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg">1996</h1>
                    </div>
                    <LeftTimeLine text={text}/>
                </div>
        );
    }


    return (
        <div className="container  mx-auto pb-10">
            <div className="relative wrap overflow-hidden p-10 h-full">
                {returnRight()}
                {returnLeft()}
                {returnRight()}
                {returnLeft()}
                 {returnRight()}
                {returnLeft()}
                {returnRight()}
                {returnLeft()}
                 {returnRight()}
                {returnLeft()}
                {returnRight()}
                {returnLeft()}
                 {returnRight()}
                {returnLeft()}
                {returnRight()}
                {returnLeft()}
                 {returnRight()}
                {returnLeft()}
                {returnRight()}
                {returnLeft()}
                 {returnRight()}
                {returnLeft()}
                {returnRight()}
                {returnLeft()}
                 {returnRight()}
                {returnLeft()}
                {returnRight()}
            </div>
        </div>
    );
}

export default TimeLine2