import { GoogleOAuthProvider } from "@react-oauth/google"
import { useGoogleAuth } from "../hooks/useGoogleAuth"
import GoogleLoginButton from "../components/GoogleLoginButton"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const GoogleAuth = () => {
  const { user, login } = useGoogleAuth()
  const navigate = useNavigate()
  useEffect(()=>{
    if(user){
      navigate("/validateuser")
    }
  })

  return (
    <GoogleOAuthProvider clientId={"389059903936-crh2qopn8c163qlk9ucfspglb6uep88o.apps.googleusercontent.com"}>
      {!user && (
        <div className="w-full flex items-center justify-center">
<section className="bg-gray-50">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                Bienvenido a nuestro aplicativo para el control de ecommerce
              </h1>
              <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
                Iniciar sesión es necesario para acceder a los contenidos relacionados con el usuario y su comercio electrónico
              </p>
            </div>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900">Iniciar sesión con tu cuenta de Google</h2>
              <GoogleLoginButton onSuccess={login} onError={() => console.error("Error al iniciar sesión")} />
            </div>
          </div>
        </section>
        </div>
        
      )}
    </GoogleOAuthProvider>
  )
}

export default GoogleAuth
