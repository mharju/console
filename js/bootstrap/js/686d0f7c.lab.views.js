goog.provide('lab.views');
lab.views.views = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
lab.views.view_info = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
lab.views.components = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
lab.views.find_end = (function lab$views$find_end(start,size,defs){
if(((((0) <= (start - (1)))) && (((start - (1)) <= (cljs.core.count(defs) - (1)))))){
var end = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__26214,cumulative_SINGLEQUOTE_){
var map__26215 = p__26214;
var map__26215__$1 = (((((!((map__26215 == null))))?(((((map__26215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26215):map__26215);
var acc = map__26215__$1;
var cumulative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26215__$1,new cljs.core.Keyword(null,"cumulative","cumulative",-1602244157));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26215__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(((cumulative + cumulative_SINGLEQUOTE_) >= size)){
return cljs.core.reduced(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),index], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"cumulative","cumulative",-1602244157),cljs.core._PLUS_,cumulative_SINGLEQUOTE_),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.inc);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cumulative","cumulative",-1602244157),(0),new cljs.core.Keyword(null,"index","index",-1531685915),(1)], null),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(defs,(start - (1)))));
if(cljs.core.truth_(end)){
return (start + end);
} else {
return null;
}
} else {
return null;
}
});
lab.views.need_new_def_QMARK_ = (function lab$views$need_new_def_QMARK_(col_index,original_size,new_size,defs){
var end_old = (lab.views.find_end((col_index + (1)),original_size,defs) - (1));
var temp__5733__auto__ = ((((((col_index + end_old) <= cljs.core.count(defs))) && (((2) <= (end_old - col_index)))))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(defs,col_index,end_old):null);
if(cljs.core.truth_(temp__5733__auto__)){
var usable_columns = temp__5733__auto__;
var a = lab.views.find_end((1),new_size,usable_columns);
var b = lab.views.find_end(a,new_size,usable_columns);
return cljs.core.not((function (){var and__4115__auto__ = a;
if(cljs.core.truth_(and__4115__auto__)){
return b;
} else {
return and__4115__auto__;
}
})());
} else {
return true;
}
});
lab.views.split_BANG_ = (function lab$views$split_BANG_(id,after,def_key,p__26221){
var map__26222 = p__26221;
var map__26222__$1 = (((((!((map__26222 == null))))?(((((map__26222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26222):map__26222);
var data = map__26222__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26222__$1,new cljs.core.Keyword(null,"views","views",1450155487));
if(cljs.core.empty_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null),new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null)], null);
} else {
var defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,def_key);
var index = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__26231){
var map__26232 = p__26231;
var map__26232__$1 = (((((!((map__26232 == null))))?(((((map__26232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26232):map__26232);
var id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26232__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(after,id_SINGLEQUOTE_)){
return i;
} else {
return null;
}
}),views)));
var map__26224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(views,index);
var map__26224__$1 = (((((!((map__26224 == null))))?(((((map__26224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26224):map__26224);
var sibling = map__26224__$1;
var vec__26225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26224__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26225,(0),null);
var size_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26225,(1),null);
var vec__26228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26224__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26228,(0),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26228,(1),null);
var col_index = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?start_row:start_col) - (1));
var original_size = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?size_row:size_col);
var new_size = (original_size / (2));
var new_size_def = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size_col,new_size], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_size,size_row], null));
var create_def_QMARK_ = lab.views.need_new_def_QMARK_(col_index,original_size,new_size,defs);
var col_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(defs,col_index);
var new_col_def = (col_def / (2));
var col_defs = ((create_def_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(defs,(0),col_index),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_col_def,new_col_def], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(defs,(col_index + (1)))], 0))):defs);
var move_if_needed = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p__26236){
var map__26237 = p__26236;
var map__26237__$1 = (((((!((map__26237 == null))))?(((((map__26237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26237):map__26237);
var v = map__26237__$1;
var vec__26238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26237__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26238,(0),null);
var vr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26238,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"start","start",-355208981),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vc,(((start_row < vr))?(vr + (1)):vr)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((start_col < vc))?(vc + (1)):vc),vr], null)));
}));
var views__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(views,(0),index),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sibling,new cljs.core.Keyword(null,"size","size",1098693007),new_size_def),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"start","start",-355208981),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_col,lab.views.find_end((col_index + (1)),new_size,defs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lab.views.find_end((col_index + (1)),new_size,defs),start_row], null)),new cljs.core.Keyword(null,"size","size",1098693007),new_size_def], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__26242 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(views,(index + (1)));
if(create_def_QMARK_){
return move_if_needed(G__26242);
} else {
return G__26242;
}
})()], 0)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,def_key,col_defs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"views","views",1450155487),views__$1], 0));
}
});
lab.views.find_view_info = (function lab$views$find_view_info(var_args){
var G__26245 = arguments.length;
switch (G__26245) {
case 1:
return lab.views.find_view_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lab.views.find_view_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.views.find_view_info.cljs$core$IFn$_invoke$arity$1 = (function (id){
return lab.views.find_view_info.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lab.views.view_info)));
}));

(lab.views.find_view_info.cljs$core$IFn$_invoke$arity$2 = (function (id,views){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),views));
}));

(lab.views.find_view_info.cljs$lang$maxFixedArity = 2);

lab.views.siblings = (function lab$views$siblings(pred,p__26247,id){
var map__26248 = p__26247;
var map__26248__$1 = (((((!((map__26248 == null))))?(((((map__26248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26248):map__26248);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26248__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26248__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26248__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var map__26250 = lab.views.find_view_info.cljs$core$IFn$_invoke$arity$2(id,views);
var map__26250__$1 = (((((!((map__26250 == null))))?(((((map__26250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26250):map__26250);
var vec__26251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26250__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(0),null);
var start_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(1),null);
var vec__26254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26250__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26254,(0),null);
var size_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26254,(1),null);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26250__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var end_col_target = lab.views.find_end(start_col_target,size_col_target,col_defs);
var end_row_target = lab.views.find_end(start_row_target,size_row_target,row_defs);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filterv((function (p__26258){
var map__26260 = p__26258;
var map__26260__$1 = (((((!((map__26260 == null))))?(((((map__26260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26260):map__26260);
var vec__26261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26260__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26261,(0),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26261,(1),null);
var vec__26264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26260__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26264,(0),null);
var size_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26264,(1),null);
var id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26260__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var end_col = lab.views.find_end(start_col,size_col,col_defs);
var end_row = lab.views.find_end(start_row,size_row,row_defs);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id_SINGLEQUOTE_,id__$1)){
var G__26270 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_col,end_col,start_row,end_row], null);
var G__26271 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_col_target,end_col_target,start_row_target,end_row_target], null);
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__26270,G__26271) : pred.call(null,G__26270,G__26271));
} else {
return false;
}
}),views)));
});
lab.views.left_siblings = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lab.views.siblings,(function (p__26272,p__26273){
var vec__26274 = p__26272;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26274,(0),null);
var end_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26274,(1),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26274,(2),null);
var end_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26274,(3),null);
var vec__26277 = p__26273;
var start_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26277,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26277,(1),null);
var start_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26277,(2),null);
var end_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26277,(3),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_col,start_col_target)) && ((((start_row_target <= start_row)) && ((((start_row <= end_row)) && ((end_row <= end_row_target)))))));
}));
lab.views.right_siblings = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lab.views.siblings,(function (p__26281,p__26282){
var vec__26283 = p__26281;
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26283,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26283,(1),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26283,(2),null);
var end_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26283,(3),null);
var vec__26286 = p__26282;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26286,(0),null);
var end_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26286,(1),null);
var start_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26286,(2),null);
var end_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26286,(3),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_col,end_col_target)) && ((((start_row_target <= start_row)) && ((((start_row <= end_row)) && ((end_row <= end_row_target)))))));
}));
lab.views.up_siblings = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lab.views.siblings,(function (p__26294,p__26295){
var vec__26296 = p__26294;
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26296,(0),null);
var end_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26296,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26296,(2),null);
var end_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26296,(3),null);
var vec__26299 = p__26295;
var start_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(0),null);
var end_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(1),null);
var start_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(3),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_row,start_row_target)) && ((((start_col_target <= start_col)) && ((((start_col <= end_col)) && ((end_col <= end_col_target)))))));
}));
lab.views.down_siblings = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lab.views.siblings,(function (p__26302,p__26303){
var vec__26304 = p__26302;
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26304,(0),null);
var end_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26304,(1),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26304,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26304,(3),null);
var vec__26307 = p__26303;
var start_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26307,(0),null);
var end_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26307,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26307,(2),null);
var end_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26307,(3),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_row,end_row_target)) && ((((start_col_target <= start_col)) && ((((start_col <= end_col)) && ((end_col <= end_col_target)))))));
}));
lab.views.unsplit_left = (function lab$views$unsplit_left(p__26319,id){
var map__26320 = p__26319;
var map__26320__$1 = (((((!((map__26320 == null))))?(((((map__26320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26320):map__26320);
var data = map__26320__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26320__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26320__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26320__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(views),(2))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),views))),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null),new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null)], null);
} else {
var grow = lab.views.left_siblings(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),views,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs], null),id);
var vec__26377 = ((cljs.core.seq(grow))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,grow], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,lab.views.right_siblings(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),views,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs], null),id)], null));
var is_left_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26377,(0),null);
var grow__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26377,(1),null);
var vec__26380 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(lab.views.find_view_info.cljs$core$IFn$_invoke$arity$2(id,views));
var grow_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26380,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26380,(1),null);
var views__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26383){
var map__26384 = p__26383;
var map__26384__$1 = (((((!((map__26384 == null))))?(((((map__26384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26384):map__26384);
var v = map__26384__$1;
var vec__26385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26384__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26385,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26385,(1),null);
var vec__26388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26384__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26388,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26388,(1),null);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26384__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.contains_QMARK_(grow__$1,id__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w + grow_size),h], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),(cljs.core.truth_(is_left_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx - (1)),sy], null))], 0));
} else {
return v;
}
}),views)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"views","views",1450155487),views__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs], 0));
}
});
lab.views.unsplit_up = (function lab$views$unsplit_up(p__26392,id){
var map__26393 = p__26392;
var map__26393__$1 = (((((!((map__26393 == null))))?(((((map__26393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26393):map__26393);
var data = map__26393__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26393__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26393__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26393__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(views),(2))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),views))),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null),new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null)], null);
} else {
var grow = lab.views.up_siblings(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),views,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs], null),id);
var vec__26395 = ((cljs.core.seq(grow))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,grow], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,lab.views.down_siblings(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),views,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs], null),id)], null));
var is_up_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26395,(0),null);
var grow__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26395,(1),null);
var vec__26398 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),views)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26398,(0),null);
var grow_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26398,(1),null);
var views__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26406){
var map__26407 = p__26406;
var map__26407__$1 = (((((!((map__26407 == null))))?(((((map__26407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26407):map__26407);
var v = map__26407__$1;
var vec__26408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26407__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26408,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26408,(1),null);
var vec__26411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26407__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26411,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26411,(1),null);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26407__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.contains_QMARK_(grow__$1,id__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,(h + grow_size)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),(cljs.core.truth_(is_up_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,(sy - (1))], null))], 0));
} else {
return v;
}
}),views)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"views","views",1450155487),views__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs], 0));
}
});
lab.views.unsplit = (function lab$views$unsplit(views,id){
var up_sib = cljs.core.count(lab.views.up_siblings(views,id));
var down_sib = cljs.core.count(lab.views.down_siblings(views,id));
var left_sib = cljs.core.count(lab.views.left_siblings(views,id));
var right_sib = cljs.core.count(lab.views.right_siblings(views,id));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([left_sib,right_sib,up_sib,down_sib], 0));

if((((left_sib > (0))) || ((right_sib > (0))))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["left/right it is!"], 0));

return lab.views.unsplit_left(views,id);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["up/down it is!"], 0));

return lab.views.unsplit_up(views,id);
}
});
lab.views.__GT_css = (function lab$views$__GT_css(p__26421){
var map__26422 = p__26421;
var map__26422__$1 = (((((!((map__26422 == null))))?(((((map__26422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26422):map__26422);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26422__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26422__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26422__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
return [[".container { grid-template: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26419_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26419_SHARP_),"%"].join('');
}),row_defs))," / ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26420_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26420_SHARP_),"vw"].join('');
}),col_defs)),"; }\n"].join(''),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26443){
var map__26444 = p__26443;
var map__26444__$1 = (((((!((map__26444 == null))))?(((((map__26444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26444):map__26444);
var vec__26445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26444__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26445,(0),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26445,(1),null);
var vec__26448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26444__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26448,(0),null);
var size_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26448,(1),null);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26444__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var end_col = lab.views.find_end(start_col,size_col,col_defs);
var end_row = lab.views.find_end(start_row,size_row,row_defs);
return ["#",cljs.core.name(id)," { grid-area: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_row)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_col)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_row)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_col),"; }"].join('');
}),views))].join('');
});
lab.views.new_view = (function lab$views$new_view(id){
return ["<div",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(id),new cljs.core.Keyword(null,"class","class",-2030961996),"view"], null))),">","<div"," class=\"info\"",">",(function (){var attrs26452 = id;
if(cljs.core.map_QMARK_(attrs26452)){
return ["<span",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"id"], null),attrs26452], 0)))),">","</span>"].join('');
} else {
return ["<span class=\"id\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs26452)),"</span>"].join('');
}
})(),"<span class=\"connection-status\"></span>","</div>","<div class=\"map\"></div>","<div class=\"graph\"></div>","<div class=\"vis\"></div>","<div class=\"console\"></div>","<div class=\"dashboard\"></div>","</div>"].join('');
});
lab.views.__GT_element = (function lab$views$__GT_element(html){
var container = document.createElement("div");
(container.innerHTML = html);

return container.firstChild;
});
lab.views.update_styles_BANG_ = (function lab$views$update_styles_BANG_(styles){
var stylesheet = document.getElementById("dashboard-styles");
return (stylesheet.innerHTML = styles);
});
lab.views.direction_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"row-defs","row-defs",1715332918)], null);
lab.views.set_views_BANG_ = (function lab$views$set_views_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26515 = arguments.length;
var i__4737__auto___26516 = (0);
while(true){
if((i__4737__auto___26516 < len__4736__auto___26515)){
args__4742__auto__.push((arguments[i__4737__auto___26516]));

var G__26517 = (i__4737__auto___26516 + (1));
i__4737__auto___26516 = G__26517;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return lab.views.set_views_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(lab.views.set_views_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__26470){
var map__26471 = p__26470;
var map__26471__$1 = (((((!((map__26471 == null))))?(((((map__26471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26471):map__26471);
var declared_views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26471__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26471__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26471__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
var parent = document.getElementById("dashboard");
(parent.innerHTML = "");

var seq__26473_26518 = cljs.core.seq(declared_views);
var chunk__26474_26519 = null;
var count__26475_26520 = (0);
var i__26476_26521 = (0);
while(true){
if((i__26476_26521 < count__26475_26520)){
var map__26490_26522 = chunk__26474_26519.cljs$core$IIndexed$_nth$arity$2(null,i__26476_26521);
var map__26490_26523__$1 = (((((!((map__26490_26522 == null))))?(((((map__26490_26522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26490_26522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26490_26522):map__26490_26522);
var id_26524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26490_26523__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
parent.appendChild(lab.views.__GT_element(lab.views.new_view(id_26524)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.views,cljs.core.assoc,id_26524,document.getElementById(cljs.core.name(id_26524)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.components,cljs.core.assoc,id_26524,cljs.core.PersistentArrayMap.EMPTY);


var G__26525 = seq__26473_26518;
var G__26526 = chunk__26474_26519;
var G__26527 = count__26475_26520;
var G__26528 = (i__26476_26521 + (1));
seq__26473_26518 = G__26525;
chunk__26474_26519 = G__26526;
count__26475_26520 = G__26527;
i__26476_26521 = G__26528;
continue;
} else {
var temp__5735__auto___26529 = cljs.core.seq(seq__26473_26518);
if(temp__5735__auto___26529){
var seq__26473_26530__$1 = temp__5735__auto___26529;
if(cljs.core.chunked_seq_QMARK_(seq__26473_26530__$1)){
var c__4556__auto___26531 = cljs.core.chunk_first(seq__26473_26530__$1);
var G__26532 = cljs.core.chunk_rest(seq__26473_26530__$1);
var G__26533 = c__4556__auto___26531;
var G__26534 = cljs.core.count(c__4556__auto___26531);
var G__26535 = (0);
seq__26473_26518 = G__26532;
chunk__26474_26519 = G__26533;
count__26475_26520 = G__26534;
i__26476_26521 = G__26535;
continue;
} else {
var map__26493_26536 = cljs.core.first(seq__26473_26530__$1);
var map__26493_26537__$1 = (((((!((map__26493_26536 == null))))?(((((map__26493_26536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26493_26536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26493_26536):map__26493_26536);
var id_26538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26493_26537__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
parent.appendChild(lab.views.__GT_element(lab.views.new_view(id_26538)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.views,cljs.core.assoc,id_26538,document.getElementById(cljs.core.name(id_26538)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.components,cljs.core.assoc,id_26538,cljs.core.PersistentArrayMap.EMPTY);


var G__26543 = cljs.core.next(seq__26473_26530__$1);
var G__26544 = null;
var G__26545 = (0);
var G__26546 = (0);
seq__26473_26518 = G__26543;
chunk__26474_26519 = G__26544;
count__26475_26520 = G__26545;
i__26476_26521 = G__26546;
continue;
}
} else {
}
}
break;
}

return lab.views.update_styles_BANG_(lab.views.__GT_css(cljs.core.reset_BANG_(lab.views.view_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),declared_views,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs], null))));
}));

(lab.views.set_views_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(lab.views.set_views_BANG_.cljs$lang$applyTo = (function (seq26469){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26469));
}));

lab.views.add_view_BANG_ = (function lab$views$add_view_BANG_(var_args){
var G__26497 = arguments.length;
switch (G__26497) {
case 1:
return lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
return lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$3(id,(function (){var G__26498 = cljs.core.deref(lab.views.view_info);
var G__26498__$1 = (((G__26498 == null))?null:new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(G__26498));
var G__26498__$2 = (((G__26498__$1 == null))?null:cljs.core.last(G__26498__$1));
if((G__26498__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__26498__$2);
}
})(),new cljs.core.Keyword(null,"vertical","vertical",718696748));
}));

(lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,after){
return lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$3(id,after,new cljs.core.Keyword(null,"vertical","vertical",718696748));
}));

(lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (id,after,direction){
if(cljs.core.contains_QMARK_(cljs.core.deref(lab.views.components),id)){
return null;
} else {
var $parent = module$node_modules$jquery$dist$jquery("#dashboard");
var G__26499_26557 = lab.views.new_view(id);
var G__26499_26558__$1 = (cljs.core.truth_(after)?module$node_modules$jquery$dist$jquery(["#",cljs.core.name(after)].join('')).after(G__26499_26557):G__26499_26557);
if(cljs.core.not(after)){
$parent.append(G__26499_26558__$1);
} else {
}

lab.layout.invalidate_sizes_BANG_();

lab.views.update_styles_BANG_(lab.views.__GT_css(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lab.views.view_info,(function (old_views){
return lab.views.split_BANG_(id,after,cljs.core.get.cljs$core$IFn$_invoke$arity$2(lab.views.direction_map,direction),old_views);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.views,cljs.core.assoc,id,document.getElementById(cljs.core.name(id)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.components,cljs.core.assoc,id,cljs.core.PersistentArrayMap.EMPTY);
}
}));

(lab.views.add_view_BANG_.cljs$lang$maxFixedArity = 3);

lab.views.remove_view_BANG_ = (function lab$views$remove_view_BANG_(id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.views.views,cljs.core.dissoc,id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.views.components,cljs.core.dissoc,id);

document.querySelector(["#",cljs.core.name(id)].join('')).remove();

lab.views.update_styles_BANG_(lab.views.__GT_css(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.views.view_info,lab.views.unsplit,id)));

return lab.layout.invalidate_sizes_BANG_();
});
lab.views.rename_view_BANG_ = (function lab$views$rename_view_BANG_(id,new_id){
if(cljs.core.contains_QMARK_(cljs.core.deref(lab.views.components),new_id)){
return null;
} else {
var view = document.getElementById(cljs.core.name(id));
view.setAttribute("id",cljs.core.name(new_id));

(view.querySelector(".id").innerHTML = new_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.views.views,clojure.set.rename_keys,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,new_id]));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.views.components,clojure.set.rename_keys,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,new_id]));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lab.views.view_info,(function (old_info){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_info,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__26500){
var map__26501 = p__26500;
var map__26501__$1 = (((((!((map__26501 == null))))?(((((map__26501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26501):map__26501);
var data = map__26501__$1;
var id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26501__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,id_SINGLEQUOTE_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"id","id",-1388402092),new_id);
} else {
return data;
}
}),new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(old_info)));
}));
}
});
lab.views.swap_view_BANG_ = (function lab$views$swap_view_BANG_(id,another_id){
var view_data = lab.views.find_view_info.cljs$core$IFn$_invoke$arity$1(id);
var another_data = lab.views.find_view_info.cljs$core$IFn$_invoke$arity$1(another_id);
return lab.views.update_styles_BANG_(lab.views.__GT_css(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lab.views.view_info,(function (p__26503){
var map__26504 = p__26503;
var map__26504__$1 = (((((!((map__26504 == null))))?(((((map__26504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26504):map__26504);
var old_info = map__26504__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26504__$1,new cljs.core.Keyword(null,"views","views",1450155487));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_info,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26506){
var map__26507 = p__26506;
var map__26507__$1 = (((((!((map__26507 == null))))?(((((map__26507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26507):map__26507);
var data = map__26507__$1;
var id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26507__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_SINGLEQUOTE_,another_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(view_data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(view_data)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_SINGLEQUOTE_,id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(another_data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(another_data)], 0));
} else {
return data;

}
}
}),views)));
}))));
});
lab.views.set_mode_BANG_ = (function lab$views$set_mode_BANG_(view,mode){
var p = module$node_modules$jquery$dist$jquery(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),view));
p.find([".",cljs.core.name(mode)].join('')).show();

return p.find(["> div:not(.",cljs.core.name(mode),", .info)"].join('')).hide();
});
lab.views.list_views = (function lab$views$list_views(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.keys(cljs.core.deref(lab.views.views))));
});
