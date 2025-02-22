import { useEffect } from "react";

const Login = () => {
    useEffect(() => {
        localStorage.setItem("isAuthenticated", "true")
      }, []);
    return(
        <>
            Hola soy Login         
        </>
    )
}

export default Login