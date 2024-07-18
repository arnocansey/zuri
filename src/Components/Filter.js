export default function Filter() {
  return (
    <>
      <div className="flex  m-6 justify-between ml-32 mr-52">
        <button className=" ">Filter by</button>
        <button className=" ">Clear All</button>
      </div>
      <div className="border block justify-center ml-32 mr-52 ">
        <button className="border border-slate-950 w-1/3 p-3">
          {" "}
          Recruiters
        </button>
        <button className="border  border-slate-950 w-1/3 p-3">Talent</button>
        <button className="border  border-slate-950 w-1/3 p-3">Tips</button>
      </div>
      <h1 className="pl-32 pt-10 pb-10">
        Showing <b>43</b> resources
      </h1>
    </>
  );
}
