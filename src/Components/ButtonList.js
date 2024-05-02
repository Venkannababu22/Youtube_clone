import React from 'react'
import Button from './Button'

const list = ["All", "Live", "Gaming", "Soccer", "Cricket", "Cooking", "Songs", "Dance", 
              "Basketball", "Hockey", "Volleyball", "Baseball", "Politics"]

const ButtonList = () => {
  return (
    <div>
      <Button name={list}/>
    </div>
  )
}

export default ButtonList
