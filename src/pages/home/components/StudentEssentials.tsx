import React from 'react'
import EssentialsProto from './EssentialsProto'

const StudentEssentials = () => {
  return (
    <div className='flex mt-3 justify-between gap-2'>
        <EssentialsProto title='Latest Student Essentials' url='http://localhost:3000/studentEssentials' />
        <div className='w-2/3'>
            <img src='/topSellingSmartPhones/img1.jpg' className='w-full'/>
        </div>
    </div>
  )
}

export default StudentEssentials