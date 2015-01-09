(function() {
  this.validate_editor_page_title = function(page_title) {
    var forbidden_chars, m, r, re, str, val, _i, _len;
    forbidden_chars = ['|', '\\', '\/', '..'];
    str = String(page_title);
    for (_i = 0, _len = forbidden_chars.length; _i < _len; _i++) {
      val = forbidden_chars[_i];
      r = ArticlesHelper.regExpEscape(val);
      re = new RegExp(r, "g");
      m = str.match(re);
      if (m) {
        alert("Title cannot contain '" + val + "'");
        return false;
      }
    }
    if (page_title === '') {
      alert('Title cannot be blank');
      return false;
    }
    if (!page_title.match(/^[\000-\177]*$/)) {
      alert('Title can only contain ASCII characters');
      return false;
    }
    return true;
  };

}).call(this);
