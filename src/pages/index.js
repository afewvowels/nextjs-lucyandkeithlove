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

      let endPointX, endPointY = 0

      do {
        endPointX = Math.random() * 1500 - 750;
      } while (endPointX < 250 && endPointX > -250)

      do {
        endPointY = Math.random() * 1500 - 750;
      } while (endPointY < 250 && endPointY > -250)

      let originX = Math.random() * 100 - 50;
      let originY = Math.random() * 100 - 50;
      originX = originX - 25
      originY = originY - 25

      let rotation = Math.atan2(-endPointY, endPointX) * (180 / Math.PI);

      let duration = Math.abs(Math.random() * 1000) + 500

      document.getElementById('beehiveContainer').appendChild(bee)
      bees.current.push(bee)

      anime({
        targets: bee,
        translateX: [originX, endPointX],
        translateY: [originY, endPointY],
        rotate: rotation + 'deg',
        easing: 'easeInQuad',
        duration: duration,
        scale: {
          value: [0, Math.abs(Math.random()) + 0.5],
          duration: 200
        },
        opacity: {
          value: 0,
          delay: 200,
          duration: duration
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