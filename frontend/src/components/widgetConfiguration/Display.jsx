import React from "react";
const db = [
  {
    title: "Primary Color",
    inputType: "text",
    color: true,
    name: "primaryColor",
  },
  {
    title: "Font Color",
    inputType: "text",
    color: true,
    name: "fontColor",
  },
  {
    title: "Font Size (in px)",
    inputType: "number",
    name: "fontSize",
  },
  {
    title: "Chat Height (in % of total screen)",
    inputType: "number",
    name: "chatHeight",
  },
];
const Display = () => {
  const inputClass = `p-2 ring-1 ring-gray  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full focus:border-none rounded-sm focus:ring-1`;
  return (
    <div className="mt-2 py-2">
      <div className="grid grid-cols-2 gap-4">
        {db.map((el, i) => (
          <div className="flex flex-col gap-2 w-[95%]">
            <h1 className="font-semibold text-lg">{el.title}</h1>
            <div className="flex flex-col">
              <div className="flex gap-2">
                <input
                  className={inputClass}
                  type={el.inputType}
                  name={el.name}
                />
                {el.color && <input className="h-full rounded-lg" type="color" />}
              </div>
              <p className="text-sm">
                Lorem ipsuim dolor sit Lorem ipsuim dolor sit
              </p>
            </div>
          </div>
        ))}
        
          </div>
          
    </div>
  );
};

export default Display;
