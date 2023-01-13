const swig = require('swig');
var nodemailer = require("nodemailer"); //module to send mail
//create  smtp transport
const smtpTransport = nodemailer.createTransport(global.config.smtp);
var Sync = require('sync');
var env = require("../env");
// function to send mail using module nodemail
exports.sendMail = function (to, subject, content) {
    var tpl_swig = swig.compileFile('public/mail_page/index.html');
    var template = tpl_swig({
        content: content,
        image_logo: env.serviceUrl + 'images/logo.png',
        site_url: env.serviceUrl,
        project_name: global.config.project_name,
        app_info_email: global.config.app_info_email
    });
    smtpTransport.sendMail({
        from: global.config.admin_email, // sender address from configuration collection
        to: to, // user email_id
        subject: subject, // Subject line
        html: template
    }, function (mailError, info) {
        if (!mailError) {
            console.log("mail_info ");
            console.log(info.response);
        } else {
            console.log("mail_error ");
            console.log(mailError);
        }
    });
};
