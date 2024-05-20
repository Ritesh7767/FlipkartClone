import { useEffect, useState, memo, useRef} from "react"

const ShoeImg = ({img}) => {

  let [translate, setTranslate] = useState(0)
  let [active, setActive] = useState(false)
  let intervalId = useRef(null)

  console.log(active)
  useEffect(() => {
    if(active){
      intervalId.current = setInterval(() => setTranslate(prev => {
        return (prev + 1) % img.length
      }), 1000)
    }
    else{
      clearInterval(intervalId.current)
    }

    return () => {
      clearInterval(intervalId.current)
    }
  }, [active])

  const handleMouseOver = () => {
    if(!active)
      console.log('enterred')
      setActive(true)
  }

  const handleMouseOut = () => {
    if(active)
      setActive(false)
  }

  return (
    <>
      {
        active && img.map((ele, i) => <span className="w-[5px] h-[5px] bg-[#989898] absolute rounded-full z-10 top-1 " style={{left : `${(i + 1) * 4}%`, backgroundColor : i == translate && 'white'}}></span>)
      }
      {
        img.map((ele, id) => {
          return <img src={ele} key={id} className="w-full absolute h-full object-contain" style={{left : `${id * 100}%`, transform : `translateX(-${translate * 100}%)`}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        })
      }
    </>
  )
}

export default memo(ShoeImg)