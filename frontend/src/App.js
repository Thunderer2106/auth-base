import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Layout, Button, message } from "antd";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const { Header, Content } = Layout;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    message.success("You have been signed out.");
  };

  return (
    <Router>
      <Layout>
        <Header style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ color: "white" }}>MyApp</h1>
          {token && (
            <Button onClick={handleLogout} type="primary">
              Sign Out
            </Button>
          )}
        </Header>
        <Content style={{ padding: "20px" }}>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route
              path="/profile"
              element={
                token ? <Profile token={token} /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
