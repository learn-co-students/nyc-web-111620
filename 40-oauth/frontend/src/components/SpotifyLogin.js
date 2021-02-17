import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function SpotifyLogin({ setCurrentUser }) {
  const { token } = useParams();
  const history = useHistory();

  // autologin
  useEffect(() => {
    // GET /me
    if (token) {
      localStorage.setItem("token", token);

      fetch("http://localhost:3000/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => {
          // set the user in state
          setCurrentUser(user);
          history.push("/");
        });
    }
  }, [token]);

  return <div>SpotifyLogin</div>;
}

export default SpotifyLogin;
