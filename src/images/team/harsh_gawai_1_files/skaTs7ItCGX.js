if (self.CavalryLogger) { CavalryLogger.start_js(["pmTQP"]); }

__d("CometUFICommentsCountRenderer_data$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometUFICommentsCountRenderer_data$normalization",selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:"comment_count",args:null,concreteType:"TopLevelCommentsConnection",kind:"LinkedField",name:"top_level_comments",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"total_count",storageKey:null}],storageKey:null},{alias:"i18n_comment_count",args:null,kind:"ScalarField",name:"comment_count_reduced",storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("CometUFICommentsCountRenderer_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentsCountRenderer_data",selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometUFICommentsCount_feedback"}],storageKey:null}],type:"TotalCommentsCountSummaryRenderer",abstractKey:null};e.exports=a}),null);
__d("IntlDateStringsTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:IntlDateStringsLoggerConfig")}),null);
__d("IntlDateFormatsCLDRWidthEnum",[],(function(a,b,c,d,e,f){a=Object.freeze({FULL:"full",LONG:"long",MEDIUM:"medium",SHORT:"short"});e.exports=a}),null);
__d("RegionDatetimePatterns",[],(function(a,b,c,d,e,f){a=Object.freeze({DATE_SHORT:"date_short",DATETIME_SHORT_SHORT:"dateTime_short_short",TIME_SHORT:"time_short",TIME_MEDIUM:"time_medium",J:"j"});e.exports=a}),null);
__d("getCLDRLocalizedFormat",["CLDRDateFormatConfig","FBLogger","IntlDateFormatsCLDRWidthEnum","RegionDatetimePatterns","flipObject","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=b("CLDRDateFormatConfig").CLDRConfigeratorFormats,h=b("CLDRDateFormatConfig").CLDRRegionalConfigeratorFormats,i=b("flipObject")(b("RegionDatetimePatterns"));function a(a){if(a==null)throw b("unrecoverableViolation")('Format: "'+a+'", not supported by configurator.',"internationalization");var c,d,e=a.split("_"),f=e[0];e=e.slice(1);var l=f+"Formats";a in i?d=h:d=g;switch(l){case"dateFormats":case"timeFormats":var m=j(e[0]);if(m==null)throw b("unrecoverableViolation")('Format: "'+a+'", category: "'+l+'", with unsupported width: "undefined"',"internationalization");c=d[l][m];if(c==null)throw b("unrecoverableViolation")('Format: "'+a+'", category: "'+l+'", '+('width: "'+m+'", with unsupported localization'),"internationalization");break;case"dateTimeFormats":m=j(e[0]);e=j(e[1]);if(m==null||e==null)throw b("unrecoverableViolation")('Format: "'+a+'", category: "'+l+'", with unsupported width: dateFormatKey="undefined" timeFormatKey="undefined"',"internationalization");c=d[l][m];var n=d.dateFormats[m],o=d.timeFormats[e];if(c==null)throw b("unrecoverableViolation")('Format: "'+a+'", category: "'+l+'", '+('date width: "'+m+'", and time width: ')+('"'+e+'", with unsupported localization'),"internationalization");c=c.replace("{0}",o).replace("{1}",n);break;default:l="availableFormats";m=f;m.includes("j")&&(m=k(m,d.timeFormats));c=d[l][m];if(c==null)throw b("unrecoverableViolation")('Format: "'+a+'", with key: "'+m+'", not supported by CLDR',"internationalization")}return c}function j(a){if(a==null)throw b("unrecoverableViolation")("Expected CLDR width key to not be null","internationalization");return b("IntlDateFormatsCLDRWidthEnum")[a.toUpperCase()]}function k(a,c){var d;c=c["short"];c==null?(b("FBLogger")("formatDate").blameToPreviousFile().warn('CLDR `timeFormat`, width `short` required for 24 hour localization not found for availableKey: "%s"',a),d="h"):d=c.includes("H")?"H":"h";return a.replace("j",d)}e.exports=a}),null);
__d("intlGetDateNumerics",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,b){b=b.utc===!0;b?b={dateDay:a.getUTCDate(),dateDayOfWeek:a.getUTCDay(),dateMonth:a.getUTCMonth(),dateYear:a.getUTCFullYear(),dateHours:a.getUTCHours(),dateMinutes:a.getUTCMinutes(),dateSeconds:a.getUTCSeconds(),dateMilliseconds:a.getUTCMilliseconds()}:b={dateDay:a.getDate(),dateDayOfWeek:a.getDay(),dateMonth:a.getMonth(),dateYear:a.getFullYear(),dateHours:a.getHours(),dateMinutes:a.getMinutes(),dateSeconds:a.getSeconds(),dateMilliseconds:a.getMilliseconds()};return b}}),null);
__d("DateStrings",["fbt"],(function(a,b,c,d,e,f,g){f.getWeekdayName=a;f.getUppercaseWeekdayName=b;f.getWeekdayNameShort=c;f.getUppercaseWeekdayNameShort=d;f._initializeMonthNames=q;f.getMonthName=e;f.getMonthNames=r;f.getUppercaseMonthName=s;f.getMonthNameShort=t;f.getUppercaseMonthNameShort=u;f.getOrdinalSuffix=v;f.getDayOfMonth=w;f.getDayLabel=x;f.getMonthLabel=y;f.getYearLabel=z;f.getHourLabel=A;f.getMinuteLabel=B;f.getDayPlaceholder=C;f.getMonthPlaceholder=D;f.getYearPlaceholder=E;f.getHourPlaceholder=F;f.getMinutePlaceholder=G;f.get12HourClockSuffix=H;f.getUppercase12HourClockSuffix=I;var h,i,j,k,l,m,n,o,p;function a(a){m||(m=[g._("Sunday"),g._("Monday"),g._("Tuesday"),g._("Wednesday"),g._("Thursday"),g._("Friday"),g._("Saturday")]);return m[a]}function b(a){o||(o=[g._("SUNDAY"),g._("MONDAY"),g._("TUESDAY"),g._("WEDNESDAY"),g._("THURSDAY"),g._("FRIDAY"),g._("SATURDAY")]);return o[a]}function c(a){n||(n=[g._("Sun"),g._("Mon"),g._("Tue"),g._("Wed"),g._("Thu"),g._("Fri"),g._("Sat")]);return n[a]}function d(a){p||(p=[g._("SUN"),g._("MON"),g._("TUE"),g._("WED"),g._("THU"),g._("FRI"),g._("SAT")]);return p[a]}function q(){h=[g._("January"),g._("February"),g._("March"),g._("April"),g._("May"),g._("June"),g._("July"),g._("August"),g._("September"),g._("October"),g._("November"),g._("December")]}function e(a){h||q();return h[a-1]}function r(){h||q();return h.slice()}function s(a){k||(k=[g._("JANUARY"),g._("FEBRUARY"),g._("MARCH"),g._("APRIL"),g._("MAY"),g._("JUNE"),g._("JULY"),g._("AUGUST"),g._("SEPTEMBER"),g._("OCTOBER"),g._("NOVEMBER"),g._("DECEMBER")]);return k[a-1]}function t(a){i||(i=[g._("Jan"),g._("Feb"),g._("Mar"),g._("Apr"),g._("May"),g._("Jun"),g._("Jul"),g._("Aug"),g._("Sep"),g._("Oct"),g._("Nov"),g._("Dec")]);return i[a-1]}function u(a){j||(j=[g._("JAN"),g._("FEB"),g._("MAR"),g._("APR"),g._("MAY"),g._("JUN"),g._("JUL"),g._("AUG"),g._("SEP"),g._("OCT"),g._("NOV"),g._("DEC")]);return j[a-1]}function v(a){l||(l=["",g._("st"),g._("nd"),g._("rd"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("st"),g._("nd"),g._("rd"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("th"),g._("st")]);return l[a]}function w(a){switch(a){case 1:return g._("1st");case 2:return g._("2nd");case 3:return g._("3rd");case 4:return g._("4th");case 5:return g._("5th");case 6:return g._("6th");case 7:return g._("7th");case 8:return g._("8th");case 9:return g._("9th");case 10:return g._("10th");case 11:return g._("11th");case 12:return g._("12th");case 13:return g._("13th");case 14:return g._("14th");case 15:return g._("15th");case 16:return g._("16th");case 17:return g._("17th");case 18:return g._("18th");case 19:return g._("19th");case 20:return g._("20th");case 21:return g._("21st");case 22:return g._("22nd");case 23:return g._("23rd");case 24:return g._("24th");case 25:return g._("25th");case 26:return g._("26th");case 27:return g._("27th");case 28:return g._("28th");case 29:return g._("29th");case 30:return g._("30th");case 31:return g._("31st");default:throw new Error("Invalid day of month.")}}function x(){return g._("Day:")}function y(){return g._("Month:")}function z(){return g._("Year:")}function A(){return g._("Hour:")}function B(){return g._("Minute:")}function C(){return g._("dd")}function D(){return g._("mm")}function E(){return g._("yyyy")}function F(){return g._("h")}function G(){return g._("m")}function H(a){return a<12?g._("am"):g._("pm")}function I(a){return a<12?g._("AM"):g._("PM")}}),null);
__d("intlRenderJSDateSymbol",["DateStrings","padNumber","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c,d,e,f){f===void 0&&(f=0);d=d.skipSuffixLocalization===!0;f=f;var g="";switch(c){case"\\":f++;if(e==null)throw b("unrecoverableViolation")("Only deprecated calls to `intlRenderJSDateSymbol()` use `localizedJSFormat`.","internationalization");g=e.charAt(f);break;case"d":g=b("padNumber")(a.dateDay,2);break;case"j":g=a.dateDay;break;case"S":g=b("DateStrings").getOrdinalSuffix(a.dateDay);break;case"D":g=b("DateStrings").getWeekdayNameShort(a.dateDayOfWeek);break;case"l":g=b("DateStrings").getWeekdayName(a.dateDayOfWeek);break;case"F":case"f":g=b("DateStrings").getMonthName(a.dateMonth+1);break;case"M":g=b("DateStrings").getMonthNameShort(a.dateMonth+1);break;case"m":g=b("padNumber")(a.dateMonth+1,2);break;case"n":g=a.dateMonth+1;break;case"Y":g=a.dateYear;break;case"y":g=(""+a.dateYear).slice(2);break;case"a":d?g=a.dateHours<12?"am":"pm":g=b("DateStrings").get12HourClockSuffix(a.dateHours);break;case"A":d?g=a.dateHours<12?"AM":"PM":g=b("DateStrings").getUppercase12HourClockSuffix(a.dateHours);break;case"g":a.dateHours===0||a.dateHours===12?g="12":g=a.dateHours%12;break;case"G":g=a.dateHours;break;case"h":a.dateHours===0||a.dateHours===12?g="12":g=b("padNumber")(a.dateHours%12,2);break;case"H":g=b("padNumber")(a.dateHours,2);break;case"i":g=b("padNumber")(a.dateMinutes,2);break;case"s":g=b("padNumber")(a.dateSeconds,2);break;case"X":g=b("padNumber")(a.dateMilliseconds,3);break;default:g=c}return{idx:f,rendered:String(g)}}}),null);
__d("intlRenderCLDRDate",["CLDRDateFormatConfig","intlRenderJSDateSymbol","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=/\w+/;function a(a,c,d){var e=b("CLDRDateFormatConfig").intlDateSpecialChars,f="",g="",i=!1,j=[],k;a=a.split(e.cldrDelimiter+e.singleQuote).join(e.singleQuoteHolder);for(var l=0,m=a.length;l<m;l++){var n=a.charAt(l);!i?n===e.cldrDelimiter?i=!0:f.length===0||f[0]===n?f+=n:n===e.singleQuoteHolder?f+=e.singleQuote:(k=h(f,d,c),j.push(k.rendered),f=n):(f.length!==0&&(k=h(f,d,c),j.push(k.rendered),f=""),n===e.cldrDelimiter?(i=!1,j.push(g),g=""):n===e.singleQuoteHolder?g+=e.singleQuote:g+=n)}if(g.length!==0)throw b("unrecoverableViolation")('Format: "'+a+'" must contain closing str literal delimiter',"internationalization");f.length!==0&&(k=h(f,d,c),j.push(k.rendered));return j.join("")}function h(a,c,d){a=i(a);return b("intlRenderJSDateSymbol")(c,a,d)}function i(a){if(a in b("CLDRDateFormatConfig").CLDRToPHPSymbolConversion)return b("CLDRDateFormatConfig").CLDRToPHPSymbolConversion[a];if(g.test(a))throw b("unrecoverableViolation")('Unsupported CLDR symbol: "'+a+'". If string literal, wrap in delimiters',"internationalization");return a}e.exports=a}),null);
__d("formatDate",["CLDRDateFormatConfig","CLDRDateRenderingClientRollout","DateFormatConfig","FBLogger","IntlDateStringsTypedLoggerLite","IsInternSite","Random","getCLDRLocalizedFormat","gkx","intlGetDateNumerics","intlRenderCLDRDate","intlRenderJSDateSymbol","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({today:null,yesterday:null,thisWeek:null,thisMonth:null,thisYear:null,withinDay:null,withinWeek:null,withinMonth:null,withinYear:null,older:null,future:null,allOtherTimes:null});g.DEFAULT_FORMAT="M j, Y g:i A";g.periodNames=Object.freeze(Object.keys(a));function g(a,c,d){a=a;d=d||{skipSuffixLocalization:!1,skipPatternLocalization:!1,utc:!1,formatInternal:!1,throwCLDRError:!1};if(c==null||c===""||a==null||!(a||a===0))return"";typeof a==="string"&&(isNaN(Number(a))&&b("FBLogger")("i18n-formatDate").event("date_string_must_be_timestamp").blameToPreviousFile().mustfix("The date passed to formatDate is a string, but not a timestamp. formatDate expects strings to be a string representation of a Unix "+('timestamp but was passed "'+a+'"')),a=parseInt(a,10));typeof a==="number"&&(a=new Date(a*1e3));if(!(a instanceof Date))throw b("unrecoverableViolation")("The date passed to formatDate must be either a unix timestamp or JavaScript date object.","internationalization");if(isNaN(a.getTime()))throw b("unrecoverableViolation")("Invalid date passed to formatDate","internationalization");a.getTime()>=1e15&&b("FBLogger")("i18n-formatDate").event("date_too_far_in_future").blameToPreviousFile().info("The date passed to formatDate is too far in the future. Did you mix up milliseconds/seconds?");c=j(a,c);a=b("intlGetDateNumerics")(a,d);return h(c,a,d)}function h(a,c,d){var e=a,f=!!d.skipPatternLocalization,g=a!=="Y-m-d"&&(d.formatInternal===!0||b("gkx")("1585098"));if(!f&&(g||!b("IsInternSite").is_intern_site))if(a in b("CLDRDateFormatConfig").supportedPHPFormatsKeys)try{f=b("CLDRDateFormatConfig").supportedPHPFormatsKeys[a];g=b("getCLDRLocalizedFormat")(f);l(a,f,g);return b("intlRenderCLDRDate")(g,d,c)}catch(a){b("FBLogger")("i18n-formatDate").event("CLDR_date_format_render_error").blameToPreviousFile().catching(a).mustfix("CLDR date format render error");if(d.throwCLDRError===!0)throw a}else if(b("DateFormatConfig").formats[a])e=b("DateFormatConfig").formats[a],l(a);else if(!b("IsInternSite").is_intern_site)if(a.length!==1)throw b("unrecoverableViolation")("Trying to localize an unsupported date format: "+a+".Please see the INTL_DATE_FORMATS sitevar for a list of formats.","internationalization");return i(e,d,c)}function i(a,c,d){var e=[];for(var f=0;f<a.length;f++){var g=a.charAt(f);g=b("intlRenderJSDateSymbol")(d,g,c,a,f);e.push(g.rendered);f=g.idx}return e.join("")}function j(a,c){var d=g.DEFAULT_FORMAT;if(typeof c==="string")return c;else if(typeof c==="object"){var e=a.getTime();for(var f=k(),h=Array.isArray(f),i=0,f=h?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var j;if(h){if(i>=f.length)break;j=f[i++]}else{i=f.next();if(i.done)break;j=i.value}j=j;var l=c[j.name];if(l!=null&&j.start<=e&&e<j.end)return l}b("FBLogger")("i18n-formatDate").event("matching_period_format_not_found").blameToPreviousFile().warn('Matching period not found for date "%s", using default format "%s". Current timestamp: "%s"',e,d,Date.now());return d}else{b("FBLogger")("i18n-formatDate").event("invalid_format_argument").blameToPreviousFile().warn('Called with invalid format "%s" (type: %s) for date "%s", using default: %s',c,typeof c,a.getTime(),d);return d}}function k(){var a=new Date(),c=a.getTime(),d=a.getFullYear(),e=a.getMonth(),f=new Date(d,a.getMonth()+1,0).getDate(),g=new Date(d,1,29).getMonth()===1?366:365,h=1e3*60*60*24,i=new Date(a.setHours(0,0,0,0)),j=new Date(d,e,i.getDate()+1);a=a.getDate()-(a.getDay()-b("DateFormatConfig").weekStart+6)%7;var k=new Date(c).setDate(a);a=new Date(c).setDate(a+7);var l=new Date(d,e,1);e=new Date(d,e,f+1);var m=new Date(d,0,1);d=new Date(d+1,0,1);return[{name:"today",start:i.getTime(),end:j.getTime()},{name:"withinDay",start:c-h,end:c+h},{name:"yesterday",start:i.getTime()-h,end:i.getTime()-1},{name:"thisWeek",start:k,end:a},{name:"withinWeek",start:c-h*7,end:c+h*7},{name:"thisMonth",start:l.getTime(),end:e.getTime()},{name:"withinMonth",start:c-h*f,end:c+h*f},{name:"thisYear",start:m.getTime(),end:d.getTime()},{name:"withinYear",start:c-h*g,end:c+h*g},{name:"older",start:-Infinity,end:c},{name:"future",start:c,end:+Infinity},{name:"allOtherTimes",start:-Infinity,end:+Infinity}]}function l(a,c,d){c===void 0&&(c=null),d===void 0&&(d=null),b("Random").random()<b("CLDRDateRenderingClientRollout").formatDateClientLoggerSamplingRate&&b("IntlDateStringsTypedLoggerLite").log({datetime_format:a,logged_from_client:!0,cldr_key:c,cldr_value:d})}e.exports=g}),null);
__d("CometTimestamp.react",["fbt","React","formatDate","useServerTime"],(function(a,b,c,d,e,f,g){"use strict";e.exports=c;d=b("React");var h=1e3*60*60*24,i=h*30;function j(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate()}function k(a,b){return g._("{date} at {time}",[g._param("date",a),g._param("time",b)])}function l(a,c){var d=b("formatDate")(c,"g:i A");if(j(c,a))return g._("Today at {time}",[g._param("time",d)]);var e=new Date(a.valueOf()-h);if(j(c,e))return g._("Yesterday at {time}",[g._param("time",d)]);e=new Date(a.valueOf()+h);if(j(c,e))return g._("Tomorrow at {time}",[g._param("time",d)]);e=b("formatDate")(c,"F j");a.getFullYear()!==c.getFullYear()&&(e=b("formatDate")(c,"F j, Y"));return Math.abs(a.valueOf()-c.valueOf())<i?k(e,d):e}function a(a){return k(b("formatDate")(a,"l, F j, Y"),b("formatDate")(a,"g:i A"))}function c(a){a=a.date;var c=b("useServerTime")();c=l(c,a);return c}c.getTimestamp=l;c.getAbsoluteTimestamp=a}),null);
__d("CometFeedStoryRenderLocationContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({storyRenderLocation:null});e.exports=c}),null);
__d("OptimisticLoadingTypeEnum",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({SHOW_ANIMATION:"SHOW_ANIMATION",SHOW_LOADER:"SHOW_LOADER",SHOW_POST_PREVIEW:"SHOW_POST_PREVIEW",SHOW_PROGRESS_BAR:"SHOW_PROGRESS_BAR"});e.exports=a}),null);
__d("getPrivacyTextTreatmentInfo",["qex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){var c=!0,d=!1;if(a!==null){var e;e=(e=b("qex")._("1633117"))!=null?e:0;c=e!==1;d=e!==0}return{privacyLabel:a,shouldShowIcon:c,shouldShowText:d}}}),null);
__d("CometUFICommentsCountRenderer.react",["CometRelay","CometUFICommentsCount.react","React","unrecoverableViolation","CometUFICommentsCountRenderer_data.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.data;a=babelHelpers.objectWithoutPropertiesLoose(a,["data"]);c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometUFICommentsCountRenderer_data.graphql"),c);c=c.feedback;if(c==null)throw b("unrecoverableViolation")("CometUFICommentsCountRenderer: Expected feedback to exist","ufi2");return h.jsx(b("CometUFICommentsCount.react"),babelHelpers["extends"]({feedback:c},a))}}),null);
__d("EncryptedImgUtils",[],(function(a,b,c,d,e,f){f.extractKey=a;f.isEncrypted=b;var g="ek",h=/^data\:/,i=/\?(ek\=|.*&ek\=)/;function a(a){var b=a.getQueryData(),c=b[g];delete b[g];a.setQueryData(b);return c}function b(a){return!h.test(a)&&i.test(a)}}),null);
__d("getImageSourceURLFromImageish",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){if(typeof a==="string")return a;return a!=null&&typeof a==="object"&&(!a.sprited&&a.uri&&typeof a.uri==="string")?a.uri:""}}),null);
__d("validateImageSrcPropType",["URI","coerceImageishSprited","getImageSourceURLFromImageish"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g;function a(a,c,d){a=a[c];return a==null||b("coerceImageishSprited")(a)||b("getImageSourceURLFromImageish")(a)!==""||a instanceof(g||(g=b("URI")))?null:new Error("Provided `"+c+"` to `"+d+"`. Must be `null`, `undefined`, a string, a `URI` or an `ix` call.")}}),null);
__d("warnUnsupportedProp",["warning"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c,d){b("warning")(!1,"%s component does not support prop `%s`.%s",a,c,d?" "+d:"")}}),null);
__d("ImageCore.react",["Bootloader","EncryptedImgUtils","FBLogger","React","SubscriptionsHandler","URI","coerceImageishSprited","coerceImageishURL","createCancelableFunction","getImageSourceURLFromImageish","ifRequired","joinClasses","validateImageSrcPropType","warnUnsupportedProp"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c={alt:""};function i(a){return a instanceof(g||(g=b("URI")))?a.toString():a}var j=function(c){babelHelpers.inheritsLoose(a,c);function a(){var a,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(a=d=c.call.apply(c,[this].concat(f))||this,d.$1=!1,d.$2=null,d.$3=new(b("SubscriptionsHandler"))(),d.state={decryptedSrc:null},a)||babelHelpers.assertThisInitialized(d)}var d=a.prototype;d.$4=function(a){var c=this;this.$2&&this.$2.cancel();var d=b("getImageSourceURLFromImageish")(this.props.encryptedSrc),e=b("createCancelableFunction")(function(a){d===b("getImageSourceURLFromImageish")(c.props.encryptedSrc)&&c.setState({decryptedSrc:a})});a.load(d,e);this.$3.addSubscriptions({remove:function(){e.cancel()}});this.$2=e};d.$5=function(){var a=this;b("ifRequired")("EncryptedImg",function(b){a.$4(b)},function(){if(a.$1)return;a.$1=!0;a.$3.addSubscriptions(b("Bootloader").loadModules(["EncryptedImg"],function(b){return a.$4(b)},"ImageCore.react"))})};d.componentDidMount=function(){this.$5()};d.componentDidUpdate=function(a){a.encryptedSrc!==this.props.encryptedSrc&&this.$5()};d.componentWillUnmount=function(){this.$3.release()};d.render=function(){var a=this.props,c=a.encryptedSrc,d=a.forwardedRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["encryptedSrc","forwardedRef"]);var e=this.state.decryptedSrc;b("EncryptedImgUtils").isEncrypted(c)===!1&&(b("FBLogger")("image").mustfix("The `EncryptedImage` component was rendered with a non-encrypted image (%s). Only images that meet the encrypted image test (see `EncryptedImgUtils.isEncrypted()`) should be rendered with this component. Falling back to `ImageishRenderer`.",JSON.stringify(c)),e=c);return h.jsx(k,babelHelpers["extends"]({},a,{forwardedRef:d,src:e}))};return a}(h.Component);j.defaultProps=c;j.propTypes={encryptedSrc:b("validateImageSrcPropType")};function k(a){var c=a.forwardedRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["forwardedRef"]);var d=b("joinClasses")(a.className,"img"),e=i(a.src);if(e==null)return h.jsx("img",babelHelpers["extends"]({},a,{className:d,ref:c}));var f=b("coerceImageishSprited")(e),g=!!f&&a.alt!=null&&String(a.alt)!==""?h.jsx("u",{children:a.alt}):null;if(typeof e==="string")return h.jsx("img",babelHelpers["extends"]({},a,{className:d,ref:c,src:e,children:g}));if(f){var j=f.spriteCssClass;f=f.spriteMapCssClass;a.src;var k=babelHelpers.objectWithoutPropertiesLoose(a,["src"]);return h.jsx("i",babelHelpers["extends"]({},k,{className:b("joinClasses")(d,f,j),ref:c,children:g}))}k=b("getImageSourceURLFromImageish")(e);f=b("coerceImageishURL")(e);return a.width===void 0&&a.height===void 0&&f?h.jsx("img",babelHelpers["extends"]({},a,{className:d,height:f.height,src:k,ref:c,width:f.width,children:g})):h.jsx("img",babelHelpers["extends"]({},a,{className:d,ref:c,src:k,children:g}))}k.defaultProps=c;k.propTypes={src:b("validateImageSrcPropType")};function a(a,c){Object.prototype.hasOwnProperty.call(a,"source")&&b("warnUnsupportedProp")("ImageCore","source","Did you mean `src`?");var d=i(a.src);d=b("getImageSourceURLFromImageish")(d);if(b("EncryptedImgUtils").isEncrypted(d)){a.src;var e=babelHelpers.objectWithoutPropertiesLoose(a,["src"]);return h.jsx(j,babelHelpers["extends"]({},e,{encryptedSrc:d,forwardedRef:c}))}else return h.jsx(k,babelHelpers["extends"]({},a,{forwardedRef:c}))}a.displayName="ImageCore";d=h.forwardRef(a);e.exports=d}),null);
__d("Image.react",["ImageCore.react"],(function(a,b,c,d,e,f){a=b("ImageCore.react");e.exports=a}),null);
__d("isMimeTypeForMedia",["UFICommentFileInputAcceptValues"],(function(a,b,c,d,e,f){"use strict";f.isMimeTypeForPhoto=a;f.isMimeTypeForVideo=c;var g=b("UFICommentFileInputAcceptValues").photos,h=b("UFICommentFileInputAcceptValues").videos,i={"image/gif":"video"},j,k;function l(a){return a.split(",").map(function(a){return a.trim()}).map(function(a){return a.replace(/\/\*$/,"/")})}function a(a){k==null&&(k=l(g));var b=i[a];return b!=null?b==="photo":k.some(function(b){return a.startsWith(b)})}function c(a){j==null&&(j=l(h));var b=i[a];return b!=null?b==="video":j.some(function(b){return a.startsWith(b)})}}),null);
__d("UFI2CometRelayBridge",["createSuspenseFragmentContainer_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";a=b("createSuspenseFragmentContainer_DEPRECATED");f.createFragmentContainer=a}),null);
__d("UFI2CometRelayCreateFragmentContainer",["relay-runtime","requireCond","cr:936168"],(function(a,b,c,d,e,f){"use strict";a={createFragmentContainer:b("cr:936168").createFragmentContainer,graphql:b("relay-runtime").graphql};e.exports=a}),null);
__d("useDebounced",["React","debounce"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a,c,d){c===void 0&&(c=100);d===void 0&&(d=!1);var e=g.useRef(a);g.useEffect(function(){e.current=a},[a]);var f=g.useMemo(function(){return b("debounce")(function(){return e.current.apply(e,arguments)},c,null,!1,d)},[c,d]);g.useEffect(function(){return f.reset},[f]);return f}}),null);
__d("FlexLayout.react",["cx","React","gkx","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React"),i=b("gkx")("1261344");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,b=a.align,d=a.children,e=a.className,f=a.containerRef,g=a.direction,i=a.justify,j=a.style;a=a.wrap;return h.jsx("div",babelHelpers["extends"]({},c.flexLayout({align:b,direction:g,justify:i,wrap:a},e),{"data-testid":void 0,ref:f,style:j,children:d}))};c.flexLayout=function(a,d){a=a!==void 0?a:{};var e=a.align,f=a.direction,g=a.justify;a=a.wrap;e===void 0&&(e=c.defaultProps.align);f===void 0&&(f=c.defaultProps.direction);g===void 0&&(g=c.defaultProps.justify);a===void 0&&(a=c.defaultProps.wrap);return{className:b("joinClasses")(d,"_3qn7"+(i?" _8xlz":"")+(g==="start"?" _61-0":"")+(g==="center"?" _61-1":"")+(g==="end"?" _61-2":"")+(g==="all"?" _61-3":"")+(g==="around"?" _6twk":"")+(g==="evenly"?" _6twl":"")+(f==="vertical"?" _2fyh":"")+(f==="horizontal"?" _2fyi":"")+(f==="vertical-reverse"?" _6xqp":"")+(f==="horizontal-reverse"?" _6xqq":"")+(e==="start"?" _3qnf":"")+(e==="center"?" _3qng":"")+(e==="end"?" _3qnu":"")+(e==="stretch"?" _1a9e":"")+(e==="baseline"?" _7is_":"")+(a==="wrap"?" _4tau":"")+(a==="wrap-reverse"?" _4tav":""))}};return c}(h.Component);e.exports=a;a.defaultProps={align:"start",direction:"horizontal",justify:"start",wrap:"nowrap"}}),null);
__d("isSoftNewlineEvent",["Keys"],(function(a,b,c,d,e,f){"use strict";function a(a){return a.which===b("Keys").RETURN&&(a.getModifierState("Shift")||a.getModifierState("Alt")||a.getModifierState("Control"))}e.exports=a}),null);
__d("intlList",["fbt","invariant","React"],(function(a,b,c,d,e,f,g,h){"use strict";a=b("React");var i={AND:"AND",NONE:"NONE",OR:"OR"},j={COMMA:"COMMA",SEMICOLON:"SEMICOLON"};c=function(a,b,c){var d=a.length;if(d===0)return"";else if(d===1)return a[0];var e=a[d-1],f=a[0];for(var h=1;h<d-1;++h)switch(c){case j.SEMICOLON:f=g._("{previous items}; {following items}",[g._param("previous items",f),g._param("following items",a[h])]);break;default:f=g._("{previous items}, {following items}",[g._param("previous items",f),g._param("following items",a[h])])}return k(f,e,b||i.AND,c||j.COMMA)};function k(a,b,c,d){switch(c){case i.AND:return g._("{list of items} and {last item}",[g._param("list of items",a),g._param("last item",b)]);case i.OR:return g._("{list of items} or {last item}",[g._param("list of items",a),g._param("last item",b)]);case i.NONE:switch(d){case j.SEMICOLON:return g._("{previous items}; {last item}",[g._param("previous items",a),g._param("last item",b)]);default:return g._("{list of items}, {last item}",[g._param("list of items",a),g._param("last item",b)])}default:h(0,568,c)}}c.DELIMITERS=j;c.CONJUNCTIONS=i;e.exports=c}),null);
__d("ScriptPath",["ErrorGuard","SubscriptionList","TimeSlice","WebStorage","isInIframe"],(function(a,b,c,d,e,f){"use strict";var g,h,i="sp_pi",j=1e3*30,k=null,l=null,m=new(b("SubscriptionList"))(),n=null,o=[],p=b("TimeSlice").guard(function(a,c){m.getCallbacks().forEach(function(d){(g||(g=b("ErrorGuard"))).applyWithGuard(function(){d({source:k,dest:l,cause:a,extraData:c})},null,[])})},"ScriptPath Notifying callbacks",{propagationType:b("TimeSlice").PropagationType.ORPHAN});function q(){return l?l.scriptPath:void 0}function r(){var a=(h||(h=b("WebStorage"))).getSessionStorage();if(!a||b("isInIframe")())return;h.setItemGuarded(a,i,JSON.stringify({pageInfo:l,clickPoint:n,time:Date.now()}))}function a(){var a=(h||(h=b("WebStorage"))).getSessionStorageForRead();if(!a)return;var c=a.getItem(i);if(c){c=JSON.parse(c);c&&(c.time<Date.now()-j&&(a=(h||(h=b("WebStorage"))).getSessionStorage(),a&&a.removeItem(i)),l=c.pageInfo,n=c.clickPoint,l&&(l.restored=!0))}}a();c={set:function(a,b,c){k=l,l={scriptPath:a,categoryToken:b,extraData:c||{}},o=[],window._script_path=a,p()},openOverlayView:function(a,b,c){if(!a)return;var d=o.length;(d===0||o[d-1]!==a)&&(k=Object.assign({},l),l&&(l.topViewEndpoint=a),c&&c.replaceTopOverlay&&d>0?(o[d-1]=a,p("replace_overlay_view",b)):(o.push(a),p("open_overlay_view",b)))},closeOverlayView:function(a,b){a=o.lastIndexOf(a);if(a===-1)return;k=Object.assign({},l);l&&(a>0?l.topViewEndpoint=o[a-1]:l.topViewEndpoint=null);o=o.slice(0,a);p("close_overlay_view",b)},setClickPointInfo:function(a){n=a,r()},getClickPointInfo:function(){return n},getScriptPath:q,getCategoryToken:function(){return l?l.categoryToken:void 0},getEarlyFlushPage:function(){var a;return(a=l)==null?void 0:(a=a.extraData)==null?void 0:a.ef_page},getTopViewEndpoint:function(){var a=o.length;return a>0?o[a-1]:q()},getPageInfo:function(){return l},getSourcePageInfo:function(){return k},subscribe:function(a){return m.add(b("TimeSlice").guard(a,"ScriptPath.subscribe"))},shutdown:function(){r()}};e.exports=c}),null);
__d("isValidUniqueID",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){return a!==null&&a!==void 0&&a!==""&&(typeof a==="string"||typeof a==="number")}}),null);
__d("SearchableEntry",["invariant","FbtResultBase","HTML","isValidUniqueID"],(function(a,b,c,d,e,f,g){function h(a){if(a==null||a==="")return"";else if(typeof a==="string")return a;else if(a instanceof b("FbtResultBase"))return a.toString();else if(typeof a==="object"){a=b("HTML").replaceJSONWrapper(a);if(b("HTML").isHTML(a)){a=a.getRootNode();return a.textContent||a.innerText||""}else return""}else return""}a=function(){function a(a){this.valueOf=this.getUniqueID;b("isValidUniqueID")(a.uniqueID)||g(0,3851,a.uniqueID);this.$8=a.uniqueID+"";a.title instanceof b("FbtResultBase")&&(a.title=a.title.toString());a.title!=null&&typeof a.title==="string"||g(0,3852,a.title);this.$6=a.title;this.$3=a.order||0;this.$5=h(a.subtitle);this.$2=a.keywordString||"";this.$4=a.photo||"";this.$9=a.uri||"";this.$7=h(a.type);var c=a.auxiliaryData==null?{}:a.auxiliaryData;this.$1=c;this.$10=a.dataType||""}var c=a.prototype;c.getUniqueID=function(){return this.$8};c.getOrder=function(){return this.$3};c.getTitle=function(){return this.$6};c.getSubtitle=function(){return this.$5};c.getKeywordString=function(){return this.$2};c.getPhoto=function(){return this.$4};c.getURI=function(){return this.$9};c.getType=function(){return this.$7};c.getAuxiliaryData=function(){return this.$1};c.getDataType=function(){return this.$10};c.toPlainObject=function(){return{auxiliaryData:this.$1,keywordString:this.$2,order:this.$3,photo:this.$4,subtitle:this.$5,title:this.$6,type:this.$7,uniqueID:this.$8,uri:this.$9,dataType:this.$10}};return a}();e.exports=a}),null);
__d("DataAttributeUtils",["DataStore"],(function(a,b,c,d,e,f){var g=[];function h(a,b){a=a;while(a){if(b(a))return a;a=a.parentNode}return null}function i(a,b){a=h(a,function(a){return a instanceof Element&&!!a.getAttribute(b)});return a instanceof Element?a:null}var j={LEGACY_CLICK_TRACKING_ATTRIBUTE:"data-ft",CLICK_TRACKING_DATASTORE_KEY:"data-ft",ENABLE_STORE_CLICK_TRACKING:"data-fte",IMPRESSION_TRACKING_CONFIG_ATTRIBUTE:"data-xt-vimp",IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY:"data-xt-vimp",REMOVE_LEGACY_TRACKING:"data-ftr",getDataAttribute:function(a,b){return k[b]?k[b](a):a.getAttribute(b)},setDataAttribute:function(a,b,c){return l[b]?l[b](a,c):a.setAttribute(b,c)},getDataFt:function(a){if(a.getAttribute(j.ENABLE_STORE_CLICK_TRACKING)){var c=b("DataStore").get(a,j.CLICK_TRACKING_DATASTORE_KEY);c||(c=j.moveClickTrackingToDataStore(a,a.getAttribute(j.REMOVE_LEGACY_TRACKING)));return c}return a.getAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE)},setDataFt:function(a,c){if(a.getAttribute(j.ENABLE_STORE_CLICK_TRACKING)){b("DataStore").set(a,j.CLICK_TRACKING_DATASTORE_KEY,c);return}a.setAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE,c)},moveXTVimp:function(a){j.moveAttributeToDataStore(a,j.IMPRESSION_TRACKING_CONFIG_ATTRIBUTE,j.IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY),g.push(a.id)},getXTrackableElements:function(){var a=g.map(function(a){return document.getElementById(a)}).filter(function(a){return!!a}),b=document.querySelectorAll("[data-xt-vimp]");for(var c=0;c<b.length;c++)a.push(b[c]);return a},getDataAttributeGeneric:function(a,c,d){d=b("DataStore").get(a,d);return d!==void 0?d:a.getAttribute(c)},moveAttributeToDataStore:function(a,c,d){var e=a.getAttribute(c);e&&(b("DataStore").set(a,d,e),a.removeAttribute(c))},moveClickTrackingToDataStore:function(a,c){var d=a.getAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE);d&&(b("DataStore").set(a,j.CLICK_TRACKING_DATASTORE_KEY,d),c&&a.removeAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE));return d},getClickTrackingParent:function(a){a=i(a,j.LEGACY_CLICK_TRACKING_ATTRIBUTE)||i(a,j.ENABLE_STORE_CLICK_TRACKING);return a},getClickTrackingElements:function(a){return a.querySelectorAll("["+j.LEGACY_CLICK_TRACKING_ATTRIBUTE+"], ["+j.ENABLE_STORE_CLICK_TRACKING+"]")},getParentByAttributeOrDataStoreKey:function(a,c,d){while(a&&(!a.getAttribute||!a.getAttribute(c))&&b("DataStore").get(a,d)===void 0)a=a.parentNode;return a}},k={"data-ft":j.getDataFt,"data-xt-vimp":function(a){return j.getDataAttributeGeneric(a,"data-xt-vimp","data-xt-vimp")},"data-ad":function(a){return j.getDataAttributeGeneric(a,"data-ad","data-ad")},"data-xt":function(a){return j.getDataAttributeGeneric(a,"data-xt","data-xt")}},l={"data-ft":j.setDataFt,"data-xt":function(a,c){b("DataStore").set(a,"data-xt",c)}};e.exports=j}),null);