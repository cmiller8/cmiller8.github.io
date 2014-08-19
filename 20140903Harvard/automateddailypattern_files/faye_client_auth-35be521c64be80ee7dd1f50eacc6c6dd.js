(function() {
  this.ClientAuth = function(userId, sig) {
    this._userId = userId;
    return this._sig = sig;
  };

  this.ClientAuth.prototype.outgoing = function(message, callback) {
    if (message.channel !== "/meta/subscribe") {
      return callback(message);
    }
    message.ext = message.ext || {};
    message.ext.user_id = this._userId;
    message.ext.signature = this._sig;
    return callback(message);
  };

}).call(this);
