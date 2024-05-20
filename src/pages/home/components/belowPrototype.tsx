import React from 'react'
import useFetch from '../../../CustomHooks/useFetch'

interface Url {
    url : string
}

const BelowProto = ({url}:Url) => {

    let {isLoading, isError, data} = useFetch(url)
    
  return (
    <div className='grid grid-flow-row grid-cols-3 gap-y-4 gap-x-2 bg-white mt-2'>
        {data?.map(ele => <img src={ele.img}/>)}
    </div>
  )
}

export default BelowProto