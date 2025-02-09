import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")

  return (

    <div className="w-full h-screen duration-500 ease-in-out"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-3 rounded-3xl">
          <button onClick={() => {
            setColor("red")
          }}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "Red" }}>Red</button>
          <button onClick={() => {
            setColor("blue")
          }}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "Blue" }}>Blue</button>
          <button onClick={() => {
            setColor("white")
          }}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "white" }}>White</button>
          <button onClick={() => {
            setColor("black")
          }}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "Black" }}>Black</button>
          <button onClick={() => {
            setColor("olive")
          }}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "Olive" }}>Olive</button>
          <button onClick={() => {
            setColor("green")
          }}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "Green" }}>Green</button>
          <button onClick={() => {
            setColor("yellow")
          }}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => {
            setColor("orange")
          }}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "orange" }}>orange</button>
          <button onClick={() => {
            setColor("aqua")
          }}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "aqua" }}>Aqua</button>

          <button onClick={() => {
            setColor("pink")
          }}
            className='outline-none px-4 py-1 rounded-full text-pink shadow-lg'
            style={{ backgroundColor: "pink" }}>Pink</button>


       


        </div></div>
    </div>

  )
}

export default App
