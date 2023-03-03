import React from "react";
import Layout from "../Layout/index";
import axios from "axios";
import { json } from "react-router-dom";

const Home = () => {
  const fetchAPIs = async () => {
    const token = window.localStorage.getItem("token");
    alert(token);
    try {
      const apiUrl = "/api/DocumentManagement/GetLast30DaysDocumentRequests";

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();
      alert(JSON.stringify(responseData));
      //res.send("verified")
    } catch (error) {
      alert();
    }
  };

  const fetchToken = () => {
    axios
      .get("http://localhost:3000/token")
      .then((res) => {
        if (res && res.data && res.data.token) {
          window.localStorage.setItem("token", res.data.token);
        }
      })
      .catch((error) => {
        alert("error");
      });
  };

  const fetchTokenDirectly = async () => {
    try {
      const clientId = "fsams.ro";

      const clientSecret = "secret";

      const username = "FSTNRTESTUSER";

      const password = "P@ssw0rd!@#";

      const data = new URLSearchParams();

      data.append("grant_type", "password");

      data.append("client_id", clientId);

      data.append("client_secret", clientSecret);

      data.append("username", username);

      data.append("password", password);

      const response = await fetch("https://sts-lle.atsol.com/connect/token", {
        method: "POST",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },

        body: data.toString(),
      });

      const tokenData = await response.json();

      if (tokenData) {
        window.localStorage.setItem("token", tokenData);
        alert(tokenData);
        return;
      } else {
        alert("token is not recieved");
      }
    } catch (err) {
      alert("error");
      alert(err);
    }
  };
  return (
    <Layout>
      Home
      <button onClick={() => fetchAPIs()}>
        GetLast30DaysDocumentRequests{" "}
      </button>
      <button
        onClick={() => {
          fetchToken();
        }}
      >
        FetchTocken
      </button>
      <button
        onClick={() => {
          fetchTokenDirectly();
        }}
      >
        FetchTockenDirectly
      </button>
    </Layout>
  );
};
export default Home;
