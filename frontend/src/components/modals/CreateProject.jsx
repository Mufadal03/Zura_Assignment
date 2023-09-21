import React, { useEffect, useRef, useState } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { getProjects } from "../../redux/app/action";

const CreateProject = ({ onClose }) => {
  const [onError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [projectName, setProjectName] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = async () => {
    if (projectName === "") {
      setErrorMessage(`Project Name can't be empty`);
      setError(true);
      return;
    }
    if (projectName.length < 3) {
      setError(true);
      setErrorMessage("Project Name Should be greater than 2 Character");
      return;
    }

    try {
      const response = await api.post(`/project/create`, { name: projectName });
      if (response.success) {
        dispatch(getProjects());
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="flex flex-col gap-6 p-2">
      <h3 className="text-2xl font-bold">Create Project</h3>
      <div className="flex flex-col gap-1">
        <p className="mb-1">Enter Project Name:</p>
        <input
          ref={inputRef}
          onChange={(e) => setProjectName(e.target.value)}
          value={projectName}
          className="p-2 ring-1  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full focus:border-none rounded-md focus:ring-1"
          placeholder="Type here"
          type="text"
        />
        {onError && <p className="text-sm text-[#FF274C]">{errorMessage}</p>}
      </div>

      <div className="flex justify-end items-center gap-2">
        <button
          onClick={() => onClose()}
          style={{ border: "1px solid" }}
          className="px-7 py-2 hover:bg-[#FF274C] hover:text-white rounded-md bg-white text-[#FF274C] font-bold"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-7 py-2 border-2 rounded-md text-white bg-purple font-bold"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateProject;
