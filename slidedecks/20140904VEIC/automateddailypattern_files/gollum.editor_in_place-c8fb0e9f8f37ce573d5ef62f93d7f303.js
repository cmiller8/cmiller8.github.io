/**
 *  gollum.editor.js
 *  A jQuery plugin that creates the Gollum Editor.
 *
 *  Usage:
 *  $.GollumEditorInPlace(); on DOM ready.
 */

(function($) {
  
  // Editor options
  var DefaultOptions = {
    MarkupType: 'markdown',
    EditorMode: 'code',
    NewFile: false,
    HasFunctionBar: true,
    Debug: false,
    NoDefinitionsFor: [],
  };
  var ActiveOptions = {};
  var Editors = {};
  window.editors = Editors;
  
  var currentEditor = function(){
    return ActiveOptions.editor_id.substr(1);
  }
  
  var setCurrentEditor = function(editor_id){
    ActiveOptions.editor_id = '#' + editor_id;
  }

  /**
   *  $.GollumEditor
   *
   *  You don't need to do anything. Just run this on DOM ready.
   */
  $.GollumEditorInPlace = function( IncomingOptions ) {
    ActiveOptions = $.extend( DefaultOptions, IncomingOptions );
    var editorID = ActiveOptions.editor_id;  
    var buttonID = editorID.match(/\beditor-([\w,-]+)/)[1];
    var ace_editor_div = $(editorID + " .gollum-editor-body")[0];
    var ace_editor = ace.edit(ace_editor_div);
    ace_editor.setTheme(ActiveOptions.theme);
    ace_editor.setFontSize(ActiveOptions.fontsize + 'px');
    ace_editor.setShowPrintMargin(false);
    ace_editor.commands.bindKeys({"ctrl-t":null});
    //console.info("ActiveOptions.line_numbering: " + ActiveOptions.line_numbering)
    ace_editor.renderer.setShowGutter(ActiveOptions.line_numbering);
    $(ace_editor_div).height(ActiveOptions.editor_height);
    if(ActiveOptions.keybinding != 'default'){
      console.info("setting keybinding to: " + ActiveOptions.keybinding);
      ace_editor.setKeyboardHandler(ActiveOptions.keybinding)
    }
    $(ace_editor.textInput.getElement()).attr("tabindex", 1);
    ace_editor.getSession().setUseWrapMode(true);
    ace_editor.focus();

    
    ActiveOptions.ace_editor = ace_editor;

    /**
     * we have many editors, one for each paragraph, and we need to keep track of all their
     * options separately
    **/
    Editors[currentEditor()] = $.extend({}, ActiveOptions);
    var local_options = $.extend({}, ActiveOptions);


    
    $(ActiveOptions.editor_id +'-cancel').click(
        function(e){
          e.preventDefault();
          
          /* click the button and check back in if we are editing an existing paragraph */
          if($(editorID).hasClass('edit')){
            $("#wiki-edit-in-place-" + buttonID).click();
            $("#item-checkin-" + buttonID).submit();
            load_initial_paragraph("article-paragraph-editor-" + buttonID);
            remove_autosaved_paragraph("article-paragraph-editor-" + buttonID);
            stop_autosave_paragraph("article-paragraph-editor-" + buttonID);
            console.info("cancelling");
          }
          /* destroy the existing editor if cancelling an editor, a new one is generated 
          for every click on the insert button */
          else{
            $('#' + $(editorID + '-insert-after').val()).click();
            old_editor = $('#article-paragraph-editor-' + buttonID );
            old_editor.remove();
          }
         
        }
    );

    $(ActiveOptions.editor_id + '_form')
      .submit( function(eventObj){
        // console.info("Calling form submit");
        //console.info(local_options.editor_id);
        // console.info(ActiveOptions.ace_editor);
        // console.info(ActiveOptions.ace_editor.getSession().getValue());

        try{
          var contents = local_options.ace_editor.getSession().getValue();

          var content_div = $(local_options.editor_id + '_form' + ' .gollum-editor-textarea');
          content_div.val(contents);  
        }  
        catch(err){
          alert("sorry, there was an error in saving.  Please email us this error at hi@authorea.com and try again: \n" + err);
          return false;
        }      
        if( (typeof contents == "undefined") || (contents == "") ) {
          s = "warning, contents cannot be blank\n";
          alert(s);
          return false;
        }

        return true;
      })
      .bind('ajax:success', function(evt, data, status, xhr){
        console.info('*** success ***');
        $("#wiki-edit-in-place-" + buttonID).click();
      })
      .bind('ajax:before', function(evt, data, status, xhr){
      })
      .bind('ajax:beforeSend', function(evt, data, status, xhr){
        var target = this;
        var spinner = new Spinner().spin(target);
      })
      .bind('ajax:error', function(xhr, status, error){
        console.info('*** error ***');
      });

 

    $(ActiveOptions.editor_id + '-save-and-close').click(
        function(e){
          e.preventDefault();
          var page_title = $(editorID).find(".gollum-editor-page-title").val();
          if( !validate_editor_page_title(page_title) ){
            return false;
          }
          if($(editorID).hasClass('edit')){
            
            $(editorID + '-submit').click();
            //$("#wiki-edit-in-place-" + buttonID).click();
            /*check back in item on save and close*/
            //$("#item-checkin-" + buttonID).submit();
           
            
          }
          /*on an insert command, a new editor will be generated and initialized, so all we need to do is click */
          else{
            $(editorID + '-submit').click();
            $('#article-paragraph-editor-' + buttonID ).remove();

          }
         
        }
    );

    $(ActiveOptions.editor_id + '-preview').click(
        function(e){
          e.preventDefault();
          $("#preview-paragraph-modal").modal();
          var format = $(this).closest(".gollum-editor").find(".wiki_format").val();
          var text = ace_editor.getSession().getValue();
          $.post("preview_paragraph",{"text": text, "format": format}).success(function(data){
              $("#preview-page-contents").html(data.data);
              MathJax.Hub.Queue(["Typeset", MathJax.Hub, "preview-page-contents"])();
            });
          
         
        }
    );
    

    if ( EditorHas.baseEditorMarkup() ) {
      // Initialize the function bar by loading proper definitions
      if ( EditorHas.functionBar() ) {

        var htmlSetMarkupLang =
          $(ActiveOptions.editor_id + '-body').attr('data-markup-lang');

        if ( htmlSetMarkupLang ) {
          //TODO: add this to editors
          ActiveOptions.MarkupType = htmlSetMarkupLang;
        }

        // load language definition
        LanguageDefinition.setActiveLanguage( ActiveOptions.MarkupType );
        if ( EditorHas.formatSelector() ) {
          FormatSelector.init(
            $(ActiveOptions.editor_id + '-format-selector select') );
        }

      }// EditorHas.functionBar
    }// EditorHas.baseEditorMarkup
  }; //$.GollumEditorInPlace


  $.GollumEditorInPlace.replaceSelection = function( repText ) {
    var range = ace_editor.getSelectionRange();
    ace_editor.getSession().getDocument().replace(range, repText);
  };
  /**
   *  $.GollumEditor.defineLanguage
   *  Defines a set of language actions that Gollum can use.
   *  Used by the definitions in langs/ to register language definitions.
   */
  $.GollumEditorInPlace.defineLanguage = function( language_name, languageObject ) {
    if ( typeof languageObject == 'object' ) {
      
      LanguageDefinition.define( language_name, languageObject );
    } else {
      //nothing
    }
  };


  /**
   *  debug
   *  Prints debug information to console.log if debug output is enabled.
   *
   *  @param  mixed  Whatever you want to dump to console.log
   *  @return void
f   */
  var debug = function(m) {
    if ( ActiveOptions.Debug &&
         typeof console != 'undefined' ) {
      console.log( m );
    }
  };



  /**
   *  LanguageDefinition
   *  Language definition file handler
   *  Loads language definition files as necessary.
   */
  var LanguageDefinition = {

    _ACTIVE_LANG: '',
    _LOADED_LANGS: [],
    _LANG: {},

    /**
     *  Defines a language
     *
     *  @param name string  The name of the language
     *  @param name object  The definition object
     */
    define: function( name, definitionObject ) {
     
      LanguageDefinition._ACTIVE_LANG = name;
      LanguageDefinition._LOADED_LANGS.push( name );
      LanguageDefinition._LANG[name] = definitionObject;
      $.extend(Editors[currentEditor()], {_ACTIVE_LANG:name});
      
    },

    getActiveLanguage: function() {
      return LanguageDefinition._ACTIVE_LANG;
  },

    setActiveLanguage: function( name ) {
      ActiveOptions.ace_editor.getSession().setMode("ace/mode/" + name);
      if ( !LanguageDefinition.isLoadedFor(name) ) {
        LanguageDefinition._ACTIVE_LANG = null;
        LanguageDefinition.loadFor( name, function(x, t) {
          if ( t != 'success' ) {
            console.info('Failed to load language definition for ' + name);
            // well, fake it and turn everything off for this one
            LanguageDefinition.define( name, {} );
          }

          // update features that rely on the language definition
          if ( EditorHas.functionBar() ) {
            FunctionBar.refresh();
          }

          if ( LanguageDefinition.isValid() && EditorHas.formatSelector() ) {
            FormatSelector.updateSelected();
          }

        } ); // loadFor
      } else {
        LanguageDefinition._ACTIVE_LANG = name;
        $.extend(Editors[currentEditor()], {_ACTIVE_LANG:name});
        FunctionBar.refresh();
      }
    },


    /**
     *  gets a definition object for a specified attribute
     *
     *  @param  string  attr    The specified attribute.
     *  @param  string  specified_lang  The language to pull a definition for.
     *  @return object if exists, null otherwise
     */
    getDefinitionFor: function( attr, specified_lang ) {
      if ( !specified_lang ) {
        specified_lang = LanguageDefinition._ACTIVE_LANG;
      }

      if ( LanguageDefinition.isLoadedFor(specified_lang) &&
           LanguageDefinition._LANG[specified_lang][attr] &&
           typeof LanguageDefinition._LANG[specified_lang][attr] == 'object' ) {
        return LanguageDefinition._LANG[specified_lang][attr];
      }

      return null;
    },


    /**
     *  loadFor
     *  Asynchronously loads a definition file for the current markup.
     *  Definition files are necessary to use the code editor.
     *
     *  @param  string  markup_name  The markup name you want to load
     *  @return void
     */
    loadFor: function( markup_name, on_complete ) {
      /* will need to reload the ID after the ajax call */
      var editorID = ActiveOptions.editor_id;
      ActiveOptions.MarkupType = markup_name;
      var markupType = ActiveOptions.MarkupType;
      // Keep us from hitting 404s on our site, check the definition blacklist
      if ( ActiveOptions.NoDefinitionsFor.length ) {
        for ( var i=0; i < ActiveOptions.NoDefinitionsFor.length; i++ ) {
          if ( markup_name == ActiveOptions.NoDefinitionsFor[i] ) {
            // we don't have this. get out.
            if ( typeof on_complete == 'function' ) {
              on_complete( null, 'error' );
              return;
            }
          }
        }
      }

      /* attempt to load the definition for this language */
      var script_uri = '/assets/editor/langs/' + markup_name + '.js';
      /**
       * this is a little tricky as I didn't want to change the language definitions.  I read in 
       *  the definitions as if I were in GollumEditor, then I replace all occurances of GollumEditor
       *  with GollumEditorInPlace.
       */
      $.ajax({
                url: script_uri,
                dataType: 'text',
                complete: function( xhr, textStatus ) {
                  ActiveOptions.editor_id = editorID;
                  ActiveOptions.MarkupType = markupType;
                  var lang_script = xhr.responseText.replace(/GollumEditor/gi, "GollumEditorInPlace");
                  eval(lang_script);
                  if ( typeof on_complete == 'function' ) {
                    on_complete( lang_script, textStatus );
                  }
                  
                  /*****************/
                  /** This isn't so pretty but the language definitions are not
                  *** loading until the ajax call completes, and we need to load
                  *** the language bar */
                  LanguageDefinition.setActiveLanguage( ActiveOptions.MarkupType );
                  if ( EditorHas.formatSelector() ) {
                    //FormatSelector.init(
                    //$(ActiveOptions.editor_id + '-format-selector select') );
                    $(ActiveOptions.editor_id + '-wiki_format').val(markupType);
                  }
                  /*************/
                }
      });
    },


    /**
     *  isLoadedFor
     *  Checks to see if a definition file has been loaded for the
     *  specified markup language.
     *
     *  @param  string  markup_name   The name of the markup.
     *  @return boolean
     */
    isLoadedFor: function( markup_name ) {
      if ( LanguageDefinition._LOADED_LANGS.length === 0 ) {
        return false;
      }

      for ( var i=0; i < LanguageDefinition._LOADED_LANGS.length; i++ ) {
        if ( LanguageDefinition._LOADED_LANGS[i] == markup_name ) {
          return true;
        }
      }
      return false;
    },

    isValid: function() {
      return ( LanguageDefinition._ACTIVE_LANG &&
               typeof LanguageDefinition._LANG[LanguageDefinition._ACTIVE_LANG] ==
               'object' );
    }

  };


  /**
   *  EditorHas
   *  Various conditionals to check what features of the Gollum Editor are
   *  active/operational.
   */
  var EditorHas = {
    /**
     *  EditorHas.baseEditorMarkup
     *  True if the basic editor form is in place.
     *
     *  @return boolean
     */
    baseEditorMarkup: function() {
      return ( $(ActiveOptions['editor_id']).length &&
               $(ActiveOptions['editor_id'] + '-body').length );
    },


    /**
     *  EditorHas.collapsibleInputs
     *  True if the editor contains collapsible inputs for things like the
     *  sidebar or footer, false otherwise.
     *
     *  @return boolean
     */
    collapsibleInputs: function() {
      return $(ActiveOptions.editor_id + ' .collapsed', ActiveOptions.editor_id + ' .expanded').length;
    },


    /**
     *  EditorHas.formatSelector
     *  True if the editor has a format selector (for switching between
     *  language types), false otherwise.
     *
     *  @return boolean
     */
    formatSelector: function() {
      return $(ActiveOptions.editor_id + '-format-selector select').length;
    },


    /**
     *  EditorHas.functionBar
     *  True if the Function Bar markup exists.
     *
     *  @return boolean
     */
    functionBar: function() {
      return ( ActiveOptions.HasFunctionBar &&
               $(ActiveOptions.editor_id + '-function-bar').length );
    },


    /**
     *  EditorHas.ff4Environment
     *  True if in a Firefox 4.0 Beta environment.
     *
     *  @return boolean
     */
    ff4Environment: function() {
      var ua = new RegExp(/Firefox\/4.0b/);
      return ( ua.test( navigator.userAgent ) );
    },


    /**
     *  EditorHas.editSummaryMarkup
     *  True if the editor has a summary field (Gollum's commit message),
     *  false otherwise.
     *
     *  @return boolean
     */
    editSummaryMarkup: function() {
      return ( $('input' + ActiveOptions.editor_id +'-message-field').length > 0 );
    },


    /**
     *  EditorHas.mathJax
     *  True if the editor has MathJax enabled and running, false otherwise.
     *
     *  @return boolean
     */
    mathJax: function() {
      return (typeof window.MathJax == 'object');
    },


    /**
     *  EditorHas.previewButton
     *  True if the editor has a preview button, false otherwise.
     *
     *  @return boolean
     */
    previewButton: function() {
      return ( $(ActiveOptions.editor_id +' ' + ActiveOptions.editor_id +'-preview').length );
    },


    /**
     *  EditorHas.titleDisplayed
     *  True if the editor is displaying a title field, false otherwise.
     *
     *  @return boolean
     */
    titleDisplayed: function() {
      return ( ActiveOptions.NewFile );
    }

  };


  /**
   *  FunctionBar
   *
   *  Things the function bar does.
   */
   var FunctionBar = {

      isActive: false,


      /**
       *  FunctionBar.activate
       *  Activates the function bar, attaching all click events
       *  and displaying the bar.
       *
       */
      activate: function() {
        $(ActiveOptions.editor_id +'-function-bar a.function-button').each(function() {
          var buttonID = $(this).attr('id').match(/\bfunction-(\w+)/)[0];
          if ( LanguageDefinition.getDefinitionFor( buttonID ) ) {
            $(this).click( FunctionBar.evtFunctionButtonClick );
            $(this).removeClass('disabled');
          }
          else if ( buttonID != 'function-help' ) {
            $(this).addClass('disabled');
          }
        });

        // show bar as active
        $(ActiveOptions.editor_id +'-function-bar').addClass( 'active' );
        FunctionBar.isActive = true;
      },


      deactivate: function() {
        $(ActiveOptions.editor_id +'-function-bar a.function-button').unbind('click');
        $(ActiveOptions.editor_id +'-function-bar').removeClass( 'active' );
        FunctionBar.isActive = false;
      },


      /**
       *  FunctionBar.evtFunctionButtonClick
       *  Event handler for the function buttons. Traps the click and
       *  executes the proper language action.
       *
       *  @param jQuery.Event jQuery event object.
       */
      evtFunctionButtonClick: function(e) {
        e.preventDefault();
        var buttonID = $(this).attr('id').match(/\bfunction-(\w+)/)[0];
        var editorID = $(this).attr('id').match(/([\w-]+)-function/)[1];
        
        ActiveOptions.editor_id = '#' + editorID;
        var markupType = $(ActiveOptions.editor_id + '-wiki_format').val();
        
        /*will search for a given button's definition according to the markup type of the
         paragraph*/
        //var def = LanguageDefinition.getDefinitionFor( buttonID );
        var def = LanguageDefinition._LANG[markupType][buttonID];
        if ( typeof def == 'object' ) {
          FunctionBar.executeAction( def );
          ActiveOptions.ace_editor.focus();
        }
      },


      /**
       *  FunctionBar.executeAction
       *  Executes a language-specific defined action for a function button.
       *
       */
      executeAction: function( definitionObject ) {
        console.info("executing action");
        // get the selected text from the textarea
        ace_editor = ActiveOptions.ace_editor
        var txt = ace_editor.getValue();

        var selPos = [0,0];
        var selText = ace_editor.getCopyText();
        var repText = selText;
        var reselect = true;
        var cursor = null;
        var no_selection = false;

        // execute a replacement function if one exists
        if ( definitionObject.exec &&
             typeof definitionObject.exec == 'function' ) {
          definitionObject.exec( txt, selText, $(ActiveOptions.editor_id +'-body') );
          return;
        }

        // execute a search/replace if they exist
        var searchExp = /([^\n]+)/gi;
        if ( definitionObject.search &&
             typeof definitionObject.search == 'object' ) {
          searchExp = null;
          searchExp = new RegExp ( definitionObject.search );
        }
        // replace text
        if ( definitionObject.replace &&
             typeof definitionObject.replace == 'string' ) {
          var rt = definitionObject.replace;
          repText = repText.replace( searchExp, rt );
          // remove backreferences
          repText = repText.replace( /\$[\d]/g, '' );

          if ( repText === '' ) {
            no_selection = true;

            // find position of $1 - this is where we will place the cursor
            cursor = rt.indexOf('$1');

            // we have an empty string, so just remove backreferences
            repText = rt.replace( /\$[\d]/g, '' );

            // if the position of $1 doesn't exist, stick the cursor in
            // the middle
            if ( cursor == -1 ) {
              cursor = Math.floor( rt.length / 2 );
            }
          }
        }

        // append if necessary
        if ( definitionObject.append &&
             typeof definitionObject.append == 'string' ) {
          if ( repText == selText ) {
            reselect = false;
          }
          repText += definitionObject.append;
        }

        if ( repText ) {
          var range = ace_editor.getSelectionRange();
         
          ace_editor.getSession().getDocument().replace(range, repText);
          if(no_selection){
            var move_cursor = definitionObject.move_cursor || [0,-1]
            ace_editor.getSelection().moveCursorBy(move_cursor[0],move_cursor[1]);
            ace_editor.clearSelection();
          }
          //FunctionBar.replaceFieldSelection( $(ActiveOptions.editor_id +'-body'),
          //                                   repText, reselect, cursor );
        }

      }, /*executeAction*/

      isShown: function() {
        return ($(ActiveOptions.editor_id +'-function-bar').is(':visible'));
      },

      refresh: function() {
        if ( EditorHas.functionBar() ) {
          if ( LanguageDefinition.isValid() ) {
            $(ActiveOptions.editor_id +'-function-bar a.function-button').unbind('click');
            FunctionBar.activate();
          } else {
            if ( FunctionBar.isShown() ) {
              // deactivate the function bar; it's not gonna work now
              FunctionBar.deactivate();
            }
          }
        }
      } //refresh

   }; //FunctionBar



   /**
    *  FormatSelector
    *
    *  Functions relating to the format selector (if it exists)
    */
   var FormatSelector = {

     $_SELECTOR: null,

     /**
      *  FormatSelector.evtChangeFormat
      *  Event handler for when a format has been changed by the format
      *  selector. Will automatically load a new language definition
      *  via JS if necessary.
      *
      *  @return void
      */
      evtChangeFormat: function( e ) {
        var newMarkup = $(this).val();
        var editorID = $(this).attr('id').match(/([\w-]+)-wiki_format/)[1];
        
        setCurrentEditor(editorID);
        $.extend(Editors[currentEditor()], {_ACTIVE_LANG: newMarkup});
        
        LanguageDefinition.setActiveLanguage( newMarkup );

     },


     /**
      *  FormatSelector.init
      *  Initializes the format selector.
      *
      *  @return void
      */
     init: function( $sel ) {

      

       FormatSelector.$_SELECTOR = $sel;

       // set format selector to the current language
       FormatSelector.updateSelected();
       FormatSelector.$_SELECTOR.change( FormatSelector.evtChangeFormat );
     },


     /**
      * FormatSelector.update
      */
    //TODO: possibly need to remove this update of the format selector
    updateSelected: function() {
      var currentLang = LanguageDefinition.getActiveLanguage();
      FormatSelector.$_SELECTOR.val( currentLang );
    }

   }; //formatSelector

})(jQuery);
