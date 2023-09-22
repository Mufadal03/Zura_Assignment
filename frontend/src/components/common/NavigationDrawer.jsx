import React from "react";
import { ActiveSetting, Logo, Menus, Setting } from "../../assets";
import { NavLink } from "react-router-dom";

const NavigationDrawer = () => {
  return (
    //   Container for Navigation Drawer
    <div className="bg-light-purple w-1/4 min-h-screen max-h-auto p-[1rem] relative font-Roboto">
      <div className="flex items-center">
        <img src={Logo} alt="logo" />
        <h1 className="text-purple font-extrabold text-[2.3rem]">LAMA</h1>
      </div>
      <h1 className="px-[.9rem]">Sample project</h1>
      {/* Menu Items */}
      <div className="flex flex-col gap-3 mt-2">
        {Menus.map((el, i) => {
          return (
            <NavLink
              key={i.toString(2)}
              to={el.link}
              className={({ isActive }) =>
                isActive
                  ? `p-[.9rem] bg-purple rounded-full text-white`
                  : `p-[.9rem] hover:bg-light-gray rounded-full`
              }
            >
              {({ isActive }) => (
                <nav className={"flex gap-1 items-center"}>
                  <p
                    className={
                      isActive
                        ? "rounded-full px-2 bg-activeBlack text-black"
                        : "rounded-full px-2 bg-gray text-black"
                    }
                  >
                    {i + 1}
                  </p>
                  <p className="text-md"> {el.name}</p>
                </nav>
              )}
            </NavLink>
          );
        })}
      </div>
      <div className="absolute bottom-0 left-0 w-full p-[1rem]">
        {/* Account settings link */}
        <NavLink
          to="/account"
          className={({ isActive }) =>
            isActive
              ? "p-1 gap-[.3rem] rounded-full flex items-center bg-purple text-white"
              : "p-1 gap-[.3rem] rounded-full flex items-center  hover:bg-light-gray"
          }
        >
          {({ isActive }) => (
            <>
              <img
                className="h-[40px]"
                src={isActive ? ActiveSetting : Setting}
                alt="SettingIcon"
              />
              <p className="text-md">Settings</p>
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationDrawer;
