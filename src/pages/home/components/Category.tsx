import { useEffect, useState } from "react"

const Category = () => {

    let [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Categories')
        .then(response => response.json())
        .then(result => setCategories(result))
    }, [])

    console.log(categories)
  return (
    <div className="flex justify-around h-26 mt-2 border-black bg-white px-2 box-border">
        {
            categories?.map(category => {
                let {img, title, id} = category
                return (
                    <div key={id} className="flex flex-col w-[10%] text-center font-[650] text-sm">
                        <div className=" h-3/5 object-contain ">
                            <img src={img} className="w-full h-full object-contain " />
                        </div>
                        <div>
                            <p className="mt-1">{title}</p>
                            <span></span>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Category