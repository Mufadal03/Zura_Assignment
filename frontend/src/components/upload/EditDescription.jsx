import React, { useEffect, useRef, useState } from "react";
import { EditIcon, Notification, SearchIcon, SettingMain } from "../../assets";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";
import NavigationBar from "../common/NavigationBar";

const EditDescription = () => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");
  const [originalContent, setOriginalContent] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [getContentLoading,setContentLoading]=useState(false)

  // Function to fetch the project description
  const getProjectDescription = async () => {
    try {
      setContentLoading(true);
      const singleProject = await api.get(`/subProject/${id}`);
      setOriginalContent(singleProject.response.description);
      setDescription(singleProject.response.description);
      setContentLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to toggle editing mode
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Function to save changes and exit editing mode
  const handleSave = async () => {
    try {
      setIsLoading(true);
      const response = await api.patch(`/subProject/edit/${id}`, {
        description,
      });
      setIsLoading(false);
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
      <NavigationBar />
      <div className="mt-1">
        <div className="flex justify-between">
          <h1 className="text-purple font-[700] text-4xl py-2 mb-2">
            Edit Transcript
          </h1>

          {isEditing && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDescription(originalContent)}
                className="border-2 border-[#FF274C] px-10 rounded-md font-bold text-[#FF274C] py-3"
              >
                Discard
              </button>
              <button
                disabled={isLoading}
                onClick={handleSave}
                className={`border-2 px-10 rounded-md font-bold text-white bg-activeBlack py-3 ${isLoading?"cursor-not-allowed":"cursor-pointer"}`}
              >
                {isLoading ? "Saving Data....." : " Save & Exit"}
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
              <div>
                {getContentLoading
                  ? "Loading Content Please Wait....."
                  : description}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDescription;
