import React, { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import styles from './styles.module.scss'

const slides = [
  'assets/foto-jovem.png',
  'assets/foto-cafe.png'
]

export function SliderJovem() {
  const [index, set] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    
    from: {opacity: 1},
    enter: { opacity: 0},
    leave: { opacity: 1},
  
    delay:6000,
    
   
    onRest: (_a,_b, item) => {
      if (index === item) {
        set(state => (state + 1) % slides.length)
      }
    
    },
    exitBeforeEnter: false
  })


  
  return (
    <div className="flex fill center">
      {transitions((style, i) => (
        <animated.div
          className={styles.bg}
          style={{
            ...style,
            
          }}
        >
         <img className={styles.fotoJovem} src={slides[i]}/>
        </animated.div>

      ))}
    </div>
  )
}
