/* 
	jQuery TextAreaResizer plugin
	Created on 17th January 2008 by Ryan O'Dell 
	Version 1.0.4
*/(function($){var textarea,staticOffset;var iLastMousePos=0;var iMin=32;var grip;$.fn.TextAreaResizer=function(){return this.each(function(){textarea=$(this).addClass('processed'),staticOffset=null;$(this).wrap('<div class="resizable-textarea"><span></span></div>').parent().append($('<div class="grippie"></div>').bind("mousedown",{el:this},startDrag));var grippie=$('div.grippie',$(this).parent())[0];grippie.style.marginRight=(grippie.offsetWidth-$(this)[0].offsetWidth)+'px'})};function startDrag(e){textarea=$(e.data.el);textarea.blur();iLastMousePos=mousePosition(e).y;staticOffset=textarea.height()-iLastMousePos;textarea.css('opacity',0.25);$(document).mousemove(performDrag).mouseup(endDrag);return false}function performDrag(e){var iThisMousePos=mousePosition(e).y;var iMousePos=staticOffset+iThisMousePos;if(iLastMousePos>=(iThisMousePos)){iMousePos-=5}iLastMousePos=iThisMousePos;iMousePos=Math.max(iMin,iMousePos);textarea.height(iMousePos+'px');if(iMousePos<iMin){endDrag(e)}return false}function endDrag(e){$(document).unbind('mousemove',performDrag).unbind('mouseup',endDrag);textarea.css('opacity',1);textarea.focus();textarea=null;staticOffset=null;iLastMousePos=0}function mousePosition(e){return{x:e.clientX+document.documentElement.scrollLeft,y:e.clientY+document.documentElement.scrollTop}}})(jQuery);
/*
 *	TypeWatch 2.0 - Original by Denny Ferrassoli / Refactored by Charles Christolini
 *  Copyright(c) 2007 Denny Ferrassoli - DennyDotNet.com
 *  Coprright(c) 2008 Charles Christolini - BinaryPie.com
 *  Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
*/(function(jQuery){jQuery.fn.typeWatch=function(o){var options=jQuery.extend({wait:750,callback:function(){},highlight:true,captureLength:2},o);function checkElement(timer,override){var elTxt=jQuery(timer.el).val();if((elTxt.length>options.captureLength&&elTxt.toUpperCase()!=timer.text)||(override&&elTxt.length>options.captureLength)){timer.text=elTxt.toUpperCase();timer.cb(elTxt)}};function watchElement(elem){if(elem.type.toUpperCase()=="TEXT"||elem.nodeName.toUpperCase()=="TEXTAREA"){var timer={timer:null,text:jQuery(elem).val().toUpperCase(),cb:options.callback,el:elem,wait:options.wait};if(options.highlight){jQuery(elem).focus(function(){this.select()})}var startWatch=function(evt){var timerWait=timer.wait;var overrideBool=false;if(evt.keyCode==13&&this.type.toUpperCase()=="TEXT"){timerWait=1;overrideBool=true}var timerCallbackFx=function(){checkElement(timer,overrideBool)};clearTimeout(timer.timer);timer.timer=setTimeout(timerCallbackFx,timerWait)};jQuery(elem).keydown(startWatch)}};return this.each(function(index){watchElement(this)})}})(jQuery);
/*
Ajax upload
*/jQuery.extend({createUploadIframe:function(d,b){var a="jUploadFrame"+d;if(window.ActiveXObject){var c=document.createElement('<iframe id="'+a+'" name="'+a+'" />');if(typeof b=="boolean"){c.src="javascript:false"}else{if(typeof b=="string"){c.src=b}}}else{var c=document.createElement("iframe");c.id=a;c.name=a}c.style.position="absolute";c.style.top="-1000px";c.style.left="-1000px";document.body.appendChild(c);return c},createUploadForm:function(g,b){var e="jUploadForm"+g;var a="jUploadFile"+g;var d=$('<form  action="" method="POST" name="'+e+'" id="'+e+'" enctype="multipart/form-data"></form>');var c=$("#"+b);var f=$(c).clone();$(c).attr("id",a);$(c).before(f);$(c).appendTo(d);$(d).css("position","absolute");$(d).css("top","-1200px");$(d).css("left","-1200px");$(d).appendTo("body");return d},ajaxFileUpload:function(k){k=jQuery.extend({},jQuery.ajaxSettings,k);var a=new Date().getTime();var b=jQuery.createUploadForm(a,k.fileElementId);var i=jQuery.createUploadIframe(a,k.secureuri);var h="jUploadFrame"+a;var j="jUploadForm"+a;if(k.global&&!jQuery.active++){jQuery.event.trigger("ajaxStart")}var c=false;var f={};if(k.global){jQuery.event.trigger("ajaxSend",[f,k])}var d=function(l){var p=document.getElementById(h);try{if(p.contentWindow){f.responseText=p.contentWindow.document.body?p.contentWindow.document.body.innerText:null;f.responseXML=p.contentWindow.document.XMLDocument?p.contentWindow.document.XMLDocument:p.contentWindow.document}else{if(p.contentDocument){f.responseText=p.contentDocument.document.body?p.contentDocument.document.body.textContent||document.body.innerText:null;f.responseXML=p.contentDocument.document.XMLDocument?p.contentDocument.document.XMLDocument:p.contentDocument.document}}}catch(o){jQuery.handleError(k,f,null,o)}if(f||l=="timeout"){c=true;var m;try{m=l!="timeout"?"success":"error";if(m!="error"){var n=jQuery.uploadHttpData(f,k.dataType);if(k.success){k.success(n,m)}if(k.global){jQuery.event.trigger("ajaxSuccess",[f,k])}}else{jQuery.handleError(k,f,m)}}catch(o){m="error";jQuery.handleError(k,f,m,o)}if(k.global){jQuery.event.trigger("ajaxComplete",[f,k])}if(k.global&&!--jQuery.active){jQuery.event.trigger("ajaxStop")}if(k.complete){k.complete(f,m)}jQuery(p).unbind();setTimeout(function(){try{$(p).remove();$(b).remove()}catch(q){jQuery.handleError(k,f,null,q)}},100);f=null}};if(k.timeout>0){setTimeout(function(){if(!c){d("timeout")}},k.timeout)}try{var b=$("#"+j);$(b).attr("action",k.url);$(b).attr("method","POST");$(b).attr("target",h);if(b.encoding){b.encoding="multipart/form-data"}else{b.enctype="multipart/form-data"}$(b).submit()}catch(g){jQuery.handleError(k,f,null,g)}if(window.attachEvent){document.getElementById(h).attachEvent("onload",d)}else{document.getElementById(h).addEventListener("load",d,false)}return{abort:function(){}}},uploadHttpData:function(r,type){var data=!type;data=type=="xml"||data?r.responseXML:r.responseText;if(type=="script"){jQuery.globalEval(data)}if(type=="json"){eval("data = "+data)}if(type=="html"){jQuery("<div>").html(data).evalScripts()}return data}});
/**
 * Upload call. Used only once in the wmd file upload
 * this is used in the wmd file uploader and the
 * askbots image and attachment upload plugins
 * @todo refactor this code to "new style"
 */
function ajaxFileUpload(options) {

    var spinner = options['spinner'];
    var uploadInputId = options['uploadInputId'];
    var urlInput = $(options['urlInput']);
    var startUploadHandler = options['startUploadHandler'];

    spinner.ajaxStart(function(){
        $(this).show();
    }).ajaxComplete(function(){
        $(this).hide();
    });

    /* important!!! upload input must be loaded by id
     * because ajaxFileUpload monkey-patches the upload form */
    $('#' + uploadInputId).ajaxStart(function(){
        $(this).hide();
    }).ajaxComplete(function(){
        $(this).show();
    });

    //var localFilePath = upload_input.val();
    $.ajaxFileUpload({
        url: askbot['urls']['upload'],
        secureuri: false,
        fileElementId: uploadInputId,
        dataType: 'xml',
        success: function (data, status) {

            var fileURL = $(data).find('file_url').text();
            /*
            * hopefully a fix for the "fakepath" issue
            * https://www.mediawiki.org/wiki/Special:Code/MediaWiki/83225
            */
            fileURL = fileURL.replace(/\w:.*\\(.*)$/,'$1');
            var error = $(data).find('error').text();
            if(error != ''){
                alert(error);
            } else {
                urlInput.attr('value', fileURL);
            }

            /* re-install this as the upload extension
             * will remove the handler to prevent double uploading
             * this hack is a manipulation around the 
             * ajaxFileUpload jQuery plugin. */
            $('#' + uploadInputId).unbind('change').change(startUploadHandler);
        },
        error: function (data, status, e) {
            if (startUploadHandler){
                /* re-install this as the upload extension
                * will remove the handler to prevent double uploading */
                $('#' + uploadInputId).unbind('change').change(startUploadHandler);
            }
        }
    });
    return false;
};

var TagDetailBox = function(box_type){
    WrappedElement.call(this);
    this.box_type = box_type;
    this._is_blank = true;
    this._tags = new Array();
    this.wildcard = undefined;
};
inherits(TagDetailBox, WrappedElement);

TagDetailBox.prototype.createDom = function(){
    this._element = this.makeElement('div');
    this._element.addClass('wildcard-tags');
    this._headline = this.makeElement('p');
    this._headline.html(gettext('Tag "<span></span>" matches:'));
    this._element.append(this._headline);
    this._tag_list_element = this.makeElement('ul');
    this._tag_list_element.addClass('tags');
    this._element.append(this._tag_list_element);
    this._footer = this.makeElement('p');
    this._footer.css('clear', 'left');
    this._element.append(this._footer);
    this._element.hide();
};

TagDetailBox.prototype.belongsTo = function(wildcard){
    return (this.wildcard === wildcard);
};

TagDetailBox.prototype.isBlank = function(){
    return this._is_blank;
};

TagDetailBox.prototype.clear = function(){
    if (this.isBlank()){
        return;
    }
    this._is_blank = true;
    this.getElement().hide();
    this.wildcard = null;
    $.each(this._tags, function(idx, item){
        item.dispose();
    });
    this._tags = new Array();
};

TagDetailBox.prototype.loadTags = function(wildcard, callback){
    var me = this;
    $.ajax({
        type: 'GET',
        dataType: 'json',
        cache: false,
        url: askbot['urls']['get_tags_by_wildcard'],
        data: { wildcard: wildcard },
        success: callback,
        failure: function(){ me._loading = false; }
    });
};

TagDetailBox.prototype.renderFor = function(wildcard){
    var me = this;
    if (this._loading === true){
        return;
    }
    this._loading = true;
    this.loadTags(
        wildcard,
        function(data, text_status, xhr){
            me._tag_names = data['tag_names'];
            if (data['tag_count'] > 0){
                var wildcard_display = wildcard.replace(/\*$/, '&#10045;');
                me._headline.find('span').html(wildcard_display);
                $.each(me._tag_names, function(idx, name){
                    var tag = new Tag();
                    tag.setName(name);
                    tag.setUrlParams(name)
                    //tag.setLinkable(false);
                    me._tags.push(tag);
                    me._tag_list_element.append(tag.getElement());
                });
                me._is_blank = false;
                me.wildcard = wildcard;
                var tag_count = data['tag_count'];
                if (tag_count > 20){
                    var fmts = gettext('and %s more, not shown...');
                    var footer_text = interpolate(fmts, [tag_count - 20]);
                    me._footer.html(footer_text);
                    me._footer.show();
                } else {
                    me._footer.hide();
                }
                me._element.show();
            } else {
                me.clear();
            }
            me._loading = false;
        }
    );
}

function pickedTags(){
    
    var interestingTags = {};
    var ignoredTags = {};
    var subscribedTags = {};
    var interestingTagDetailBox = new TagDetailBox('interesting');
    var ignoredTagDetailBox = new TagDetailBox('ignored');
    var subscribedTagDetailBox = new TagDetailBox('subscribed');

    var sendAjax = function(tagnames, reason, action, callback){
        var url = '';
        if (action == 'add') {
            if (reason == 'good') {
                url = askbot['urls']['mark_interesting_tag'];
            } else  if (reason == 'bad') {
                url = askbot['urls']['mark_ignored_tag'];
            } else {
                url = askbot['urls']['mark_subscribed_tag'];
            }
        }
        else {
            url = askbot['urls']['unmark_tag'];
        }

        var data = JSON.stringify({
            tagnames: tagnames,
            reason: reason,
            user: askbot['data']['viewUserId'] 
        });
        var call_settings = {
            type:'POST',
            url:url,
            data: data,
            dataType: 'json'
        };
        if (callback !== false){
            call_settings.success = callback;
        }
        $.ajax(call_settings);
    };

    var unpickTag = function(from_target, tagname, reason, send_ajax){
        //send ajax request to delete tag
        var deleteTagLocally = function(){
            from_target[tagname].remove();
            delete from_target[tagname];
        };
        if (send_ajax){
            sendAjax(
                [tagname],
                reason,
                'remove',
                function(){
                    deleteTagLocally();
                    if ($('body').hasClass('main-page')) {
                      askbot['controllers']['fullTextSearch'].refresh();
                    }
                }
            );
        }
        else {
            deleteTagLocally();
        }
    };

    var getTagList = function(reason){
        var base_selector = '.marked-tags';
        if (reason === 'good') {
            var extra_selector = '.interesting';
        } else if (reason === 'bad') {
            var extra_selector = '.ignored';
        } else if (reason === 'subscribed') {
            var extra_selector = '.subscribed';
        }
        return $(base_selector + extra_selector);
    };

    var getWildcardTagDetailBox = function(reason){
        if (reason === 'good') {
            return interestingTagDetailBox;
        } else if (reason === 'bad') {
            return ignoredTagDetailBox;
        } else if (reason === 'subscribed') {
            return subscribedTagDetailBox;
        }
    };

    var handleWildcardTagClick = function(tag_name, reason){
        var detail_box = getWildcardTagDetailBox(reason);
        var tag_box = getTagList(reason);
        if (detail_box.isBlank()){
            detail_box.renderFor(tag_name);
        } else if (detail_box.belongsTo(tag_name)){
            detail_box.clear();//toggle off
        } else {
            detail_box.clear();//redraw with new data
            detail_box.renderFor(tag_name);
        }
        if (!detail_box.inDocument()){
            tag_box.after(detail_box.getElement());
            detail_box.enterDocument();
        }
    };

    var renderNewTags = function(
                        clean_tag_names,
                        reason,
                        to_target,
                        to_tag_container
                    ){
        $.each(clean_tag_names, function(idx, tag_name){
            var tag = new Tag();
            tag.setName(tag_name);
            tag.setDeletable(true);

            if (/\*$/.test(tag_name)){
                tag.setLinkable(false);
                var detail_box = getWildcardTagDetailBox(reason);
                tag.setHandler(function(){
                    handleWildcardTagClick(tag_name, reason);
                    if (detail_box.belongsTo(tag_name)){
                        detail_box.clear();
                    }
                });
                var delete_handler = function(){
                    unpickTag(to_target, tag_name, reason, true);
                    if (detail_box.belongsTo(tag_name)){
                        detail_box.clear();
                    }
                }
            } else {
                var delete_handler = function(){
                    unpickTag(to_target, tag_name, reason, true);
                }
            }
            
            tag.setDeleteHandler(delete_handler);
            var tag_element = tag.getElement();
            to_tag_container.append(tag_element);
            to_target[tag_name] = tag_element;
        });
    };

    var handlePickedTag = function(reason){
        var to_target = interestingTags;
        var from_target = ignoredTags;
        var to_tag_container;
        if (reason === 'bad') {
            var input_sel = '#ignoredTagInput';
            to_target = ignoredTags;
            from_target = interestingTags;
            to_tag_container = $('div .tags.ignored');
        } else if (reason === 'good') {
            var input_sel = '#interestingTagInput';
            to_tag_container = $('div .tags.interesting');
        } else if (reason === 'subscribed') {
            var input_sel = '#subscribedTagInput';
            to_target = subscribedTags;
            to_tag_container = $('div .tags.subscribed');
        } else {
            return;
        }

        var tags_input =$.trim($(input_sel).attr('value'));
        if (tags_input === '') {
            return;
        }
        var tagnames = getUniqueWords(tags_input);

        if (reason !== 'subscribed') {//for "subscribed" we do not remove
            $.each(tagnames, function(idx, tagname) {
                if (tagname in from_target) {
                    unpickTag(from_target, tagname, reason, false);
                }
            });
        }

        var clean_tagnames = [];
        $.each(tagnames, function(idx, tagname){
            if (!(tagname in to_target)){
                clean_tagnames.push(tagname);
            }
        });

        if (clean_tagnames.length > 0){
            //send ajax request to pick this tag

            sendAjax(
                clean_tagnames,
                reason,
                'add',
                function(){ 
                    renderNewTags(
                        clean_tagnames,
                        reason,
                        to_target,
                        to_tag_container
                    );
                    $(input_sel).val('');
                    askbot['controllers']['fullTextSearch'].refresh();
                }
            );
        }
    };

    var collectPickedTags = function(section){
        if (section === 'interesting') {
            var reason = 'good';
            var tag_store = interestingTags;
        } else if (section === 'ignored') {
            var reason = 'bad';
            var tag_store = ignoredTags;
        } else if (section === 'subscribed') {
            var reason = 'subscribed';
            var tag_store = subscribedTags;
        } else {
            return;
        }
        $('.' + section + '.tags.marked-tags .tag-left').each(
            function(i,item){
                var tag = new Tag();
                tag.decorate($(item));
                tag.setDeleteHandler(function(){
                    unpickTag(
                        tag_store,
                        tag.getName(),
                        reason,
                        true
                    )
                });
                if (tag.isWildcard()){
                    tag.setHandler(function(){
                        handleWildcardTagClick(tag.getName(), reason)
                    });
                }
                tag_store[tag.getName()] = $(item);
            }
        );
    };

    var setupTagFilterControl = function(control_type){
        $('#' + control_type + 'TagFilterControl input')
        .unbind('click')
        .click(function(){
            $.ajax({
                type: 'POST',
                dataType: 'json',
                cache: false,
                url: askbot['urls']['set_tag_filter_strategy'],
                data: {
                    filter_type: control_type,
                    filter_value: $(this).val()
                },
                success: function(){
                    askbot['controllers']['fullTextSearch'].refresh();
                }
            });
        });
    };

    var getResultCallback = function(reason){
        return function(){ 
            handlePickedTag(reason);
        };
    };

    return {
        init: function(){
            collectPickedTags('interesting');
            collectPickedTags('ignored');
            collectPickedTags('subscribed');
            setupTagFilterControl('display');
            setupTagFilterControl('email');
            var ac = new AutoCompleter({
                url: askbot['urls']['get_tag_list'],
                minChars: 1,
                useCache: true,
                matchInside: true,
                maxCacheLength: 100,
                delay: 10
            });


            var interestingTagAc = $.extend(true, {}, ac);
            interestingTagAc.decorate($('#interestingTagInput'));
            interestingTagAc.setOption('onItemSelect', getResultCallback('good'));

            var ignoredTagAc = $.extend(true, {}, ac);
            ignoredTagAc.decorate($('#ignoredTagInput'));
            ignoredTagAc.setOption('onItemSelect', getResultCallback('bad'));

            var subscribedTagAc = $.extend(true, {}, ac);
            subscribedTagAc.decorate($('#subscribedTagInput'));
            subscribedTagAc.setOption('onItemSelect', getResultCallback('subscribed'));

            $("#interestingTagAdd").click(getResultCallback('good'));
            $("#ignoredTagAdd").click(getResultCallback('bad'));
            $("#subscribedTagAdd").click(getResultCallback('subscribed'));
        }
    };
}

$(document).ready( function(){
    pickedTags().init();
});
