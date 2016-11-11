(function() {
  $(function() {
    return initCheckedOutParagraphs();
  });

  window.autosave_timers = {};

  this.get_ace_editor_from_paragraph_id = function(paragraph_id) {
    var ace_editor, editor, item_name;
    item_name = paragraph_id.replace(/\barticle-paragraph-editor-/, "");
    editor = editors["gollum-editor-" + item_name];
    return ace_editor = editor.ace_editor;
  };

  this.autosave_keyname = function(paragraph_id) {
    return $("#article-data").data().articleId + '.' + paragraph_id;
  };

  this.initial_paragraph_keyname = function(paragraph_id) {
    return autosave_keyname(paragraph_id) + '.original_version';
  };

  this.start_autosave_paragraph = function(paragraph_id) {
    save_initial_paragraph(paragraph_id);
    return this.autosave_timers[paragraph_id] = setInterval((function() {
      return autosave_paragraph(paragraph_id);
    }), 5000);
  };

  this.stop_autosave_paragraph = function(paragraph_id) {
    return clearInterval(this.autosave_timers[paragraph_id]);
  };

  this.save_initial_paragraph = function(paragraph_id) {
    var ace_editor, contents;
    ace_editor = get_ace_editor_from_paragraph_id(paragraph_id);
    contents = ace_editor.getValue();
    return localStorage[initial_paragraph_keyname(paragraph_id)] = contents;
  };

  this.autosave_paragraph = function(paragraph_id) {
    var ace_editor, contents;
    ace_editor = get_ace_editor_from_paragraph_id(paragraph_id);
    contents = ace_editor.getValue();
    return localStorage[autosave_keyname(paragraph_id)] = contents;
  };

  this.load_autosaved_paragraph = function(paragraph_id) {
    var ace_editor, autosaved_paragraph;
    autosaved_paragraph = localStorage[autosave_keyname(paragraph_id)];
    if (autosaved_paragraph && (autosaved_paragraph !== "")) {
      $("#" + paragraph_id).data().raw = _.escape(autosaved_paragraph);
      ace_editor = get_ace_editor_from_paragraph_id(paragraph_id);
      return ace_editor.setValue(autosaved_paragraph);
    }
  };

  this.remove_autosaved_paragraph = function(paragraph_id) {
    return delete localStorage[autosave_keyname(paragraph_id)];
  };

  this.load_initial_paragraph = function(paragraph_id) {
    var autosaved_paragraph;
    autosaved_paragraph = localStorage[initial_paragraph_keyname(paragraph_id)];
    if (autosaved_paragraph && (autosaved_paragraph !== "")) {
      return $("#" + paragraph_id).data().raw = _.escape(autosaved_paragraph);
    }
  };

  this.initCheckedOutParagraphs = function() {
    var checked_out_paragraphs, checkin_path, checkout_user_id, checkout_user_name, chkstring, data, paragraph_id, sidebar_chkstring, _results;
    data = $("#article-data").data();
    checked_out_paragraphs = data['checkedOutItems'];
    _results = [];
    for (paragraph_id in checked_out_paragraphs) {
      checkin_path = checked_out_paragraphs[paragraph_id].checkin_path;
      checkout_user_id = checked_out_paragraphs[paragraph_id].user_id;
      checkout_user_name = checked_out_paragraphs[paragraph_id].user_name;
      $("#wiki-paragraph-" + paragraph_id).addClass("checked-out");
      if (data["currentUser"] && (data["currentUser"].id === checkout_user_id)) {
        $("#wiki-paragraph-" + paragraph_id).addClass("checked-out-by-me");
      }
      $("#item-checkin-" + paragraph_id).attr("action", checkin_path);
      $("#item-force-checkin-" + paragraph_id).attr("action", checkin_path);
      chkstring = '<i class="icon-lock"></i> ' + checkout_user_name + ' is editing this file';
      $("#item-checked-out-indicator-" + paragraph_id).html(chkstring);
      if (data["isCollaborator"]) {
        $('.index-group li[data-paragraph-id="#wiki-paragraph-' + paragraph_id + '"]').addClass("index-group-li-checked-out");
      }
      sidebar_chkstring = '<span class="smalllabel">' + checkout_user_name.match(/\b\w/g).join('').toUpperCase() + '</span>';
      if (data["isCollaborator"]) {
        $('.index-group li[data-paragraph-id="#wiki-paragraph-' + paragraph_id + '"]').append(sidebar_chkstring);
      }
      if (data["currentUser"] && (data["currentUser"].id === checkout_user_id)) {
        $("#wiki-edit-in-place-" + paragraph_id).click();
        _results.push(load_autosaved_paragraph("article-paragraph-editor-" + paragraph_id));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  this.fileExtension = function(filename) {
    var ext;
    ext = filename.match(/\.([\w,\d]+)$/i);
    return ext && ext[1];
  };

  this.scrollIntoView = function(item) {
    var navWidth, vOffset;
    vOffset = item.offset().top;
    navWidth = $(".navbar.navbar-fixed-top").height() + $(".article-header-info").height();
    return $("body,html,document").animate({
      scrollTop: vOffset - 1.5 * navWidth
    }, 'slow');
  };

  String.prototype.toUnderscore = function() {
    return this.replace(/([A-Z])/g, function($1) {
      return "_" + $1.toLowerCase();
    });
  };

  String.prototype.toDash = function() {
    return this.replace(/([A-Z])/g, function($1) {
      return "-" + $1.toLowerCase();
    });
  };

  String.prototype.toCamel = function() {
    return this.replace(/(\-[a-z])/g, function($1) {
      return $1.toUpperCase().replace("-", "");
    });
  };

  this.camel_hash_to_underscore = function(hash) {
    var key, names, new_hash, value;
    names = {
      'sam': 'seaborn',
      'donna': 'moss'
    };
    new_hash = {};
    for (key in hash) {
      value = hash[key];
      new_hash[key.toUnderscore()] = value;
    }
    return new_hash;
  };

  this.ArticlesHelper = (function() {
    function ArticlesHelper() {}

    ArticlesHelper.regExpEscape = function(str) {
      return (str + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    };

    ArticlesHelper.escaped_chars = {
      '.': "__dot__",
      '/': "__slash__",
      ' ': "__space__",
      ':': "__colon__",
      '&': "__ampersand__",
      ',': "__comma__",
      '?': "__quest__",
      '!': "__excla__",
      '@': "__at__",
      '#': "__pound__",
      '$': "__dollar__",
      '%': "__percent__",
      '^': "__carrot__",
      '*': "__star__",
      '(': "__lparen__",
      ')': "__rparen",
      '-': "__minus__",
      '+': "__plus__",
      '=': "__equal__",
      '<': "__lt__",
      '>': "__gt__",
      '\\': "__bslash__",
      '~': "__tilde__",
      '{': "__lbrace__",
      '}': "__rbrace__",
      '[': "__lbracket__",
      ']': "__rbracket__",
      ';': "__semicolon__",
      '"': "__dquote__",
      '\'': "__squote__",
      '`': "__oquote__"
    };

    ArticlesHelper.updateUnreadChatMessageCount = function() {
      var num;
      num = $.cookie('number_of_unread_chat_messages');
      if (num) {
        return $('#number-of-unread-chat-messages').html(num);
      }
    };

    ArticlesHelper.cssIdFromFilename = function(s) {
      var key, r, re, str, val, _ref;
      str = String(s);
      str = str.replace(/^(\.*)\//, "");
      _ref = this.escaped_chars;
      for (key in _ref) {
        val = _ref[key];
        r = this.regExpEscape(key);
        re = new RegExp(r, "g");
        str = str.replace(re, val);
      }
      return str;
    };

    ArticlesHelper.filenameFromCSSId = function(s) {
      var key, r, re, str, val, _ref;
      str = String(s);
      str = str.replace(/^(\.*)\//, "");
      _ref = this.escaped_chars;
      for (key in _ref) {
        val = _ref[key];
        r = this.regExpEscape(val);
        re = new RegExp(r, "g");
        str = str.replace(re, key);
      }
      return str;
    };

    ArticlesHelper.fileExtension = function(filename) {
      var ext;
      ext = filename.match(/\.([\w,\d]+)$/i);
      return ext && ext[1];
    };

    ArticlesHelper.isImage = function(filename) {
      var ext;
      ext = ArticlesHelper.fileExtension(filename).toLowerCase();
      switch (ext) {
        case "jpg":
        case "png":
        case "svg":
        case "jpeg":
        case "pdf":
        case "eps":
          return true;
        default:
          return false;
      }
    };

    ArticlesHelper.scrollIntoView = function(item) {
      var navWidth, vOffset;
      vOffset = item.offset().top;
      navWidth = $(".navbar.navbar-fixed-top").height() + $(".article-header-info").height();
      return $("body,html,document").animate({
        scrollTop: vOffset - 1.5 * navWidth
      }, 'slow');
    };

    ArticlesHelper.saveEditorShortcut = function(event, item_name) {
      var ctrlKey;
      if (navigator.platform.match("Mac")) {
        ctrlKey = event.metaKey;
      } else {
        ctrlKey = event.ctrlKey;
      }
      if (event.keyCode === 83 && ctrlKey === true) {
        event.preventDefault();
        return $("#gollum-editor-" + item_name + '-save-and-close').click();
      }
    };

    ArticlesHelper.waiting_for_pdf = false;

    ArticlesHelper.spinner = new Spinner;

    return ArticlesHelper;

  })();

}).call(this);
