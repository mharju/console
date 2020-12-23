goog.provide('lab.autodetect');
lab.autodetect.detectors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
lab.autodetect.IDetector = function(){};

var lab$autodetect$IDetector$_transform$dyn_26776 = (function (this$,data){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (lab.autodetect._transform[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__4429__auto__.call(null,this$,data));
} else {
var m__4426__auto__ = (lab.autodetect._transform["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__4426__auto__.call(null,this$,data));
} else {
throw cljs.core.missing_protocol("IDetector.-transform",this$);
}
}
});
lab.autodetect._transform = (function lab$autodetect$_transform(this$,data){
if((((!((this$ == null)))) && ((!((this$.lab$autodetect$IDetector$_transform$arity$2 == null)))))){
return this$.lab$autodetect$IDetector$_transform$arity$2(this$,data);
} else {
return lab$autodetect$IDetector$_transform$dyn_26776(this$,data);
}
});

lab.autodetect.register_BANG_ = (function lab$autodetect$register_BANG_(detector){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.autodetect.detectors,cljs.core.conj,detector);
});
lab.autodetect.detect = (function lab$autodetect$detect(data){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,detector){
var temp__5735__auto__ = lab.autodetect._transform(detector,data);
if(cljs.core.truth_(temp__5735__auto__)){
var result = temp__5735__auto__;
return cljs.core.reduced(result);
} else {
return null;
}
}),null,cljs.core.deref(lab.autodetect.detectors));
});
lab.autodetect.json = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26739 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26739 = (function (meta26740){
this.meta26740 = meta26740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26741,meta26740__$1){
var self__ = this;
var _26741__$1 = this;
return (new lab.autodetect.t_lab$autodetect26739(meta26740__$1));
}));

(lab.autodetect.t_lab$autodetect26739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26741){
var self__ = this;
var _26741__$1 = this;
return self__.meta26740;
}));

(lab.autodetect.t_lab$autodetect26739.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26739.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e26742){if((e26742 instanceof Error)){
var _ = e26742;
return null;
} else {
throw e26742;

}
}}));

(lab.autodetect.t_lab$autodetect26739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26740","meta26740",-2050818487,null)], null);
}));

(lab.autodetect.t_lab$autodetect26739.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26739.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26739");

(lab.autodetect.t_lab$autodetect26739.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26739");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26739.
 */
lab.autodetect.__GT_t_lab$autodetect26739 = (function lab$autodetect$__GT_t_lab$autodetect26739(meta26740){
return (new lab.autodetect.t_lab$autodetect26739(meta26740));
});

}

return (new lab.autodetect.t_lab$autodetect26739(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.csv = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26745 = (function (meta26746){
this.meta26746 = meta26746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26747,meta26746__$1){
var self__ = this;
var _26747__$1 = this;
return (new lab.autodetect.t_lab$autodetect26745(meta26746__$1));
}));

(lab.autodetect.t_lab$autodetect26745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26747){
var self__ = this;
var _26747__$1 = this;
return self__.meta26746;
}));

(lab.autodetect.t_lab$autodetect26745.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26745.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(((typeof data === 'string')?cljs.core.re_find(/^(\w+,)(\w+,*)+/,data):false))){
var vec__26748 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26743_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26743_SHARP_,",");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,"\n"));
var seq__26749 = cljs.core.seq(vec__26748);
var first__26750 = cljs.core.first(seq__26749);
var seq__26749__$1 = cljs.core.next(seq__26749);
var header = first__26750;
var rows = seq__26749__$1;
var header__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(header),cljs.core.count(cljs.core.first(rows))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,header):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(rows)))));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26744_SHARP_){
return cljs.core.zipmap(header__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
var or__4126__auto__ = lab.autodetect.detect(v);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return v;
}
}),p1__26744_SHARP_));
}),rows);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26746","meta26746",-692339976,null)], null);
}));

(lab.autodetect.t_lab$autodetect26745.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26745.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26745");

(lab.autodetect.t_lab$autodetect26745.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26745");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26745.
 */
lab.autodetect.__GT_t_lab$autodetect26745 = (function lab$autodetect$__GT_t_lab$autodetect26745(meta26746){
return (new lab.autodetect.t_lab$autodetect26745(meta26746));
});

}

return (new lab.autodetect.t_lab$autodetect26745(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.tsv = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26753 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26753 = (function (meta26754){
this.meta26754 = meta26754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26755,meta26754__$1){
var self__ = this;
var _26755__$1 = this;
return (new lab.autodetect.t_lab$autodetect26753(meta26754__$1));
}));

(lab.autodetect.t_lab$autodetect26753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26755){
var self__ = this;
var _26755__$1 = this;
return self__.meta26754;
}));

(lab.autodetect.t_lab$autodetect26753.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26753.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(((typeof data === 'string')?cljs.core.re_find(/\t/,data):false))){
var vec__26756 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26751_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26751_SHARP_,"\t");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,"\n"));
var seq__26757 = cljs.core.seq(vec__26756);
var first__26758 = cljs.core.first(seq__26757);
var seq__26757__$1 = cljs.core.next(seq__26757);
var header = first__26758;
var rows = seq__26757__$1;
var header__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(header),cljs.core.count(cljs.core.first(rows))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,header):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(rows)))));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26752_SHARP_){
return cljs.core.zipmap(header__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
var or__4126__auto__ = lab.autodetect.detect(v);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return v;
}
}),p1__26752_SHARP_));
}),rows);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26754","meta26754",-942341328,null)], null);
}));

(lab.autodetect.t_lab$autodetect26753.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26753.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26753");

(lab.autodetect.t_lab$autodetect26753.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26753");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26753.
 */
lab.autodetect.__GT_t_lab$autodetect26753 = (function lab$autodetect$__GT_t_lab$autodetect26753(meta26754){
return (new lab.autodetect.t_lab$autodetect26753(meta26754));
});

}

return (new lab.autodetect.t_lab$autodetect26753(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.postgres = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26761 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26761 = (function (meta26762){
this.meta26762 = meta26762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26763,meta26762__$1){
var self__ = this;
var _26763__$1 = this;
return (new lab.autodetect.t_lab$autodetect26761(meta26762__$1));
}));

(lab.autodetect.t_lab$autodetect26761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26763){
var self__ = this;
var _26763__$1 = this;
return self__.meta26762;
}));

(lab.autodetect.t_lab$autodetect26761.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26761.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.re_find(/\s+\w+\s+/,data);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.re_find(/\-+/,data);
} else {
return and__4115__auto__;
}
})())){
var vec__26764 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26759_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26759_SHARP_,/\s+\||$/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,"\n"));
var seq__26765 = cljs.core.seq(vec__26764);
var first__26766 = cljs.core.first(seq__26765);
var seq__26765__$1 = cljs.core.next(seq__26765);
var header = first__26766;
var first__26766__$1 = cljs.core.first(seq__26765__$1);
var seq__26765__$2 = cljs.core.next(seq__26765__$1);
var _ = first__26766__$1;
var rows = seq__26765__$2;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26760_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(clojure.string.trim),header),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
var v__$1 = clojure.string.trim(v);
var or__4126__auto__ = lab.autodetect.detect(v__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return v__$1;
}
}),p1__26760_SHARP_));
}),rows);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26762","meta26762",-1675560458,null)], null);
}));

(lab.autodetect.t_lab$autodetect26761.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26761.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26761");

(lab.autodetect.t_lab$autodetect26761.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26761");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26761.
 */
lab.autodetect.__GT_t_lab$autodetect26761 = (function lab$autodetect$__GT_t_lab$autodetect26761(meta26762){
return (new lab.autodetect.t_lab$autodetect26761(meta26762));
});

}

return (new lab.autodetect.t_lab$autodetect26761(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.numeric = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26767 = (function (meta26768){
this.meta26768 = meta26768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26769,meta26768__$1){
var self__ = this;
var _26769__$1 = this;
return (new lab.autodetect.t_lab$autodetect26767(meta26768__$1));
}));

(lab.autodetect.t_lab$autodetect26767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26769){
var self__ = this;
var _26769__$1 = this;
return self__.meta26768;
}));

(lab.autodetect.t_lab$autodetect26767.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26767.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(((typeof data === 'string')?cljs.core.re_find(/^\d+\.*\d*$/,data):false))){
return parseFloat(data);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26768","meta26768",-952309446,null)], null);
}));

(lab.autodetect.t_lab$autodetect26767.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26767.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26767");

(lab.autodetect.t_lab$autodetect26767.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26767");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26767.
 */
lab.autodetect.__GT_t_lab$autodetect26767 = (function lab$autodetect$__GT_t_lab$autodetect26767(meta26768){
return (new lab.autodetect.t_lab$autodetect26767(meta26768));
});

}

return (new lab.autodetect.t_lab$autodetect26767(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.datetime = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26770 = (function (meta26771){
this.meta26771 = meta26771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26772,meta26771__$1){
var self__ = this;
var _26772__$1 = this;
return (new lab.autodetect.t_lab$autodetect26770(meta26771__$1));
}));

(lab.autodetect.t_lab$autodetect26770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26772){
var self__ = this;
var _26772__$1 = this;
return self__.meta26771;
}));

(lab.autodetect.t_lab$autodetect26770.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26770.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
var temp__5735__auto__ = (new Date(data));
if(cljs.core.truth_(temp__5735__auto__)){
var match = temp__5735__auto__;
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.re_find(/[^0-9\-\.:]/,data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return isNaN(match.getTime());
}
})())){
return null;
} else {
return match;
}
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26771","meta26771",1544531281,null)], null);
}));

(lab.autodetect.t_lab$autodetect26770.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26770.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26770");

(lab.autodetect.t_lab$autodetect26770.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26770");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26770.
 */
lab.autodetect.__GT_t_lab$autodetect26770 = (function lab$autodetect$__GT_t_lab$autodetect26770(meta26771){
return (new lab.autodetect.t_lab$autodetect26770(meta26771));
});

}

return (new lab.autodetect.t_lab$autodetect26770(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.number_list = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26773 = (function (meta26774){
this.meta26774 = meta26774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26775,meta26774__$1){
var self__ = this;
var _26775__$1 = this;
return (new lab.autodetect.t_lab$autodetect26773(meta26774__$1));
}));

(lab.autodetect.t_lab$autodetect26773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26775){
var self__ = this;
var _26775__$1 = this;
return self__.meta26774;
}));

(lab.autodetect.t_lab$autodetect26773.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26773.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(((typeof data === 'string')?cljs.core.re_find(/^\d+\.*\d*[\s,]\d+\.*\d*/,data):false))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(parseFloat),cljs.core.re_seq(/\d+\.*\d*/,data));
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26774","meta26774",-1344337980,null)], null);
}));

(lab.autodetect.t_lab$autodetect26773.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26773.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26773");

(lab.autodetect.t_lab$autodetect26773.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26773");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26773.
 */
lab.autodetect.__GT_t_lab$autodetect26773 = (function lab$autodetect$__GT_t_lab$autodetect26773(meta26774){
return (new lab.autodetect.t_lab$autodetect26773(meta26774));
});

}

return (new lab.autodetect.t_lab$autodetect26773(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.core.reset_BANG_(lab.autodetect.detectors,cljs.core.PersistentVector.EMPTY);

lab.autodetect.register_BANG_(lab.autodetect.json);

lab.autodetect.register_BANG_(lab.autodetect.csv);

lab.autodetect.register_BANG_(lab.autodetect.tsv);

lab.autodetect.register_BANG_(lab.autodetect.postgres);

lab.autodetect.register_BANG_(lab.autodetect.numeric);

lab.autodetect.register_BANG_(lab.autodetect.number_list);

lab.autodetect.register_BANG_(lab.autodetect.datetime);
