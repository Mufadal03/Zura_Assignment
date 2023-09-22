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
import UploadPageRe from "../components/upload/UploadPageRe";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />

      {/* Login Route */}
      <Route path="/login" element={<Login />} />

      {/* Signup Route */}
      <Route path="/signup" element={<Signup />} />

      {/* Account Route */}
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

      {/* Widget Configuration Route */}
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

      {/* Upload Page Redirect */}
      <Route path="/project/upload" element={<UploadPageRe />} />

      {/* Upload Route with Project ID */}
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

      {/* Edit Description Route */}
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

      {/* Wildcard Route (Page does not exist) */}
      <Route path="*" element={<h1>Page does not Exist</h1>} />
    </Routes>
  );
};

export default AllRoutes;
