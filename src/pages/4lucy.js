import Image from 'next/image'
import heart from '../../public/heart.svg'
import './4lucy.css'
import anime from 'animejs'
import React, { useEffect } from 'react'
import spiral from './spiral.svg'

const Spiral = () => {
  useEffect(() => {
    anime({
      targets: '#heart',
      scale: [
        { value: 1, duration: 500, easing: 'easeOutCubic' },
        { value: 0.9, duration: 500, easing: 'easeInOutQuad' },
        { value: 1, duration: 500, easing: 'easeOutCubic' }
      ],
      loop: true
    })

    // anime({
    //   targets: '#spiralBackground',
    //   rotate: {
    //     value: 360,
    //     duration: 1500,
    //     easing: 'linear',
    //   },
    //   loop: true
    // })
  }, [])

  return (
    <main id="spiralMain">
      <Image id="heart" src={heart} alt="heart icon"/>
      <div id="spiralBackground"></div>
    </main>
  )
}

export default Spiral