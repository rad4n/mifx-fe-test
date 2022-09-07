import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.css'

const Carousel = ({ dataSlide }: any) => {
    const [updateCount, setUpdateCount] = useState(0)
    const [slideIndex, setSlideIndex] = useState(0)
    const settings = {
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current: any, next: any) => setSlideIndex(next),
        customPaging: function (i: number) {
            return (
                <a>
                    <img className={styles.thumbnail} src={dataSlide[i]} />
                </a>
            );
        },
        appendDots: (dots: any) => {
            return (
                <div>
                    <ul>
                        {dots.map((item: any, index: number) => {
                            return (
                                <li className={styles.customdots} key={index}>{item.props.children}</li>
                            );
                        })}
                    </ul>
                </div>
            )
        },
    };

    return (
        <>
            <span className={styles.slideIndex}>{slideIndex + 1}/{dataSlide.length} </span>
            <Slider {...settings}>
                {dataSlide.map((v: any, k: any) => {
                    return (
                        <>
                            <img key={k} src={v} />
                        </>
                    )
                })}

            </Slider>
        </ >
    )
}

export default Carousel