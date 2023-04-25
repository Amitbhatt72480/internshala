import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Account from "./components/Account";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
