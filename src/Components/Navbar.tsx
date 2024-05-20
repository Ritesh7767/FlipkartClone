import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { GiShop } from "react-icons/gi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-2 mt-1'>
            <div>
                <img src="/logo/img1.svg" alt="" />
            </div>
            <div className='w-[40%] h-10 '>
                <input className='p-1 text-black outline-none w-full rounded-md h-full bg-[#F0F5FF] ' type="text" placeholder='Search for Products, Brands and More' />
            </div>
            <div className='flex items-center justify-around h-10 px-1 text-lg -ml-6 rounded-md hover:bg-[#2A55E5] hover:text-white  '>
                <span className='text-2xl mr-1'>
                    <CgProfile/>
                </span>
                <p className='mr-1'>Login</p>
                <span><IoIosArrowDown/></span>
            </div>
            <div className='flex justify-between items-center text-lg'>
                <span className='text-2xl mr-1'>
                    <IoCartOutline/>
                </span>
                <p>Cart</p>
            </div>
            <div className='flex items-center text-lg'>
                <span className='text-2xl mr-1'>
                    <GiShop/>
                </span>
                <p>Become a Seller</p>
            </div>
            <div className='mr-7'>
                <HiOutlineDotsVertical/>
            </div>
    </nav>
  )
}

export default Navbar