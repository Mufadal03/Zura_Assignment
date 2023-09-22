import React, { useEffect, useState } from "react";
import { setCurrentProjectId } from "../assets";
import UploadPodcast from "../components/upload/UploadPodcast";
import PoadcastListing from "../components/upload/PoadcastListing";
import { useParams } from "react-router-dom";
import { api } from "../api";
import NavigationBar from "../components/common/NavigationBar";

const initialState = {
  name: "",
  subProjects: [],
};

const Upload = () => {
  const [singleProject, setSingleProject] = useState(initialState);
  const { id } = useParams();

  // Function to fetch and set project details
  const getSingleProject = async () => {
    try {
      const { response: project } = await api.get(`/project/${id}`);
      setSingleProject({
        ...singleProject,
        name: project.name,
        subProjects: project.subprojects,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle deleting subprojects
  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`/subProject/delete/${id}`);
      if (res.success) {
        getSingleProject();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProject();
    setCurrentProjectId(id); // Set the current project ID
  }, [id]);
  return (
    <div className="w-3/4 p-5 font-Roboto">
      <NavigationBar /> {/* Display a navigation bar */}
      {singleProject.subProjects?.length > 0 ? (
        // If there are subprojects, display the project listing component
        <PoadcastListing
          name={singleProject.name}
          subProjects={singleProject.subProjects}
          handleDelete={handleDelete}
          getSingleProject={getSingleProject}
        />
      ) : (
        // If there are no subprojects, display the upload component
        <UploadPodcast
          name={singleProject.name}
          getSingleProject={getSingleProject}
        />
      )}
    </div>
  );
};

export default Upload;
