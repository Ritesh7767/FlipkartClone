import React from 'react'
import useFetch from '../../../CustomHooks/useFetch'

interface Essentials {
    title : string,
    url : string
}

const EssentialsProto = ({title, url}:Essentials) => {

    let {data} = useFetch(url)

  return (
    <div className='w-1/3 text-center bg-white'>
        <div className='flex justify-between p-3 items-center mb-3'>
            <h1 className='font-semibold text-xl'>{title}</h1>
            <span className='rounded-full w-6 h-6 flex justify-center items-center bg-[#2A55E5] text-center text-white' >&#10095;</span>
        </div>
        <div className='flex flex-wrap gap-x-2 justify-center items-center w-full h-[30vh] '>
            {
                data?.map(ele => (
                    <div className='w-[46%] h-full border mb-2 p-2'>
                        <div className='h-3/4 flex justify-center items-center p-1 hover:p-0 transition-all'>
                            <img src={ele.img} className='object-contain w-[90%] h-[90%]' />
                        </div>
                        <h2 className='' >{ele.title}</h2>
                        <h3 className='text-green-700 font-semibold text-lg ' >{ele.price}</h3>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default EssentialsProto