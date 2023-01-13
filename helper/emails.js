var Sync = require('sync');
const mongoose = require("mongoose");
var users = require('../controller/users.js');
var email_template = require('../controller/email_template.js'); //for finding email template
var send_mail = require('../helper/send_mail.js'); // helper for send mai through node mailer
var otp_generate = require('../helper/otp_generate'); // helper for send mai through node mailer
var emailTemplatesIds = require('../emails_templates'); // get our config file

// email templates corresponding to their id from emailTemailTemplatesIds
var otp_verification = emailTemplatesIds.otp_verification;
var crypto = require('../helper/crypto.js'); //for encryption and decryption of user_id

// signup_email 
exports.otp_email = function (userData, callback) {
    process.nextTick(function () {
        Sync(function () {
            try
            {
                let emailTemplate = email_template.findOne.sync(null, {type: otp_verification, organisation_id: userData["organisation_id"]});
                let otp_code = otp_generate.digitCode();// generate otp here
                let timeStamp = new Date().getTime();
                let otp_expiry = timeStamp + (global.config.otp_expire_time * 60 * 60 * 1000); //expires the otp in 24 hours 
                if (emailTemplate.status == 1) {
                    content = emailTemplate.data.content;
                    emailTemplate.data.subject = emailTemplate.data.subject.replace("@project_name@", global.config.project_name);
                    content = content.replace("@project_name@", global.config.project_name);
                    content = content.replace("@project_name@", global.config.project_name);
                    content = content.replace("@name@", userData.name);
                    content = content.replace("@otp@", otp_code);
                    send_mail.sendMail(userData.email, emailTemplate.data.subject, content);
                }
                let updateQuery = {};
                updateQuery.otp_code = otp_code;
                updateQuery.otp_expiry = otp_expiry;
                var userUpdate = users.updateOne.sync(null, {_id: mongoose.Types.ObjectId(userData._id)}, updateQuery);

                if (userUpdate.status == 0)
                    return callback(null, {status: 0, message: "Error"});
                else
                    return callback(null, {status: 1, data: {otp_code: otp_code}});
            } catch (err) {
                console.log(err);
                return callback(null, {status: 0, message: err.message});
            }
        });
    });
}



