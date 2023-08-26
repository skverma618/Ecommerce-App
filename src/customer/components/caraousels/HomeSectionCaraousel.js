import AliceCarousel from "react-alice-carousel";
import React from "react";
import {useState} from "react";
import HomeSectionCard from "../HomeSectionCard";
// import {Button} from "@mui/material";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCaraousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: {items: 1},
        720: {items: 3},
        1024: {items: 5},
    }

    const slidePrev = () => {
        setActiveIndex(activeIndex - 1);
    }

    const slideNext = () => {
        setActiveIndex(activeIndex + 1);
    }
    const syncActiveIndex = ({item}) => {
        setActiveIndex(item);
    }


    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard/>)
    return (
        <div className="relative px-4 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5">{props.sectionName}</h2>
            <div className="relative p-5 border">
                <button className="z-50" onClick={slidePrev}>
                    prev
                </button>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 5 && <button className="z-50" onClick={slideNext}>
                    next
                </button>}
                {/*<Button variant="contained" className="z-50" sx={{*/}
                {/*    position: 'absolute', top: '8rem', right: '0rem',*/}
                {/*    transform: ""}} aria-label="next">*/}
                {/*    <KeyboardArrowLeftIcon />*/}
                {/*</Button>*/}
            </div>
        </div>
    )
}

export default HomeSectionCaraousel;