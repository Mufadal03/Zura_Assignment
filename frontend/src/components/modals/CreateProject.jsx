import React, { useEffect, useRef, useState } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { getProjects } from "../../redux/app/action";

const CreateProject = ({ onClose }) => {
  const [onError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [projectName, setProjectName] = useState("");
  const [isLoading,setIsLoading]=useState(false)
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
      setErrorMessage("Project Name Should be greater than 2 Characters");
      return;
    }

    try {
      // Make an API request to create a new project
      setIsLoading(true)
      const response = await api.post(`/project/create`, { name: projectName });
      setIsLoading(false)
      if (response.success) {
        // If the project is created successfully, dispatch an action to update the projects list
        dispatch(getProjects());
        onClose(); // Close the modal
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Focus on the input field when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col gap-6 p-2">
      <h3 className="text-2xl font-[700]">Create Project</h3>
      <div className="flex flex-col gap-1">
        <p className="mb-1 text-lg">Enter Project Name:</p>
        <input
          ref={inputRef}
          onChange={(e) => setProjectName(e.target.value)}
          value={projectName}
          className="p-2 font-[500] ring-1 ring-gray placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full focus:border-none rounded-sm focus:ring-1"
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
          disabled={isLoading}
          onClick={handleSubmit}
          className={`px-7 py-2 border-2 rounded-md text-white bg-purple font-bold ${
            isLoading ? "cursor-not-allowed bg-gray-400 text-gray-700 " : ""
          }`}
        >
          {isLoading ? "Creating...." : "Create"}
        </button>
      </div>
    </div>
  );
};

export default CreateProject;
