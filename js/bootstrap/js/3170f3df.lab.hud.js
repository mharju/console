goog.provide('lab.hud');
lab.hud.hud_duration = (function (){var stored = JSON.parse(localStorage.getItem("hud_duration"));
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((((!((stored == null))))?stored:(3000)));
})();
/**
 * Set the duration in milliseconds the HUD will be shown (needs hud-result to be true)
 */
lab.hud.set_hud_duration_BANG_ = (function lab$hud$set_hud_duration_BANG_(duration){
return localStorage.setItem("hud_duration",cljs.core.reset_BANG_(lab.hud.hud_duration,duration));
});
var timeout_27330 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
lab.hud.show_BANG_ = (function lab$hud$show_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27331 = arguments.length;
var i__4737__auto___27332 = (0);
while(true){
if((i__4737__auto___27332 < len__4736__auto___27331)){
args__4742__auto__.push((arguments[i__4737__auto___27332]));

var G__27333 = (i__4737__auto___27332 + (1));
i__4737__auto___27332 = G__27333;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return lab.hud.show_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(lab.hud.show_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (message,p__27317){
var map__27318 = p__27317;
var map__27318__$1 = (((((!((map__27318 == null))))?(((((map__27318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27318):map__27318);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27318__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(3000));
var hud = $("#hud");
var message__$1 = (((cljs.core.count(message) > (140)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(message.substring((0),(120)))," ... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message.substring((cljs.core.count(message) - (15))))].join(''):message);
if(cljs.core.truth_(cljs.core.deref(timeout_27330))){
clearTimeout(timeout_27330);
} else {
}

hud.show().text(message__$1).addClass("visible");

return cljs.core.reset_BANG_(timeout_27330,setTimeout((function (){
hud.removeClass("visible");

return setTimeout((function (){
return hud.hide();
}),(300));
}),duration));
}));

(lab.hud.show_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lab.hud.show_BANG_.cljs$lang$applyTo = (function (seq27315){
var G__27316 = cljs.core.first(seq27315);
var seq27315__$1 = cljs.core.next(seq27315);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27316,seq27315__$1);
}));

