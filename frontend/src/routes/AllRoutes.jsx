import React from "react";
import { Route, Routes } from "react-router-dom";
import Wrapper from "../components/HOC/Wrapper";
import Acccount from "../pages/Acccount";
import Upload from "../pages/Upload";
import Home from "../pages/Home";
import EditDescription from "../components/upload/EditDescription";
import WidgetConfiguration from "../pages/WidgetConfiguration";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/account"
        element={
          <Wrapper>
            <Acccount />
          </Wrapper>
        }
      />
      <Route
        path="/project/configuration"
        element={
          <Wrapper>
            <WidgetConfiguration />
          </Wrapper>
        }
      />
      <Route
        path="/project/upload/:id"
        element={
          <Wrapper>
            <Upload />
          </Wrapper>
        }
      />
      <Route
        path="/project/upload/:id/edit/:id"
        element={
          <Wrapper>
            <EditDescription />
          </Wrapper>
        }
      />
      <Route path="*" element={<h1>Page does not Exists</h1>} />
    </Routes>
  );
};

export default AllRoutes;
