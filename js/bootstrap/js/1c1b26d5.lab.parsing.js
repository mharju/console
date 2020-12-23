goog.provide('lab.parsing');

/**
 * @interface
 */
lab.parsing.ICode = function(){};

var lab$parsing$ICode$get_line$dyn_26045 = (function (this$,n){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (lab.parsing.get_line[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,n) : m__4429__auto__.call(null,this$,n));
} else {
var m__4426__auto__ = (lab.parsing.get_line["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,n) : m__4426__auto__.call(null,this$,n));
} else {
throw cljs.core.missing_protocol("ICode.get-line",this$);
}
}
});
lab.parsing.get_line = (function lab$parsing$get_line(this$,n){
if((((!((this$ == null)))) && ((!((this$.lab$parsing$ICode$get_line$arity$2 == null)))))){
return this$.lab$parsing$ICode$get_line$arity$2(this$,n);
} else {
return lab$parsing$ICode$get_line$dyn_26045(this$,n);
}
});

var lab$parsing$ICode$line_count$dyn_26046 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (lab.parsing.line_count[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (lab.parsing.line_count["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICode.line-count",this$);
}
}
});
lab.parsing.line_count = (function lab$parsing$line_count(this$){
if((((!((this$ == null)))) && ((!((this$.lab$parsing$ICode$line_count$arity$1 == null)))))){
return this$.lab$parsing$ICode$line_count$arity$1(this$);
} else {
return lab$parsing$ICode$line_count$dyn_26046(this$);
}
});

var lab$parsing$ICode$get_range$dyn_26047 = (function (this$,start,end){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (lab.parsing.get_range[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,start,end) : m__4429__auto__.call(null,this$,start,end));
} else {
var m__4426__auto__ = (lab.parsing.get_range["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,start,end) : m__4426__auto__.call(null,this$,start,end));
} else {
throw cljs.core.missing_protocol("ICode.get-range",this$);
}
}
});
lab.parsing.get_range = (function lab$parsing$get_range(this$,start,end){
if((((!((this$ == null)))) && ((!((this$.lab$parsing$ICode$get_range$arity$3 == null)))))){
return this$.lab$parsing$ICode$get_range$arity$3(this$,start,end);
} else {
return lab$parsing$ICode$get_range$dyn_26047(this$,start,end);
}
});

(cljs.core.PersistentVector.prototype.lab$parsing$ICode$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.lab$parsing$ICode$get_line$arity$2 = (function (this$,n){
var this$__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this$__$1,n);
}));

(cljs.core.PersistentVector.prototype.lab$parsing$ICode$line_count$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.count(this$__$1);
}));

(cljs.core.PersistentVector.prototype.lab$parsing$ICode$get_range$arity$3 = (function (this$,p__25901,p__25902){
var map__25903 = p__25901;
var map__25903__$1 = (((((!((map__25903 == null))))?(((((map__25903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25903):map__25903);
var start_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25903__$1,new cljs.core.Keyword(null,"line","line",212345235));
var start_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25903__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var map__25904 = p__25902;
var map__25904__$1 = (((((!((map__25904 == null))))?(((((map__25904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25904):map__25904);
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25904__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25904__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_line,end_line)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this$__$1,start_line),start_ch,end_ch);
} else {
var first_line = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this$__$1,start_line),start_ch);
var full_lines_between = ((((end_line - (start_line + (1))) > (0)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(this$__$1,(start_line + (1)),end_line):null);
var last_line = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this$__$1,end_line),(0),end_ch);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(cljs.core.truth_(full_lines_between)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_line], null),full_lines_between),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_line], null)):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_line], null),last_line)));
}
}));

(module$node_modules$codemirror$lib$codemirror.prototype.lab$parsing$ICode$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$codemirror$lib$codemirror.prototype.lab$parsing$ICode$get_line$arity$2 = (function (this$,n){
var this$__$1 = this;
return this$__$1.getLine(n);
}));

(module$node_modules$codemirror$lib$codemirror.prototype.lab$parsing$ICode$line_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.lineCount();
}));

(module$node_modules$codemirror$lib$codemirror.prototype.lab$parsing$ICode$get_range$arity$3 = (function (this$,start,end){
var this$__$1 = this;
return this$__$1.getRange(cljs.core.clj__GT_js(start),cljs.core.clj__GT_js(end));
}));
lab.parsing.find_start_paren = (function lab$parsing$find_start_paren(cm,cursor){
var G__25933 = cursor;
var map__25934 = G__25933;
var map__25934__$1 = (((((!((map__25934 == null))))?(((((map__25934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25934):map__25934);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25934__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25934__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var G__25933__$1 = G__25933;
while(true){
var map__25940 = G__25933__$1;
var map__25940__$1 = (((((!((map__25940 == null))))?(((((map__25940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25940):map__25940);
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25940__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25940__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var current_line = clojure.string.reverse(lab.parsing.get_line(cm,line__$1));
var length = ((current_line).length);
var search_col = ((length - ch__$1) - (1));
var index = current_line.indexOf("(",search_col);
if((index >= (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line__$1,new cljs.core.Keyword(null,"ch","ch",-554717905),((length - index) - (1))], null);
} else {
if((line__$1 > (0))){
var G__26049 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(line__$1 - (1)),new cljs.core.Keyword(null,"ch","ch",-554717905),cljs.core.count(lab.parsing.get_line(cm,(line__$1 - (1))))], null);
G__25933__$1 = G__26049;
continue;
} else {
return null;
}
}
break;
}
});
lab.parsing.match_parens = (function lab$parsing$match_parens(counter,line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__25954,ch){
var map__25955 = p__25954;
var map__25955__$1 = (((((!((map__25955 == null))))?(((((map__25955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25955):map__25955);
var counter__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25955__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25955__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,";")){
return cljs.core.reduced(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counter","counter",804008177),counter__$1,new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null));
} else {
var counter__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"("))?(counter__$1 + (1)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,")"))?(counter__$1 - (1)):counter__$1
));
if((counter__$2 === (0))){
return cljs.core.reduced(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counter","counter",804008177),counter__$2,new cljs.core.Keyword(null,"pos","pos",-864607220),(pos + (1))], null);
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counter","counter",804008177),counter,new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null),line);
});
lab.parsing.find_end_paren = (function lab$parsing$find_end_paren(var_args){
var G__25962 = arguments.length;
switch (G__25962) {
case 2:
return lab.parsing.find_end_paren.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lab.parsing.find_end_paren.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.parsing.find_end_paren.cljs$core$IFn$_invoke$arity$2 = (function (cm,p__25963){
var map__25964 = p__25963;
var map__25964__$1 = (((((!((map__25964 == null))))?(((((map__25964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25964):map__25964);
var cursor = map__25964__$1;
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25964__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25964__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var start_ch = lab.parsing.get_line(cm,line).charAt(ch);
return lab.parsing.find_end_paren.cljs$core$IFn$_invoke$arity$3(cm,cursor,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_ch,"("))?(0):(1)));
}));

(lab.parsing.find_end_paren.cljs$core$IFn$_invoke$arity$3 = (function (cm,cursor,counter_init){
var G__25975 = cursor;
var map__25976 = G__25975;
var map__25976__$1 = (((((!((map__25976 == null))))?(((((map__25976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25976):map__25976);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25976__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25976__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var counter = counter_init;
var G__25975__$1 = G__25975;
var counter__$1 = counter;
while(true){
var map__25982 = G__25975__$1;
var map__25982__$1 = (((((!((map__25982 == null))))?(((((map__25982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25982):map__25982);
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25982__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25982__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var counter__$2 = counter__$1;
var current_line = lab.parsing.get_line(cm,line__$1).substring(ch__$1);
var map__26002 = lab.parsing.match_parens(counter__$2,current_line);
var map__26002__$1 = (((((!((map__26002 == null))))?(((((map__26002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26002):map__26002);
var success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26002__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var counter__$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26002__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26002__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.truth_(success)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line__$1,new cljs.core.Keyword(null,"ch","ch",-554717905),((pos + ch__$1) + (1))], null);
} else {
if(((line__$1 + (1)) < lab.parsing.line_count(cm))){
var G__26074 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(line__$1 + (1)),new cljs.core.Keyword(null,"ch","ch",-554717905),(0)], null);
var G__26075 = counter__$3;
G__25975__$1 = G__26074;
counter__$1 = G__26075;
continue;
} else {
return null;
}
}
break;
}
}));

(lab.parsing.find_end_paren.cljs$lang$maxFixedArity = 3);

lab.parsing.get_current_form = (function lab$parsing$get_current_form(cm,cursor){
var start = lab.parsing.find_start_paren(cm,cursor);
var end = lab.parsing.find_end_paren.cljs$core$IFn$_invoke$arity$2(cm,cursor);
if(cljs.core.truth_((function (){var and__4115__auto__ = start;
if(cljs.core.truth_(and__4115__auto__)){
return end;
} else {
return and__4115__auto__;
}
})())){
return cm.getRange(cljs.core.clj__GT_js(start),cljs.core.clj__GT_js(end));
} else {
return null;
}
});
lab.parsing.find_top_form = (function lab$parsing$find_top_form(cm,cursor){
var G__26005 = cursor;
var map__26006 = G__26005;
var map__26006__$1 = (((((!((map__26006 == null))))?(((((map__26006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26006):map__26006);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__26005__$1 = G__26005;
while(true){
var map__26011 = G__26005__$1;
var map__26011__$1 = (((((!((map__26011 == null))))?(((((map__26011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26011):map__26011);
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26011__$1,new cljs.core.Keyword(null,"line","line",212345235));
var current_line = lab.parsing.get_line(cm,line__$1);
if(cljs.core.truth_(current_line.startsWith("("))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line__$1,new cljs.core.Keyword(null,"ch","ch",-554717905),(1)], null);
} else {
if(((line__$1 - (1)) > (0))){
var G__26076 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(line__$1 - (1)),new cljs.core.Keyword(null,"ch","ch",-554717905),(0)], null);
G__26005__$1 = G__26076;
continue;
} else {
return null;
}
}
break;
}
});
lab.parsing.get_top_form = (function lab$parsing$get_top_form(cm,cursor){
var cursor__$1 = lab.parsing.find_top_form(cm,cursor);
var start = lab.parsing.find_start_paren(cm,cursor__$1);
var end = lab.parsing.find_end_paren.cljs$core$IFn$_invoke$arity$2(cm,cursor__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = start;
if(cljs.core.truth_(and__4115__auto__)){
return end;
} else {
return and__4115__auto__;
}
})())){
return lab.parsing.get_range(cm,start,end);
} else {
return null;
}
});
lab.parsing.lines__GT_forms = (function lab$parsing$lines__GT_forms(lines){
var cursor = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"ch","ch",-554717905),(0)], null);
var forms = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5733__auto__ = lab.parsing.find_end_paren.cljs$core$IFn$_invoke$arity$3(lines,cursor,(0));
if(cljs.core.truth_(temp__5733__auto__)){
var end_cursor = temp__5733__auto__;
var form = lab.parsing.get_range(lines,cursor,end_cursor);
if((new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cursor) < lab.parsing.line_count(lines))){
var G__26077 = end_cursor;
var G__26078 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(forms,form);
cursor = G__26077;
forms = G__26078;
continue;
} else {
return forms;
}
} else {
return forms;
}
break;
}
});
lab.parsing.normalize_ns = (function lab$parsing$normalize_ns(ns_form){
var dcl = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__26040_SHARP_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__26040_SHARP_], 0));

return (((!(cljs.core.seq_QMARK_(p1__26040_SHARP_)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.first(p1__26040_SHARP_))));
}),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(ns_form))));
if(cljs.core.seq(dcl)){
return ["(require ",clojure.string.replace(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",dcl),/\[/,"'["),")"].join('');
} else {
return null;
}
});
lab.parsing.normalize_session = (function lab$parsing$normalize_session(session){

var forms = lab.parsing.lines__GT_forms(clojure.string.split.cljs$core$IFn$_invoke$arity$2(session,/\n/));
var ns_form = lab.parsing.normalize_ns(cljs.core.first(forms));
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_form], null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.rest(forms)));
});
