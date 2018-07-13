/*
*
*  Library untuk BOT API Line
*
*  Sobri Waskito Aji
*  Email: wajisobri@gmail.com
*  Line: 0821 1512 5514
*  Telegram: @wajisobri
*
*  Versi 1.00
*  Bandung, 28 Desember 2017
*/

function open(channelAccessToken,channelSecret) {
    this.token = channelAccessToken;
    this.secret = channelSecret;
}

open.prototype.request = function(method, data) {
    var url = "https://api.line.me/v2/bot/"+method;
    var headers = {
	  Accept: 'application/json',
	  'Content-Type': 'application/json',
	  Authorization: 'Bearer ' + this.token
	};
  
    var options = {
      'method' : 'post',
      'headers' : headers,
      'payload' : JSON.stringify(data)
    };
    
    Logger.log(options);
    var response = UrlFetchApp.fetch(url,options);
    return response;
}

open.prototype.pushMessage = function(to, pesan) {
  var formData = {
     'to' : to,
     'messages' : pesan
  };

  var ret = this.request('message/push', formData);
  return ret;
}
