import { useAuth } from "../context/AuthContext.jsx";

export default function Dashboard() {
  const { currentUser } = useAuth();
  return (
    <section className="panel">
      <h1>Welcome to Dashboard</h1>
      <p>You are logged in as: <strong>{currentUser?.email}</strong></p>
    </section>
  );
}
