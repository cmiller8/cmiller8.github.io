(function() {
  var gritter_message, humanize, insertIntoLeftNav, removeFromLeftNav, showEmptyOnArticleBlank;

  showEmptyOnArticleBlank = function() {
    var blank;
    blank = $(".wiki-paragraph").length === 1;
    if (blank) {
      return $("#empty-article-div").show();
    } else {
      return $("#empty-article-div").hide();
    }
  };

  removeFromLeftNav = function(paragraph_id) {
    return $("#article-file-navigator li").each(function(index, element) {
      if ($(element).data()["paragraphId"] === "#wiki-paragraph-" + paragraph_id) {
        return $(element).remove();
      }
    });
  };

  insertIntoLeftNav = function(filename, insert_after) {
    var new_li, template_name;
    template_name = "";
    if (ArticlesHelper.isImage(filename)) {
      template_name = "left_nav_insert_figure";
    } else {
      template_name = "left_nav";
    }
    if (insert_after === "") {
      new_li = JST[template_name]({
        filepath: filename,
        filepath_stripped: humanize(filename)
      });
      return $(new_li).insertBefore($($("#article-file-navigator li")[0]));
    } else {
      return $("#article-file-navigator li").each(function(index, element) {
        if ($(element).data()["paragraphId"] === "#wiki-paragraph-" + insert_after) {
          new_li = JST[template_name]({
            filepath: filename,
            filepath_stripped: humanize(filename)
          });
          return $(new_li).insertAfter($(element));
        }
      });
    }
  };

  humanize = function(string) {
    string = string.substr(0, string.lastIndexOf('.'));
    string = string.replace(/_/g, ' ');
    if (string.indexOf("/") !== -1) {
      string = string.split('/').pop();
    } else {
      string;
    }
    return string = string.charAt(0).toUpperCase() + string.slice(1);
  };

  this.create_paragraph = function(data) {
    var editor_data, inner_paragraph, insert_after, new_editor, new_paragraph, new_paragraph_comments, new_paragraph_info, new_show_article_toolbar;
    if (data.insert_after === $("#article-data").data()["blankParagraphId"]) {
      location.reload(true);
      return;
    }
    new_paragraph = $(JST["new_show_article_paragraph"]({
      paragraph_id: data.paragraph_id,
      html: data.html
    }));
    if (data.insert_after === "") {
      insert_after = "#empty-article-div";
    } else if (data.insert_after.html) {
      console.info("insert after is already jqeury element");
      insert_after = data.insert_after;
    } else {
      insert_after = "#wiki-paragraph-" + data.insert_after;
    }
    new_paragraph.insertAfter(insert_after);
    inner_paragraph = $("#article-paragraph-" + data.paragraph_id);
    new_editor = this.make_new_editor(data);
    new_paragraph_comments = $(JST["new_paragraph_comments"]({
      paragraph_id: data.paragraph_id,
      data: data
    }));
    new_paragraph_comments.insertAfter(inner_paragraph);
    new_editor.insertAfter(inner_paragraph);
    editor_data = $("#article-paragraph-editor-" + data.paragraph_id);
    editor_data.data('raw', data.raw);
    editor_data.data('filename', data.filename);
    editor_data.data('name_without_ext', data.name_without_ext);
    editor_data.data('page_path', '');
    editor_data.data('paragraph_id', data.paragraph_id);
    editor_data.data('can_rename_file', true);
    editor_data.data('editor_base_id', 'gollum-editor-' + data.paragraph_id);
    editor_data.data('paragraph_post_address', data.url + '_edit');
    editor_data.data('paragraph_format', data.paragraph_format);
    new_paragraph_info = $(JST["new_paragraph_toolbar_info"]({
      paragraph_id: data.paragraph_id,
      filename: data.filename,
      url: data.url,
      has_insert_button: true,
      has_checkout_button: true,
      has_edit_button: true,
      is_image: false
    }));
    new_paragraph_info.insertAfter(inner_paragraph);
    $.GollumEditorInPlace({
      NewFile: false,
      editor_id: "#gollum-editor-" + data.paragraph_id
    });
    new_show_article_toolbar = $(JST["new_show_article_toolbar"]({
      paragraph_name: data.paragraph_id,
      data: data
    }));
    new_show_article_toolbar.insertAfter(inner_paragraph);
    $.initEditLinks();
    insertIntoLeftNav(data.filename, data.insert_after);
    $.initLeftNavLinks();
    update_labels_and_refs();
    return MathJax.Hub.Queue(["resetEquationNumbers", MathJax.InputJax.TeX], ["PreProcess", MathJax.Hub], ["Reprocess", MathJax.Hub]);
  };

  this.make_new_editor = function(data) {
    var data_raw_for_regex, editor_html, new_editor, new_editor_html, paragraph_name;
    paragraph_name = data.paragraph_id;
    editor_html = $("#article-paragraph-editor-replace_me_edit").html();
    new_editor = $("<div id=article-paragraph-editor-" + paragraph_name + " style=\"display:none\"" + ">");
    new_editor_html = editor_html.replace(/replace_me/g, paragraph_name);
    if (data.filename === "title.md" || data.filename === "title.tex") {
      new_editor_html = new_editor_html.replace(/input-prepend/g, '');
      new_editor_html = new_editor_html.replace(/add-on/g, 'btn disabled');
      new_editor_html = new_editor_html.replace(/Block Title/g, 'Article Title');
      new_editor_html = new_editor_html.replace(/gollum-editor-body/g, 'gollum-editor-body small-textarea');
      new_editor_html = new_editor_html.replace(/gollum-editor-function-bar/g, 'gollum-editor-function-bar hide-element');
    }
    new_editor_html = new_editor_html.replace(/replace_name/g, data.name_without_ext);
    new_editor_html = new_editor_html.replace(/replace_with_insert_after/g, data.insert_after);
    data_raw_for_regex = data.raw.toString().replace("$&", "$$$&");
    new_editor_html = new_editor_html.replace(/replace_content/g, data_raw_for_regex);
    new_editor_html = new_editor_html.replace(/replace_filename/g, escape(data.filename));
    new_editor.html(new_editor_html);
    return new_editor;
  };

  gritter_message = function(message) {
    var gritterOptions;
    gritterOptions = {
      title: "Notification",
      text: message,
      image: '/assets/notify.png',
      time: 2000
    };
    return $.gritter.add(gritterOptions);
  };

  $(function() {
    var faye, faye_private, user_id_string;
    console.info("creating new client");
    faye = new Faye.Client($("#article-data").data()["fayeServer"]);
    faye.bind("transport:up", function() {
      return console.info("*********** FAYE IS UP ***************");
    });
    faye.bind("transport:down", function() {
      return console.info("*********** FAYE IS DOWN ***************");
    });
    window.faye = faye;
    faye.setHeader('Access-Control-Allow-Origin', '*');
    user_id_string = $("#article-data").data()["currentUser"] && $("#article-data").data()["currentUser"].id || '';
    faye.addExtension(new ClientAuth(user_id_string, $("#article-data").data()["fayeSignature"]));
    console.info("subscribing to channel");
    faye.subscribe($("#article-data").data()["fayeChannelName"], function(data) {
      return update_article(data);
    });
    console.info("creating new private client");
    faye_private = new Faye.Client($("#article-data").data()["fayeServer"]);
    faye_private.bind("transport:up", function() {
      return console.info("*********** FAYE PRIVATE IS UP ***************");
    });
    faye_private.bind("transport:down", function() {
      return console.info("*********** FAYE PRIVATE IS DOWN ***************");
    });
    window.faye_private = faye_private;
    faye_private.setHeader('Access-Control-Allow-Origin', '*');
    faye_private.addExtension(new ClientAuth(user_id_string, $("#article-data").data()["fayeArticlePrivateSignature"]));
    return faye_private.subscribe($("#article-data").data()["fayeArticlePrivateChannelName"], function(data) {
      return update_article(data);
    });
  });

  this.update_article = function(data) {
    var articledata, checked_out_paragraphs, checkout_user_name, chkstring, commenter_id, current_user_id, date, id, inner_paragraph, insert_after, message, new_layout, new_paragraph, new_paragraph_info, new_paragraphs, new_show_article_toolbar, paragraph_id, sidebar_chkstring, unread_chat_message_ids;
    console.info(data);
    switch (data["action"]) {
      case "checkout":
        $("#wiki-paragraph-" + data.paragraph_id).addClass("checked-out");
        if ($("#article-data").data()["currentUser"] && ($("#article-data").data()["currentUser"].id === data["checked_item"]["collaborator_id"])) {
          $("#wiki-paragraph-" + data.paragraph_id).addClass("checked-out-by-me");
        }
        $("#item-checkin-" + data.paragraph_id).attr("action", data.checkin_path);
        $("#item-force-checkin-" + data.paragraph_id).attr("action", data.checkin_path);
        chkstring = '<i class="icon-lock"></i> ' + data.user_name + ' is editing this file';
        $("#item-checked-out-indicator-" + data.paragraph_id).html(chkstring);
        $('.index-group li[data-paragraph-id="#wiki-paragraph-' + data.paragraph_id + '"]').addClass("index-group-li-checked-out");
        sidebar_chkstring = '<span class="smalllabel">' + data.user_name.match(/\b\w/g).join('').toUpperCase() + '</span>';
        return $('.index-group li[data-paragraph-id="#wiki-paragraph-' + data.paragraph_id + '"]').append(sidebar_chkstring);
      case "checkin":
        $("#wiki-paragraph-" + data.paragraph_id).removeClass("checked-out");
        $("#wiki-paragraph-" + data.paragraph_id).removeClass("checked-out-by-me");
        $('.index-group li[data-paragraph-id="#wiki-paragraph-' + data.paragraph_id + '"]').removeClass("index-group-li-checked-out");
        return $('.index-group li[data-paragraph-id="#wiki-paragraph-' + data.paragraph_id + '"] span').remove();
      case "delete_file":
        paragraph_id = "#wiki-paragraph-" + data.paragraph_id;
        $(paragraph_id).remove();
        $("#article-file-navigator li").each(function(index, element) {
          if ($(element).data()["paragraphId"] === paragraph_id) {
            return $(element).remove();
          }
        });
        return showEmptyOnArticleBlank();
      case "update_file":
        paragraph_id = "#article-paragraph-" + data.paragraph_id;
        $(paragraph_id).html(data.html);
        $("#article-paragraph-editor-" + data.paragraph_id).data('raw', data.raw);
        update_labels_and_refs();
        return MathJax.Hub.Queue(["resetEquationNumbers", MathJax.InputJax.TeX], ["PreProcess", MathJax.Hub], ["Reprocess", MathJax.Hub]);
      case "update_image":
        paragraph_id = "#article-paragraph-" + data.replace_paragraph_id;
        date = new Date();
        $(paragraph_id).children('img').attr('src', data.url + '?v=' + date.getTime());
        insertIntoLeftNav(data.filename, data.replace_paragraph_id);
        removeFromLeftNav(data.replace_paragraph_id);
        return $.initLeftNavLinks();
      case "create_file":
        return this.create_paragraph(data);
      case "insert_image":
        if (data.insert_after === $("#article-data").data()["blankParagraphId"]) {
          location.reload(true);
          return;
        }
        new_paragraph = $(JST["new_show_article_paragraph"]({
          paragraph_id: data.paragraph_id,
          html: "<img class='centered-img' width='" + data.width + "'" + "src=" + data.url + ">"
        }));
        insert_after = "#wiki-paragraph-" + data.insert_after;
        new_paragraph.insertAfter(insert_after);
        inner_paragraph = $("#article-paragraph-" + data.paragraph_id);
        new_paragraph_info = $(JST["new_paragraph_toolbar_info"]({
          paragraph_id: data.paragraph_id,
          filename: data.filename,
          url: data.url,
          has_insert_button: false,
          has_checkout_button: false,
          has_edit_button: false,
          is_image: true
        }));
        new_paragraph_info.insertAfter(inner_paragraph);
        new_show_article_toolbar = $(init_toolbar.call(new_paragraph_info[0]));
        data.caption_data.insert_after = new_show_article_toolbar;
        this.create_paragraph(data.caption_data);
        $.initEditLinks();
        insertIntoLeftNav(data.filename, data.insert_after);
        return $.initLeftNavLinks();
      case "update_layout":
        new_layout = "";
        new_paragraphs = [];
        $.each(data["layout_array"], function(index, filename) {
          var paragraph_format;
          if (filename.indexOf("figures/") !== -1) {
            paragraph_format = "figure";
          } else {
            paragraph_format = "text";
          }
          if (paragraph_format === "figure") {
            new_layout += JST["left_nav_figure"]({
              filepath: filename,
              filepath_stripped: humanize(filename)
            });
          } else {
            new_layout += JST["left_nav"]({
              filepath: filename,
              filepath_stripped: humanize(filename)
            });
          }
          return new_paragraphs.push($("#wiki-paragraph-" + ArticlesHelper.cssIdFromFilename(filename)).detach());
        });
        $.each(new_paragraphs.reverse(), function(index, paragraph) {
          return paragraph.insertAfter("#article-data");
        });
        $("#article-file-navigator").html(new_layout);
        articledata = $("#article-data").data();
        checked_out_paragraphs = articledata['checkedOutItems'];
        for (paragraph_id in checked_out_paragraphs) {
          checkout_user_name = checked_out_paragraphs[paragraph_id].user_name;
          $('.index-group li[data-paragraph-id="#wiki-paragraph-' + paragraph_id + '"]').addClass("index-group-li-checked-out");
          sidebar_chkstring = '<span class="smalllabel">' + checkout_user_name.match(/\b\w/g).join('').toUpperCase() + '</span>';
          $('.index-group li[data-paragraph-id="#wiki-paragraph-' + paragraph_id + '"]').append(sidebar_chkstring);
        }
        return $.initLeftNavLinks();
      case 'group_chat':
        message = data["message"];
        $("#group-chat").append(message);
        eval(data["javascript"]);
        current_user_id = $('#article-data').data().currentUser.id;
        commenter_id = data["commenter_id"];
        if (current_user_id === commenter_id) {
          return console.info("you just commented");
        } else {
          unread_chat_message_ids = $.cookie('unread_chat_message_ids');
          if (unread_chat_message_ids) {
            gritter_message(data["message"]);
            unread_chat_message_ids = JSON.parse(unread_chat_message_ids);
          } else {
            unread_chat_message_ids = {};
          }
          unread_chat_message_ids[data["message_id"]] = 1;
          $.cookie('number_of_unread_chat_messages', _.size(unread_chat_message_ids));
          return $.cookie('unread_chat_message_ids', JSON.stringify(unread_chat_message_ids));
        }
        break;
      case 'new_comment':
        message = data["message"];
        eval(data["javascript"]);
        return gritter_message(data["message"]);
      case 'edit_comment':
        message = data["message"];
        id = "#comment-id-" + data["comment_id"];
        $(id).replaceWith(data["html"]);
        return gritter_message(data["message"]);
      case 'pdf_ready':
        if (ArticlesHelper.waiting_for_pdf) {
          ArticlesHelper.waiting_for_pdf = false;
          ArticlesHelper.spinner.stop();
          if ($("#article-data").data()["isCollaborator"]) {
            return $('.download-pdf').click();
          } else {
            return $(".export-download-non-collaborator-compiled-pdf").submit();
          }
        }
        break;
      case 'git_push_error':
        return gritter_message(data["message"]);
      case 'git_pull_success':
        return gritter_message(data["message"]);
      case 'git_pull_error':
        return gritter_message(data["message"]);
      default:
        return console.log("action is something else");
    }
  };

}).call(this);
