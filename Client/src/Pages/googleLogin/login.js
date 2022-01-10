import GoogleLogin from "react-google-login";
import React from "react";
import LoginService from "../../services/loginService";
const Login = () => {
    const handleFailure=(result)=>{
        console.log(result);
      }
    const handleLogin=(googleData)=>{
        const data={
            name:googleData.profileObj.name,
            email:googleData.profileObj.email,
        }
        console.log(data);
        const tokenId=googleData.tokenId
        LoginService.login(tokenId).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
      }
    return (
        <>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )
}

export default Login;