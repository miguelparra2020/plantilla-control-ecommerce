import { useTranslation } from "react-i18next"
import { useValidateUser } from "./hooks/useValidateUser"
import { Spinner } from "../../components/global/Spinner"
import { useGoogleAuth } from "../Login/hooks/useGoogleAuth"
import { Alert } from "../../components/global/Alert"

const IndexValidateUser = () => {
    const {t} = useTranslation()
    const {userAuthorizated,userLoading} = useValidateUser()
    const { user } = useGoogleAuth()

    return (
        <>
        <div className="w-full flex items-center justify-center">
            {userLoading && <Alert color="gray">{t('ValidateUser.Greeting', { ns: 'common' })}!, {user?.name}. {t        ('ValidateUser.Validating', { ns: 'common' })} <Spinner color="gray"/>
                </Alert>}
            {(userAuthorizated && !userLoading) && 
                <Alert color="green">{user?.name}. {t('ValidateUser.UserAuthorizatedTrue', { ns: 'common' })}<Spinner color="green"/>
              </Alert> }
              { (!userAuthorizated  && !userLoading) &&
                <Alert color="red">{user?.name} {t('ValidateUser.UserAuthorizatedFalse', { ns: 'common' })}
              </Alert>} 
        </div>
             
        </>
    )
}

export default IndexValidateUser