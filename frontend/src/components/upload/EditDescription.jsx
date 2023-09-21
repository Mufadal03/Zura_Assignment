import React, { useEffect, useRef, useState } from "react";
import { EditIcon, Notification, SearchIcon, SettingMain } from "../../assets";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";

const EditDescription = () => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");
  const [originalContent, setOriginalContent] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const getProjectDescription = async () => {
    try {
      const singleProject = await api.get(`/subProject/${id}`);
      setOriginalContent(singleProject.response.description);
      setDescription(singleProject.response.description);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleSave = async () => {
    try {
      const response = await api.patch(`/subProject/edit/${id}`, {
        description,
      });
      console.log(response);
      const backToProjectUrl = location.pathname
        .split("/")
        .slice(1, 4)
        .join("/");
      navigate(`/${backToProjectUrl}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjectDescription();
  }, []);
  return (
    <div className="w-3/4 p-5 font-Roboto">
      <div className="flex justify-between border-2">
        <div>Breadcrum here</div>
        <div className="flex gap-2">
          <img src={SettingMain} alt="setting" className="h-[2.5rem]" />
          <img src={Notification} alt="notification" className="h-[2.5rem]" />
        </div>
      </div>
      <div className="mt-1">
        <div className="flex justify-between">
          <h1 className="text-purple font-[700] text-4xl py-2 mb-2">
            Edit Transcript
          </h1>

          {isEditing && (
            <div className="flex items-center gap-2 ">
              <button
                onClick={() => setDescription(originalContent)}
                className="border-2 border-[#FF274C] px-10 rounded-md font-bold text-[#FF274C] py-3"
              >
                Discard
              </button>
              <button
                onClick={handleSave}
                className="border-2 px-10 rounded-md font-bold text-white bg-activeBlack py-3"
              >
                Save & Exit
              </button>
            </div>
          )}
        </div>
        <div className="border-2 border-[#7E22CE] min-h-[70vh] rounded-2xl p-3">
          <div className="flex justify-between">
            <button
              onClick={handleEdit}
              className="flex items-center gap-1 bg-[#3C3C3C] text-white px-5 py-1.5 rounded-full text-xs text-center"
            >
              <img className="h-[15px]" src={EditIcon} alt="editIcon" />
              Edit mode
            </button>
            <img
              style={{ border: "2px solid #7E22CE" }}
              className="rounded-full p-1 h-[32px] bg-light-purple"
              src={SearchIcon}
              alt="searchIcon"
            />
          </div>

          <div className="p-2">
            {isEditing ? (
              <div>
                <textarea
                  className="w-full h-full outline-none border-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={10}
                />
              </div>
            ) : (
              <div>{description}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDescription;
