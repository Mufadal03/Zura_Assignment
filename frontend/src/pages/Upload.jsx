import React, { useEffect, useState } from "react";
import { Notification, SettingMain } from "../assets";
import UploadPodcast from "../components/upload/UploadPodcast";
import PoadcastListing from "../components/upload/PoadcastListing";
import { useParams } from "react-router-dom";
import { api } from "../api";
const initialState = {
  name: "",
  subProjects: [],
};
const Upload = () => {
  const [singleProject, setSingleProject] = useState(initialState);
  const { id } = useParams();

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
  }, [id]);
  return (
    <div className="w-3/4 p-5">
      <div className="flex justify-between border-2">
        <div>Breadcrum here</div>
        <div className="flex gap-2">
          <img src={SettingMain} alt="setting" className="h-[2.5rem]" />
          <img src={Notification} alt="notification" className="h-[2.5rem]" />
        </div>
      </div>
      {singleProject.subProjects?.length > 0 ? (
        <PoadcastListing
          name={singleProject.name}
          subProjects={singleProject.subProjects}
          handleDelete={handleDelete}
          getSingleProject={getSingleProject}
        />
      ) : (
        <UploadPodcast
          name={singleProject.name}
          getSingleProject={getSingleProject}
        />
      )}
    </div>
  );
};

export default Upload;
