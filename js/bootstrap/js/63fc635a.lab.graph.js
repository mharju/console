goog.provide('lab.graph');
lab.graph.color_pattern = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#0cc2aa","#fcc100","#a88add"], null)], null);
/**
 * Convert rows of data to columnar format. Handy if you should want pie charts out of JSON.
 * 
 *   Example:
 *   (g/columnize [{:type :foo :value 1} {:type :bar :value 2}] :type :value)
 */
lab.graph.columnize = (function lab$graph$columnize(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26654 = arguments.length;
var i__4737__auto___26655 = (0);
while(true){
if((i__4737__auto___26655 < len__4736__auto___26654)){
args__4742__auto__.push((arguments[i__4737__auto___26655]));

var G__26656 = (i__4737__auto___26655 + (1));
i__4737__auto___26655 = G__26656;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return lab.graph.columnize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(lab.graph.columnize.cljs$core$IFn$_invoke$arity$variadic = (function (data,column,value,p__26583){
var map__26584 = p__26583;
var map__26584__$1 = (((((!((map__26584 == null))))?(((((map__26584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26584):map__26584);
var x_axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26584__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__26586){
var vec__26587 = p__26586;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26587,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26587,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (columns,row){
var G__26596 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(columns,cljs.core.name((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,column);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return column;
}
})()),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,value));
if(cljs.core.truth_(x_axis)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__26596,cljs.core.name(x_axis),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,x_axis));
} else {
return G__26596;
}
}),cljs.core.PersistentArrayMap.EMPTY,data));
}));

(lab.graph.columnize.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(lab.graph.columnize.cljs$lang$applyTo = (function (seq26576){
var G__26577 = cljs.core.first(seq26576);
var seq26576__$1 = cljs.core.next(seq26576);
var G__26578 = cljs.core.first(seq26576__$1);
var seq26576__$2 = cljs.core.next(seq26576__$1);
var G__26579 = cljs.core.first(seq26576__$2);
var seq26576__$3 = cljs.core.next(seq26576__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26577,G__26578,G__26579,seq26576__$3);
}));

/**
 * Generate a graph with C3.js. By default contains a default color pattern and binding to the view's graph container.
 * 
 *   Example:
 *   (g/graph! :view {:data {:columns [["data" 1 2 3 4 3 2 1]]}})
 *   (g/graph! :view {:data {:columns (g/columnize [{:type :foo :value 1} {:type :bar :value 2}] :type :value) :type :pie}})
 */
lab.graph.graph_BANG_ = (function lab$graph$graph_BANG_(view,opts){
lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"graph","graph",1558099509));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.components,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"graph","graph",1558099509)], null),module$node_modules$c3$c3.generate(cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindto","bindto",583512213),["#",cljs.core.name(view)," .graph"].join(''),new cljs.core.Keyword(null,"color","color",1011675173),lab.graph.color_pattern,new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),(30),new cljs.core.Keyword(null,"left","left",-399115937),(60),new cljs.core.Keyword(null,"right","right",-452581833),(60)], null)], null),opts], 0)))));
});
lab.graph.invalidate_size_BANG_ = (function lab$graph$invalidate_size_BANG_(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function lab$graph$invalidate_size_BANG__$_iter__26601(s__26602){
return (new cljs.core.LazySeq(null,(function (){
var s__26602__$1 = s__26602;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26602__$1);
if(temp__5735__auto__){
var s__26602__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26602__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26602__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26604 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26603 = (0);
while(true){
if((i__26603 < size__4528__auto__)){
var vec__26608 = cljs.core._nth(c__4527__auto__,i__26603);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26608,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26608,(1),null);
var map__26611 = v;
var map__26611__$1 = (((((!((map__26611 == null))))?(((((map__26611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26611):map__26611);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26611__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var p = document.getElementById(cljs.core.name(k));
var width = goog.object.get(p,"clientWidth");
var height = goog.object.get(p,"clientHeight");
if((!((g == null)))){
cljs.core.chunk_append(b__26604,(function (){
g.resize(({"width": width, "height": height}));

return g.flush();
})()
);

var G__26659 = (i__26603 + (1));
i__26603 = G__26659;
continue;
} else {
var G__26660 = (i__26603 + (1));
i__26603 = G__26660;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26604),lab$graph$invalidate_size_BANG__$_iter__26601(cljs.core.chunk_rest(s__26602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26604),null);
}
} else {
var vec__26613 = cljs.core.first(s__26602__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26613,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26613,(1),null);
var map__26629 = v;
var map__26629__$1 = (((((!((map__26629 == null))))?(((((map__26629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26629):map__26629);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26629__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var p = document.getElementById(cljs.core.name(k));
var width = goog.object.get(p,"clientWidth");
var height = goog.object.get(p,"clientHeight");
if((!((g == null)))){
return cljs.core.cons((function (){
g.resize(({"width": width, "height": height}));

return g.flush();
})()
,lab$graph$invalidate_size_BANG__$_iter__26601(cljs.core.rest(s__26602__$2)));
} else {
var G__26671 = cljs.core.rest(s__26602__$2);
s__26602__$1 = G__26671;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(lab.views.components));
})());
});
lab.layout.register_handler_BANG_(lab.graph.invalidate_size_BANG_);
/**
 * Load data into existing graph in view.
 * 
 *   Example:
 *   (g/load! :view {:data {:columns ["data" 2 3 4 5 6]}})
 */
lab.graph.load_BANG_ = (function lab$graph$load_BANG_(view,opts){
var graph = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"graph","graph",1558099509)], null));
return graph.load(cljs.core.clj__GT_js(opts));
});
/**
 * Flow data into existing graph in view.
 * 
 *   Example:
 *   (g/flow! :view {:columns [["x" 8 9 10 11 12 13] ["data" 1 3 4 5 6 7]]}})
 */
lab.graph.flow_BANG_ = (function lab$graph$flow_BANG_(view,opts){
var graph = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"graph","graph",1558099509)], null));
return graph.flow(cljs.core.clj__GT_js(opts));
});
/**
 * Simple plot generated from `data` using the `y` and `x` as key
 *   to retrieve the y axis with an optional x-axis parameter.
 */
lab.graph.simple_BANG_ = (function lab$graph$simple_BANG_(var_args){
var G__26633 = arguments.length;
switch (G__26633) {
case 3:
return lab.graph.simple_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lab.graph.simple_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.graph.simple_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (view,data,y){
return lab.graph.simple_BANG_.cljs$core$IFn$_invoke$arity$4(view,data,null,y);
}));

(lab.graph.simple_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (view,data,x,y){
return lab.graph.graph_BANG_(new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(cljs.core.truth_(x)?new cljs.core.PersistentArrayMap(null, 1, ["data","x"], null):null),new cljs.core.Keyword(null,"columns","columns",1998437288),lab.graph.columnize.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"data","data",-232669377),y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),x], 0))], null)], null));
}));

(lab.graph.simple_BANG_.cljs$lang$maxFixedArity = 4);

lab.graph.__GT_freqs_columns = (function lab$graph$__GT_freqs_columns(data,k){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.val),cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(k,data))));
});
lab.graph.frequencies_BANG_ = (function lab$graph$frequencies_BANG_(view,data,k){
return lab.graph.graph_BANG_(view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),lab.graph.__GT_freqs_columns(data,k),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bar","bar",-1386246584)], null)], null));
});
