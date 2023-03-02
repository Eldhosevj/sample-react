import React from 'react';
import Layout from '../Layout/index';
import {OidcSecure,useOidcIdToken} from '@axa-fr/react-oidc'

const Admin = () => {
const {idToken,idTokenPayload} =useOidcIdToken()
console.log(idTokenPayload)
    return(
        <OidcSecure>
        <Layout>Admin</Layout>
        </OidcSecure>
    );
};
export default Admin