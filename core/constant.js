

const local = {
    name: 'development',
    serviceUrl: 'http://127.0.0.1:3038/',
//        adminUrl: 'http://192.168.0.78:3017/',
    server: {
        host: '127.0.0.1',
        port: '3038'
    },
    database: {
        name: 'campus_recruiter'
    },
};

const messages= {
    "emailNotFound": "This email does not exist in our community.Please check it out or contact to P.O.",
    "emailAlreadyVerified": "Upsss seems like this email is already verified.",
    "emailOtpSend": "OTP has been sent to your registered email address. Please verify the OTP to use app.",
    "otpEnteredIncorrect": "You have entered an incorrect OTP.",
    "otpExpired": "Your OTP has expired. Please generate a new OTP by clicking on resend OTP button.",
    "otpVerifiedSuccessfully": "OTP verified successfully.",
    "accountDisabledByAdmin": "Your account has been disabled for violating our Terms of Use. Please contact Administrator at for any queries.",
    "editNotificationSend": "Your Edit request has been sent to the admin. Details will be update soon after verifying from P.O.",
    "editNotificationToAdmin": "<b>@name@</b> has requested to edit his/her profile details.",
    "cvUploadSuccess": "Your CV has been uploaded successfully.",
    "dateNotAvailable": "The Date of test is not finalized by admin till now. Please contact admin.",
    "testAlreadyStart": "You are seems to be late.Test started already.",
    "emailNotVerifiedInLogin": "Your email is not verified. Please verify your email to login.",
    "noOrganisationTest": "No test for today",
    "queryAdded": "Your query has been submitted successfully.Please check email for response"
};
global.fav_icon_path = "/images/favicon.ico";
global.logo_path = "/images/biglogo.png";

export {local,messages}

// if you want to import a lot of modules send it in curly braces