import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        {
            name.map((item, index) => <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg' key={index}>{item}</button>)
        }
    </div>
  )
}

export default Button
