import { GoogleLogin } from "@react-oauth/google";
import {IPropsGoogleLoginButton} from "../interfaces/GoogleLoginButton"

const GoogleLoginButton = ({ onSuccess, onError }: IPropsGoogleLoginButton) => {
  return <GoogleLogin onSuccess={(res) => onSuccess(res.credential!)} onError={onError} />
}

export default GoogleLoginButton




