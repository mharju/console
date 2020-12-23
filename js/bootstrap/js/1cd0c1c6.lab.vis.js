goog.provide('lab.vis');
lab.vis.data_set = (function lab$vis$data_set(data){
return (new module$node_modules$vis_data$esnext$index.DataSet(cljs.core.clj__GT_js(data)));
});
lab.vis.update_BANG_ = (function lab$vis$update_BANG_(view,nodes,edges){
var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"vis","vis",1600557322)], null));
var js_nodes = lab.vis.data_set(nodes);
var js_edges = lab.vis.data_set(edges);
var data = ({"nodes": js_nodes, "edges": js_edges});
return v.setData(data);
});
lab.vis.set_items_BANG_ = (function lab$vis$set_items_BANG_(view,items){
var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"vis","vis",1600557322)], null));
var items__$1 = lab.vis.data_set(items);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.components,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"vis-ds","vis-ds",-311296733)], null),items__$1);

return v.setItems(items__$1);
});
lab.vis.set_groups_BANG_ = (function lab$vis$set_groups_BANG_(view,groups){
var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"vis","vis",1600557322)], null));
var groups__$1 = lab.vis.data_set(groups);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.components,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"vis-groups","vis-groups",643145298)], null),groups__$1);

return v.setGroups(groups__$1);
});
lab.vis.append_item_BANG_ = (function lab$vis$append_item_BANG_(view,item){
var items = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"vis-ds","vis-ds",-311296733)], null));
return items.add(cljs.core.clj__GT_js(item));
});
lab.vis._STAR_default_opts_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"gray",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"black",new cljs.core.Keyword(null,"background","background",-863952629),"white"], null)], null),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"shapeProperties","shapeProperties",-1650765055),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(0)], null),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(10),new cljs.core.Keyword(null,"right","right",-452581833),(15),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(7),new cljs.core.Keyword(null,"left","left",-399115937),(15)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),"Menlo, Courier, Monospace",new cljs.core.Keyword(null,"size","size",1098693007),(11)], null)], null),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arrows","arrows",-1209622014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),true], null)], null)], null);
lab.vis.vis_BANG_ = (function lab$vis$vis_BANG_(var_args){
var G__26707 = arguments.length;
switch (G__26707) {
case 3:
return lab.vis.vis_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lab.vis.vis_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.vis.vis_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (view,nodes,edges){
return lab.vis.vis_BANG_.cljs$core$IFn$_invoke$arity$4(view,nodes,edges,lab.vis._STAR_default_opts_STAR_);
}));

(lab.vis.vis_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (view,nodes,edges,options){
lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"vis","vis",1600557322));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.components,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"vis","vis",1600557322)], null),(new module$node_modules$vis_network$esnext$index.Network(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),view).querySelector(".vis"),(function (){var obj26709 = ({"nodes":lab.vis.data_set(nodes),"edges":lab.vis.data_set(edges)});
return obj26709;
})(),cljs.core.clj__GT_js(options))));
}));

(lab.vis.vis_BANG_.cljs$lang$maxFixedArity = 4);

lab.vis.timeline_BANG_ = (function lab$vis$timeline_BANG_(var_args){
var G__26711 = arguments.length;
switch (G__26711) {
case 2:
return lab.vis.timeline_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lab.vis.timeline_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.vis.timeline_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (view,items){
return lab.vis.timeline_BANG_.cljs$core$IFn$_invoke$arity$3(view,items,cljs.core.PersistentArrayMap.EMPTY);
}));

(lab.vis.timeline_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (view,items,options){
lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"vis","vis",1600557322));

var items__$1 = lab.vis.data_set(items);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lab.views.components,cljs.core.update,view,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vis","vis",1600557322),(new module$node_modules$vis_timeline$esnext$index.Timeline(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),view).querySelector(".vis"),items__$1,cljs.core.clj__GT_js(options))),new cljs.core.Keyword(null,"vis-ds","vis-ds",-311296733),items__$1], 0));
}));

(lab.vis.timeline_BANG_.cljs$lang$maxFixedArity = 3);

lab.vis.grouped_timeline_BANG_ = (function lab$vis$grouped_timeline_BANG_(var_args){
var G__26713 = arguments.length;
switch (G__26713) {
case 3:
return lab.vis.grouped_timeline_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lab.vis.grouped_timeline_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.vis.grouped_timeline_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (view,items,groups){
return lab.vis.grouped_timeline_BANG_.cljs$core$IFn$_invoke$arity$4(view,items,groups,cljs.core.PersistentArrayMap.EMPTY);
}));

(lab.vis.grouped_timeline_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (view,items,groups,options){
lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"vis","vis",1600557322));

var items__$1 = lab.vis.data_set(items);
var groups__$1 = lab.vis.data_set(groups);
var c = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"vis","vis",1600557322)], null));
if(cljs.core.truth_(c)){
c.destroy();
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lab.views.components,cljs.core.update,view,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vis","vis",1600557322),(new module$node_modules$vis_timeline$esnext$index.Timeline(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),view).querySelector(".vis"),items__$1,groups__$1,cljs.core.clj__GT_js(options))),new cljs.core.Keyword(null,"vis-ds","vis-ds",-311296733),items__$1,new cljs.core.Keyword(null,"vis-groups","vis-groups",643145298),groups__$1], 0));
}));

(lab.vis.grouped_timeline_BANG_.cljs$lang$maxFixedArity = 4);

lab.vis.invalidate_size_BANG_ = (function lab$vis$invalidate_size_BANG_(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function lab$vis$invalidate_size_BANG__$_iter__26716(s__26717){
return (new cljs.core.LazySeq(null,(function (){
var s__26717__$1 = s__26717;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26717__$1);
if(temp__5735__auto__){
var s__26717__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26717__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26717__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26719 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26718 = (0);
while(true){
if((i__26718 < size__4528__auto__)){
var vec__26720 = cljs.core._nth(c__4527__auto__,i__26718);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26720,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26720,(1),null);
var map__26723 = v;
var map__26723__$1 = (((((!((map__26723 == null))))?(((((map__26723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26723):map__26723);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26723__$1,new cljs.core.Keyword(null,"vis","vis",1600557322));
var p = document.getElementById(cljs.core.name(k));
var width = goog.object.get(p,"clientWidth");
var height = goog.object.get(p,"clientHeight");
if((!((g == null)))){
cljs.core.chunk_append(b__26719,(function (){
g.setSize(width,height);

return g.redraw();
})()
);

var G__26736 = (i__26718 + (1));
i__26718 = G__26736;
continue;
} else {
var G__26737 = (i__26718 + (1));
i__26718 = G__26737;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26719),lab$vis$invalidate_size_BANG__$_iter__26716(cljs.core.chunk_rest(s__26717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26719),null);
}
} else {
var vec__26725 = cljs.core.first(s__26717__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26725,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26725,(1),null);
var map__26728 = v;
var map__26728__$1 = (((((!((map__26728 == null))))?(((((map__26728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26728):map__26728);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26728__$1,new cljs.core.Keyword(null,"vis","vis",1600557322));
var p = document.getElementById(cljs.core.name(k));
var width = goog.object.get(p,"clientWidth");
var height = goog.object.get(p,"clientHeight");
if((!((g == null)))){
return cljs.core.cons((function (){
g.setSize(width,height);

return g.redraw();
})()
,lab$vis$invalidate_size_BANG__$_iter__26716(cljs.core.rest(s__26717__$2)));
} else {
var G__26738 = cljs.core.rest(s__26717__$2);
s__26717__$1 = G__26738;
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
lab.layout.register_handler_BANG_(lab.vis.invalidate_size_BANG_);
