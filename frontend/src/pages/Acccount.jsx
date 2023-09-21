import React, { useEffect, useRef, useState } from "react";
import { Notification, SettingMain, profileImg } from "../assets";
import { api } from "../api";
const initialUserState = {
  username: "",
  userEmail: "",
};
const Acccount = () => {
  const [userData, setUserData] = useState(initialUserState);
  const [originalUsername, setOriginalUsername] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const userNameRef = useRef();
  const getUserDetail = async () => {
    try {
      const { response } = await api.get("/user");
      if (response) {
        setUserData({
          ...userData,
          username: response.username,
          userEmail: response.email,
        });
        setOriginalUsername(response.username);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnEditing = () => {
    if (isEditing) {
      setIsEditing(false);
      return;
    }
    setIsEditing(true);
    userNameRef.current.focus();
  };
  const handleChange = (e) => {
    setUserData({
      ...userData,
      username: e.target.value,
    });
  };
  const handleDiscard = () => {
    setUserData({
      ...userData,
      username: originalUsername,
    });
    setIsEditing(false);
  };
  const handleSave = async() => {
    try {
      const res = await api.patch('/user',{username:userData.username})
      if (res.success) {
        setIsEditing(false)
      }
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getUserDetail();
  }, []);
  return (
    <div className="w-3/4 p-5 font-Roboto">
      {/* BREADCRUM HERE MAKE IT DYNAMIC */}
      <div className="flex justify-between border-2">
        <div>Breadcrum here</div>
        <div className="flex gap-2">
          <img src={SettingMain} alt="setting" className="h-[2.5rem]" />
          <img src={Notification} alt="notification" className="h-[2.5rem]" />
        </div>
      </div>

      <div className="mt-1 py-2">
        <h1 className="text-4xl text-purple mb-5 font-Roboto font-[800] ">
          Account Settings
        </h1>
        <div className="flex justify-between">
          <img className="h-[150px]" src={profileImg} alt="profile" />
          <div className="flex flex-col justify-center w-[40%] gap-1">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold capitalize">User Name</p>
                <button
                  onClick={handleOnEditing}
                  className="border-2 px-5 rounded-md text-sm text-white bg-activeBlack py-1"
                >
                  Edit
                </button>
              </div>
              <input
                ref={userNameRef}
                className=" my-1 p-2 ring-1 ring-gray placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full focus:border-none rounded-sm focus:ring-1"
                type="text"
                readOnly={isEditing ? false : true}
                // defaultValue={userData.username}
                value={userData.username}
                onChange={handleChange}
              />
              {isEditing && (
                <div className="flex items-center gap-2 justify-end">
                  <button
                    onClick={handleDiscard}
                    className="border-2 border-[#FF274C] px-5 text-sm rounded-md font-bold text-[#FF274C] py-1"
                  >
                    Discard
                  </button>
                  <button
                    onClick={handleSave}
                    className="border-2 px-5 rounded-md text-sm font-bold text-white bg-activeBlack py-1"
                  >
                    Save & Exit
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center w-[42%] gap-1">
            <p className="text-lg font-bold capitalize">user Email</p>
            <input
              className="p-2 ring-1 ring-gray  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full focus:border-none rounded-sm focus:ring-1"
              type="text"
              defaultValue={userData.userEmail}
              readOnly
            />
          </div>
        </div>

        <h1 className="font-bold text-purple text-4xl mt-6">Subscriptions</h1>
        <div
          style={{
            background: "linear-gradient(90deg, #7E22CE 0.95%, #460281 99.9%)",
          }}
          className="mt-4 flex justify-between px-8 py-5 rounded-md items-center"
        >
          <p className="text-2xl font-medium px-3 text-white">
            You are currently on the{" "}
            <span className="underline">Ques AI Basic Plan!</span>
          </p>
          <button className="px-7 font-[700] text-purple bg-white rounded-md py-2">
            Upgrade
          </button>
        </div>
        <p className="text-[#FF274C] font-[700] mt-1 underline">
          Cancel Subscription
        </p>
      </div>
    </div>
  );
};

export default Acccount;
