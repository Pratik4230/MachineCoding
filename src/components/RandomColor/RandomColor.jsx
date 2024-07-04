import { useState } from "react";

const RandomColor = () => {

    const [colorType , setColorType] = useState('hex');
    const [color , setColor] = useState("#0000FF");


    const h = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ]
   


const GenerateHex = () => {
    let hexColor = '#';
    for(let i = 0 ; i < 6 ; i++){
        hexColor = hexColor + h[Math.floor(Math.random() * h.length)]
    }

    setColor(hexColor);

}

const GenerateRGB = () => {
     let r = Math.floor(Math.random() * 256)
     let g = Math.floor(Math.random() * 256)
     let b = Math.floor(Math.random() * 256)

     let RGB = `rgb(${r},${g},${b})`

     setColor(RGB)
}



  return (
    <div style={{ backgroundColor: color }} className="h-screen">
       <section className="flex justify-around pt-14">

        <button onClick={() => setColorType("hex")} className="bg-blue-500 p-2 rounded-lg text-white font-semibold hover:bg-white hover:text-black hover:border-2   shadow-inner shadow-slate-700" >Select Hex</button>

        <button onClick={colorType === "hex" ? GenerateHex : GenerateRGB } className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-3 py-2 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105" >Generate Random color</button>

        <button onClick={() => setColorType("rgb")} className="bg-blue-500 p-2 rounded-lg text-white font-semibold hover:bg-white hover:text-black hover:border-2 shadow-inner shadow-slate-700 " >Select RGB</button>
       </section>

   <div className="flex flex-col text-center mt-20 text-4xl text-white font-bold ">
    <h1 className="p-5 m-2" >{colorType}</h1>
    <h1 className="p-5 m-2" >{color}</h1>
   </div>

    </div>
  )
}

export default RandomColor
