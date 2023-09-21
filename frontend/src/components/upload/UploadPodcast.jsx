import React, { useEffect, useState } from "react";
import { CloudUpload, Platforms } from "../../assets";
import PlatformCard from "./PlatformCard";
import Modal from "../modals/Modal";
import UploadPodcastModal from "../modals/UploadPodcastModal";
const UploadPodcast = ({ name, getSingleProject }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getSingleProject();
  }, [isOpen]);
  return (
    <div className="mt-1">
      <h1 className="text-purple font-bold text-4xl py-2 mb-2">{name}</h1>
      <div className="grid grid-cols-3 gap-x-12 gap-y-5 ">
        {Platforms.map((el, i) => (
          <div key={i.toString(2)} className="w-[80%]" onClick={() => setIsOpen(true)}>
            <PlatformCard {...el} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center text-lg text-[#999999] my-4">
        or
      </div>
      <div className="min-h-[330px] max-h-auto border-dashed border-2 border-[#999999] rounded-xl flex flex-col items-center justify-center">
        <img className="h-[80px]" src={CloudUpload} alt="upload" />
        <p className="text-#49454F text-lg">
          Select a file or drag and drop here (Podcast Media or Transcription
          Text)
        </p>
        <p className="text-[#999999] text-sm">
          MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
        </p>
        <button
          style={{ border: "2px solid #7E22CE" }}
          className="border-purple px-8 py-2 rounded-full mt-5 font-bold text-purple"
        >
          Select File
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <UploadPodcastModal onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
};

export default UploadPodcast;
