import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getArrSlider } from '../ultis/slidermove'

const Slider = () => {
    useEffect(() => {
        const sliderHint = document.querySelectorAll('.img_banner')
        // const contentCss = document.querySelector('.content')
        // contentCss.style.cssText = `min-height:${window.screen.height}px`
        let min = 0
        let max = 2
        const list = getArrSlider(min, max, sliderHint.length - 1)
        const interVal = setInterval(
            () => {
                const list = getArrSlider(min, max, sliderHint.length - 1)
                for (let i = 0; i < sliderHint.length; i++) {
                    sliderHint[i]?.classList?.remove('animation-right', 'order-last');
                    sliderHint[i]?.classList?.remove('animation-left', 'order-first');
                    sliderHint[i]?.classList?.remove('animation-left2', 'order-2');
                }
                for (let i = 0; i < sliderHint.length; i++) {
                    if (list.some(item => item === i)) {
                        sliderHint[i]?.classList?.remove('none');
                        sliderHint[i].style.cssText = "display:block";
                    } else {
                        sliderHint[i]?.classList?.remove('block');
                        sliderHint[i].style.cssText = "display:none";
                    }
                }
                list.forEach(item => {
                    if (item === max) {
                        sliderHint[item]?.classList?.add('animation-right', 'order-last', 'z-1');
                    } else if (item === min) {
                        sliderHint[item]?.classList?.add('animation-left', 'order-first');
                    } else {
                        sliderHint[item]?.classList?.add('animation-left2', 'order-2');
                    }
                })
                min = (min === 5) ? min = 0 : min += 1
                max = (max === 5) ? max = 0 : max += 1

            }, 4000)
        return () => {
            interVal && clearInterval(interVal)
        }
    })
    const { banner } = useSelector(state => state.app)
    return (
        <div className='slider'>
            {banner?.map((item, index) => (
                <img
                    key={item.encodeId}
                    src={item.banner}
                    className={`img_banner ${index <= 2 ? 'block' : 'hidden'}`}
                />
            ))}
            {/* <div>
                <div className="next-slider">Next</div>
                <div className="prev-slider">Prev</div>
            </div> */}


        </div>
    )
}

export default Slider