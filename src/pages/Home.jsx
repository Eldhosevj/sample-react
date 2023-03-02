import React from 'react';
import Layout from '../Layout/index';
import {useOidc} from '@axa-fr/react-oidc'
import axios from "axios"

const Home = () => {
const { login, logout, renewTokens, isAuthenticated } = useOidc();
const fetchAPIs=async ()=>{
 
    try{  
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
  
        const response = await fetch("/connect/token", {
          method: "POST",
  
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
  
          body: data.toString(),
        });
  
        const tokenData = await response.json();
  
      alert(tokenData.access_token)
  
    }
    catch(error){
    alert("error")
    }
   
    
}

    return(<Layout>
       Home
       <button onClick={()=>login("/admin")}>Login</button>
       <button onClick={()=>logout()}>LogOut</button>
       <button onClick={()=>renewTokens()}>renewTokens</button>
       <button onClick={()=>fetchAPIs()}>FetchAPI </button>

    </Layout>);
};
export default Home
