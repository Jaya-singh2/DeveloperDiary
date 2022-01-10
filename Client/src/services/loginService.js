import axios from "axios";

class LoginService {

   login = async(tokenId) =>{
       const headers={
        "Content-Type": "application/json",
          }
        const data={token:tokenId}
        return await axios.post("http://localhost:2000/loginWithGoogle",data,{
         headers:headers,
        })
    }
  oauthLogin = async(code) =>{
      const headers={
       "Content-Type": "application/json",
         }
       const data={code:code}
       return await axios.post("http://localhost:2000/oauthLogin",data,{
        headers:headers,
       })
   }
}

export default new LoginService()
