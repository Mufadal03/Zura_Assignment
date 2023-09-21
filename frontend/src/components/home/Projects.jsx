import React, { useState } from "react";
import { PlusIcon } from "../../assets";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";
import Modal from "../modals/Modal";
import CreateProject from "../modals/CreateProject";

const Projects = () => {
  const { projects } = useSelector((state) => state.appReducer);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between">
        <h1 className="text-purple text-5xl font-bold">Projects</h1>
        <button
          className=" flex items-center bg-activeBlack text-white text-lg font-bold gap-2 px-4 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          <img src={PlusIcon} alt="plus" className="h-[25px]" />
          Create New Project
        </button>
      </div>
      <div className="grid grid-cols-3 gap-12 max-w-screen-xl mx-auto mt-5 py-2">
        {projects?.length > 0 &&
          projects?.map((el,i) => {
            return <ProjectCard key={i.toString(2)} {...el} />;
          })}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CreateProject onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
};

export default Projects;
