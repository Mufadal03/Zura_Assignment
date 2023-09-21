import React, { useEffect, useRef, useState } from "react";
import { CrossIcon, YoutubeIcon } from "../../assets";
import { api } from "../../api";
import { useParams } from "react-router-dom";
const initialState = {
  name: "",
  description: "",
};

const UploadPodcastModal = ({ onClose }) => {
  const [podcastData, setPodcastData] = useState(initialState);
  const [onError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();
  const nameRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPodcastData({
      ...podcastData,
      [name]: value,
    });
  };
  const handleUpload = async () => {
    const { name, description } = podcastData;
    if (!name) {
      setError(true);
      setErrorMessage("Name is required");
      return;
    }
    if (!description) {
      setError(true);
      setErrorMessage("Description is Required");
      return;
    }
    try {
      const res = await api.post(`/subProject/create/${id}`, podcastData);
      if (res.success) {
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <div className="p-2 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img className="h-[50px]" src={YoutubeIcon} alt="youtubeIcon" />
          <h2 className="font-bold text-2xl">Upload from Youtube</h2>
        </div>
        <img
          onClick={() => onClose()}
          className="h-[20px] hover:cursor-pointer"
          src={CrossIcon}
          alt="crossIcon"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="">
          <p className="my-1">Name</p>
          <input
            ref={nameRef}
            name="name"
            value={podcastData.name}
            onChange={handleChange}
            className="p-2 ring-1 ring-gray  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full focus:border-none rounded-sm focus:ring-1"
            type="text"
          />
        </div>
        <div className="">
          <p className="my-1">Description</p>
          <input
            name="description"
            value={podcastData.description}
            onChange={handleChange}
            className="p-2 ring-1 ring-gray  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full focus:border-none rounded-sm focus:ring-1"
            type="text"
          />
        </div>
      </div>
      {onError && <div className="text-md text-[#FF274C]"> {errorMessage}</div>}
      <div className="flex justify-end">
        <button
          onClick={handleUpload}
          className="px-7 py-2 rounded-md text-white bg-[#211935] font-semibold"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadPodcastModal;
