import React from "react";
import AuthContextProvider from "./Functions/authContext";
import MainRoutes from "./Routers/MainRoutes";


function App() {
  return (
    <div className="App">
    <AuthContextProvider>
      <MainRoutes/>
    </AuthContextProvider>
    </div>
  );
}

export default App;
