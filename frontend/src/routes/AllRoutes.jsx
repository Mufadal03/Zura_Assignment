import React from "react";
import { Route, Routes } from "react-router-dom";
import Wrapper from "../components/HOC/Wrapper";
import Acccount from "../pages/Acccount";
import Upload from "../pages/Upload";
import Home from "../pages/Home";
import EditDescription from "../components/upload/EditDescription";
import WidgetConfiguration from "../pages/WidgetConfiguration";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import { PrivateRoutes } from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/account"
        element={
          <PrivateRoutes>
            <Wrapper>
              <Acccount />
            </Wrapper>
          </PrivateRoutes>
        }
      />
      <Route
        path="/project/configuration"
        element={
          <PrivateRoutes>
            <Wrapper>
              <WidgetConfiguration />
            </Wrapper>
          </PrivateRoutes>
        }
      />
      <Route
        path="/project/upload/:id"
        element={
          <PrivateRoutes>
            <Wrapper>
              <Upload />
            </Wrapper>
          </PrivateRoutes>
        }
      />
      <Route
        path="/project/upload/:id/edit/:id"
        element={
          <PrivateRoutes>
            <Wrapper>
              <EditDescription />
            </Wrapper>
          </PrivateRoutes>
        }
      />
      <Route path="*" element={<h1>Page does not Exists</h1>} />
    </Routes>
  );
};

export default AllRoutes;
