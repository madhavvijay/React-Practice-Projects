import { useState } from "react"

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "red" }}>
              Red
            </button>
            <button
              onClick={() => setColor("Green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "Green" }}>
              Green
            </button>
            <button
              onClick={() => setColor("lime")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "lime" }}>
              lime
            </button>
            <button
              onClick={() => setColor("Blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "Blue" }}>
              Blue
            </button>
            <button
              onClick={() => setColor("aqua")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "aqua" }}>
              aqua
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "olive" }}>
              olive
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "black" }}>
              black
            </button>
            <button
              onClick={() => setColor("Pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "Pink" }}>
              Pink
            </button>
            <button
              onClick={() => setColor("Purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "Purple" }}>
              Purple
            </button>
            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "lavender" }}>
              lavender
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
