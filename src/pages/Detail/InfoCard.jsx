const InfoCard = ({item}) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-gray-600 shadow-md">
        <p className="text-sm font-semibold mb-2 capitalize">{item[0].split("_").join(" ") } </p>  {/*alt çigileri split ve join ile ortadan kaldırdık*/}
        <h2 className="text-lg font-bold text-gray-800">{item[1]} </h2>
    </div>
  )
}

export default InfoCard