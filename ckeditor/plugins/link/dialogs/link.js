var update_ckgeditInternalLink,update_ckgeditMediaLink;var fckgInternalInputId,fckgMediaInputId;window.onbeforeunload=function(){};CKEDITOR.dialog.add("link",function(b){oDokuWiki_FCKEditorInstance.Lang=b.lang;var v=oDokuWiki_FCKEditorInstance.dwiki_doku_base;var P=CKEDITOR.plugins.link;var f=new Object();f.doku_base=new RegExp("^"+v.replace(/\//g,"\\/"),"g");f.media_internal=/lib\/exe\/fetch\.php\/(.*)/;f.media_rewrite_1=/^_media\/(.*)/;f.media_rewrite_1Doku_Base=new RegExp("^"+v+"_media/(.*)");f.media_rewrite_2=/exe\/fetch.php\?media=(.*)/;f.internal_link=/doku.php\?id=(.*)/;f.internal_link_rewrite_2=/doku.php\/(.*)/;f.internal_link_rewrite_1=new RegExp("^"+v+"(?!_media)(.*)");f.samba=/file:\/\/\/\/\/(.*)/;f.samba_unsaved=/^\\\\\w+(\\\w.*)/;var z;var F={InternalLink:"internal link",InternalMedia:"internal media",MediaFileLink:"link to media file",SMBLabel:"Samba Share",GetHeadingsLabel:"Get Headings",QStringLabel:"Query String (For example: value_1=1&value_2=2) ",ResetQS:"Reset Query String",NotSetOption:"Not Set",AdvancedInfo:"To create anchors from Dokuwiki headers, click on the Get Headings button, select the header, click OK. You can go back, select a new page and get new headers.",AdvancedTabPrompt:"Use the advanced tab to create page anchors and query strings",SMBExample:"Enter your share as: \\\\Server\\directory\\file"};var p=b.lang.fbrowser?b.lang.fbrowser:F;var j=function(S){if(p[S]&&p[S]!=""){return p[S]}return F[S]};var M=function(){var V=this.getDialog();var X=V.getContentElement("advanced","internalAnchor").getInputElement().$.id;var S=document.getElementById(X);var U=V.getContentElement("info","internal").getInputElement().$.id;U=document.getElementById(U).value;if(!U){return}var T={push:function(Z,Y){this.stack[this.Index]=(new Option(Z,Y,false,false));this.Index++},Index:0,stack:undefined,selection:"",ini:function(Y){this.stack=S.options;this.stack.length=0;this.Index=0;this.push(Y,"")}};var W="dw_id="+U;b.config.jquery.post(b.config.ckedit_path+"get_headers.php",W,function(ac,Y){if(Y=="success"){var ad=decodeURIComponent(ac);if(ad.match(/^\s*__EMPTY__\s*$/)){T.ini("No Headers Found");T.selection="";return}T.ini("Headings Menu");var ab=ad.split("@@");for(var aa in ab){var Z=ab[aa].split(/;;/);T.push(Z[0],Z[1])}}},"html")};var I=function(T){var U=T;var S=0;var V="dw_id="+encodeURIComponent(T);b.config.jquery.ajax({url:b.config.ckedit_path+"useheading.php",async:false,data:V,type:"POST",dataType:"html",success:function(W){if(S){alert(W)}U=decodeURIComponent(W)},error:function(W,Y,X){U=T}});return U};var Q=function(){return z};var m=function(){oDokuWiki_FCKEditorInstance.isLocalDwikiBrowser=false;oDokuWiki_FCKEditorInstance.isUrlExtern=false;oDokuWiki_FCKEditorInstance.isDwikiMediaFile=false;var V=this.getDialog(),Y=["urlOptions","anchorOptions","emailOptions","internalOptions","mediaOptions","sambaOptions"],X=this.getValue(),W=V.definition.getContents("upload"),S=W&&W.hidden;V.hidePage("advanced");if(X=="internal"){oDokuWiki_FCKEditorInstance.isLocalDwikiBrowser=true;V.showPage("advanced")}else{if(X=="media"){oDokuWiki_FCKEditorInstance.isDwikiMediaFile=true}}if(X=="url"){oDokuWiki_FCKEditorInstance.isUrlExtern=true;if(!S){V.showPage("upload")}}else{if(!S){V.hidePage("upload")}}for(var U=0;U<Y.length;U++){var T=V.getContentElement("info",Y[U]);if(!T){continue}T=T.getElement().getParent().getParent();if(Y[U]==X+"Options"){T.show()}else{T.hide()}}V.layout()};var H=/^javascript:/,J=/^mailto:([^?]+)(?:\?(.+))?$/,h=/subject=([^;?:@&=$,\/]*)/,R=/body=([^;?:@&=$,\/]*)/,s=/^#(.*)$/,c=/^((?:http|https|ftp|news):\/\/)?(.*)$/,t=/^(_(?:self|top|parent|blank))$/,o=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,E=/^javascript:([^(]+)\(([^)]+)\)$/;var a=/doku.php\?id=(.*)$/;var l=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/;var x=/(?:^|,)([^=]+)=(\d+|yes|no)/gi;var n=function(Z,W){var T=(W&&(W.data("cke-saved-href")||W.getAttribute("href")))||"",ac,Y,X,V,U={};if((ac=T.match(H))){if(k=="encode"){T=T.replace(o,function(af,ah,ag){return"mailto:"+String.fromCharCode.apply(String,ah.split(","))+(ag&&r(ag))})}else{if(k){T.replace(E,function(al,an,ai){if(an==G.name){U.type="email";var am=U.email={};var ag=/[^,\s]+/g,ah=/(^')|('$)/g,af=ai.match(ag),ao=af.length,ak,ap;for(var aj=0;aj<ao;aj++){ap=decodeURIComponent(r(af[aj].replace(ah,"")));ak=G.params[aj].toLowerCase();am[ak]=ap}am.address=[am.name,am.domain].join("@")}})}}}if(!U.type){if((X=T.match(s))){U.type="anchor";U.anchor={};U.anchor.name=U.anchor.id=X[1]}else{if((Y=T.match(J))){var ae=T.match(h),S=T.match(R);U.type="email";var ab=(U.email={});ab.address=Y[1];ae&&(ab.subject=decodeURIComponent(ae[1]));S&&(ab.body=decodeURIComponent(S[1]))}else{if((V=T.match(f.media_internal))||(V=T.match(f.media_rewrite_1))||(V=T.match(f.media_rewrite_2))||(V=T.match(f.media_rewrite_1Doku_Base))){U.type="media";U.url={};U.url.protocol="";U.url.url="";U.url.selected=V[1]}else{if((V=T.match(a))||(V=T.match(f.internal_link_rewrite_2))||(V=T.match(f.internal_link_rewrite_1))){U.type="internal";U.url={};U.url.selected=V[1];U.url.protocol="";U.url.url=""}else{if(V=T.match(f.samba)){U.type="samba";U.url={};U.url.url="";U.url.protocol="";U.url.selected="\\\\"+V[1].replace(/\//g,"\\")}else{if(V=T.match(f.samba_unsaved)){U.type="samba";U.url={};U.url.url="";U.url.protocol="";U.url.selected=V[0]}else{if(T&&(V=T.match(c))){U.type="url";U.url={};U.url.protocol=V[1];U.url.url=V[2]}else{U.type="url"}}}}}}}}if(W){var aa=W.getAttribute("target");U.target={};U.adv={};var ad=this}this._.selectedElement=W;return U};var A=function(S){if(!S){return}S=S.replace(/^[\/\:]/,"");S=S.replace(/\//g,":");S=":"+S;document.getElementById(fckgInternalInputId).value=S};update_ckgeditInternalLink=A;var d=function(S){if(!S){return}S=S.replace(/^[\/\:]/,"");S=S.replace(/\//g,":");S=":"+S;document.getElementById(fckgMediaInputId).value=S};update_ckgeditMediaLink=d;var q=function(S){for(i in S){msg=i+"="+S[i];if(!confirm(msg)){break}}};var w=function(T,S){if(S[T]){this.setValue(S[T][this.id]||"")}};var L=function(S){return w.call(this,"target",S)};var K=function(S){return w.call(this,"adv",S)};var N=function(T,S){if(!S[T]){S[T]={}}S[T][this.id]=this.getValue()||""};var y=function(S){return N.call(this,"target",S)};var O=function(S){return N.call(this,"adv",S)};function r(S){return S.replace(/\\'/g,"'")}function B(S){return S.replace(/'/g,"\\$&")}var k=b.config.emailProtection||"";if(k&&k!="encode"){var G={};k.replace(/^([^(]+)\(([^)]+)\)$/,function(S,T,U){G.name=T;G.params=[];U.replace(/[^,\s]+/g,function(V){G.params.push(V)})})}function e(U){var S,T=G.name,Y=G.params,W,X;S=[T,"("];for(var V=0;V<Y.length;V++){W=Y[V].toLowerCase();X=U[W];V>0&&S.push(",");S.push("'",X?B(encodeURIComponent(U[W])):"","'")}S.push(")");return S.join("")}function u(T){var S,W=T.length,U=[];for(var V=0;V<W;V++){S=T.charCodeAt(V);U.push(S)}return"String.fromCharCode("+U.join(",")+")"}function D(T){var S=T.getAttribute("class");return S?S.replace(/\s*(?:cke_anchor_empty|cke_anchor)(?:\s*$)?/g,""):""}var C=b.lang.common,g=b.lang.link;return{title:g.title,minWidth:375,minHeight:250,contents:[{id:"info",label:g.info,title:g.info,elements:[{id:"linkType",type:"select",label:g.type,"default":"url",items:[[g.toUrl,"url"],[j("InternalLink"),"internal"],[j("InternalMedia"),"media"],[g.toEmail,"email"],["Samba share","samba"]],onChange:m,setup:function(S){if(S.type){this.setValue(S.type)}},commit:function(S){S.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:C.protocol,"default":"http://",items:[["http://\u200E","http://"],["https://\u200E","https://"],["ftp://\u200E","ftp://"],["news://\u200E","news://"],["m-files://show",""]],setup:function(S){if(S.url){this.setValue(S.url.protocol||"")}},commit:function(S){if(!S.url){S.url={}}S.url.protocol=this.getValue()}},{type:"text",id:"url",label:C.url,required:true,onLoad:function(){this.allowOnChange=true},onKeyUp:function(){this.allowOnChange=false;var U=this.getDialog().getContentElement("info","protocol"),S=this.getValue(),T=/^(http|https|ftp|news):\/\/(?=.)/i,W=/^((javascript:)|[#\/\.\?])/i;var V=T.exec(S);if(V){this.setValue(S.substr(V[0].length));U.setValue(V[0].toLowerCase())}else{if(W.test(S)){U.setValue("")}}this.allowOnChange=true},onChange:function(){if(this.allowOnChange){this.onKeyUp()}},validate:function(){var S=this.getDialog();if(S.getContentElement("info","linkType")&&S.getValueOf("info","linkType")!="url"){return true}if(this.getDialog().fakeObj){return true}var T=CKEDITOR.dialog.validate.notEmpty(g.noUrl);return T.apply(this)},setup:function(S){this.allowOnChange=false;if(S.url){this.setValue(S.url.url)}this.allowOnChange=true},commit:function(S){this.onChange();if(!S.url){S.url={}}S.url.url=this.getValue();this.allowOnChange=false}}],setup:function(S){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().show()}}}]},{type:"vbox",id:"internalOptions",children:[{type:"button",id:"browse1",hidden:"true",filebrowser:"info:url",label:C.browseServer},{type:"text",id:"internal",label:j("InternalLink"),required:true,setup:function(S){if(S){if(S.url&&S.url.selected){var T=S.url.selected.replace(/^\:/,"");this.setValue(":"+T)}}}},{id:"anchorsmsg",type:"html",html:j("AdvancedTabPrompt")}]},{type:"vbox",id:"mediaOptions",children:[{type:"button",id:"browse2",filebrowser:"info:url",label:C.browseServer},{type:"text",id:"media",label:j("MediaFileLink"),required:true,setup:function(S){if(S){if(S.url&&S.url.selected){var T=S.url.selected.replace(/^\:/,"");this.setValue(":"+T)}}}}]},{type:"vbox",id:"sambaOptions",children:[{type:"html",id:"smb_msg",html:j("SMBExample")},{type:"text",id:"samba",width:"50",label:j("SMBLabel"),required:true,setup:function(S){if(S.url&&S.url.selected){this.setValue(S.url.selected)}}}]},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:g.emailAddress,required:true,validate:function(){var S=this.getDialog();if(!S.getContentElement("info","linkType")||S.getValueOf("info","linkType")!="email"){return true}var T=CKEDITOR.dialog.validate.notEmpty(g.noEmail);return T.apply(this)},setup:function(T){if(T.email){this.setValue(T.email.address)}var S=this.getDialog().getContentElement("info","linkType");if(S&&S.getValue()=="email"){this.select()}},commit:function(S){if(!S.email){S.email={}}S.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:g.emailSubject,setup:function(S){if(S.email){this.setValue(S.email.subject)}},commit:function(S){if(!S.email){S.email={}}S.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:g.emailBody,rows:3,"default":"",setup:function(S){if(S.email){this.setValue(S.email.body)}},commit:function(S){if(!S.email){S.email={}}S.email.body=this.getValue()}}],setup:function(S){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().hide()}}}]},{id:"upload",label:g.upload,title:g.upload,hidden:true,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:C.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:C.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:g.advanced,title:g.advanced,elements:[{id:"msg",type:"html",html:"<p style='max-width:350px; white-space: pre-wrap;'>"+j("AdvancedInfo")+"</p>"},{id:"internalAnchor",type:"select","default":"",items:[["Not Set",""]],setup:function(S){if(S.hash){this.setValue(S.hash)}},commit:function(S){S.hash=this.getValue()}},{type:"button",id:"getheaders",onClick:M,label:j("GetHeadingsLabel")},{type:"html",html:"<br />"},{type:"text",id:"queryString",label:j("QStringLabel"),setup:function(S){if(S.qstring){this.setValue(S.qstring)}},commit:function(S){S.qstring=this.getValue()}},{type:"button",id:"clearquerystring",onClick:function(){var T=this.getDialog();var U=T.getContentElement("advanced","queryString").getInputElement().$.id;var S=document.getElementById(U);S.value=""},label:j("ResetQS")},{type:"vbox",padding:1,hidden:true,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:g.cssClasses,"default":"",id:"advCSSClasses",setup:K,commit:O},{type:"text",label:g.charset,"default":"",id:"advCharset",setup:K,commit:O}]}]}]}],onShow:function(){var U=this.getParentEditor(),T=U.getSelection(),S=null;if((S=P.getSelectedLink(U))&&S.hasAttribute("href")){T.selectElement(S)}else{S=null}this.setupContent(n.apply(this,[U,S]))},onOk:function(){var ac=new RegExp(oDokuWiki_FCKEditorInstance.imageUploadAllowedExtensions);var ae={},X=[],av={},au=this,Z=this.getParentEditor();this.commitContent(av);var ap=false;var af="";switch(av.type||"url"){case"media":if(document.getElementById(fckgMediaInputId).value){av.url.url=document.getElementById(fckgMediaInputId).value}av.adv.advTitle=av.url.url;var at=av.url.url.match(/(\.(\w+))$/);af=av.url.url.replace(/^:/,"");av.url.url=top.dokuBase+"doku.php?id="+av.url.url;if(at[1].match(ac)){av.adv.advContentType="linkonly"}else{av.adv.advContentType="other_mime";av.url.url=top.dokuBase+"lib/exe/fetch.php?media="+af;ap=true}av.adv.advCSSClasses="media mediafile";if(at){av.adv.advCSSClasses+=" mf_"+at[2]}var ak=(av.url&&av.url.protocol!=undefined)?av.url.protocol:"http://",aa=(av.url&&CKEDITOR.tools.trim(av.url.url))||"";ae["data-cke-saved-href"]=(aa.indexOf("/")===0)?aa:ak+aa;break;case"internal":if(!av.url.url){av.url.url=document.getElementById(fckgInternalInputId).value;if(!av.url.url.match(/^:?\w+:/)){var ax=top.getCurrentWikiNS()+":";ax=ax.replace(/:$/,"");var W=new RegExp(":?"+ax+":");if(!av.url.url.match(W)){av.url.url=ax+":"+av.url.url;av.url.url=av.url.url.replace(/\:{2,}/g,":")}}}av.url.url=av.url.url.replace(/^.*?\/data\/pages\//,"");av.url.url=av.url.url.replace(/^\:/,"");av.url.url=":"+av.url.url.replace(/\//g,":");av.adv.advCSSClasses="wikilink1";if(oDokuWiki_FCKEditorInstance.useheading=="y"){av.adv.advTitle=I(av.url.url)}else{av.adv.advTitle=av.url.url}av.url.url=top.dokuBase+"doku.php?id="+av.url.url;if(av.hash){av.url.url+="#"+av.hash}if(av.qstring){av.url.url+="&"+av.qstring}case"url":var ak=(av.url&&av.url.protocol!=undefined)?av.url.protocol:"http://",aa=(av.url&&CKEDITOR.tools.trim(av.url.url))||"";ae["data-cke-saved-href"]=(aa.indexOf("/")===0)?aa:ak+aa;break;case"anchor":var ay=(av.anchor&&av.anchor.name),al=(av.anchor&&av.anchor.id);ae["data-cke-saved-href"]="#"+(ay||al||"");break;case"samba":if(!av.url.url){av.url.url=document.getElementById(Q()).value}if(!av.url.url){alert("Missing Samba Url");return false}av.url.protocol="";var ak="";aa=(av.url&&CKEDITOR.tools.trim(av.url.url))||"";ae["data-cke-saved-href"]=(aa.indexOf("/")===0)?aa:ak+aa;av.adv.advCSSClasses="windows";av.adv.advTitle=av.url.url;break;case"email":var V,an=av.email,Y=an.address;switch(k){case"":case"encode":var ab=encodeURIComponent(an.subject||""),ag=encodeURIComponent(an.body||"");var ad=[];ag&&ad.push("body="+ag);ab&&ad.push("subject="+ab);ad=ad.length?"?"+ad.join("&"):"";if(k=="encode"){V=["javascript:void(location.href='mailto:'+",u(Y)];ad&&V.push("+'",B(ad),"'");V.push(")")}else{V=["mailto:",Y,ad]}break;default:var am=Y.split("@",2);an.name=am[0];an.domain=am[1];V=["javascript:",e(an)]}ae["data-cke-saved-href"]=V.join("");break}if(av.adv){var ao=function(az,aA){var aB=av.adv[az];if(aB){ae[aA]=aB}else{X.push(aA)}};ao("advId","id");ao("advLangDir","dir");ao("advAccessKey","accessKey");if(av.adv.advName){ae.name=ae["data-cke-saved-name"]=av.adv.advName}else{X=X.concat(["data-cke-saved-name","name"])}ao("advLangCode","lang");ao("advTabIndex","tabindex");if(!ap){ao("advTitle","title")}ao("advContentType","type");ao("advCSSClasses","class");ao("advCharset","charset");ao("advStyles","style");ao("advRel","rel")}var aw=Z.getSelection();var aj=aw.getSelectedText()?aw.getSelectedText():false;ae.href=ae["data-cke-saved-href"];if(!this._.selectedElement){var U=aw.getRanges(true);if(U.length==1&&U[0].collapsed){var ai=new CKEDITOR.dom.text(av.type=="email"?av.email.address:ae["data-cke-saved-href"],Z.document);U[0].insertNode(ai);U[0].selectNodeContents(ai);aw.selectRanges(U)}if(navigator.userAgent.match(/(Trident|MSIE)/)){var S=Z.document.createElement("a");S.setAttribute("href",ae.href);if(!aj&&(av.type=="media"||av.type=="internal")){S.setHtml(av.adv.advTitle)}else{S.setHtml(aw.getSelectedText())}for(attr in ae){if(attr.match(/href/i)){continue}S.setAttribute(attr,ae[attr])}Z.insertElement(S)}else{var ar=new CKEDITOR.style({element:"a",attributes:ae});ar.type=CKEDITOR.STYLE_INLINE;ar.apply(Z.document)}}else{var T=this._.selectedElement,aq=T.data("cke-saved-href"),ah=T.getHtml();if(ap){ae.type="other_mime";ae.title=":"+af}T.setAttributes(ae);T.removeAttributes(X);if(av.adv&&av.adv.advName&&CKEDITOR.plugins.link.synAnchorSelector){T.addClass(T.getChildCount()?"cke_anchor":"cke_anchor_empty")}if(aq==ah||av.type=="email"&&ah.indexOf("@")!=-1){T.setHtml(av.type=="email"?av.email.address:ae["data-cke-saved-href"])}aw.selectElement(T);delete this._.selectedElement}if(ai&&av.adv.advTitle){ai.setText(av.adv.advTitle)}},onLoad:function(){oDokuWiki_FCKEditorInstance.isDwikiImage=false;fckgInternalInputId=this.getContentElement("info","internal").getInputElement().$.id;fckgMediaInputId=this.getContentElement("info","media").getInputElement().$.id;z=this.getContentElement("info","samba").getInputElement().$.id;this.hidePage("advanced");this.showPage("info");var T=this._.tabs.advanced&&this._.tabs.advanced[0];var S=this;var U=j("NotSetOption");T.on("focus",function(W){var X=S.getContentElement("advanced","internalAnchor").getInputElement().$.id;var V=document.getElementById(X);V.selectedIndex=-1;V.options.length=0;V.options[0]=new Option(U,"",false,false)})},onFocus:function(){var S=this.getContentElement("info","linkType"),T;if(S&&S.getValue()=="url"){T=this.getContentElement("info","url");T.select()}}}});