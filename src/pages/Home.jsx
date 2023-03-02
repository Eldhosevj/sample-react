import React from 'react';
import Layout from '../Layout/index';
import {useOidc} from '@axa-fr/react-oidc'
import axios from "axios"

const Home = () => {
const { login, logout, renewTokens, isAuthenticated } = useOidc();
const fetchAPIs=()=>{
 
       axios.get("/react")
       .then(()=>{
        alert("sucees")
       }).catch(()=>{
        alert("failed")
       })
   
    
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
