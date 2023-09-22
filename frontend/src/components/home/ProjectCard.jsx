import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { calculateTimeDifferenceWithIST } from "../../assets";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ name, subprojects, createdAt, updatedAt, _id }) => {
  const navigate = useNavigate();
  const [AvatarBg, setAvatarBg] = useState("");

  useEffect(() => {
    // Generate a random background color for the Avatar component
    const colors = ["#7E22CE", "#F8A01D", "#6366F1"];
    setAvatarBg(colors[Math.floor(Math.random() * 3)]);
  }, []);

  const handleNavigate = () => {
    // Navigate to the project upload page when the card is clicked
    navigate(`project/upload/${_id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      style={{
        border: "1px solid #999",
        boxShadow:
          "0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00)",
      }}
      className="cursor-pointer flex gap-4 p-2 rounded-2xl"
    >
      <div>
        {/* Avatar with a random background color */}
        <Avatar color={AvatarBg} name={name} size="120" round={"10px"} />
      </div>
      <div className="flex flex-col justify-between">
        <div className="h-[70%] flex flex-col gap-1 justify-center">
          {/* Project name, truncated if too long */}
          <h3 className="text-purple font-[700] text-2xl">
            {name.length > 15 ? `${name.slice(0, 15)}....` : name}
          </h3>
          <p className="text-sm ">
            {/* Display the number of subprojects as "Episodes" */}
            {subprojects.length}{" "}
            {subprojects.length > 1 ? "Episodes" : "Episode"}
          </p>
        </div>
        <div>
          {/* Calculate and display the time difference since the last edit */}
          <p className="text-sm text-[#969696]">
            Last edited {calculateTimeDifferenceWithIST(updatedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
