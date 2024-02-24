import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive");
  
  const generateColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const hexColor = "#" + randomColor;
  
    setcolor(hexColor)
  }

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div>{color}</div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md">
          <button className="outline-none px-4" onClick={() => setcolor("Red")}>Red</button>
          <button className="outline-none px-4" onClick={() => setcolor("Yellow")}>Yellow</button>
          <button className="outline-none px-4" onClick={() => setcolor("Green")}>Green</button>
          <button className="outline-none px-4" onClick={() => setcolor("Blue")}>Blue</button>
          <button className="outline-none px-4" onClick={() => setcolor("Orange")}>Orange</button>
          <button className="outline-none px-4" onClick={generateColor}>Random </button>
        </div>
      </div>
    </div>
  )
}

export default App
