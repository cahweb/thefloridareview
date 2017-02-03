var _gaq=_gaq||[];_gaq.push(["ucfhb._setAccount","UA-1658069-22"]);_gaq.push(["ucfhb._setDomainName","none"]);_gaq.push(["ucfhb._trackPageview"]);(function(){var k=document.createElement("script");k.type="text/javascript";k.async=!0;k.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(k,n)})();
var ucfhbTrackAction=function(k,n,r){null!==n&&null!==r?(_gaq.push(["ucfhb._trackEvent","Header",n,r]),window.setTimeout(function(){document.location=k},200)):document.location=k},ucfhbAssignTrackingListener=function(k,n,r,t,v){n=String(n);t=t||null;v=v||null;k.addEventListener?k.addEventListener(n,function(k){k.preventDefault();ucfhbTrackAction(r,t,v)},!1):k.attachEvent("on"+n,function(k){ucfhbTrackAction(r,t,v);return!1})},ucfhbJsonp=null;function ucfhbSetJsonp(k){ucfhbJsonp=k?k:null}
(function(){function k(){function f(a){return a.replace(/(<([^>]+)>)/ig,"")}function c(a,g){var e=a.target||a.srcElement,b=!1,m=!1;e.getBoundingClientRect().left>=g.getBoundingClientRect().left&&e.getBoundingClientRect().right<=g.getBoundingClientRect().right&&(b=!0);e.getBoundingClientRect().top>=g.getBoundingClientRect().top&&e.getBoundingClientRect().bottom<=g.getBoundingClientRect().bottom&&(m=!0);return b&&m?!1:!0}function k(a,g){var e=document.getElementById("ucfhb-json");e&&e.parentNode.removeChild(e);
C(a,function(){var a=JSON.parse(ucfhbJsonp);g(a)},600)}var a=this;this.searchService=x;this.autocompleteHelp=document.getElementById("ucfhb-search-autocomplete-srhelp");this.autocompleteList=document.getElementById("ucfhb-search-autocomplete");this.autocompleteSelectedId="ucfhb-autocomplete-selected";this.searchForm=document.getElementById("ucfhb-search-form");this.searchField=document.getElementById("ucfhb-search-field");this.searchSubmit=document.getElementById("ucfhb-search-submit");this.searchAction=
this.searchForm.getAttribute("data-action-url");this.searchActiveClass="search-is-active";this.searchKeytermLinkClass="search-autocomplete-keyterm";this.searchResultsLinkClass="search-autocomplete-result";this.keyterms={keyterms:[{name:"Housing and Residence Life",url:"http://www.housing.ucf.edu",matches:"hous;housing;dorm;apartment;on-campus living;residence;residency;nike;apollo;libra;tower;neptune;lake claire".split(";")},{name:"Academic Calendar",url:"http://calendar.ucf.edu",matches:"calendar;academic calendar;fall;spring;summer;schedule;deadlines;drop".split(";")},
{name:"UCF Libraries",url:"http://library.ucf.edu/",matches:["library","libraries","ucf library","ucf libraries"]},{name:"Knights Email",url:"http://knightsemail.ucf.edu",matches:["email","knights"]},{name:"Faculty and Staff Webmail",url:"http://webmail.ucf.edu",matches:["email","outlook","faculty","faculty email","faculty mail"]},{name:"Giving to UCF",url:"https://giving.ucffoundation.org/ucffoundation",matches:"giving;gift;donate;donation;giving to UCF;give to UCF".split(";")},{name:"Scholarship Information",
url:"http://finaid.ucf.edu/scholarships/",matches:["scholarships","scholarship information"]},{name:"Financial Aid",url:"http://finaid.ucf.edu/general/",matches:["aid","financial","financial aid"]},{name:"Webcourses",url:"http://webcourses.ucf.edu",matches:["online","webcourses"]},{name:"UCF Bookstore",url:"http://bookstore.ucf.edu",matches:["book","bookstore"]},{name:"Tuition and Fees",url:"http://tuitionfees.smca.ucf.edu/",matches:["tuition","cost","tuition and fees","fees"]},{name:"Orientation",
url:"http://orientation.ucf.edu/",matches:["orientation"]},{name:"Jobs with UCF",url:"https://www.jobswithucf.com/",matches:["jobs","employment","careers"]},{name:"Career Services",url:"http://career.sdes.ucf.edu/",matches:["careers","intern","career services"]},{name:"Parking Services",url:"http://parking.ucf.edu/",matches:["parking","parking services"]},{name:"Campus Map",url:"http://map.ucf.edu",matches:["map","campus","campus map"]},{name:"Registrar",url:"http://registrar.ucf.edu/",matches:["registrar"]},
{name:"Official Transcript Requests",url:"http://registrar.ucf.edu/transcript-request",matches:["transcripts","transcript request"]},{name:"College of Nursing",url:"http://nursing.ucf.edu",matches:["nursing","college","college of nursing"]},{name:"College of Education and Human Performance",url:"http://education.ucf.edu/",matches:["education","college","college of education and human performance"]},{name:"College of Arts and Humanities",url:"http://www.cah.ucf.edu/",matches:["arts","humanities","college",
"cah","college of arts and humantities"]},{name:"College of Science",url:"http://www.cos.ucf.edu/",matches:["cos","college of sciences"]},{name:"Department of Psychology",url:"http://psychology.cos.ucf.edu/",matches:["department of psychology"]},{name:"Student Health Services",url:"http://shs.sdes.ucf.edu/",matches:["health","services","wellness","immunizations","student health services"]},{name:"College of Health and Public Affairs",url:"http://cohpa.ucf.edu/",matches:["health","public","affairs",
"college of health and public affairs"]},{name:"Rosen College of Hospitality Management",url:"http://hospitality.ucf.edu/",matches:["hospitality","rosen","college of hospitality management","rosen college of hospitality management"]},{name:"College of Business Administration",url:"http://business.ucf.edu/",matches:["business","college of business administration","coba"]},{name:"College of Medicine",url:"http://med.ucf.edu/",matches:["medicine","college of medicine"]},{name:"Student Services",url:"http://www.sdes.ucf.edu/programs-and-services",
matches:["services","student","student services"]},{name:"Dining Services",url:"http://www.ucfdining.com/",matches:["dining","food","services","meal plan","dining services"]},{name:"UCF Phonebook",url:"http://www.ucf.edu/phonebook/",matches:["phonebook","directory","ucf phonebook"]},{name:"Undergraduate Studies",url:"http://undergraduatestudies.ucf.edu/",matches:["undergraduate studies"]},{name:"Campus Visit",url:"http://admissions.ucf.edu/visit/",matches:["tours","open house","visit","campus tour",
"campus visit"]},{name:"Student Union",url:"http://studentunion.ucf.edu/",matches:["student union","union","food"]},{name:"UCF Knights | Athletics",url:"http://www.ucfknights.com/",matches:["football","athletics","knights"]},{name:"Undergraduate Admissions",url:"http://admissions.ucf.edu/",matches:["undergraduate","admissions","undergraduate admissions"]},{name:"Student Government",url:"http://sga.ucf.edu",matches:["sga","student government association"]},{name:"Undergraduate Catalog",url:"http://catalog.ucf.edu/programs",
matches:["courses","undergrauate course catalog","undergraduate catalog","degrees","degree programs"]},{name:"Graduate Catalog",url:"http://www.graduatecatalog.ucf.edu/programs/",matches:["courses","graduate course catalog","graduate catalog","degrees","degree programs"]},{name:"Graduate Admissions",url:"http://www.admissions.graduate.ucf.edu/",matches:["graduate admissions","masters","college"]},{name:"NID",url:"http://mynid.ucf.edu",matches:"nid;login;log in;sign in;sign on;password".split(";")},
{name:"MyUCF",url:"https://my.ucf.edu",matches:["my ucf","myucf"]},{name:"Human Resources",url:"http://hr.ucf.edu/",matches:["hr","human resources"]},{name:"UCF Foundation",url:"http://ucffoundation.org/",matches:["UCF foundation"]},{name:"UCF Majors",url:"http://www.ucf.edu/degree-search/majors",matches:["majors"]},{name:"UCF Masters",url:"http://www.ucf.edu/degree-search/masters",matches:["masters"]},{name:"UCF Minors",url:"http://www.ucf.edu/degree-search/minors",matches:["minors"]},{name:"The Burnett Honors College",
url:"http://honors.ucf.edu/",matches:["the burnett honors college"]},{name:"UCF Online",url:"http://www.ucf.edu/online",matches:["ucf online","online programs","online degrees"]},{name:"UCF Commencement",url:"http://commencement.ucf.edu/",matches:["graduation","graduate","commencement","ucf commencement"]},{name:"Transfer &amp; Transition Services",url:"http://transfer.sdes.ucf.edu/",matches:["transfers","transfer to ucf","transfer and transition services","transfer & transition services"]},{name:"Office of Student Involvement",
url:"http://osi.ucf.edu/",matches:["osi","office of student involvement"]},{name:"Student Accessibility Services",url:"http://sas.sdes.ucf.edu/",matches:["sas","student accessibility services"]},{name:"Clubs and Organizations",url:"https://ucf.collegiatelink.net/Organizations",matches:"clubs;organizations;clubs and organizations;organization directory;organizations directory;club directory;clubs directory".split(";")},{name:"DirectConnect to UCF",url:"http://regionalcampuses.ucf.edu/directconnect-to-ucf/",
matches:"directconnect;direct connect;direct connect to ucf;direct connect ucf;directconnect ucf;directconnect to ucf;admissions".split(";")},{name:"Fraternity &amp; Sorority Life",url:"http://fsl.sdes.ucf.edu/",matches:"greek life;fraternity;fraternities;sorority;sororities;fraternity and sorority life;fraternity sorority life;fraternity & sorority life".split(";")},{name:"Hotels near UCF",url:"http://www.ucfalumni.com/alumnicenter/areahotels",matches:"where to stay near ucf;hotel accomodations;area hotels;nearby hotels;hotels near ucf;hotels around ucf;tours;campus visit;campus tour".split(";")},
{name:"International Affairs and Global Strategies",url:"https://www.international.ucf.edu/",matches:"international students;international admission;ucf abroad;study abroad;international scholars;international affairs;international affairs and global strategies;iags".split(";")},{name:"Graduate Teaching (GTA) Training",url:"http://www.students.graduate.ucf.edu/GTA_Training_Requirements/",matches:["gta training"]},{name:"Undergraduate Admissions and Application Information",url:"http://admissions.ucf.edu/",
matches:["apply","application deadline","undergraduate application"]},{name:"Graduate Admissions and Application Information",url:"http://www.admissions.graduate.ucf.edu/",matches:["apply","application deadline","graduate application"]},{name:"Check Application Status",url:"https://my.ucf.edu",matches:["application status","apply"]},{name:"KnightLink",url:"http://career.ucf.edu/knightlink",matches:["careers","student jobs","knightlink","knight link","career services"]},{name:"Recreation and Wellness Center",
url:"http://rwc.sdes.ucf.edu/",matches:"rwc;recreation;wellness;recreation and wellness center;recreation & wellness center;intramural sports;sports".split(";")}]};var h;this.clearAutocompleteResults=function(){for(;a.autocompleteList.hasChildNodes();)a.autocompleteList.removeChild(a.autocompleteList.lastChild)};this.isSearchActive=function(){return a.autocompleteList.className==a.searchActiveClass};this.toggleAutocompleteList=function(d){a.clearAutocompleteResults();!0===d?(a.autocompleteList.className=
a.searchActiveClass,a.autocompleteList.setAttribute("aria-hidden","false")):(a.autocompleteList.className="",a.autocompleteList.setAttribute("aria-hidden","true"))};this.updateAutocompleteHelp=function(d,g){var e="";0===d&&null===g?e="Search field is empty.":(e=d,e=1===d?e+" suggestion found":e+" suggestions found",null!==g&&(e+=' for "'+g+'"'),0<d&&(e+=". Use up and down arrow keys to select a suggestion."));a.autocompleteHelp.innerHTML=e};this.outputResults=function(d,g){var e=f(d),b=e.toLowerCase(),
m=encodeURIComponent(e);if(1<e.length){if(a.keyterms.keyterms){var c=0;results=[];for(var l=0;l<a.keyterms.keyterms.length;l++){for(var s=a.keyterms.keyterms[l],u=0;u<s.matches.length;u++)if(-1<s.matches[u].indexOf(b)){c++;results.push(s);break}if(4<c)break}if(0<c){a.toggleAutocompleteList(!0);for(b=0;b<c;b++){var l=f(results[b].name.trim()),u='<span class="ucfhb-search-autocomplete-name">'+l+"</span>",s=""!==results[b].url?f(results[b].url.trim()):a.searchAction+m,h=document.createElement("li");
h.innerHTML='<a class="'+a.searchKeytermLinkClass+'" href="'+s+'" tabindex="0">'+u+"</a>";h.setAttribute("data-name-val",l);a.autocompleteList.appendChild(h);u=h.getElementsByTagName("a")[0];ucfhbAssignTrackingListener(u,"click",new String(s),r,""+l)}a.updateAutocompleteHelp(c,e)}else k(m,function(b){if(b&&null!==b.results&&0<b.results.length){a.toggleAutocompleteList(!0);for(var d=0;d<b.results.length;d++){c++;var m=null!==b.results[d].name?f(b.results[d].name.trim()):"",l='<span class="ucfhb-search-autocomplete-name">'+
m+"</span>",s=null!==b.results[d].organization?'<span class="ucfhb-search-autocomplete-org">'+f(b.results[d].organization.trim())+"</span>":"",g=a.searchAction+encodeURIComponent(m),h=document.createElement("li");h.innerHTML='<a class="'+a.searchResultsLinkClass+'" href="'+g+'" tabindex="0" >'+l+s+"</a>";h.setAttribute("data-name-val",m);l=h.getElementsByTagName("a")[0];ucfhbAssignTrackingListener(l,"click",new String(g),t,""+m);a.autocompleteList.appendChild(h)}a.updateAutocompleteHelp(c,e)}else a.toggleAutocompleteList(!1),
a.updateAutocompleteHelp(0,e)})}}else a.toggleAutocompleteList(!1),a.updateAutocompleteHelp(0,null)};this.acListKeystrokeSelect=function(d){var g=a.autocompleteList,e=g.firstChild,b=g.lastChild,m=a.autocompleteSelectedId,c=g=null,c=null,g=document.getElementById(m)?document.getElementById(m):e,l=function(d,c,l){var g="";d.id="";e.id="";b.id="";null!==c?(l.id="",c.id=m,g=c.getAttribute("data-name-val")):(l.id=m,g=l.getAttribute("data-name-val"));a.searchField.value=g.replace(/&#39;/g,"'");d=null;document.createEvent?
(d=document.createEvent("KeyboardEvent"),d["undefined"!==typeof d.initKeyboardEvent?"initKeyboardEvent":"initKeyEvent"]("keydown",!0,!0,window,!1,!1,!1,!1,39,0),document.dispatchEvent(d)):document.createEventObject&&(d=document.createEventObject("KeyboardEvent"),d.keyCode=39,a.searchField.fireEvent("onkeydown",d))};a.isSearchActive()&&document.activeElement==a.searchField&&(40==d?(c=document.getElementById(m)?g.nextSibling:e,l(g,c,e)):38==d&&(c=g.previousSibling,l(g,c,b)))};this.searchOnKeyUp=function(d,
c){clearTimeout(h);h=setTimeout(function(){a.outputResults(d,c)},550)};this.initialize=function(){var d=null,g=null;a.searchField.onkeyup=function(b){b=b||window.event;keycode=b.which||b.keyCode;d=f(a.searchField.value);g=a.searchService+d;"number"==typeof keycode&&(8==keycode||44<keycode)||!1===a.isSearchActive()&&null!==a.searchField.value&&""!==a.searchField.value&&40===keycode?a.searchOnKeyUp(d,g):a.acListKeystrokeSelect(keycode)};a.searchField.onfocus=function(){d=f(a.searchField.value);g=a.searchService+
d;!1===a.isSearchActive()&&""!==a.searchField.value&&null!==a.searchField.value&&a.searchOnKeyUp(d,g)};var e=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1;(b=document.getElementById(a.autocompleteSelectedId))&&!0===a.isSearchActive()?(b=b.getElementsByTagName("a")[0])&&(-1<b.className.indexOf(a.searchKeytermLinkClass)?ucfhbTrackAction(b.getAttribute("href"),r,a.searchField.value):-1<b.className.indexOf(a.searchResultsLinkClass)&&ucfhbTrackAction(b.getAttribute("href"),t,a.searchField.value)):
(b=a.searchForm.getAttribute("data-action-url")+encodeURIComponent(a.searchField.value),ucfhbTrackAction(b,n,a.searchField.value))};a.searchForm.addEventListener?a.searchForm.addEventListener("submit",e,!1):a.searchForm.attachEvent&&a.searchForm.attachEvent("onsubmit",e);document.addEventListener?document.addEventListener("click",function(b){(b.target||b.srcElement)&&b.target.getAttribute("id")!==a.searchSubmit.getAttribute("id")&&c(b,a.autocompleteList)&&a.isSearchActive()&&a.toggleAutocompleteList(!1)}):
document.attachEvent("onclick",function(b){c(b,a.autocompleteList)&&a.isSearchActive()&&a.toggleAutocompleteList(!1)})}}var n="search",r="autocomplete-keyterm-search",t="autocomplete-search",v=window.location.protocol+"//universityheader.ucf.edu/bar/css/bar.css?1476280294",B=window.location.protocol+"//universityheader.ucf.edu/bar/css/bar-bootstrap.css?1476280294",D=window.location.protocol+"//universityheader.ucf.edu/bar/css/1200-breakpoint.css?1476280294",x=window.location.protocol+"//universityheader.ucf.edu/bar/data/?search=",
z=!1,A=!1,y=null;document.getElementById("ucfhb-script")&&(y=document.getElementById("ucfhb-script"),-1<y.getAttribute("src").indexOf("use-bootstrap-overrides=1")&&(z=!0),-1<y.getAttribute("src").indexOf("use-1200-breakpoint=1")&&(A=!0));"object"!==typeof JSON&&(JSON={});(function(){function f(a){return 10>a?"0"+a:a}function c(a){h.lastIndex=0;return h.test(a)?'"'+a.replace(h,function(a){var b=e[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function k(a,
e){var l,f,h,n,w=d,q,p=e[a];p&&"object"===typeof p&&"function"===typeof p.toJSON&&(p=p.toJSON(a));"function"===typeof b&&(p=b.call(e,a,p));switch(typeof p){case "string":return c(p);case "number":return isFinite(p)?String(p):"null";case "boolean":case "null":return String(p);case "object":if(!p)return"null";d+=g;q=[];if("[object Array]"===Object.prototype.toString.apply(p)){n=p.length;for(l=0;l<n;l+=1)q[l]=k(l,p)||"null";h=0===q.length?"[]":d?"[\n"+d+q.join(",\n"+d)+"\n"+w+"]":"["+q.join(",")+"]";
d=w;return h}if(b&&"object"===typeof b)for(n=b.length,l=0;l<n;l+=1)"string"===typeof b[l]&&(f=b[l],(h=k(f,p))&&q.push(c(f)+(d?": ":":")+h));else for(f in p)Object.prototype.hasOwnProperty.call(p,f)&&(h=k(f,p))&&q.push(c(f)+(d?": ":":")+h);h=0===q.length?"{}":d?"{\n"+d+q.join(",\n"+d)+"\n"+w+"}":"{"+q.join(",")+"}";d=w;return h}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+
"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var a=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,h=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,d,g,e={"\b":"\\b"," ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',
"\\":"\\\\"},b;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,c,e){var f;g=d="";if("number"===typeof e)for(f=0;f<e;f+=1)g+=" ";else"string"===typeof e&&(g=e);if((b=c)&&"function"!==typeof c&&("object"!==typeof c||"number"!==typeof c.length))throw Error("JSON.stringify");return k("",{"":a})});"function"!==typeof JSON.parse&&(JSON.parse=function(b,d){function c(a,b){var e,f,g=a[b];if(g&&"object"===typeof g)for(e in g)Object.prototype.hasOwnProperty.call(g,e)&&(f=c(g,e),void 0!==f?g[e]=
f:delete g[e]);return d.call(a,b,g)}var e;b=String(b);a.lastIndex=0;a.test(b)&&(b=b.replace(a,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+b+")"),"function"===typeof d?c({"":e},""):e;throw new SyntaxError("JSON.parse");})})();"function"!==typeof String.prototype.trim&&
(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var C=function(f,c,k){var a=document.getElementsByTagName("head")[0],h=document.createElement("script");h.setAttribute("src",x+f);h.setAttribute("type","text/javascript");h.id="ucfhb-json";a.appendChild(h);"undefined"!==typeof c&&null!==c&&setTimeout(function(){c()},k)},E=function(){(new k).initialize();(function(){var f=document.getElementById("ucfhb"),c=document.getElementById("ucfhb-mobile-toggle"),k=document.getElementById("ucfhb-logo"),
a=k.firstElementChild||k.firstChild,h=document.getElementById("ucfhb-right"),d=document.getElementById("ucfhb-signon-logo");document.getElementById("ucfhb-signon");var g=document.getElementById("ucfhb-search");document.getElementById("ucfhb-search-form");searchField=document.getElementById("ucfhb-search-field");searchBtn=document.getElementById("ucfhb-search-submit");searchMinimal=document.getElementById("ucfhb-search-minimal");searchAutocomplete=document.getElementById("ucfhb-search-autocomplete");
linkMyucf=document.getElementById("ucfhb-myucf");linkKnightsmail=document.getElementById("ucfhb-knightsmail");linkWebcourses=document.getElementById("ucfhb-webcourses");shiftLeftElems=[d,g,searchMinimal,searchAutocomplete];mobileToggleElems=[f,c,k,h,searchAutocomplete];var e=function(a,d){for(var e=a.length,c=0;c<e;c++)-1<a[c].className.indexOf("ucfhb-gold")?a[c].className="ucfhb-gold "+d:a[c].className=d};d.onclick=function(){"ucfhb-shiftleft"==d.className?(e(shiftLeftElems,""),searchField.removeAttribute("tabindex"),
searchBtn.removeAttribute("tabindex")):(e(shiftLeftElems,"ucfhb-shiftleft"),searchField.setAttribute("tabindex","-1"),searchBtn.setAttribute("tabindex","-1"))};searchMinimal.onclick=function(){e(shiftLeftElems,"");searchField.focus();searchField.removeAttribute("tabindex");searchBtn.removeAttribute("tabindex")};c.onclick=function(){"ucfhb-mobileslide"==c.className?e(mobileToggleElems,""):e(mobileToggleElems,"ucfhb-mobileslide")};ucfhbAssignTrackingListener(linkMyucf,"click",linkMyucf.getAttribute("href"),
"signon","MyUCF");ucfhbAssignTrackingListener(linkKnightsmail,"click",linkKnightsmail.getAttribute("href"),"signon","Knightsmail");ucfhbAssignTrackingListener(linkWebcourses,"click",linkWebcourses.getAttribute("href"),"signon","Webcourses");ucfhbAssignTrackingListener(a,"click",a.getAttribute("href"),"ucf-logo","UCF Logo")})()};(function(f,c){var k=!1,a=!0,h=f.document,d=h.documentElement,g=h.addEventListener?"addEventListener":"attachEvent",e=h.addEventListener?"removeEventListener":"detachEvent",
b=h.addEventListener?"":"on",m=function(a){if("readystatechange"!=a.type||"complete"==h.readyState)("load"==a.type?f:h)[e](b+a.type,m,!1),!k&&(k=!0)&&c.call(f,a.type||a)},n=function(){try{d.doScroll("left")}catch(a){setTimeout(n,50);return}m("poll")};if("complete"==h.readyState)c.call(f,"lazy");else{if(h.createEventObject&&d.doScroll){try{a=!f.frameElement}catch(l){}a&&n()}h[g](b+"DOMContentLoaded",m,!1);h[g](b+"readystatechange",m,!1);f[g](b+"load",m,!1)}})(window,function(){var f=document.getElementsByTagName("head")[0],
c=document.createElement("link");c.setAttribute("href",v);c.setAttribute("rel","stylesheet");c.setAttribute("type","text/css");f.appendChild(c);!0===z&&(c=document.createElement("link"),c.setAttribute("href",B),c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css"),f.appendChild(c));!0===A&&(c=document.createElement("link"),c.setAttribute("href",D),c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css"),f.appendChild(c));f=null;document.getElementById("ucfhb")?f=document.getElementById("ucfhb"):
(f=document.createElement("div"),f.id="ucfhb",document.body.insertBefore(f,document.body.firstChild));f.className+=" preload";f.innerHTML=['<div id="ucfhb-inner" style="display: none;">\n<div id="ucfhb-left">\n<div id="ucfhb-logo">\n<a href="http://www.ucf.edu">University of Central Florida</a>\n</div>\n<a id="ucfhb-mobile-toggle" href="#">Open Mobile Menu</a>\n</div>\n<div id="ucfhb-right">\n<div id="ucfhb-signon">\n<a id="ucfhb-signon-logo" href="#">UCF Sign In</a>\n<div id="ucfhb-services">\n<div>\n<a id="ucfhb-myucf" class="ucfhb-service" href="https://my.ucf.edu/psp/IHPROD/EMPLOYEE/EMPL/?cmd=login">myUCF</a>\n<a id="ucfhb-knightsmail" class="ucfhb-service" href="http://knightsemail.ucf.edu">KnightsMail</a>\n<a id="ucfhb-webcourses" class="ucfhb-service" href="https://webcourses.ucf.edu">Webcourses</a>\n</div>\n</div>\n</div>\n<div id="ucfhb-search">',
'<form action="//search.ucf.edu/" data-action-url="//search.ucf.edu#?q=" data-autosearch-url="'+x+'" method="get" name="ucfhb-search-form" id="ucfhb-search-form" autocomplete="off">','<label for="ucfhb-search-field">Search UCF</label>\n<input type="text" name="#q" id="ucfhb-search-field" placeholder="Search UCF" autocomplete="off" autocapitalize="off" aria-autocomplete="list" aria-owns="ucfhb-search-autocomplete" aria-activedescendant="ucfhb-autocomplete-selected" aria-haspopup="true" role="search" />\n<input type="submit" value="Search" id="ucfhb-search-submit" />\n</form>\n<span id="ucfhb-search-autocomplete-srhelp" role="status" aria-live="polite"></span>\n<a id="ucfhb-search-minimal" href="#">Search</a>\n</div>\n</div>\n<ul id="ucfhb-search-autocomplete" tabindex="1" aria-hidden="true" role="listbox"></ul>\n</div>'].join("\n");
E()})})();
