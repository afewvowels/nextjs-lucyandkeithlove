import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import beehive from '../../public/bee.svg'
import anime from 'animejs'
import '../app/globals.css'
import Head from 'next/head'

const Home = () => {
  const [animationFlag, setAnimationFlag] = useState(false)
  const isAnimating = useRef(false)
  const bees = useRef([])

  useEffect(() => {
    if (!animationFlag) {
      return
    }

    for (let i = 0; i < 50; i++) {  // creating 50 bees
      console.log('creating bee')
      let bee = document.createElement('div')
      bee.classList.add('bee')

      let endPointX = Math.random() * 500 - 250;
      console.log("calculated x: " + endPointX)
      let endPointY = Math.random() * 500 - 250; // Random Y within a range
      console.log("calculated y: " + endPointY)
      let rotation = Math.atan2(-endPointY, endPointX) * (180 / Math.PI);

      document.getElementById('beehiveContainer').appendChild(bee)
      bees.current.push(bee)

      anime({
        targets: bee,
        translateX: [0, endPointX],
        translateY: [0, endPointY],
        rotate: rotation + 'deg',
        easing: 'linear',
        duration: Math.random() * 3000 - 500,
        opacity: {
          value: 0,
          delay: 1000,
          duration: 1000
        },
        complete: () => {
          bee.remove()
          bees.current = bees.current.filter(b => b !== bee)
          if (i === 49) {
            isAnimating.current = false
            setAnimationFlag(flag => !flag)
          }
        }
      })
    }
  }, [animationFlag])

  const handleClick = () => {
    if (!isAnimating.current) {
      isAnimating.current = true
      setAnimationFlag(flag => !flag)
    }
  }

  return (
    <>
      <Head>
        <title>Lucy + Keith</title>
        <meta name="description" content="bee-were" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg"/>
      </Head>
      <main>
        <div id="beehiveContainer">
          <Image id="beehive" src={beehive} alt="beehive icon" onClick={handleClick}/>
        </div>
      </main>
    </>
  )
}

export default Home