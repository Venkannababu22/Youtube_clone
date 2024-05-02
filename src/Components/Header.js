import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';

const Header = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'> 
            <img className='h-8 cursor-pointer' onClick={() => toggleMenuHandler()}
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAAATlBMVEX///8AAACZmZmkpKSrq6vy8vI7Ozv7+/soKCjR0dHNzc0jIyPV1dWvr68wMDAQEBBISEi2trbc3NxbW1vFxcXq6uq8vLxPT082NjZBQUHLNnOKAAABkUlEQVR4nO3cCW7CMBSE4ZQYAmRjCdv9L1pAQmqC7VQq1Xsj/d8JRsEKdsZ2UQAAAAAAAADAf2vahbG2mU+5DF3/Za7vwjKfc7uyzviy2uZyDg6e5ks/ZJ6ndbix5DOtOutoY12VCFpaJ5sqE0F31sGmdokRWlsHm6rjozRY53oXokEX1rHeLbSDyvz0m7V1rqn1Jhq0ulkHm7pFczocpPEheufsRVqnchYbV0nr+Ah92luH+2mfzlkUBz8T50Mu530pUh6tIz4cy5mlyCNqM7TBVDs08zEBAAAAAFmnc2nsfPpFyuCiGunCTNbtxTriyyXb3O0dfXyqM590PDWM2Y7xap1t7JrKKdPcqXwalykbZOobd10Dzd3niTd3Mq8nnRe+zF+ozqREZpqnM3HWWYo8s0os7gAAAAAAOSLbMlU2uqpsHVbZjC2zvd1VzsyBAXdtQ+IIhsyhFpmyQaa+cTdEae4+L/7TyxxglTkSrNPcyRxbl7kIwFfHmGsYdS6r0Ln+40HjQhUAAAAAAAAA+KNv55k0J7s5DScAAAAASUVORK5CYII='
                alt='menu-icon'/>
            
            <a href='/'>
            <img className='h-8 mx-2' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png'
                alt='youtube_image' />
            </a>
        </div>
        <div className='items-center col-span-10'>
            <input className='w-1/2 border border-gray-500 rounded-r-none rounded-l-full p-2' type='text'/>
            <button className='py-2 px-5 border border-gray-500 border-l-0 rounded-r-full rounded-l-none bg-gray-100'>🔍</button>
        </div>
        <div>
             <img className='h-10 col-span-1'
                src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'
                alt='user_icon'/>
        </div>
    </div>
  )
}

export default Header
