goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22102){
var vec__22103 = p__22102;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22103,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22103,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__22109 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22109,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22109,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22109,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22109,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22109,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__22112 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22112,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22112,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22112,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22112,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22112,(4),null);
var vec__22115 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22115,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22115,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22115,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22115,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22115,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__22118 = segmap;
var map__22118__$1 = (((((!((map__22118 == null))))?(((((map__22118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22118):map__22118);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22118__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22118__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22118__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22118__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__22121 = arguments.length;
switch (G__22121) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__22125 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23106 = cljs.core.next(segs__$1);
var G__23107 = nrelseg;
var G__23108 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23106;
relseg__$1 = G__23107;
result__$1 = G__23108;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22125,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22125,(1),null);
var G__23109 = (gline + (1));
var G__23110 = cljs.core.next(lines__$1);
var G__23111 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23112 = result__$1;
gline = G__23109;
lines__$1 = G__23110;
relseg = G__23111;
result = G__23112;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__22129 = segmap;
var map__22129__$1 = (((((!((map__22129 == null))))?(((((map__22129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22129):map__22129);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22129__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22129__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22129__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22129__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22129__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22128_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22128_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22132 = arguments.length;
switch (G__22132) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__22136 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23152 = cljs.core.next(segs__$1);
var G__23153 = nrelseg;
var G__23154 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23152;
relseg__$1 = G__23153;
result__$1 = G__23154;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22136,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22136,(1),null);
var G__23158 = (gline + (1));
var G__23159 = cljs.core.next(lines__$1);
var G__23160 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23161 = result__$1;
gline = G__23158;
lines__$1 = G__23159;
relseg = G__23160;
result = G__23161;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22139){
var vec__22140 = p__22139;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22140,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22140,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22140,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22140,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22140,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__22143){
var vec__22144 = p__22143;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22144,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22144,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22144,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22144,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22144,(4),null);
var seg = vec__22144;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22147){
var vec__22148 = p__22147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22148,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22148,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22148,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22148,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22148,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__22154 = cljs.core.seq(infos);
var chunk__22155 = null;
var count__22156 = (0);
var i__22157 = (0);
while(true){
if((i__22157 < count__22156)){
var info = chunk__22155.cljs$core$IIndexed$_nth$arity$2(null,i__22157);
var segv_23169 = info__GT_segv(info,source_idx,line,col);
var gline_23170 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23171 = cljs.core.count(cljs.core.deref(lines));
if((gline_23170 > (lc_23171 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22154,chunk__22155,count__22156,i__22157,segv_23169,gline_23170,lc_23171,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23170 - (lc_23171 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23169], null));
});})(seq__22154,chunk__22155,count__22156,i__22157,segv_23169,gline_23170,lc_23171,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22154,chunk__22155,count__22156,i__22157,segv_23169,gline_23170,lc_23171,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23170], null),cljs.core.conj,segv_23169);
});})(seq__22154,chunk__22155,count__22156,i__22157,segv_23169,gline_23170,lc_23171,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23179 = seq__22154;
var G__23180 = chunk__22155;
var G__23181 = count__22156;
var G__23182 = (i__22157 + (1));
seq__22154 = G__23179;
chunk__22155 = G__23180;
count__22156 = G__23181;
i__22157 = G__23182;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22154);
if(temp__5735__auto__){
var seq__22154__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22154__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22154__$1);
var G__23184 = cljs.core.chunk_rest(seq__22154__$1);
var G__23185 = c__4556__auto__;
var G__23186 = cljs.core.count(c__4556__auto__);
var G__23187 = (0);
seq__22154 = G__23184;
chunk__22155 = G__23185;
count__22156 = G__23186;
i__22157 = G__23187;
continue;
} else {
var info = cljs.core.first(seq__22154__$1);
var segv_23188 = info__GT_segv(info,source_idx,line,col);
var gline_23189 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23190 = cljs.core.count(cljs.core.deref(lines));
if((gline_23189 > (lc_23190 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22154,chunk__22155,count__22156,i__22157,segv_23188,gline_23189,lc_23190,info,seq__22154__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23189 - (lc_23190 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23188], null));
});})(seq__22154,chunk__22155,count__22156,i__22157,segv_23188,gline_23189,lc_23190,info,seq__22154__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22154,chunk__22155,count__22156,i__22157,segv_23188,gline_23189,lc_23190,info,seq__22154__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23189], null),cljs.core.conj,segv_23188);
});})(seq__22154,chunk__22155,count__22156,i__22157,segv_23188,gline_23189,lc_23190,info,seq__22154__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23193 = cljs.core.next(seq__22154__$1);
var G__23194 = null;
var G__23195 = (0);
var G__23196 = (0);
seq__22154 = G__23193;
chunk__22155 = G__23194;
count__22156 = G__23195;
i__22157 = G__23196;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22162_23197 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22163_23198 = null;
var count__22164_23199 = (0);
var i__22165_23200 = (0);
while(true){
if((i__22165_23200 < count__22164_23199)){
var vec__22383_23201 = chunk__22163_23198.cljs$core$IIndexed$_nth$arity$2(null,i__22165_23200);
var source_idx_23202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22383_23201,(0),null);
var vec__22386_23203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22383_23201,(1),null);
var __23204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22386_23203,(0),null);
var lines_23205__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22386_23203,(1),null);
var seq__22389_23206 = cljs.core.seq(lines_23205__$1);
var chunk__22390_23207 = null;
var count__22391_23208 = (0);
var i__22392_23209 = (0);
while(true){
if((i__22392_23209 < count__22391_23208)){
var vec__22453_23210 = chunk__22390_23207.cljs$core$IIndexed$_nth$arity$2(null,i__22392_23209);
var line_23211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22453_23210,(0),null);
var cols_23212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22453_23210,(1),null);
var seq__22456_23213 = cljs.core.seq(cols_23212);
var chunk__22457_23214 = null;
var count__22458_23215 = (0);
var i__22459_23216 = (0);
while(true){
if((i__22459_23216 < count__22458_23215)){
var vec__22468_23217 = chunk__22457_23214.cljs$core$IIndexed$_nth$arity$2(null,i__22459_23216);
var col_23218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22468_23217,(0),null);
var infos_23219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22468_23217,(1),null);
encode_cols(infos_23219,source_idx_23202,line_23211,col_23218);


var G__23220 = seq__22456_23213;
var G__23221 = chunk__22457_23214;
var G__23222 = count__22458_23215;
var G__23223 = (i__22459_23216 + (1));
seq__22456_23213 = G__23220;
chunk__22457_23214 = G__23221;
count__22458_23215 = G__23222;
i__22459_23216 = G__23223;
continue;
} else {
var temp__5735__auto___23224 = cljs.core.seq(seq__22456_23213);
if(temp__5735__auto___23224){
var seq__22456_23225__$1 = temp__5735__auto___23224;
if(cljs.core.chunked_seq_QMARK_(seq__22456_23225__$1)){
var c__4556__auto___23226 = cljs.core.chunk_first(seq__22456_23225__$1);
var G__23227 = cljs.core.chunk_rest(seq__22456_23225__$1);
var G__23228 = c__4556__auto___23226;
var G__23229 = cljs.core.count(c__4556__auto___23226);
var G__23230 = (0);
seq__22456_23213 = G__23227;
chunk__22457_23214 = G__23228;
count__22458_23215 = G__23229;
i__22459_23216 = G__23230;
continue;
} else {
var vec__22471_23231 = cljs.core.first(seq__22456_23225__$1);
var col_23232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22471_23231,(0),null);
var infos_23233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22471_23231,(1),null);
encode_cols(infos_23233,source_idx_23202,line_23211,col_23232);


var G__23234 = cljs.core.next(seq__22456_23225__$1);
var G__23235 = null;
var G__23236 = (0);
var G__23237 = (0);
seq__22456_23213 = G__23234;
chunk__22457_23214 = G__23235;
count__22458_23215 = G__23236;
i__22459_23216 = G__23237;
continue;
}
} else {
}
}
break;
}


var G__23238 = seq__22389_23206;
var G__23239 = chunk__22390_23207;
var G__23240 = count__22391_23208;
var G__23241 = (i__22392_23209 + (1));
seq__22389_23206 = G__23238;
chunk__22390_23207 = G__23239;
count__22391_23208 = G__23240;
i__22392_23209 = G__23241;
continue;
} else {
var temp__5735__auto___23242 = cljs.core.seq(seq__22389_23206);
if(temp__5735__auto___23242){
var seq__22389_23243__$1 = temp__5735__auto___23242;
if(cljs.core.chunked_seq_QMARK_(seq__22389_23243__$1)){
var c__4556__auto___23244 = cljs.core.chunk_first(seq__22389_23243__$1);
var G__23245 = cljs.core.chunk_rest(seq__22389_23243__$1);
var G__23246 = c__4556__auto___23244;
var G__23247 = cljs.core.count(c__4556__auto___23244);
var G__23248 = (0);
seq__22389_23206 = G__23245;
chunk__22390_23207 = G__23246;
count__22391_23208 = G__23247;
i__22392_23209 = G__23248;
continue;
} else {
var vec__22474_23249 = cljs.core.first(seq__22389_23243__$1);
var line_23250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22474_23249,(0),null);
var cols_23251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22474_23249,(1),null);
var seq__22478_23252 = cljs.core.seq(cols_23251);
var chunk__22479_23253 = null;
var count__22480_23254 = (0);
var i__22481_23255 = (0);
while(true){
if((i__22481_23255 < count__22480_23254)){
var vec__22495_23256 = chunk__22479_23253.cljs$core$IIndexed$_nth$arity$2(null,i__22481_23255);
var col_23257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22495_23256,(0),null);
var infos_23258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22495_23256,(1),null);
encode_cols(infos_23258,source_idx_23202,line_23250,col_23257);


var G__23259 = seq__22478_23252;
var G__23260 = chunk__22479_23253;
var G__23261 = count__22480_23254;
var G__23262 = (i__22481_23255 + (1));
seq__22478_23252 = G__23259;
chunk__22479_23253 = G__23260;
count__22480_23254 = G__23261;
i__22481_23255 = G__23262;
continue;
} else {
var temp__5735__auto___23263__$1 = cljs.core.seq(seq__22478_23252);
if(temp__5735__auto___23263__$1){
var seq__22478_23264__$1 = temp__5735__auto___23263__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22478_23264__$1)){
var c__4556__auto___23265 = cljs.core.chunk_first(seq__22478_23264__$1);
var G__23266 = cljs.core.chunk_rest(seq__22478_23264__$1);
var G__23267 = c__4556__auto___23265;
var G__23268 = cljs.core.count(c__4556__auto___23265);
var G__23269 = (0);
seq__22478_23252 = G__23266;
chunk__22479_23253 = G__23267;
count__22480_23254 = G__23268;
i__22481_23255 = G__23269;
continue;
} else {
var vec__22500_23274 = cljs.core.first(seq__22478_23264__$1);
var col_23275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22500_23274,(0),null);
var infos_23276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22500_23274,(1),null);
encode_cols(infos_23276,source_idx_23202,line_23250,col_23275);


var G__23277 = cljs.core.next(seq__22478_23264__$1);
var G__23278 = null;
var G__23279 = (0);
var G__23280 = (0);
seq__22478_23252 = G__23277;
chunk__22479_23253 = G__23278;
count__22480_23254 = G__23279;
i__22481_23255 = G__23280;
continue;
}
} else {
}
}
break;
}


var G__23281 = cljs.core.next(seq__22389_23243__$1);
var G__23282 = null;
var G__23283 = (0);
var G__23284 = (0);
seq__22389_23206 = G__23281;
chunk__22390_23207 = G__23282;
count__22391_23208 = G__23283;
i__22392_23209 = G__23284;
continue;
}
} else {
}
}
break;
}


var G__23285 = seq__22162_23197;
var G__23286 = chunk__22163_23198;
var G__23287 = count__22164_23199;
var G__23288 = (i__22165_23200 + (1));
seq__22162_23197 = G__23285;
chunk__22163_23198 = G__23286;
count__22164_23199 = G__23287;
i__22165_23200 = G__23288;
continue;
} else {
var temp__5735__auto___23289 = cljs.core.seq(seq__22162_23197);
if(temp__5735__auto___23289){
var seq__22162_23290__$1 = temp__5735__auto___23289;
if(cljs.core.chunked_seq_QMARK_(seq__22162_23290__$1)){
var c__4556__auto___23291 = cljs.core.chunk_first(seq__22162_23290__$1);
var G__23292 = cljs.core.chunk_rest(seq__22162_23290__$1);
var G__23293 = c__4556__auto___23291;
var G__23294 = cljs.core.count(c__4556__auto___23291);
var G__23295 = (0);
seq__22162_23197 = G__23292;
chunk__22163_23198 = G__23293;
count__22164_23199 = G__23294;
i__22165_23200 = G__23295;
continue;
} else {
var vec__22503_23296 = cljs.core.first(seq__22162_23290__$1);
var source_idx_23297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22503_23296,(0),null);
var vec__22506_23298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22503_23296,(1),null);
var __23299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22506_23298,(0),null);
var lines_23300__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22506_23298,(1),null);
var seq__22509_23301 = cljs.core.seq(lines_23300__$1);
var chunk__22510_23302 = null;
var count__22511_23303 = (0);
var i__22512_23304 = (0);
while(true){
if((i__22512_23304 < count__22511_23303)){
var vec__22555_23305 = chunk__22510_23302.cljs$core$IIndexed$_nth$arity$2(null,i__22512_23304);
var line_23306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22555_23305,(0),null);
var cols_23307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22555_23305,(1),null);
var seq__22558_23309 = cljs.core.seq(cols_23307);
var chunk__22559_23310 = null;
var count__22560_23311 = (0);
var i__22561_23312 = (0);
while(true){
if((i__22561_23312 < count__22560_23311)){
var vec__22568_23316 = chunk__22559_23310.cljs$core$IIndexed$_nth$arity$2(null,i__22561_23312);
var col_23317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22568_23316,(0),null);
var infos_23318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22568_23316,(1),null);
encode_cols(infos_23318,source_idx_23297,line_23306,col_23317);


var G__23319 = seq__22558_23309;
var G__23320 = chunk__22559_23310;
var G__23321 = count__22560_23311;
var G__23322 = (i__22561_23312 + (1));
seq__22558_23309 = G__23319;
chunk__22559_23310 = G__23320;
count__22560_23311 = G__23321;
i__22561_23312 = G__23322;
continue;
} else {
var temp__5735__auto___23323__$1 = cljs.core.seq(seq__22558_23309);
if(temp__5735__auto___23323__$1){
var seq__22558_23324__$1 = temp__5735__auto___23323__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22558_23324__$1)){
var c__4556__auto___23325 = cljs.core.chunk_first(seq__22558_23324__$1);
var G__23326 = cljs.core.chunk_rest(seq__22558_23324__$1);
var G__23327 = c__4556__auto___23325;
var G__23328 = cljs.core.count(c__4556__auto___23325);
var G__23329 = (0);
seq__22558_23309 = G__23326;
chunk__22559_23310 = G__23327;
count__22560_23311 = G__23328;
i__22561_23312 = G__23329;
continue;
} else {
var vec__22571_23333 = cljs.core.first(seq__22558_23324__$1);
var col_23334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22571_23333,(0),null);
var infos_23335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22571_23333,(1),null);
encode_cols(infos_23335,source_idx_23297,line_23306,col_23334);


var G__23336 = cljs.core.next(seq__22558_23324__$1);
var G__23337 = null;
var G__23338 = (0);
var G__23339 = (0);
seq__22558_23309 = G__23336;
chunk__22559_23310 = G__23337;
count__22560_23311 = G__23338;
i__22561_23312 = G__23339;
continue;
}
} else {
}
}
break;
}


var G__23341 = seq__22509_23301;
var G__23342 = chunk__22510_23302;
var G__23343 = count__22511_23303;
var G__23344 = (i__22512_23304 + (1));
seq__22509_23301 = G__23341;
chunk__22510_23302 = G__23342;
count__22511_23303 = G__23343;
i__22512_23304 = G__23344;
continue;
} else {
var temp__5735__auto___23348__$1 = cljs.core.seq(seq__22509_23301);
if(temp__5735__auto___23348__$1){
var seq__22509_23349__$1 = temp__5735__auto___23348__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22509_23349__$1)){
var c__4556__auto___23350 = cljs.core.chunk_first(seq__22509_23349__$1);
var G__23351 = cljs.core.chunk_rest(seq__22509_23349__$1);
var G__23352 = c__4556__auto___23350;
var G__23353 = cljs.core.count(c__4556__auto___23350);
var G__23354 = (0);
seq__22509_23301 = G__23351;
chunk__22510_23302 = G__23352;
count__22511_23303 = G__23353;
i__22512_23304 = G__23354;
continue;
} else {
var vec__22574_23355 = cljs.core.first(seq__22509_23349__$1);
var line_23356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22574_23355,(0),null);
var cols_23357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22574_23355,(1),null);
var seq__22577_23359 = cljs.core.seq(cols_23357);
var chunk__22578_23360 = null;
var count__22579_23361 = (0);
var i__22580_23362 = (0);
while(true){
if((i__22580_23362 < count__22579_23361)){
var vec__22587_23363 = chunk__22578_23360.cljs$core$IIndexed$_nth$arity$2(null,i__22580_23362);
var col_23364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587_23363,(0),null);
var infos_23365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587_23363,(1),null);
encode_cols(infos_23365,source_idx_23297,line_23356,col_23364);


var G__23366 = seq__22577_23359;
var G__23367 = chunk__22578_23360;
var G__23368 = count__22579_23361;
var G__23369 = (i__22580_23362 + (1));
seq__22577_23359 = G__23366;
chunk__22578_23360 = G__23367;
count__22579_23361 = G__23368;
i__22580_23362 = G__23369;
continue;
} else {
var temp__5735__auto___23370__$2 = cljs.core.seq(seq__22577_23359);
if(temp__5735__auto___23370__$2){
var seq__22577_23371__$1 = temp__5735__auto___23370__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22577_23371__$1)){
var c__4556__auto___23372 = cljs.core.chunk_first(seq__22577_23371__$1);
var G__23373 = cljs.core.chunk_rest(seq__22577_23371__$1);
var G__23374 = c__4556__auto___23372;
var G__23375 = cljs.core.count(c__4556__auto___23372);
var G__23376 = (0);
seq__22577_23359 = G__23373;
chunk__22578_23360 = G__23374;
count__22579_23361 = G__23375;
i__22580_23362 = G__23376;
continue;
} else {
var vec__22590_23377 = cljs.core.first(seq__22577_23371__$1);
var col_23378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22590_23377,(0),null);
var infos_23379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22590_23377,(1),null);
encode_cols(infos_23379,source_idx_23297,line_23356,col_23378);


var G__23380 = cljs.core.next(seq__22577_23371__$1);
var G__23381 = null;
var G__23382 = (0);
var G__23383 = (0);
seq__22577_23359 = G__23380;
chunk__22578_23360 = G__23381;
count__22579_23361 = G__23382;
i__22580_23362 = G__23383;
continue;
}
} else {
}
}
break;
}


var G__23384 = cljs.core.next(seq__22509_23349__$1);
var G__23385 = null;
var G__23386 = (0);
var G__23387 = (0);
seq__22509_23301 = G__23384;
chunk__22510_23302 = G__23385;
count__22511_23303 = G__23386;
i__22512_23304 = G__23387;
continue;
}
} else {
}
}
break;
}


var G__23388 = cljs.core.next(seq__22162_23290__$1);
var G__23389 = null;
var G__23390 = (0);
var G__23391 = (0);
seq__22162_23197 = G__23388;
chunk__22163_23198 = G__23389;
count__22164_23199 = G__23390;
i__22165_23200 = G__23391;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22593 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22151_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22151_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22152_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22152_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22153_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22153_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__22594 = G__22593;
goog.object.set(G__22594,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22594;
} else {
return G__22593;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__22595 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22595,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22595,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__22598 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22598,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22598,(1),null);
var G__23392 = cljs.core.next(col_map_seq);
var G__23393 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__22598,col,infos,vec__22595,line,col_map){
return (function (v,p__22601){
var map__22602 = p__22601;
var map__22602__$1 = (((((!((map__22602 == null))))?(((((map__22602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22602):map__22602);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22602__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22602__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__22598,col,infos,vec__22595,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23392;
new_cols = G__23393;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23396 = cljs.core.next(line_map_seq);
var G__23397 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23396;
new_lines = G__23397;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__22604_23398 = cljs.core.seq(reverse_map);
var chunk__22605_23399 = null;
var count__22606_23400 = (0);
var i__22607_23401 = (0);
while(true){
if((i__22607_23401 < count__22606_23400)){
var vec__22771_23402 = chunk__22605_23399.cljs$core$IIndexed$_nth$arity$2(null,i__22607_23401);
var line_23403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22771_23402,(0),null);
var columns_23404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22771_23402,(1),null);
var seq__22774_23405 = cljs.core.seq(columns_23404);
var chunk__22775_23406 = null;
var count__22776_23407 = (0);
var i__22777_23408 = (0);
while(true){
if((i__22777_23408 < count__22776_23407)){
var vec__22821_23409 = chunk__22775_23406.cljs$core$IIndexed$_nth$arity$2(null,i__22777_23408);
var column_23410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22821_23409,(0),null);
var column_info_23411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22821_23409,(1),null);
var seq__22824_23412 = cljs.core.seq(column_info_23411);
var chunk__22825_23413 = null;
var count__22826_23414 = (0);
var i__22827_23415 = (0);
while(true){
if((i__22827_23415 < count__22826_23414)){
var map__22838_23416 = chunk__22825_23413.cljs$core$IIndexed$_nth$arity$2(null,i__22827_23415);
var map__22838_23417__$1 = (((((!((map__22838_23416 == null))))?(((((map__22838_23416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22838_23416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22838_23416):map__22838_23416);
var gline_23418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22838_23417__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22838_23417__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22838_23417__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23418], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22824_23412,chunk__22825_23413,count__22826_23414,i__22827_23415,seq__22774_23405,chunk__22775_23406,count__22776_23407,i__22777_23408,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__22838_23416,map__22838_23417__$1,gline_23418,gcol_23419,name_23420,vec__22821_23409,column_23410,column_info_23411,vec__22771_23402,line_23403,columns_23404,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23419], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23403,new cljs.core.Keyword(null,"col","col",-1959363084),column_23410,new cljs.core.Keyword(null,"name","name",1843675177),name_23420], null));
});})(seq__22824_23412,chunk__22825_23413,count__22826_23414,i__22827_23415,seq__22774_23405,chunk__22775_23406,count__22776_23407,i__22777_23408,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__22838_23416,map__22838_23417__$1,gline_23418,gcol_23419,name_23420,vec__22821_23409,column_23410,column_info_23411,vec__22771_23402,line_23403,columns_23404,inverted))
,cljs.core.sorted_map()));


var G__23423 = seq__22824_23412;
var G__23424 = chunk__22825_23413;
var G__23425 = count__22826_23414;
var G__23426 = (i__22827_23415 + (1));
seq__22824_23412 = G__23423;
chunk__22825_23413 = G__23424;
count__22826_23414 = G__23425;
i__22827_23415 = G__23426;
continue;
} else {
var temp__5735__auto___23427 = cljs.core.seq(seq__22824_23412);
if(temp__5735__auto___23427){
var seq__22824_23431__$1 = temp__5735__auto___23427;
if(cljs.core.chunked_seq_QMARK_(seq__22824_23431__$1)){
var c__4556__auto___23432 = cljs.core.chunk_first(seq__22824_23431__$1);
var G__23433 = cljs.core.chunk_rest(seq__22824_23431__$1);
var G__23434 = c__4556__auto___23432;
var G__23435 = cljs.core.count(c__4556__auto___23432);
var G__23436 = (0);
seq__22824_23412 = G__23433;
chunk__22825_23413 = G__23434;
count__22826_23414 = G__23435;
i__22827_23415 = G__23436;
continue;
} else {
var map__22864_23437 = cljs.core.first(seq__22824_23431__$1);
var map__22864_23438__$1 = (((((!((map__22864_23437 == null))))?(((((map__22864_23437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22864_23437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22864_23437):map__22864_23437);
var gline_23439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864_23438__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864_23438__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864_23438__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23439], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22824_23412,chunk__22825_23413,count__22826_23414,i__22827_23415,seq__22774_23405,chunk__22775_23406,count__22776_23407,i__22777_23408,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__22864_23437,map__22864_23438__$1,gline_23439,gcol_23440,name_23441,seq__22824_23431__$1,temp__5735__auto___23427,vec__22821_23409,column_23410,column_info_23411,vec__22771_23402,line_23403,columns_23404,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23440], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23403,new cljs.core.Keyword(null,"col","col",-1959363084),column_23410,new cljs.core.Keyword(null,"name","name",1843675177),name_23441], null));
});})(seq__22824_23412,chunk__22825_23413,count__22826_23414,i__22827_23415,seq__22774_23405,chunk__22775_23406,count__22776_23407,i__22777_23408,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__22864_23437,map__22864_23438__$1,gline_23439,gcol_23440,name_23441,seq__22824_23431__$1,temp__5735__auto___23427,vec__22821_23409,column_23410,column_info_23411,vec__22771_23402,line_23403,columns_23404,inverted))
,cljs.core.sorted_map()));


var G__23447 = cljs.core.next(seq__22824_23431__$1);
var G__23448 = null;
var G__23449 = (0);
var G__23450 = (0);
seq__22824_23412 = G__23447;
chunk__22825_23413 = G__23448;
count__22826_23414 = G__23449;
i__22827_23415 = G__23450;
continue;
}
} else {
}
}
break;
}


var G__23451 = seq__22774_23405;
var G__23452 = chunk__22775_23406;
var G__23453 = count__22776_23407;
var G__23454 = (i__22777_23408 + (1));
seq__22774_23405 = G__23451;
chunk__22775_23406 = G__23452;
count__22776_23407 = G__23453;
i__22777_23408 = G__23454;
continue;
} else {
var temp__5735__auto___23455 = cljs.core.seq(seq__22774_23405);
if(temp__5735__auto___23455){
var seq__22774_23456__$1 = temp__5735__auto___23455;
if(cljs.core.chunked_seq_QMARK_(seq__22774_23456__$1)){
var c__4556__auto___23457 = cljs.core.chunk_first(seq__22774_23456__$1);
var G__23458 = cljs.core.chunk_rest(seq__22774_23456__$1);
var G__23459 = c__4556__auto___23457;
var G__23460 = cljs.core.count(c__4556__auto___23457);
var G__23461 = (0);
seq__22774_23405 = G__23458;
chunk__22775_23406 = G__23459;
count__22776_23407 = G__23460;
i__22777_23408 = G__23461;
continue;
} else {
var vec__22868_23462 = cljs.core.first(seq__22774_23456__$1);
var column_23463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22868_23462,(0),null);
var column_info_23464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22868_23462,(1),null);
var seq__22871_23465 = cljs.core.seq(column_info_23464);
var chunk__22872_23466 = null;
var count__22873_23467 = (0);
var i__22874_23468 = (0);
while(true){
if((i__22874_23468 < count__22873_23467)){
var map__22881_23469 = chunk__22872_23466.cljs$core$IIndexed$_nth$arity$2(null,i__22874_23468);
var map__22881_23470__$1 = (((((!((map__22881_23469 == null))))?(((((map__22881_23469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22881_23469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22881_23469):map__22881_23469);
var gline_23471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881_23470__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881_23470__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881_23470__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23471], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22871_23465,chunk__22872_23466,count__22873_23467,i__22874_23468,seq__22774_23405,chunk__22775_23406,count__22776_23407,i__22777_23408,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__22881_23469,map__22881_23470__$1,gline_23471,gcol_23472,name_23473,vec__22868_23462,column_23463,column_info_23464,seq__22774_23456__$1,temp__5735__auto___23455,vec__22771_23402,line_23403,columns_23404,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23472], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23403,new cljs.core.Keyword(null,"col","col",-1959363084),column_23463,new cljs.core.Keyword(null,"name","name",1843675177),name_23473], null));
});})(seq__22871_23465,chunk__22872_23466,count__22873_23467,i__22874_23468,seq__22774_23405,chunk__22775_23406,count__22776_23407,i__22777_23408,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__22881_23469,map__22881_23470__$1,gline_23471,gcol_23472,name_23473,vec__22868_23462,column_23463,column_info_23464,seq__22774_23456__$1,temp__5735__auto___23455,vec__22771_23402,line_23403,columns_23404,inverted))
,cljs.core.sorted_map()));


var G__23474 = seq__22871_23465;
var G__23475 = chunk__22872_23466;
var G__23476 = count__22873_23467;
var G__23477 = (i__22874_23468 + (1));
seq__22871_23465 = G__23474;
chunk__22872_23466 = G__23475;
count__22873_23467 = G__23476;
i__22874_23468 = G__23477;
continue;
} else {
var temp__5735__auto___23478__$1 = cljs.core.seq(seq__22871_23465);
if(temp__5735__auto___23478__$1){
var seq__22871_23479__$1 = temp__5735__auto___23478__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22871_23479__$1)){
var c__4556__auto___23480 = cljs.core.chunk_first(seq__22871_23479__$1);
var G__23481 = cljs.core.chunk_rest(seq__22871_23479__$1);
var G__23482 = c__4556__auto___23480;
var G__23483 = cljs.core.count(c__4556__auto___23480);
var G__23484 = (0);
seq__22871_23465 = G__23481;
chunk__22872_23466 = G__23482;
count__22873_23467 = G__23483;
i__22874_23468 = G__23484;
continue;
} else {
var map__22894_23485 = cljs.core.first(seq__22871_23479__$1);
var map__22894_23486__$1 = (((((!((map__22894_23485 == null))))?(((((map__22894_23485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22894_23485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22894_23485):map__22894_23485);
var gline_23487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22894_23486__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22894_23486__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22894_23486__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23487], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22871_23465,chunk__22872_23466,count__22873_23467,i__22874_23468,seq__22774_23405,chunk__22775_23406,count__22776_23407,i__22777_23408,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__22894_23485,map__22894_23486__$1,gline_23487,gcol_23488,name_23489,seq__22871_23479__$1,temp__5735__auto___23478__$1,vec__22868_23462,column_23463,column_info_23464,seq__22774_23456__$1,temp__5735__auto___23455,vec__22771_23402,line_23403,columns_23404,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23488], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23403,new cljs.core.Keyword(null,"col","col",-1959363084),column_23463,new cljs.core.Keyword(null,"name","name",1843675177),name_23489], null));
});})(seq__22871_23465,chunk__22872_23466,count__22873_23467,i__22874_23468,seq__22774_23405,chunk__22775_23406,count__22776_23407,i__22777_23408,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__22894_23485,map__22894_23486__$1,gline_23487,gcol_23488,name_23489,seq__22871_23479__$1,temp__5735__auto___23478__$1,vec__22868_23462,column_23463,column_info_23464,seq__22774_23456__$1,temp__5735__auto___23455,vec__22771_23402,line_23403,columns_23404,inverted))
,cljs.core.sorted_map()));


var G__23490 = cljs.core.next(seq__22871_23479__$1);
var G__23491 = null;
var G__23492 = (0);
var G__23493 = (0);
seq__22871_23465 = G__23490;
chunk__22872_23466 = G__23491;
count__22873_23467 = G__23492;
i__22874_23468 = G__23493;
continue;
}
} else {
}
}
break;
}


var G__23494 = cljs.core.next(seq__22774_23456__$1);
var G__23495 = null;
var G__23496 = (0);
var G__23497 = (0);
seq__22774_23405 = G__23494;
chunk__22775_23406 = G__23495;
count__22776_23407 = G__23496;
i__22777_23408 = G__23497;
continue;
}
} else {
}
}
break;
}


var G__23498 = seq__22604_23398;
var G__23499 = chunk__22605_23399;
var G__23500 = count__22606_23400;
var G__23501 = (i__22607_23401 + (1));
seq__22604_23398 = G__23498;
chunk__22605_23399 = G__23499;
count__22606_23400 = G__23500;
i__22607_23401 = G__23501;
continue;
} else {
var temp__5735__auto___23502 = cljs.core.seq(seq__22604_23398);
if(temp__5735__auto___23502){
var seq__22604_23503__$1 = temp__5735__auto___23502;
if(cljs.core.chunked_seq_QMARK_(seq__22604_23503__$1)){
var c__4556__auto___23504 = cljs.core.chunk_first(seq__22604_23503__$1);
var G__23505 = cljs.core.chunk_rest(seq__22604_23503__$1);
var G__23506 = c__4556__auto___23504;
var G__23507 = cljs.core.count(c__4556__auto___23504);
var G__23508 = (0);
seq__22604_23398 = G__23505;
chunk__22605_23399 = G__23506;
count__22606_23400 = G__23507;
i__22607_23401 = G__23508;
continue;
} else {
var vec__22906_23509 = cljs.core.first(seq__22604_23503__$1);
var line_23510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22906_23509,(0),null);
var columns_23511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22906_23509,(1),null);
var seq__22909_23512 = cljs.core.seq(columns_23511);
var chunk__22910_23513 = null;
var count__22911_23514 = (0);
var i__22912_23515 = (0);
while(true){
if((i__22912_23515 < count__22911_23514)){
var vec__23010_23516 = chunk__22910_23513.cljs$core$IIndexed$_nth$arity$2(null,i__22912_23515);
var column_23517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23010_23516,(0),null);
var column_info_23518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23010_23516,(1),null);
var seq__23013_23519 = cljs.core.seq(column_info_23518);
var chunk__23014_23520 = null;
var count__23015_23521 = (0);
var i__23016_23522 = (0);
while(true){
if((i__23016_23522 < count__23015_23521)){
var map__23042_23523 = chunk__23014_23520.cljs$core$IIndexed$_nth$arity$2(null,i__23016_23522);
var map__23042_23524__$1 = (((((!((map__23042_23523 == null))))?(((((map__23042_23523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23042_23523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23042_23523):map__23042_23523);
var gline_23525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23042_23524__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23042_23524__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23042_23524__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23525], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23013_23519,chunk__23014_23520,count__23015_23521,i__23016_23522,seq__22909_23512,chunk__22910_23513,count__22911_23514,i__22912_23515,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__23042_23523,map__23042_23524__$1,gline_23525,gcol_23526,name_23527,vec__23010_23516,column_23517,column_info_23518,vec__22906_23509,line_23510,columns_23511,seq__22604_23503__$1,temp__5735__auto___23502,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23526], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23510,new cljs.core.Keyword(null,"col","col",-1959363084),column_23517,new cljs.core.Keyword(null,"name","name",1843675177),name_23527], null));
});})(seq__23013_23519,chunk__23014_23520,count__23015_23521,i__23016_23522,seq__22909_23512,chunk__22910_23513,count__22911_23514,i__22912_23515,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__23042_23523,map__23042_23524__$1,gline_23525,gcol_23526,name_23527,vec__23010_23516,column_23517,column_info_23518,vec__22906_23509,line_23510,columns_23511,seq__22604_23503__$1,temp__5735__auto___23502,inverted))
,cljs.core.sorted_map()));


var G__23528 = seq__23013_23519;
var G__23529 = chunk__23014_23520;
var G__23530 = count__23015_23521;
var G__23531 = (i__23016_23522 + (1));
seq__23013_23519 = G__23528;
chunk__23014_23520 = G__23529;
count__23015_23521 = G__23530;
i__23016_23522 = G__23531;
continue;
} else {
var temp__5735__auto___23532__$1 = cljs.core.seq(seq__23013_23519);
if(temp__5735__auto___23532__$1){
var seq__23013_23533__$1 = temp__5735__auto___23532__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23013_23533__$1)){
var c__4556__auto___23534 = cljs.core.chunk_first(seq__23013_23533__$1);
var G__23535 = cljs.core.chunk_rest(seq__23013_23533__$1);
var G__23536 = c__4556__auto___23534;
var G__23537 = cljs.core.count(c__4556__auto___23534);
var G__23538 = (0);
seq__23013_23519 = G__23535;
chunk__23014_23520 = G__23536;
count__23015_23521 = G__23537;
i__23016_23522 = G__23538;
continue;
} else {
var map__23044_23539 = cljs.core.first(seq__23013_23533__$1);
var map__23044_23540__$1 = (((((!((map__23044_23539 == null))))?(((((map__23044_23539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23044_23539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23044_23539):map__23044_23539);
var gline_23541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23044_23540__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23044_23540__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23044_23540__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23541], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23013_23519,chunk__23014_23520,count__23015_23521,i__23016_23522,seq__22909_23512,chunk__22910_23513,count__22911_23514,i__22912_23515,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__23044_23539,map__23044_23540__$1,gline_23541,gcol_23542,name_23543,seq__23013_23533__$1,temp__5735__auto___23532__$1,vec__23010_23516,column_23517,column_info_23518,vec__22906_23509,line_23510,columns_23511,seq__22604_23503__$1,temp__5735__auto___23502,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23542], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23510,new cljs.core.Keyword(null,"col","col",-1959363084),column_23517,new cljs.core.Keyword(null,"name","name",1843675177),name_23543], null));
});})(seq__23013_23519,chunk__23014_23520,count__23015_23521,i__23016_23522,seq__22909_23512,chunk__22910_23513,count__22911_23514,i__22912_23515,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__23044_23539,map__23044_23540__$1,gline_23541,gcol_23542,name_23543,seq__23013_23533__$1,temp__5735__auto___23532__$1,vec__23010_23516,column_23517,column_info_23518,vec__22906_23509,line_23510,columns_23511,seq__22604_23503__$1,temp__5735__auto___23502,inverted))
,cljs.core.sorted_map()));


var G__23548 = cljs.core.next(seq__23013_23533__$1);
var G__23549 = null;
var G__23550 = (0);
var G__23551 = (0);
seq__23013_23519 = G__23548;
chunk__23014_23520 = G__23549;
count__23015_23521 = G__23550;
i__23016_23522 = G__23551;
continue;
}
} else {
}
}
break;
}


var G__23553 = seq__22909_23512;
var G__23554 = chunk__22910_23513;
var G__23555 = count__22911_23514;
var G__23556 = (i__22912_23515 + (1));
seq__22909_23512 = G__23553;
chunk__22910_23513 = G__23554;
count__22911_23514 = G__23555;
i__22912_23515 = G__23556;
continue;
} else {
var temp__5735__auto___23560__$1 = cljs.core.seq(seq__22909_23512);
if(temp__5735__auto___23560__$1){
var seq__22909_23561__$1 = temp__5735__auto___23560__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22909_23561__$1)){
var c__4556__auto___23562 = cljs.core.chunk_first(seq__22909_23561__$1);
var G__23563 = cljs.core.chunk_rest(seq__22909_23561__$1);
var G__23564 = c__4556__auto___23562;
var G__23565 = cljs.core.count(c__4556__auto___23562);
var G__23566 = (0);
seq__22909_23512 = G__23563;
chunk__22910_23513 = G__23564;
count__22911_23514 = G__23565;
i__22912_23515 = G__23566;
continue;
} else {
var vec__23046_23567 = cljs.core.first(seq__22909_23561__$1);
var column_23568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23046_23567,(0),null);
var column_info_23569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23046_23567,(1),null);
var seq__23049_23570 = cljs.core.seq(column_info_23569);
var chunk__23050_23571 = null;
var count__23051_23572 = (0);
var i__23052_23573 = (0);
while(true){
if((i__23052_23573 < count__23051_23572)){
var map__23065_23575 = chunk__23050_23571.cljs$core$IIndexed$_nth$arity$2(null,i__23052_23573);
var map__23065_23576__$1 = (((((!((map__23065_23575 == null))))?(((((map__23065_23575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23065_23575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23065_23575):map__23065_23575);
var gline_23577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23065_23576__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23065_23576__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23065_23576__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23577], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23049_23570,chunk__23050_23571,count__23051_23572,i__23052_23573,seq__22909_23512,chunk__22910_23513,count__22911_23514,i__22912_23515,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__23065_23575,map__23065_23576__$1,gline_23577,gcol_23578,name_23579,vec__23046_23567,column_23568,column_info_23569,seq__22909_23561__$1,temp__5735__auto___23560__$1,vec__22906_23509,line_23510,columns_23511,seq__22604_23503__$1,temp__5735__auto___23502,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23578], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23510,new cljs.core.Keyword(null,"col","col",-1959363084),column_23568,new cljs.core.Keyword(null,"name","name",1843675177),name_23579], null));
});})(seq__23049_23570,chunk__23050_23571,count__23051_23572,i__23052_23573,seq__22909_23512,chunk__22910_23513,count__22911_23514,i__22912_23515,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__23065_23575,map__23065_23576__$1,gline_23577,gcol_23578,name_23579,vec__23046_23567,column_23568,column_info_23569,seq__22909_23561__$1,temp__5735__auto___23560__$1,vec__22906_23509,line_23510,columns_23511,seq__22604_23503__$1,temp__5735__auto___23502,inverted))
,cljs.core.sorted_map()));


var G__23586 = seq__23049_23570;
var G__23587 = chunk__23050_23571;
var G__23588 = count__23051_23572;
var G__23589 = (i__23052_23573 + (1));
seq__23049_23570 = G__23586;
chunk__23050_23571 = G__23587;
count__23051_23572 = G__23588;
i__23052_23573 = G__23589;
continue;
} else {
var temp__5735__auto___23592__$2 = cljs.core.seq(seq__23049_23570);
if(temp__5735__auto___23592__$2){
var seq__23049_23593__$1 = temp__5735__auto___23592__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23049_23593__$1)){
var c__4556__auto___23594 = cljs.core.chunk_first(seq__23049_23593__$1);
var G__23595 = cljs.core.chunk_rest(seq__23049_23593__$1);
var G__23596 = c__4556__auto___23594;
var G__23597 = cljs.core.count(c__4556__auto___23594);
var G__23598 = (0);
seq__23049_23570 = G__23595;
chunk__23050_23571 = G__23596;
count__23051_23572 = G__23597;
i__23052_23573 = G__23598;
continue;
} else {
var map__23067_23599 = cljs.core.first(seq__23049_23593__$1);
var map__23067_23600__$1 = (((((!((map__23067_23599 == null))))?(((((map__23067_23599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23067_23599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23067_23599):map__23067_23599);
var gline_23601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23067_23600__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23067_23600__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23067_23600__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23601], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23049_23570,chunk__23050_23571,count__23051_23572,i__23052_23573,seq__22909_23512,chunk__22910_23513,count__22911_23514,i__22912_23515,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__23067_23599,map__23067_23600__$1,gline_23601,gcol_23602,name_23603,seq__23049_23593__$1,temp__5735__auto___23592__$2,vec__23046_23567,column_23568,column_info_23569,seq__22909_23561__$1,temp__5735__auto___23560__$1,vec__22906_23509,line_23510,columns_23511,seq__22604_23503__$1,temp__5735__auto___23502,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23602], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23510,new cljs.core.Keyword(null,"col","col",-1959363084),column_23568,new cljs.core.Keyword(null,"name","name",1843675177),name_23603], null));
});})(seq__23049_23570,chunk__23050_23571,count__23051_23572,i__23052_23573,seq__22909_23512,chunk__22910_23513,count__22911_23514,i__22912_23515,seq__22604_23398,chunk__22605_23399,count__22606_23400,i__22607_23401,map__23067_23599,map__23067_23600__$1,gline_23601,gcol_23602,name_23603,seq__23049_23593__$1,temp__5735__auto___23592__$2,vec__23046_23567,column_23568,column_info_23569,seq__22909_23561__$1,temp__5735__auto___23560__$1,vec__22906_23509,line_23510,columns_23511,seq__22604_23503__$1,temp__5735__auto___23502,inverted))
,cljs.core.sorted_map()));


var G__23604 = cljs.core.next(seq__23049_23593__$1);
var G__23605 = null;
var G__23606 = (0);
var G__23607 = (0);
seq__23049_23570 = G__23604;
chunk__23050_23571 = G__23605;
count__23051_23572 = G__23606;
i__23052_23573 = G__23607;
continue;
}
} else {
}
}
break;
}


var G__23608 = cljs.core.next(seq__22909_23561__$1);
var G__23609 = null;
var G__23610 = (0);
var G__23611 = (0);
seq__22909_23512 = G__23608;
chunk__22910_23513 = G__23609;
count__22911_23514 = G__23610;
i__22912_23515 = G__23611;
continue;
}
} else {
}
}
break;
}


var G__23612 = cljs.core.next(seq__22604_23503__$1);
var G__23613 = null;
var G__23614 = (0);
var G__23615 = (0);
seq__22604_23398 = G__23612;
chunk__22605_23399 = G__23613;
count__22606_23400 = G__23614;
i__22607_23401 = G__23615;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
