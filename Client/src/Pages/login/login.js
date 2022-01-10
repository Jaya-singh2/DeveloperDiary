import React from "react";

const Login = () => {
    const handleLogin = async () => {

       const domain="dev-tj093c8a.us.auth0.com"
       const audience="https://www.oauth-api.com"
       const  scope="read:oauth"
       const  clientId="9XRnpD3X3z5z1BXpd8pJb2nMzH0eFweN"
       const  responseType="code"
       const  redirectUri="http://localhost:3000/app" 
       
       const res= await fetch(
        `https://${domain}/authorize?`+
        `audience=${audience}&`+
        `scope=${scope}&`+
        `response_type=${responseType}&`+
        `client_id=${clientId}&`+
        `redirect_uri=${redirectUri}`,{
            redirect:"manual",
        });
    //window.location.replace(res.url)
    }

    return (
        <>
        <button onClick={()=>handleLogin()}>
            Log In
        </button>
        </>
    )
}

export default Login;