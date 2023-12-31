import React, { useState } from "react";
import { PlusIcon, PodcastImg } from "../../assets";
import Modal from "../modals/Modal";
import CreateProject from "../modals/CreateProject";

const LandingPage = () => {
  // State to manage the modal's open/close state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        {/* Page title */}
        <h1 className="text-purple text-[3rem] font-[700] text-center">
          Create a New Project
        </h1>
        <div className="flex flex-col items-center my-2">
          {/* Image and description */}
          <img className="w-[35%]" src={PodcastImg} alt="podcast" />
          <p className="text-center text-[1.5rem] text-[#838383]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-1">
        {/* Button to open the modal */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 font-[600] justify-center bg-activeBlack text-white text-[2rem] p-3 w-[25%] rounded-lg"
        >
          <img src={PlusIcon} alt="plusIcon" className="h-[30px]" />
          Create New Project
        </button>
      </div>

      {/* Modal for creating a new project */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {/* Pass the onClose function to the CreateProject component so that once project is created the modal gets close*/}
        <CreateProject onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
};

export default LandingPage;
