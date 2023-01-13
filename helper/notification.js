//helper to send push notificaation to app using firebase
var fcm = require('fcm-push'); //node module for sending pi=ush notification
var fcm_push = new fcm(global.config.push_notification.server_key); //pass server key to fcm

// send notifications
exports.send_notification = function (token, data) {
    var message = {
        to: token, // token of mobile app
        priority: "high",
        notification: {
            title: 'Vizu',
            sound: 'default',
            body: data.body,
            'content-available': "true",
            click_action: "OPEN_ACTIVITY_DASHBOARD",
            event_type: data.type,
        },
        data: data
    };
    fcm_push.send(message, function (err, response) {
        if (err) {
            console.log("push notification err");
            console.log(err);
        } else {
            console.log("push notification response");
            console.log(response);
        }
        return(1);
    });
}

//send same notification to multiple users async
exports.send_notification_to_all = function (tokens, data)
{
    for (var i = 0; i < tokens.length; i++)
    {
        var message = {
            to: tokens[i], //array of tokens
            priority: "high",
            notification: {
                title: 'Vizu',
                sound: 'default',
                body: data.body,
                'content-available': "true",
                click_action: "OPEN_ACTIVITY_DASHBOARD",
                event_type: data.type,
            },
            data: data.sentdata
        };
        fcm_push.send(message, function (err, response) {
            if (err) {
                console.log("push notification error")
                console.log(err)
            } else {
                console.log("push notification send")
                console.log(response)
            }
            return(1);
        });
    }
}

//different message send to different user push notification
exports.send_notification_diffpayload = function (dataArray) {
    dataArray.forEach(obj => {
        let message = {
            to: obj.token,
            priority: "high",
            notification: {
                title: 'Vizu',
                sound: 'default',
                body: obj.body,
                'content-available': "true",
                click_action: "OPEN_ACTIVITY_DASHBOARD",
                event_type: obj.type,
            },
            data: obj.sent_data
        };
        fcm_push.send(message, function (err, response) {
            if (err) {
                console.log("push notification err");
                console.log(err);
            } else {
                console.log("push notification response");
                console.log(response);
            }
            return(1);
        });
    });
}