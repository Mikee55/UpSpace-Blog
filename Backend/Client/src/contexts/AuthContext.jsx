import React, { createContext, useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const checkCookies = () => {
      if (Object.keys(cookies).length > 0) {
        const token = cookies.userToken;

        console.log(token);
        try {
          const decodedToken = jwtDecode(token);
          setUser(decodedToken); // Set user with decoded data
          setIsLoggedIn(true);
          setToken(token);

          console.log(decodedToken);
        } catch (error) {
          console.error("Error decoding token:", error);
          // Handle token decoding error (e.g., clear cookies)
          removeCookie("userToken");
        }
      } else {
        setIsLoggedIn(false);
      }
      console.log(user);
      console.log();
      console.log(isLoggedIn);
    };

    checkCookies();
  }, [isLoggedIn]); // Observe changes to the cookies object

  const login = (userData) => {
    console.log(userData);
    setIsLoggedIn(true);
    setUser(userData);
    setCookie("userToken", userData.token, { path: "/", httpOnly: false });
    console.log(user);
    console.log(cookies);
  };

  const logout = () => {
    setShowLogoutModal(true);
  };

  const logoutConfirm = () => {
    setIsLoggedIn(false);
    setUser(null);
    setShowLogoutModal(false);
    removeCookie("userToken");
  };

  const logoutCancel = () => {
    setShowLogoutModal(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, token }}>
      {children}
      <Modal
        show={showLogoutModal}
        onHide={logoutCancel}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-32 bg-gray-100  bg-opacity-90 rounded-2xl"
      >
        <Modal.Header closeButton className="flex justify-center p-5">
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex justify-center p-5">
          Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <button
            variant="primary"
            onClick={logoutConfirm}
            className="m-4 p-5 border-2 border-sky-700 rounded-lg"
          >
            Yes
          </button>
          <button
            variant="secondary"
            onClick={logoutCancel}
            className="m-4 p-5 border-2 border-sky-700 rounded-lg"
          >
            No
          </button>
        </Modal.Footer>
      </Modal>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used in Auth Provider");
  }
  return context;
};

export default AuthContext;
