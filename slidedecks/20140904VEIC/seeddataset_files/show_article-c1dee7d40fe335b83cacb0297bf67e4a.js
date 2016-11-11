function init_toolbar(){ 
  var data = camel_hash_to_underscore($(this).data());
  var new_show_article_toolbar = $(JST["new_show_article_toolbar"]({
        paragraph_name: data.paragraph_id,
        data: data
      }));
  new_show_article_toolbar.insertAfter($(this));
  if(!data.has_insert_button){
    $('#wiki-insert-new-paragraph-' + data.paragraph_id).css("visibility", "hidden");
    $('#wiki-insert-new-figure-' + data.paragraph_id).css("visibility", "hidden");
  }
  if(!data.has_edit_button){
    $('#wiki-edit-in-place-' + data.paragraph_id).css("visibility", "hidden");
  }
  if(!data.has_checkout_button){
    $('#item-checkout-' + data.paragraph_id).css("visibility", "hidden");
    $('#item-checkin-' + data.paragraph_id).css("visibility", "hidden");
  }
  return(new_show_article_toolbar);
}


jQuery(document).ready(function() {
  $('.show-all-comments-button').click( 
          function(e){
            e.preventDefault();
            //$(this).closest('.make-admin-form').submit();
            $(".accordion-toggle").click();
            if($('.show-all-comments-button').hasClass("btn-primary")){
              $('.show-all-comments-button').removeClass("btn-primary");
            }
            else{ 
              $('.show-all-comments-button').addClass("btn-primary");
            }
          });

  $('.show-comment-source').click( 
    function(e){
      e.preventDefault();
      $(this).closest('.comment-bubble').find('.comment-source').toggle()
    });

  $.cookie('number_of_unread_chat_messages', $('#article-data').data()['numberOfUnreadChatMessages']);
  $('#number-of-unread-chat-messages').html($('#article-data').data()['numberOfUnreadChatMessages']);
  window.setInterval(ArticlesHelper.updateUnreadChatMessageCount,3000);
  

  /* build all of the paragraph toolbars */
  $('.paragraph-toolbar-info').each(function(index, element){ 
    init_toolbar.call(this);
  } );

  $('.launch-ipython-button').click( 
    function(e){
      e.preventDefault();
      $(this).closest('.launch-ipython-form').submit();
  });

  links = $('.admin');
  if ($('#article-data').data()['isAdmin'] == false) {
    links.hide();
  } 
  links = $('.private-only'); 
  if($('#article-data').data()['isPrivate'] == true){
    links.show();
  }
  else{
    $('.public-only').show();
  }
  if(!$('#article-data').data()['isCollaborator']){
    $(".collaborators-only").hide();
  }
  $("#wiki-paragraph-title__dot__md .paragraph-btn-toolbar").hide();
  $("#wiki-paragraph-title__dot__tex .paragraph-btn-toolbar").hide();
  $("#collaborator-buttons").hide();
  $('.make-admin-link').click( 
          function(e){
            e.preventDefault();
            $(this).closest('.make-admin-form').submit();
          });

  $("#picture_file").change(function(e, data){
    $("#upload-figure-modal").modal();
    $("#upload-figure-filename").text($("#picture_file").val());
    $('.progress-bar').progressbar({value: 0});
    $('#fileupload').unbind('fileuploadalways');
    $('#fileupload').bind('fileuploadalways', function (e, data) {
      console.info('finished uploading file');
      $("#upload-figure-modal .cancel").click();
    });

  });


});
  $(document).ready(function(){
    $.initEditLinks();
  });
  
  $(document).ready(function(){
    if($('#article-data').data()['isCollaborator']){

      $('.article-sidebar-footer').removeClass('edit-link-hidden');

      $('#article-file-navigator').sortable({
          update: function(event, ui) { 
            if(ui.item.index() > 0){
              $(ui.item.data()['paragraphId'] ).insertAfter($(ui.item.prev().data()['paragraphId'] ) );
            }
            else{
              $(ui.item.data()['paragraphId'] ).insertBefore($(ui.item.next().data()['paragraphId'] ) );     
            }
            var allItems = ui.item.parent().children();
            var layoutArray = $.map( allItems, function(i){ return $(i).data()['filepath']; } );
              $.ajax(
              {
                type: "POST",
                url: '_update_layout',
                dataType: 'json',
                async: true,
                data: {layoutArray:layoutArray},
                //done: function() { alert("success"); },
                //fail: function() { alert("error"); },
                //always: function() { alert("complete"); }
                //TODO: find out why this success function isn't getting called
                success: function () {
                  console.info('reordered article');       
                },
                error: function () {
                  console.info('error reordering article');       
                }
              }); //$.ajax
          }, //update: function(event, ui)
          /* this prevents clicks from getting fired when dragging and dropping */
          helper: 'clone'
      }); //$('#article-file-navigator').sortable
    }
    $.initLeftNavLinks();
  });

  (function($) {
    // jQuery creates it's own event object, and it doesn't have a
    // dataTransfer property yet. This adds dataTransfer to the event object.
    // Thanks to l4rk for figuring this out!
    jQuery.event.props.push('dataTransfer');
    
    $.initEditLinks = function() {
      var link = $('#references');
      /* this means we currently have no references */
      if(link.children().length == 0){
        link.hide();
      }
      var links = $('.resize-image-link');
      links.each(function(){
        console.info("resizing image link");
        $(this).unbind();
        $(this).click( 
          function(e){
            e.preventDefault();
            var image = $(this).closest('.wiki-paragraph').children().find('img');
            var width = image.width();
            $("#resize-figure-filename").val($(this).data().filename);
            $("#resize-figure-current-width").text(width);
            $("#resize-figure-new-width").val('');
            $("#resize-figure-new-width").attr("placeholder", width);
            $("#resize-figure-form")
            .unbind('ajax:complete')
            .bind('ajax:complete', function(xhr, code){
              console.info("image resized");
              $("#resize-figure-modal .cancel").click();
              image.width($("#resize-figure-new-width").val());
                                });
            $("#resize-figure-modal").modal();
          });
      });
      var links = $('.wiki-edit-link-in-place');  
      links.each(function(){
        $(this).unbind();
        $(this).click( 
          function(e){
            e.preventDefault();
            var id = $(this).attr('id');
            var item_name = id.replace(/\bwiki-edit-in-place-/, "");

            if($(this).hasClass('not-editing')){
              console.info("initializing editor");
              //call the initializer on this new editor, should probably get id from new_editor 
              var editor_data = camel_hash_to_underscore( $("#article-paragraph-editor-" + item_name).data() );
              var new_editor = make_new_editor(editor_data);
              $("#article-paragraph-editor-" + item_name).html(new_editor.html());
              
              $.GollumEditorInPlace({ 
                NewFile: false , 
                editor_id: '#gollum-editor-' + editor_data['paragraph_id'],
                fontsize:$('#article-data').data()['fontsize'],
                theme: $('#article-data').data()['theme'],
                keybinding: $('#article-data').data()['keybinding'],
                line_numbering: $('#article-data').data()['lineNumbering'],
                editor_height: $('#article-data').data()['editorHeight']
              });
              start_autosave_paragraph("article-paragraph-editor-" + item_name);
              $("#gollum-editor-" + item_name + '-wiki_format').val(editor_data['paragraph_format']).change();
              $("#gollum-editor-" + item_name + '-body').keydown(function(event) {
                $("#autosave").val("false");
                ArticlesHelper.saveEditorShortcut(event, item_name);
              });
              $("#gollum-editor-" + item_name + '-page-title').keydown(function(event) {
                ArticlesHelper.saveEditorShortcut(event, item_name);
              });
        
              if( !editor_data["can_rename_file"]){
                $("#gollum-editor-" + item_name + "-page-title").hide();
              }
       
              $("#article-paragraph-editor-" + item_name).toggle();
              $("#article-paragraph-" + item_name).toggle();
              $(this).addClass('editing');
              $('#wiki-paragraph-' + item_name).addClass('editing');
              $(this).removeClass('not-editing');
              scrollIntoView($("#article-paragraph-editor-" + item_name));
              var self = this;
              if(!$('#wiki-paragraph-' + item_name).hasClass('checked-out')){
                $('#item-checkout-' + item_name).unbind("ajax:success");
                $('#item-checkout-' + item_name).bind("ajax:success", function(evt, data, status, xhr){
                

                });
                $('#item-checkout-' + item_name).unbind("ajax:error");
                $('#item-checkout-' + item_name).bind("ajax:error", function(evt, data, status, xhr){
                  console.info('could not check out ' + 'item_name');
                  $.gritter.add({
                    title: 'could not check out ' + item_name,
                    image: "/assets/notice.png",
                    text: 'It is most likely checked out by someone else.'
                  });
                  /*toggled these above assuming we'd succeed, but if we fail, toggle them back*/
                  $("#article-paragraph-editor-" + item_name).toggle();
                  $("#article-paragraph-" + item_name).toggle();
                  $(self).removeClass('editing');
                  $('#wiki-paragraph-' + item_name).removeClass('editing');
                  $(self).addClass('not-editing');

                });
                $('#item-checkout-' + item_name).submit();
              }
              /*TODO: clean up this logic*/
              else if(!$('#wiki-paragraph-' + item_name).hasClass('checked-out-by-me') ){
                  $("#article-paragraph-editor-" + item_name).toggle();
                  $("#article-paragraph-" + item_name).toggle();
                  $(this).removeClass('editing');
                  $('#wiki-paragraph-' + item_name).removeClass('editing');
                  $(this).addClass('not-editing');
              }
            } //if($(this).hasClass('not-editing'))
            /* TODO: this has some ajax goodness that is probably needed and I am too tired to add that right now */
            /* TODO: probably also need to delete the current editor, not so sure */
            else if($(this).hasClass('editing')){
              stop_autosave_paragraph("article-paragraph-editor-" + item_name);

              $("#article-paragraph-editor-" + item_name).toggle();
              $("#article-paragraph-" + item_name).toggle();
              $(this).addClass('not-editing');
              $(this).removeClass('editing');
              $('#wiki-paragraph-' + item_name).removeClass('editing');
            }
            else{
              console.info('unknown edit link ' + this);
            }
          }
        );
      }); //links.each

      var links = $('.wiki-paragraph');
      
      /* Setup the paragraphs so that when they are double clicked it opens up the editor.*/
      links.each(function(){
        var dollar_this = $(this);
        var paragraph_info = dollar_this.find('.paragraph-toolbar-info').data();
        dollar_this.unbind();
        if($('#article-data').data()['isCollaborator']){
          if(paragraph_info && paragraph_info['hasEditButton']){ 
            dollar_this.dblclick( 

              function(e){
                e.preventDefault();
                e.stopPropagation();
                var id = $(this).attr('id');
                var item_name = id.replace(/\bwiki-paragraph-/, "");
                if(!$('#wiki-edit-in-place-' + item_name).hasClass('editing')){
                  $('#wiki-edit-in-place-' + item_name).click();
                }

            });
          }
        }

        /* When the mouse is over the paragraph, highlight it and show any related buttons.*/
        $(this).mouseenter(function () {
          $('.index-group li[data-paragraph-id="#' + $(this).attr('id') + '"]').addClass('index-group-li-hover');                    
          if($('#article-data').data()['isCollaborator']){
            $(this).css("box-shadow","-5px 0 0 0px #7abcff");
            $(this).children('.paragraph-btn-toolbar').removeClass('edit-link-hidden');
          }
          else {
            $(this).children('.paragraph-btn-toolbar').removeClass('edit-link-hidden');          
          }  
        });

        /* remove highlight and hide buttons */
        $(this).mouseleave(function () {
          $('.index-group li[data-paragraph-id="#' + $(this).attr('id') + '"]').removeClass('index-group-li-hover');                     
          $(this).css("box-shadow","0px 0 0 0px #ffffff");         
          $(this).children('.paragraph-btn-toolbar').addClass('edit-link-hidden');
        });
        
        /*this counter is needed due to the wonders of firefox.
        **Firefox fires dragenter and dragleave events for
        **child elements, unlike mouseenter and mouseleave
        **which behave responsibly
        */
        var counter = 0;
        function dragenter(e) {  
          counter++;
          e.stopPropagation();
          e.preventDefault();
          if(counter == 1){
            $(this).css("background","#E6F1F6");
          }
        }
        function dragover(e) {
          e.stopPropagation();
          e.preventDefault();
        }  
        function dragleave(e) {
          e.stopPropagation();
          e.preventDefault();
          counter--;
          if(counter == 0){
            $(this).css("background","none");
          }
          
        }
        function dragdrop(e) {
          e.stopPropagation(); // Stops some browsers from redirecting.
          e.preventDefault();
          var id = $(this).attr('id');

          var item_name = id.replace(/\bwiki-paragraph-/, "");
          var drop_location_filename = ArticlesHelper.filenameFromCSSId(item_name);
          var ext = ArticlesHelper.fileExtension(drop_location_filename);
          var drop_filename = e.dataTransfer.files[0].name;
          var replace_image = false;

          if(ArticlesHelper.isImage(drop_location_filename) && ArticlesHelper.isImage(drop_filename)){
            replace_image = true;
          }

          if(id.match("caption__dot")){
            id = $(this).parent().attr('id');
            item_name = id.replace(/\bwiki-paragraph-/, "");
          }

          if(ArticlesHelper.isImage(drop_filename)){
            $("#upload-figure-modal").modal();
            $("#upload-figure-filename").text(drop_filename);
            $('.progress-bar').progressbar({value: 0});
          }

          

          $('#fileupload').fileupload(
            'send', 
            {
              files: e.dataTransfer.files, 
              formData: {insert_after: item_name, replace_image: replace_image}       
            }
          ); 

          $('#fileupload').unbind('fileuploadalways');
          $('#fileupload').bind('fileuploadalways', function (e, data) {
              console.info('finished uploading file');
              $("#upload-figure-modal .cancel").click();

          }); 
        }

        $(this).bind('dragenter', dragenter);
        $(this).bind('dragleave', dragleave);
        $(this).bind('dragover', dragover);
        $(this).bind('drop', dragdrop);  
     }); //links.each
      
      links = $('.wiki-insert-new-comment');
      links.each(function(){
        $(this).unbind();
        $(this).click( 
          function(e){
            e.preventDefault();
            var id = $(this).attr('id');
            var item_name = id.replace(/\bwiki-insert-new-comment-/, "");
            
            $.ajax(
              {
                type: "GET",
                url: '/comments/new',
                dataType: 'json',
                data: {
                  comment: {
                    comment: '',
                    article_id: $('#article-data').data('articleId'),
                    commented_path: "#wiki-paragraph-" + item_name,
                    commented_text: window.getSelection().toString(),
                    markup: $("#article-data").data().defaultFormat
                  }
                },
                async: true,
                success: function ( data, textStatus, jqXHR ) {
                  $("#wiki-paragraph-new-comment-" + item_name).html(data.html);
                },
                error: function () {
                  console.info('error making new comment');       
              }
            });
          }
        );
      });

     
      
      links = $('.wiki-insert-new-paragraph');
      
      links.each(function(){
        $(this).unbind();
        $(this).click( 
          function(e){
            e.preventDefault();
            var id = $(this).attr('id');
            var item_name = id.replace(/\bwiki-insert-new-paragraph-/, "");
     
            if(!$(this).hasClass('wiki-insert-new-paragraph-clicked')){
              $(this).addClass('wiki-insert-new-paragraph-clicked');
              editor_html = $("#article-paragraph-editor-replace_me").html();
              
              /* the paragraph name will be the user_id + the time in milliseconds */
              milliseconds = new Date().getTime();
              paragraph_name =  $('#article-data').data('currentUser')['id'].toString() + 
                                milliseconds.toString(); 
              new_editor = $('<div id=article-paragraph-editor-' + paragraph_name + '>' );              
              new_editor_html = editor_html.replace(/replace_me/g, paragraph_name );
              new_editor_html = new_editor_html.replace(/replace_with_insert_after/g, item_name );
              new_editor.html(new_editor_html);
              new_editor.insertAfter($('#wiki-paragraph-' + item_name));   
              // $.GollumEditorInPlace({ NewFile: true , editor_id: '#gollum-editor-' + paragraph_name}); 

              $.GollumEditorInPlace({ 
                NewFile: true , 
                editor_id: '#gollum-editor-' + paragraph_name, 
                fontsize:$('#article-data').data()['fontsize'],
                theme: $('#article-data').data()['theme'],
                keybinding: $('#article-data').data()['keybinding'],
                line_numbering: $('#article-data').data()['lineNumbering'],
                editor_height: $('#article-data').data()['editorHeight']
              });
              $("#gollum-editor-" + paragraph_name + '-body').keydown(function(event) {
                //$("#autosave").val("false");
                ArticlesHelper.saveEditorShortcut(event, paragraph_name);
              });
              $("#gollum-editor-" + paragraph_name + '-page-title').keydown(function(event) {
                ArticlesHelper.saveEditorShortcut(event, paragraph_name);
              });
             
            }
            else if($(this).hasClass('wiki-insert-new-paragraph-clicked')){      
              $(this).removeClass('wiki-insert-new-paragraph-clicked');   
            }
            else{
              //item is checked out, do nothing
            }
          }
        );
      }); //links.each


        $('.wiki-insert-new-figure').each(function(){
            $(this).unbind();
            $(this).click(
                function(e){
                    e.preventDefault();
                    var item_name = $(this).attr('id')
                        .replace(/\bwiki-insert-new-figure-/, "");

                    if(item_name.match("caption__dot")){
                      var caption = $('#wiki-paragraph-' + item_name);
                      var figure = caption.parent().attr('id');
                      item_name = figure.replace(/\bwiki-paragraph-/, "");
                    }

                    $('#insert_after').val(item_name);
                    $('#picture_file').click();
                    
                }
            );
        }); //$('.wiki-insert-new-figure').each

      links = $('.admin');
      if ($('#article-data').data()['isAdmin'] == false) {
        links.hide();
      }  
    } //initEditLinks

    $.initLeftNavLinks = function(){
      $('#article-file-navigator li').unbind('click');
      $('#article-file-navigator li').click(
        function(e){
          e.preventDefault();
          scrollIntoView($($(this).data()['paragraphId']));
        });
    } //initLeftNavLinks
  })(jQuery);



  
  

