import React from "react";
import { Notification, SettingMain } from "../assets";
import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import General from "../components/widgetConfiguration/General";
import Display from "../components/widgetConfiguration/Display";

const WidgetConfiguration = () => {
  return (
    <div className="w-3/4 p-5">
      {/* BREADCRUM HERE MAKE IT DYNAMIC */}
      <div className="flex justify-between border-2">
        <div>Breadcrum here</div>
        <div className="flex gap-2">
          <img src={SettingMain} alt="setting" className="h-[2.5rem]" />
          <img src={Notification} alt="notification" className="h-[2.5rem]" />
        </div>
      </div>
      <div className="mt-1 py-2">
        <h1 className="text-4xl font-bold text-purple mb-5">Configuration</h1>
        <div className="border-2 flex">
          <Tabs border={"2px solid red"} w={"full"}>
            <TabList>
              <Tab>General</Tab>
              <Tab>Display</Tab>
              <Tab>Advanced</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <General />
              </TabPanel>

              <TabPanel>
                <Display />
              </TabPanel>
              
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default WidgetConfiguration;
