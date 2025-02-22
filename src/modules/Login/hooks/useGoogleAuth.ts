// hooks/useGoogleAuth.ts
import { useState, useEffect } from "react"
import { getToken, setToken, removeToken, getUser, setUser, removeUser } from "../helpers/storage"
import { User } from "../interfaces/User"
import { useNavigate } from "react-router-dom"

export const useGoogleAuth = () => {
  const [user, setUserState] = useState<User | null>(null)
  const [token, setTokenState] = useState<string | null>(null)
  const navigate = useNavigate()
  useEffect(() => {
    const savedToken = getToken()
    const savedUser = getUser()
    if (savedToken && savedUser) {
      setTokenState(savedToken)
      setUserState(savedUser)
    }
  }, [])

  const login = (userToken: string) => {
    const userInfo: User = JSON.parse(atob(userToken.split(".")[1]))
    setUserState(userInfo)
    setTokenState(userToken)
    setToken(userToken)
    setUser(userInfo)
    navigate("/home")
  }

  const logout = () => {
    setUserState(null)
    setTokenState(null)
    removeToken()
    removeUser()
    navigate("/")
  }

  return { user, token, login, logout }
}
