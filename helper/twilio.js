// twilio accout credentials 
const config = require("../config");

var accountSid = config.twilio.accountSid;  //test credentials
var authToken = config.twilio.authToken; //test credentials


//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

// send OTP
exports.sendOtp = function (phone, verification_code, message, callback)
{
    process.nextTick(function ()
    {
        var content = message.replace("@otpcode@", verification_code);
        client.messages.create({
            to: phone, //phone number to send mesage
            from: config.twilio.phone, //test
            body: content   //message to send
        }, function (smsErr, message)
        {
            if (!smsErr)
            {
                console.log("Otp_info ");
                console.log(message.sid);
            } else
            {
                console.log("Otp_error ");
                console.log(smsErr);
            }
        });
        callback(null, 1);
    });
};
