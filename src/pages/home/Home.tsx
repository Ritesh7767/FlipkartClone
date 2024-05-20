import Category from './components/Category'
import SaleCarousel from './components/SaleCarousel'
import CarouselProto from './components/CarouselProto'
import './Home.css'
import BelowProto from './components/belowPrototype'
import StudentEssentials from './components/StudentEssentials'
import Travel_Summer from './components/Travel_Summer'

const Home = () => {
  return (
    <div className='w-[97%] m-auto'>
        <Category/>
        <SaleCarousel/>
        <CarouselProto title='Best Deals on Smartphones' url='http://localhost:3000/smartPhones'/>
        <BelowProto url='http://localhost:3000/belowSmartphones'/>
        <CarouselProto title='Top Deals' url='http://localhost:3000/topDeals' />
        <BelowProto url='http://localhost:3000/belowTopDeals'/>
        <CarouselProto title='Fashion Best Seller' url='http://localhost:3000/fashionBestDeals'/>
        <StudentEssentials/>
        <BelowProto url='http://localhost:3000/belowFashion' />
        <Travel_Summer/>
        <CarouselProto title='Never Before Prices on Fashion' url='http://localhost:3000/neverBefore' />
        <BelowProto url='http://localhost:3000/belowNever'/>
        <CarouselProto title='Furniture & Mattresses' url='http://localhost:3000/furniture'/>
        <CarouselProto title='Top Deals on Appliances' url='http://localhost:3000/appliances' />
        <CarouselProto title='Electronics Gadgets' url='http://localhost:3000/electronics' />
        <BelowProto url='http://localhost:3000/belowElectronics'/>
        <CarouselProto title='Super Hit Deals on Fashion' url='http://localhost:3000/superhit'/>
        <BelowProto url='http://localhost:3000/belowSuperhit'/>
        {/* <BestDealsSmartphone/> */}
    </div>
  )
}

export default Home