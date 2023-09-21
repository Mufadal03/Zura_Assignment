import React, { useEffect, useState } from "react";
import PlatformCard from "./PlatformCard";
import { Platforms, changeDateFormat, headings } from "../../assets";
import '../../App.css'
import { useNavigate } from "react-router-dom";
import Modal from "../modals/Modal";
import UploadPodcastModal from "../modals/UploadPodcastModal";
const PoadcastListing = ({
  name,
  subProjects,
  handleDelete,
  getSingleProject,
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getSingleProject();
  }, [isOpen]);
  return (
    <div className="mt-1">
      <h1 className="text-purple font-bold text-4xl py-2 mb-2">{name}</h1>
      <div className="grid grid-cols-3 gap-20">
        {Platforms.slice(0, 3).map((el, i) => (
          <div key={i.toString(2)} className="w-[80%]" onClick={() => setIsOpen(true)}>
            <PlatformCard {...el} />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center px-6 text-white mt-4 rounded-lg py-4 bg-purple">
        <p className="font-[600] tracking-wider">
          All files are processed! Your widget is ready to go!
        </p>
        <button className="rounded-md bg-white text-activeBlack font-bold px-6 py-2">
          Try it Out!
        </button>
      </div>

      {/* table */}
      <div className="rounded-lg  mt-4">
        <table className="min-w-full custom-table">
          <thead>
            <tr>
              {headings.map((el,i) => (
                <th key={i.toString(2)} className="p-5 text-lg font-[700] capitalize">{el}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {subProjects?.length > 0 &&
              subProjects?.map((el,i) => {
                return (
                  <tr key={i.toString(2)} className="border-2 p-4">
                    <td className="text-center font-[300] p-5">{el.name}</td>
                    <td className="text-center ">
                      {changeDateFormat(el.createdAt)}
                    </td>
                    <td className="text-center ">
                      {el.status ? "Done" : "Pending"}
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => navigate(`edit/${el._id}`)}
                        style={{ border: "0.895px solid #D9D9D9" }}
                        className=" text-sm p-3 text-[#3C3C3C]"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(el._id)}
                        style={{ border: " 0.895px solid #D9D9D9" }}
                        className=" text-sm p-3  text-[#FF274C]"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <UploadPodcastModal onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
};

export default PoadcastListing;
