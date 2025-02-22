import { useEffect, useState } from "react"

export const useValidateUser = () => {
    const [userAuthorizated, setUserAuthorizated] = useState<boolean>(false)
    const [userLoading, setUserLoading] = useState<boolean>(false)
    useEffect(() => {
        setUserLoading(true)
        setTimeout(() => {
            setUserLoading(false)
            setUserAuthorizated(true)
        }, 10000)
        setTimeout(() => {
            setUserAuthorizated(false)
        }, 20000)
    }, [])
    return {userAuthorizated, userLoading}
}