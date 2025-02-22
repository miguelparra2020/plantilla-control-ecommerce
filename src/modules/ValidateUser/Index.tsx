import { useTranslation } from "react-i18next"
import { useValidateUser } from "./hooks/useValidateUser"
import { Spinner } from "../../components/global/Spinner"

const IndexValidateUser = () => {
    const {t} = useTranslation()
    const {userAuthorizated} = useValidateUser()

    return (
        <>
        <div className="w-full flex items-center justify-center">
            {!userAuthorizated ? 
                <div className="p-4 text-lg text-gray-800 rounded-lg bg-gray-50" role="alert">
                        <span className="font-medium">{t('Validando', { ns: 'common' })}</span> <Spinner color="gray"/>
                </div> : 
                <div>Usuario Autorizado</div>} 
        </div>
             
        </>
    )
}

export default IndexValidateUser