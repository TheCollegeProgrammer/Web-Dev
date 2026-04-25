import React from 'react'
import Left_Text from './Left_Text'
import Right_Img from './Right_Img'


const Center = () => {
  return (
    <div className='py-10 flex justify-between h-[90vh] bg-amber-400'>
      <Left_Text />
      <Right_Img />
    </div>
  )
}

export default Center
