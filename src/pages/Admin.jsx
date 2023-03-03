import React from 'react';
import Layout from '../Layout/index';
import { OidcSecure } from "@axa-fr/react-oidc";
const Admin = () => {
    return(
        <OidcSecure>
        <Layout>Admin</Layout>
        </OidcSecure>
    );
};
export default Admin