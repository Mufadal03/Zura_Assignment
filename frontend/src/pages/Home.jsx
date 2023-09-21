import React, { useEffect } from "react";
import { Logo, Notification, SettingMain } from "../assets";
import Projects from "../components/home/Projects";
import LandingPage from "../components/home/LandingPage";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../redux/app/action";

const Home = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.appReducer);
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  return (
    <div className="h-screen font-Roboto">
      <div className="flex items-center p-1">
        <img src={Logo} alt="Logo" />
        <h1 className="text-[2rem] font-extrabold text-purple font-Jarakata ">LAMA.</h1>
      </div>
      <div className="flex justify-end max-w-[95%] mx-auto gap-2">
        <img src={SettingMain} alt="setting" className="h-[2.5rem]" />
        <img src={Notification} alt="notification" className="h-[2.5rem]" />
      </div>
      {projects?.length > 0  ? <Projects /> : <LandingPage />}
    </div>
  );
};

export default Home;
