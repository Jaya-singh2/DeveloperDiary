import React from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import queryString from "query-string";
import LoginService from "../../services/loginService";

function Dashboard({location}) {
  const {code} = queryString.parse(location.search);
  const {authData, setAuthData}=React.useState("none")
  React.useEffect(()=>{
    LoginService.oauthLogin(code).then((res)=>{
      setAuthData(res.data)
    }).catch((err)=>{
      setAuthData(err)
    })
  },[code])
  return (
    <>
      <div className="App">
        <Header />
        <Sidebar />
        <div className="content">
          <div className="data">
            {authData}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
