goog.provide('lab.eval');
lab.eval.compile_state_ref = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
lab.eval.comment_evaled = (function (){var stored = JSON.parse(localStorage.getItem("comment_evaled"));
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((((!((stored == null))))?stored:false));
})();
lab.eval.toggle_comment_evaled_BANG_ = (function lab$eval$toggle_comment_evaled_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lab.eval.comment_evaled,cljs.core.not);

return localStorage.setItem("comment_evaled",cljs.core.deref(lab.eval.comment_evaled));
});
lab.eval.eval_BANG_ = (function lab$eval$eval_BANG_(var_args){
var G__27350 = arguments.length;
switch (G__27350) {
case 1:
return lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (value){
return lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$2(value,(function (p__27354){
var map__27355 = p__27354;
var map__27355__$1 = (((((!((map__27355 == null))))?(((((map__27355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27355):map__27355);
var result = map__27355__$1;
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27355__$1,new cljs.core.Keyword(null,"value","value",305978217));
console.log(result);

return lab.hud.show_BANG_(((clojure.string.blank_QMARK_(value__$1))?result:cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1)));
}));
}));

(lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (value,complete_fn){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(lab.eval.compile_state_ref,value,"[test]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,lab.eval.compile_state_ref)], null),complete_fn);
}));

(lab.eval.eval_BANG_.cljs$lang$maxFixedArity = 2);

lab.eval.eval_forms_BANG_ = (function lab$eval$eval_forms_BANG_(lines){
var seq__27363 = cljs.core.seq(lab.parsing.lines__GT_forms(lines));
var chunk__27364 = null;
var count__27365 = (0);
var i__27366 = (0);
while(true){
if((i__27366 < count__27365)){
var form = chunk__27364.cljs$core$IIndexed$_nth$arity$2(null,i__27366);
console.log("Eval",form);

lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$1(form);


var G__27416 = seq__27363;
var G__27417 = chunk__27364;
var G__27418 = count__27365;
var G__27419 = (i__27366 + (1));
seq__27363 = G__27416;
chunk__27364 = G__27417;
count__27365 = G__27418;
i__27366 = G__27419;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27363);
if(temp__5735__auto__){
var seq__27363__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27363__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27363__$1);
var G__27420 = cljs.core.chunk_rest(seq__27363__$1);
var G__27421 = c__4556__auto__;
var G__27422 = cljs.core.count(c__4556__auto__);
var G__27423 = (0);
seq__27363 = G__27420;
chunk__27364 = G__27421;
count__27365 = G__27422;
i__27366 = G__27423;
continue;
} else {
var form = cljs.core.first(seq__27363__$1);
console.log("Eval",form);

lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$1(form);


var G__27424 = cljs.core.next(seq__27363__$1);
var G__27425 = null;
var G__27426 = (0);
var G__27427 = (0);
seq__27363 = G__27424;
chunk__27364 = G__27425;
count__27365 = G__27426;
i__27366 = G__27427;
continue;
}
} else {
return null;
}
}
break;
}
});
lab.eval.try_eval_BANG_ = (function lab$eval$try_eval_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27428 = arguments.length;
var i__4737__auto___27429 = (0);
while(true){
if((i__4737__auto___27429 < len__4736__auto___27428)){
args__4742__auto__.push((arguments[i__4737__auto___27429]));

var G__27430 = (i__4737__auto___27429 + (1));
i__4737__auto___27429 = G__27430;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return lab.eval.try_eval_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(lab.eval.try_eval_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cm,p__27382){
var map__27383 = p__27382;
var map__27383__$1 = (((((!((map__27383 == null))))?(((((map__27383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27383):map__27383);
var comment_evaled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27383__$1,new cljs.core.Keyword(null,"comment-evaled","comment-evaled",-1603842930),true);
var top_form = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27383__$1,new cljs.core.Keyword(null,"top-form","top-form",-437124996),false);
var hud_result = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27383__$1,new cljs.core.Keyword(null,"hud-result","hud-result",942343078),false);
var hud_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27383__$1,new cljs.core.Keyword(null,"hud-duration","hud-duration",-1418254741),(3000));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27383__$1,new cljs.core.Keyword(null,"after","after",594996914),cljs.core.identity);
var cursor_pos = cm.getCursor();
var cursor = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),goog.object.get(cursor_pos,"line"),new cljs.core.Keyword(null,"ch","ch",-554717905),goog.object.get(cursor_pos,"ch")], null);
var part = (((!(clojure.string.blank_QMARK_(cm.getSelection()))))?cm.getSelection():(cljs.core.truth_(top_form)?lab.parsing.get_top_form(cm,cursor):lab.parsing.get_current_form(cm,cursor)
));
lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$2(part,(function (p__27394){
var map__27395 = p__27394;
var map__27395__$1 = (((((!((map__27395 == null))))?(((((map__27395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27395):map__27395);
var result = map__27395__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27395__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27395__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var editor_content = cm.getValue();
var success = cljs.core.boolean$(cljs.core.not(error));
var value__$1 = ((((success) && (clojure.string.blank_QMARK_(value))))?"OK":(((((!(success))) && (clojure.string.blank_QMARK_(value))))?"See console":value
));
var new_editor_content = (cljs.core.truth_(((success)?comment_evaled:false))?editor_content.replace(RegExp("^([^;])","gm"),";; $1"):editor_content);
console.log(result);

if((!(success))){
alert(error);
} else {
if(cljs.core.not(hud_result)){
cm.setValue([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_editor_content),"\n;; => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1),"\n"].join(''));

cm.setCursor(cm.lineCount(),(1));
} else {
lab.hud.show_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"duration","duration",1444101068),hud_duration], 0));

cm.setCursor(cursor_pos);
}
}

return (after.cljs$core$IFn$_invoke$arity$2 ? after.cljs$core$IFn$_invoke$arity$2(part,result) : after.call(null,part,result));
}));

return part;
}));

(lab.eval.try_eval_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lab.eval.try_eval_BANG_.cljs$lang$applyTo = (function (seq27380){
var G__27381 = cljs.core.first(seq27380);
var seq27380__$1 = cljs.core.next(seq27380);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27381,seq27380__$1);
}));

shadow.cljs.bootstrap.browser.init(lab.eval.compile_state_ref,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"js/bootstrap"], null),(function (){
console.info("Bootstrap ready. Evaluating default");

return lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$1("(ns cljs.user\n                       (:require [lab.map :as m]\n                                 [lab.graph :as g]\n                                 [lab.console :as c]\n                                 [lab.vis :as v]\n                                 [lab.views :as views]\n                                 [lab.helpers :as h]\n                                 [lab.dashboard :as d]\n                                 [lab.autodetect]))");
}));
