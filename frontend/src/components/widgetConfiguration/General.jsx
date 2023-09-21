import React from "react";
const db = [
  {
    name: "chatBotName",
    title: "Chatbot Name",
    subTitle: "Lorem ipsuim dolor sit Lorem ipsuim dolor sit",
  },
  {
    name: "welcomeMessage",
    title: "Welcome Message",
    subTitle: "Lorem ipsuim dolor sit Lorem ipsuim dolor sit",
  },
  {
    name: "inputPlaceholder",
    title: "Input Placeholder",
    subTitle: "Lorem ipsuim dolor sit Lorem ipsuim dolor sit",
  },
];
const General = () => {
    return (
      <div className="w-full flex flex-col gap-5">
        {db.map((el, i) => (
          <div className="flex w-[100%] flex-col gap-2 ">
            <h1 className="font-semibold text-lg">{el.title}</h1>
            <div className="flex flex-col">
              <input
                className="p-2 ring-1 ring-gray  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full focus:border-none rounded-sm focus:ring-1"
                type="text"
                name={el.name}
              />
              <p className="text-sm">{el.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    );
};

export default General;
