export default function Home(){
  return (

    <div className="max-w-4xl bg-orange-400 mx-auto p-5">
        <h1 className="text-center text-[40px] underline">Todo App</h1>

        {/* start input div  */}
        <div className="flex justify-between gap-4 mt-5">
          <input type="text" placeholder="write movie name" className="w-[80%] p-2 ml-3 text-lg border-b focus:outline-none" />
          <button className="bg-blue-500 w-[20%] text-white p-2 rounded hover:bg-blue-400">Add Movie</button>
        </div>

        {/* end input div */}
    </div>
  )
}