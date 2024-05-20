import EssentialsProto from "./EssentialsProto"

const Travel_Summer = () => {
  return (
    <div className="flex mt-3 justify-between gap-2 h-[72vh]">
        <EssentialsProto title="Travel Essential Picks" url="http://localhost:3000/travelEssentials"/>
        <EssentialsProto title="Summer Decors & Furnishing" url="http://localhost:3000/summerDecors" />
        <div className="w-1/3">
            <img src="/fashionNeeds/img1.jpg" className="h-full object-fill" />
        </div>
    </div>

  )
}

export default Travel_Summer