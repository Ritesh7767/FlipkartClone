import React from 'react'
import { Link } from 'react-router-dom'
import { useShoeDataQuery } from '../../Redux/RTQuery'
import ShoeImg from './ShoeImg'

const ShoePage = () => {

    const {data, error, isLoading, isFetching, isSuccesss} = useShoeDataQuery()
    console.log(data)

  return (
    <div className='flex gap-2 '>
        <div className='w-1/4 bg-white'>
            <h2>Filters</h2>
            
        </div>
        <div className='border-2 w-3/4 bg-white'>
            <div className='pt-3 pl-3'>
                <div className='flex text-xs font-semibold gap-x-1'>
                    <Link className='hover:text-blue-500' to='/' >Home</Link>
                    <span>&#10095;</span>
                    <Link className='hover:text-blue-500' to='/shoepage'>Footwear</Link>
                    <span>&#10095;</span>
                    <Link className='hover:text-blue-500' to='/shoepage'>Men's Footwear</Link>
                </div>
                <div className='flex gap-x-2 items-center mt-2'>
                    <h1 className='font-semibold'>Casual And Sports Shoes Men's Footwear</h1>
                    <span className='text-xs font-semibold'>(Showing 1 - 40 products of 6,073 products)</span>
                </div>
                <div className='flex gap-x-4 text-[1.2vw]'>
                    <div className='font-bold'>Sort By</div>
                    <Link to='' className='border-b-2 border-sky-600 text-sky-700 hover:font-semibold pb-1' >Popularity</Link>
                    <Link to='' className='border-b-2 border-sky-600 text-sky-700 hover:font-semibold pb-1' >Price - Low to High</Link>
                    <Link to='' className='border-b-2 border-sky-600 text-sky-700 hover:font-semibold pb-1' >Price - High to Low</Link>
                    <Link to='' className='border-b-2 border-sky-600 text-sky-700 hover:font-semibold pb-1' >Newest First</Link>
                </div>
            </div>
            <div className='flex flex-wrap gap-[1%]'>
                {data?.map(shoe => {
                    let {img, brand, title, flipkartAssured, price, ogPrice, size, qty, special} = shoe
                    let inPrice = price.toLocaleString('en-IN')
                    let inOgPrice = ogPrice.toLocaleString('en-IN')
                    return (
                        <div className='relative overflow-hidden hover:shadow-2xl transition-shadow bg-white h-[60vh] m-0 w-[24%] p-2' >
                            <div className='h-[65%] mb-2 relative overflow-hidden'>
                                <ShoeImg img={img}/>
                            </div>
                            <div className='flex flex-col gap-y-1 p-2 absolute hover:-translate-y-9 bg-white left-0 right-0 h-[30vh]' style={{transition : 'transform 0.2s ease-in-out'}}>
                                <h2 className='text-sm font-semibold text-[#989898]'>{brand}</h2>
                                <div className='flex gap-x-1'>
                                    <div className='overflow-ellipsis whitespace-nowrap w-1/2'>
                                        <h3 className='font-semibold text-sm'>{title}</h3>
                                    </div>
                                    {flipkartAssured == 'true' && <img className='w-[39%]' src="/flipkartAssured/flipkartAssured.png" /> }
                                </div>
                                    <div className='flex gap-x-3'>
                                    <span className='font-bold'>&#8377;{inPrice}</span>
                                    <span className='font-semibold text-sm text-[#7b7878] line-through' >&#8377;{inOgPrice}</span>
                                    <span className='text-green-700 font-bold text-sm' >{`${100 - Math.ceil((price * 100)/ogPrice)}% Off`}</span>
                                </div>
                                <span className='text-sm'>Free delivery</span>
                                {special && <div className='text-green-700 bg-green-200 font-bold text-xs p-1 w-4/5 whitespace-nowrap '>{special}</div>}
                                <p className='text-sm text-[#5a5959] font-semibold '>Size <span className='text-black' >{size}</span> </p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    </div>
  )
}

export default ShoePage