// hooks/useGoogleAuth.ts
import { useState, useEffect } from "react"
import { getToken, setToken, removeToken, getUser, setUser, removeUser } from "../helpers/storage"
import { User } from "../interfaces/User"

export const useGoogleAuth = () => {
  const [user, setUserState] = useState<User | null>(null)
  const [token, setTokenState] = useState<string | null>(null)

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
    window.location.reload()
  }

  const logout = () => {
    setUserState(null)
    setTokenState(null)
    removeToken()
    removeUser()
    window.location.reload()
  }

  return { user, token, login, logout }
}
