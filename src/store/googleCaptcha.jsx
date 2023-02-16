import {GoogleReCaptcha, GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

export default function MGoogleRecaptcha() {
    return(
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.reCaptchaKey}
        >
            <GoogleReCaptcha key={'captcha'} onVerify={(token) => console.log(token)}/>
        </GoogleReCaptchaProvider>
    )
}