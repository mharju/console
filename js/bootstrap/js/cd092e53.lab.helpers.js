goog.provide('lab.helpers');
/**
 * Load JSON data using `js/fetch`, keywordizes keys on return values
 */
lab.helpers.load_json = (function lab$helpers$load_json(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26780 = arguments.length;
var i__4737__auto___26781 = (0);
while(true){
if((i__4737__auto___26781 < len__4736__auto___26780)){
args__4742__auto__.push((arguments[i__4737__auto___26781]));

var G__26782 = (i__4737__auto___26781 + (1));
i__4737__auto___26781 = G__26782;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return lab.helpers.load_json.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(lab.helpers.load_json.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return fetch.apply(null,cljs.core.clj__GT_js(args)).then((function (r){
return r.json();
})).then((function (r){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));
}));

(lab.helpers.load_json.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(lab.helpers.load_json.cljs$lang$applyTo = (function (seq26777){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26777));
}));

/**
 * Loads a JSON data from the given destination, passing rest of the `args`
 *   to `load-json`
 */
lab.helpers.load_json_into = (function lab$helpers$load_json_into(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26783 = arguments.length;
var i__4737__auto___26784 = (0);
while(true){
if((i__4737__auto___26784 < len__4736__auto___26783)){
args__4742__auto__.push((arguments[i__4737__auto___26784]));

var G__26785 = (i__4737__auto___26784 + (1));
i__4737__auto___26784 = G__26785;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return lab.helpers.load_json_into.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(lab.helpers.load_json_into.cljs$core$IFn$_invoke$arity$variadic = (function (destination,args){
return lab.helpers.load_json.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)).then((function (r){
return cljs.core.reset_BANG_(destination,r);
}));
}));

(lab.helpers.load_json_into.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lab.helpers.load_json_into.cljs$lang$applyTo = (function (seq26778){
var G__26779 = cljs.core.first(seq26778);
var seq26778__$1 = cljs.core.next(seq26778);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26779,seq26778__$1);
}));

/**
 * Convert a seq to CSV string.
 */
lab.helpers.to_csv = (function lab$helpers$to_csv(data){
var ks = cljs.core.keys(cljs.core.first(data));
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",ks),"\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.vals(v));
}),data))].join('');
});
/**
 * Sample a CSV string row. Handy for bigger files that can only be loaded in as strings.
 */
lab.helpers.csv_sample_row = (function lab$helpers$csv_sample_row(data){
var index = cljs.core.rand_int(cljs.core.count(data));
var start = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(data,"\n",index);
var end = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(data,"\n",(start + (1)));
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(data,(start + (1)),end);
});
/**
 * Get the header field of a CSV string
 */
lab.helpers.csv_header = (function lab$helpers$csv_header(data){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(data,(0),clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(data,"\n"));
});
/**
 * Samples n entries from a dataset from a CSV string.
 */
lab.helpers.csv_sample_data = (function lab$helpers$csv_sample_data(data,n){
return lab.autodetect.csv.lab$autodetect$IDetector$_transform$arity$2(null,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lab.helpers.csv_header(data)], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return lab.helpers.csv_sample_row(data);
}))))));
});
