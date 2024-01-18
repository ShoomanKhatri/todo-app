export default function Home(){
  return (
    <div className="max-w-4xl bg-orange-400 mx-auto p-5">
        <h1 className="text-center text-[40px]">Todo App</h1>
        <div className="flex justify-between">
          <input type="text" placeholder="write movie name" className="w-[80%]" />
          <button className="bg-blue-500 w-[20%]">Add Movie</button>
        </div>
    </div>
  )
}