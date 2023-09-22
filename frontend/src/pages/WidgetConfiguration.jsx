import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import General from "../components/widgetConfiguration/General";
import Display from "../components/widgetConfiguration/Display";
import NavigationBar from "../components/common/NavigationBar";

const WidgetConfiguration = () => {
  return (
    <div className="w-3/4 p-5">
      <NavigationBar /> {/* Display a navigation bar */}
      <div className="mt-1 py-2">
        <h1 className="text-4xl font-bold text-purple mb-5">Configuration</h1>
        <div className=" flex">
          <Tabs w={"full"}>
            {/* TabList for selecting configuration categories */}
            <TabList>
              <Tab>General</Tab>
              <Tab>Display</Tab>
              <Tab>Advanced</Tab>
            </TabList>

            <TabPanels>
              {/* TabPanel for each configuration category */}
              <TabPanel>
                {/* Render the General configuration component */}
                <General />
              </TabPanel>

              <TabPanel>
                {/* Render the Display configuration component */}
                <Display />
              </TabPanel>

              {/* Additional TabPanels for other configuration categories */}
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default WidgetConfiguration;
