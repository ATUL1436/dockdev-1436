import { useEffect, useState } from "react";
import { privateApi } from "../services/api";

function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    privateApi
      .get("/dashboard/")
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage("Unauthorized"));
  }, []);

  return <h2>{message}</h2>;
}

export default Dashboard;
