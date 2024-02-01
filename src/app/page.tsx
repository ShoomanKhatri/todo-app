"use client";
import { useState } from "react";

export default function Home() {
  //define state
  const [todos, setTodos] = useState([
    { movie: "Django Unchainged", id: 1 },
    { movie: "catch me if you can", id: 2 },
  ]);

  const [inputVal, setInput] = useState("");
  const [id, setId] = useState(0);

  // console.log(inputVal,id);

  // function

  const addItem = () => {
    let obj: any = todos.find((item) => item.id == id);

    if (obj) {
      let newArray = todos.filter((item) => item.id !== obj.id);
      setTodos([...newArray, { movie: inputVal, id: id }]);
      setInput("");
      setId(0);
      return;
    }
    setTodos([...todos, { movie: inputVal, id: id }]);
    setInput("");
    setId(0);
  };

  const editItem = (id: any) => {
    let obj: any = todos.find((item) => item.id == id);
    setInput(obj.movie);
    setId(obj.id);
    console.log(obj);
  };

  const delItem = (id: any) => {
    let newArray = todos.filter((item) => item.id !== id);
    setTodos([...newArray]);
    // console.log(newArray);
  };

  return (
    <div
      className="max-w-4xl  mx-auto p-5"
      style={{ color: "#D63484", background: "#402B3A" }}
    >
      <h1 className="text-center text-[40px] ">TodoList App</h1>

      {/* start input div  */}
      <div className="flex justify-between gap-4 mt-5">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInput(e.target.value)}
          placeholder="write movie name"
          className="w-[80%] p-2 ml-3 text-lg border-b focus:outline-none"
        />
        <input
          type="number"
          value={id}
          onChange={(e: any) => setId(e.target.value)}
          placeholder="write id"
          className="w-[20%] p-2 ml-3 text-lg border-b focus:outline-none"
        />
        <button
          onClick={addItem}
          className="bg-pink-700 w-[20%] text-white p-2 rounded hover:bg-pink-600"
        >
          Add Movie
        </button>
      </div>

      {/* end input div */}

      <h1 className="text-center text-[40px] underline mt-5">Movies List</h1>

      {/* movies list */}
      <div className="grid grid-cols-2 gap-5 mt-5">
        {/* grid item */}

        {todos.map((item: any, i: any) => {
          return (
            <div
              className="shadow p-4"
              key={i}
              style={{ background: "#FF9BD2", borderRadius: "10px" }}
            >
              <div className="flex justify-between text-lg">
                <span className="shadow rounded-r-full h-8 w-8 text-center my-auto">
                  {i + 1}
                </span>
                <span
                  onClick={() => delItem(item.id)}
                  className="shadow rounded-r-full h-8 w-8 text-center my-auto cursor-pointer text-red-700"
                >
                  X
                </span>
              </div>

              {/* data div */}
              <div className="mt-5 text-[30px]" style={{ color: "#FF9BD2" }}>
                {item.movie}
              </div>
              <div
                onClick={() => {
                  editItem(item.id);
                }}
                className="text-right cursor-pointer"
              >
                Edit
              </div>
              <h2 className="text-green">id:{item.id}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//1   2 3 4 5
