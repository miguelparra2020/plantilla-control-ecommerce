import { useEffect, useState } from "react"

export const useValidateUser = () => {
    const [userAuthorizated, setUserAuthorizated] = useState<boolean>(false)
    useEffect(()=>{
        setTimeout(() => {
            setUserAuthorizated(true)
        }, 10000);
    })
    return {userAuthorizated}
}