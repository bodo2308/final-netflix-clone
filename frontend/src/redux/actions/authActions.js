export const STORE_USER = "STORE_USER";
export const LOG_OUT = "LOG_OUT";


// Login action creator

export const storeUSER = (userData) => {
  return {
    type: STORE_USER,
    userData: userData,
  };
};

// Logout action creator
export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
