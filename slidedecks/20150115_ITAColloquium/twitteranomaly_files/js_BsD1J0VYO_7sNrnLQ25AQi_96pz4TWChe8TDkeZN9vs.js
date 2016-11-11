!function(n,t){"use strict";t.behaviors.security_form={/**
     * @param context
     * @param settings
     */
attach:function(){// Look through all forms in the page
n("form").each(function(t,e){var i=n(e),f=i.find("input[type=hidden][name=form_token]"),a=i.find(".form-submit.ajax"),o=1===a.length?!0:!1;// If the form doesn't have a hidden input named "form_token" then input
// will be undefined
if("undefined"!=typeof f){// jQuery object of the hidden input
var r=n(f[0]);// if the input value is callback then whenever we submit the form
// we need to query the backend for the proper CSRF token.
if("callback"===r.val()){// the url to the callback - set on page load
var u="/ajax/get/csrf-token",d=i.find("input[type=hidden][name=form_id]");if("undefined"!=typeof d){// get the formId
var c=n(d[0]).val(),m=!1;// bind the event to the form element
i.submit(function(t){m===!1&&(// prevent the event to be fired so we can callback
// then submit the form
t.preventDefault(),// then get the csrf token from the backend
n.get(u,{form_id:c},function(n){// inject it to the token field
r.val(n.token),// we flag the form as submitted so we don't redo what we just did
m=!0,// submit the form
i.submit()}))}),// if this form is using an ajax submit, go ahead
// and go get the csrf -- don't wait for them to submit
o&&// then get the csrf token from the backend
n.get(u,{form_id:c},function(n){// inject it to the token field
r.val(n.token)})}}}})}}}(jQuery,Drupal);;
