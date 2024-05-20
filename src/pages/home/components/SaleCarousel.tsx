import { useEffect, useState } from "react"

interface sale {
    img : string
}

const SaleCarousel = () => {

    let [saleData, setsaleData] = useState<sale[]>([])
    let [currentImage, setCurrentImage] = useState(0)

    const handleCurrentImage = (num:number):void => {
        setCurrentImage(prev => {
            if(prev == 5){
                return 0
            }
            return prev + 1
        })
    }

    useEffect(() => {
        fetch('http://localhost:3000/saleCarousel')
        .then(response => response.json())
        .then((result:sale[]):void => {
            setsaleData(result)
            setInterval(() => {
                handleCurrentImage(1)
            }, 2000)
        })
    }, [])
    
  return (
    <div className="h-[34vh] relative mt-4 overflow-hidden">
        {saleData?.map((sale, index) => {
            return (
                <>
                    <img src={sale['img']} key={index} className={`absolute h-full`} style={{ transition : 'transform 0.3s ease-in-out', left : `${index * 100}%`,transform : `translateX(-${currentImage * 100}%)`}}/>
                </>
            )
        })}
        <div className="absolute flex justify-center left-0 right-0 bottom-5 z-30">
            <div className="absolute w-[8%] flex justify-between">
                {saleData.map((ele,i) => (
                    <span className="rounded-full w-2 h-2 bg-[#A9A9A9]" key={i} style={{backgroundColor : i == currentImage ? 'white' : ''}}></span>
                ))}
            </div>
        </div>
        <button onClick={() => handleCurrentImage(-1)} className="absolute top-1/3 rounded-md flex justify-center items-center border-2 w-10 bg-white h-2/5">&#10094;</button>
        <button onClick={() => handleCurrentImage(1)} className="absolute top-1/3 rounded-md flex justify-center items-center border-2 w-10 bg-white h-2/5 right-0">&#10095;</button>
    </div>
  )
}

export default SaleCarousel