import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function Profile() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await signOut(auth);
      navigate("/login", { replace: true });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <section className="panel">
      <h1>Profile Page</h1>
      <p>Logged-in email: <strong>{currentUser?.email}</strong></p>
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
}
