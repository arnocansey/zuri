import React from "react";
export default function Resources2(props) {
  return (
    <>
      <div className="grid  sm:grid-cols-2">
        {props.data.map((resources) => {
          return (
            <section className="py-5 pl-32 pr-32 ">
              <section className="">
                <div className="flex gap-6">
                  <button className="rounded-2xl  bg-orange-200 px-4 py-1">
                    {resources.name}
                  </button>
                  <date>{resources.date}</date>
                  <div className=" border-black border-y-2 p-2"></div>
                </div>
                <div>
                  <h1>
                    <b>{resources.text}</b>
                  </h1>
                  <p>{resources.text2}</p>
                </div>
                <div>
                  <button className="bg-red-500 rounded p-2 text-white">
                    {resources.more}
                  </button>
                </div>
              </section>
            </section>
          );
        })}
      </div>
    </>
  );
}
