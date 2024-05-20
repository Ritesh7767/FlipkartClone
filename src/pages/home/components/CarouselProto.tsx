import React, { memo, useEffect, useRef, useState} from 'react'
import useFetch, { dataProto } from '../../../CustomHooks/useFetch'

interface CarouselProtoProps {
  title : string,
  url : string
}

const CarouselProto = ({title, url}:CarouselProtoProps) => {

  let {isLoading, isError, data} = useFetch(url)
  let [translate, setTranslate] = useState<number>(0)

  const handleShift = (num:number):void => {
  
    setTranslate(prev => prev + num)
    
  }

  return (
    <div className='bg-white mt-3 p-2 pt-5'>
      <div className='flex justify-between items-center mb-5 mr-5'>
        <h1 className='font-semibold text-xl'>{title}</h1>
        <span className='rounded-full w-7 h-7 text-center text-white bg-[#2A55E5]'>&#10095;</span>
      </div>
      <div className='relative overflow-hidden w-full h-[38vh]' >
        {data?.map((ele:dataProto, index :number) => {
          return (
            <div className='border p-1 text-center absolute w-[16.5%] h-full transition-transform' style={{left : `${index * 17.5}%`, transform : `translateX(-${translate * 230}%)`, transition : 'transform 0.3s ease-in-out'}} key={index}>
              <div className='h-[80%] p-1 hover:p-0 transition-all '>
                <img src={ele.img} className='h-full w-full object-contain'/>
              </div>
              <h3 className='text-sm whitespace-nowrap '>{ele.title}</h3>
              <p className='font-semibold'>{ele.category}</p>
            </div>
          )
        })}
        <button onClick={() => handleShift(-1)} className='absolute top-[28%] rounded-tr rounded-br bg-white w-[3%] h-[50%] border -left-2'>&#10094;</button>
        <button onClick={() => handleShift(1)} className='absolute top-[28%] rounded-tl rounded-bl bg-white w-[3%] h-[50%] border -right-2'>&#10095;</button>
      </div>
      </div>
  )
}

export default memo(CarouselProto)