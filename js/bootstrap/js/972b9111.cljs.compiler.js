goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__24055 = s;
var map__24055__$1 = (((((!((map__24055 == null))))?(((((map__24055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24055):map__24055);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24055__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24055__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__24058 = info;
var map__24059 = G__24058;
var map__24059__$1 = (((((!((map__24059 == null))))?(((((map__24059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24059):map__24059);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24059__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__24058__$1 = G__24058;
while(true){
var d__$2 = d__$1;
var map__24063 = G__24058__$1;
var map__24063__$1 = (((((!((map__24063 == null))))?(((((map__24063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24063):map__24063);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24063__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__24909 = (d__$2 + (1));
var G__24910 = shadow__$2;
d__$1 = G__24909;
G__24058__$1 = G__24910;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__24067){
var map__24068 = p__24067;
var map__24068__$1 = (((((!((map__24068 == null))))?(((((map__24068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24068):map__24068);
var name_var = map__24068__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24068__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24068__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__24071 = info;
var map__24071__$1 = (((((!((map__24071 == null))))?(((((map__24071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24071):map__24071);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24071__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24071__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__24084 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__24084) : cljs.compiler.munge.call(null,G__24084));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__24121 = arguments.length;
switch (G__24121) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__24125 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__24125.cljs$core$IFn$_invoke$arity$1 ? fexpr__24125.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__24125.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__24126 = cp;
switch (G__24126) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__24127_24923 = cljs.core.seq(s);
var chunk__24128_24924 = null;
var count__24129_24925 = (0);
var i__24130_24926 = (0);
while(true){
if((i__24130_24926 < count__24129_24925)){
var c_24927 = chunk__24128_24924.cljs$core$IIndexed$_nth$arity$2(null,i__24130_24926);
sb.append(cljs.compiler.escape_char(c_24927));


var G__24928 = seq__24127_24923;
var G__24929 = chunk__24128_24924;
var G__24930 = count__24129_24925;
var G__24931 = (i__24130_24926 + (1));
seq__24127_24923 = G__24928;
chunk__24128_24924 = G__24929;
count__24129_24925 = G__24930;
i__24130_24926 = G__24931;
continue;
} else {
var temp__5735__auto___24932 = cljs.core.seq(seq__24127_24923);
if(temp__5735__auto___24932){
var seq__24127_24933__$1 = temp__5735__auto___24932;
if(cljs.core.chunked_seq_QMARK_(seq__24127_24933__$1)){
var c__4556__auto___24934 = cljs.core.chunk_first(seq__24127_24933__$1);
var G__24935 = cljs.core.chunk_rest(seq__24127_24933__$1);
var G__24936 = c__4556__auto___24934;
var G__24937 = cljs.core.count(c__4556__auto___24934);
var G__24938 = (0);
seq__24127_24923 = G__24935;
chunk__24128_24924 = G__24936;
count__24129_24925 = G__24937;
i__24130_24926 = G__24938;
continue;
} else {
var c_24939 = cljs.core.first(seq__24127_24933__$1);
sb.append(cljs.compiler.escape_char(c_24939));


var G__24940 = cljs.core.next(seq__24127_24933__$1);
var G__24941 = null;
var G__24942 = (0);
var G__24943 = (0);
seq__24127_24923 = G__24940;
chunk__24128_24924 = G__24941;
count__24129_24925 = G__24942;
i__24130_24926 = G__24943;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24135 = cljs.core.get_global_hierarchy;
return (fexpr__24135.cljs$core$IFn$_invoke$arity$0 ? fexpr__24135.cljs$core$IFn$_invoke$arity$0() : fexpr__24135.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__24136_24944 = ast;
var map__24136_24945__$1 = (((((!((map__24136_24944 == null))))?(((((map__24136_24944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24136_24944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24136_24944):map__24136_24944);
var env_24946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24136_24945__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_24946))){
var map__24139_24947 = env_24946;
var map__24139_24948__$1 = (((((!((map__24139_24947 == null))))?(((((map__24139_24947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24139_24947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24139_24947):map__24139_24947);
var line_24949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24139_24948__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24139_24948__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__24141 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__24143 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__24142 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__24142.cljs$core$IFn$_invoke$arity$1 ? fexpr__24142.cljs$core$IFn$_invoke$arity$1(G__24143) : fexpr__24142.call(null,G__24143));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24141,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__24141;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_24949 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_24950)?(column_24950 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__24168 = arguments.length;
switch (G__24168) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___24952 = arguments.length;
var i__4737__auto___24953 = (0);
while(true){
if((i__4737__auto___24953 < len__4736__auto___24952)){
args_arr__4757__auto__.push((arguments[i__4737__auto___24953]));

var G__24954 = (i__4737__auto___24953 + (1));
i__4737__auto___24953 = G__24954;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_24955 = (function (){var G__24169 = a;
if((!(typeof a === 'string'))){
return G__24169.toString();
} else {
return G__24169;
}
})();
var temp__5739__auto___24956 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___24956 == null)){
} else {
var sm_data_24957 = temp__5739__auto___24956;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_24957,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__24145_SHARP_){
return (p1__24145_SHARP_ + s_24955.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_24955], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__24172 = cljs.core.seq(xs);
var chunk__24173 = null;
var count__24174 = (0);
var i__24175 = (0);
while(true){
if((i__24175 < count__24174)){
var x = chunk__24173.cljs$core$IIndexed$_nth$arity$2(null,i__24175);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__24958 = seq__24172;
var G__24959 = chunk__24173;
var G__24960 = count__24174;
var G__24961 = (i__24175 + (1));
seq__24172 = G__24958;
chunk__24173 = G__24959;
count__24174 = G__24960;
i__24175 = G__24961;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24172);
if(temp__5735__auto__){
var seq__24172__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24172__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24172__$1);
var G__24962 = cljs.core.chunk_rest(seq__24172__$1);
var G__24963 = c__4556__auto__;
var G__24964 = cljs.core.count(c__4556__auto__);
var G__24965 = (0);
seq__24172 = G__24962;
chunk__24173 = G__24963;
count__24174 = G__24964;
i__24175 = G__24965;
continue;
} else {
var x = cljs.core.first(seq__24172__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__24967 = cljs.core.next(seq__24172__$1);
var G__24968 = null;
var G__24969 = (0);
var G__24970 = (0);
seq__24172 = G__24967;
chunk__24173 = G__24968;
count__24174 = G__24969;
i__24175 = G__24970;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq24147){
var G__24148 = cljs.core.first(seq24147);
var seq24147__$1 = cljs.core.next(seq24147);
var G__24149 = cljs.core.first(seq24147__$1);
var seq24147__$2 = cljs.core.next(seq24147__$1);
var G__24150 = cljs.core.first(seq24147__$2);
var seq24147__$3 = cljs.core.next(seq24147__$2);
var G__24151 = cljs.core.first(seq24147__$3);
var seq24147__$4 = cljs.core.next(seq24147__$3);
var G__24152 = cljs.core.first(seq24147__$4);
var seq24147__$5 = cljs.core.next(seq24147__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24148,G__24149,G__24150,G__24151,G__24152,seq24147__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__24182){
var map__24183 = p__24182;
var map__24183__$1 = (((((!((map__24183 == null))))?(((((map__24183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24183):map__24183);
var m = map__24183__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24183__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__24192 = arguments.length;
switch (G__24192) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___24973 = arguments.length;
var i__4737__auto___24974 = (0);
while(true){
if((i__4737__auto___24974 < len__4736__auto___24973)){
args_arr__4757__auto__.push((arguments[i__4737__auto___24974]));

var G__24975 = (i__4737__auto___24974 + (1));
i__4737__auto___24974 = G__24975;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__24199_24976 = cljs.core.seq(xs);
var chunk__24200_24977 = null;
var count__24201_24978 = (0);
var i__24202_24979 = (0);
while(true){
if((i__24202_24979 < count__24201_24978)){
var x_24980 = chunk__24200_24977.cljs$core$IIndexed$_nth$arity$2(null,i__24202_24979);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_24980);


var G__24981 = seq__24199_24976;
var G__24982 = chunk__24200_24977;
var G__24983 = count__24201_24978;
var G__24984 = (i__24202_24979 + (1));
seq__24199_24976 = G__24981;
chunk__24200_24977 = G__24982;
count__24201_24978 = G__24983;
i__24202_24979 = G__24984;
continue;
} else {
var temp__5735__auto___24985 = cljs.core.seq(seq__24199_24976);
if(temp__5735__auto___24985){
var seq__24199_24986__$1 = temp__5735__auto___24985;
if(cljs.core.chunked_seq_QMARK_(seq__24199_24986__$1)){
var c__4556__auto___24987 = cljs.core.chunk_first(seq__24199_24986__$1);
var G__24988 = cljs.core.chunk_rest(seq__24199_24986__$1);
var G__24989 = c__4556__auto___24987;
var G__24990 = cljs.core.count(c__4556__auto___24987);
var G__24991 = (0);
seq__24199_24976 = G__24988;
chunk__24200_24977 = G__24989;
count__24201_24978 = G__24990;
i__24202_24979 = G__24991;
continue;
} else {
var x_24992 = cljs.core.first(seq__24199_24986__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_24992);


var G__24993 = cljs.core.next(seq__24199_24986__$1);
var G__24994 = null;
var G__24995 = (0);
var G__24996 = (0);
seq__24199_24976 = G__24993;
chunk__24200_24977 = G__24994;
count__24201_24978 = G__24995;
i__24202_24979 = G__24996;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq24186){
var G__24187 = cljs.core.first(seq24186);
var seq24186__$1 = cljs.core.next(seq24186);
var G__24188 = cljs.core.first(seq24186__$1);
var seq24186__$2 = cljs.core.next(seq24186__$1);
var G__24189 = cljs.core.first(seq24186__$2);
var seq24186__$3 = cljs.core.next(seq24186__$2);
var G__24190 = cljs.core.first(seq24186__$3);
var seq24186__$4 = cljs.core.next(seq24186__$3);
var G__24191 = cljs.core.first(seq24186__$4);
var seq24186__$5 = cljs.core.next(seq24186__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24187,G__24188,G__24189,G__24190,G__24191,seq24186__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24203_24998 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24204_24999 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24205_25000 = true;
var _STAR_print_fn_STAR__temp_val__24206_25001 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24205_25000);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24206_25001);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24204_24999);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24203_24998);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24209 = cljs.core.get_global_hierarchy;
return (fexpr__24209.cljs$core$IFn$_invoke$arity$0 ? fexpr__24209.cljs$core$IFn$_invoke$arity$0() : fexpr__24209.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__24210 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24210,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24210,(1),null);
var G__24213 = ns;
var G__24214 = name;
var G__24215 = (function (){
var G__24216 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__24216) : cljs.compiler.emit_constant.call(null,G__24216));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__24213,G__24214,G__24215) : cljs.compiler.emit_record_value.call(null,G__24213,G__24214,G__24215));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__24217 = cljs.core.keys(x);
var G__24218 = cljs.core.vals(x);
var G__24219 = cljs.compiler.emit_constants_comma_sep;
var G__24220 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__24217,G__24218,G__24219,G__24220) : cljs.compiler.emit_map.call(null,G__24217,G__24218,G__24219,G__24220));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__24221 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__24222 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__24221,G__24222) : cljs.compiler.emit_with_meta.call(null,G__24221,G__24222));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__24223 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24223,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24223,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24223,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__24238 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24238) : x.call(null,G__24238));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__24239 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24239) : x.call(null,G__24239));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__24255 = items;
var G__24256 = (function (p1__24254_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__24254_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__24255,G__24256) : cljs.compiler.emit_js_object.call(null,G__24255,G__24256));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__24258){
var map__24259 = p__24258;
var map__24259__$1 = (((((!((map__24259 == null))))?(((((map__24259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24259):map__24259);
var ast = map__24259__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24259__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24259__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24259__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__24261 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__24261__$1 = (((((!((map__24261 == null))))?(((((map__24261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24261):map__24261);
var cenv = map__24261__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24261__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__24263 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__24266 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__24266) : cljs.compiler.es5_GT__EQ_.call(null,G__24266));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__24263,cljs.analyzer.es5_allowed);
} else {
return G__24263;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__24267 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__24267,reserved);
} else {
return G__24267;
}
})();
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__24268_25016 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__24268_25017__$1 = (((G__24268_25016 instanceof cljs.core.Keyword))?G__24268_25016.fqn:null);
switch (G__24268_25017__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4115__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__24269){
var map__24270 = p__24269;
var map__24270__$1 = (((((!((map__24270 == null))))?(((((map__24270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24270):map__24270);
var arg = map__24270__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24270__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24270__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24270__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24270__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__24272 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__24272__$1 = (((((!((map__24272 == null))))?(((((map__24272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24272):map__24272);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24272__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__24274){
var map__24280 = p__24274;
var map__24280__$1 = (((((!((map__24280 == null))))?(((((map__24280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24280):map__24280);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24280__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24280__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24280__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__24282_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24282_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__24283 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24283) : comma_sep.call(null,G__24283));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__24284 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24284) : comma_sep.call(null,G__24284));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__24285){
var map__24286 = p__24285;
var map__24286__$1 = (((((!((map__24286 == null))))?(((((map__24286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24286):map__24286);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__24288){
var map__24289 = p__24288;
var map__24289__$1 = (((((!((map__24289 == null))))?(((((map__24289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24289):map__24289);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24289__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__24291_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24291_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__24292 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24292) : comma_sep.call(null,G__24292));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__24293){
var map__24294 = p__24293;
var map__24294__$1 = (((((!((map__24294 == null))))?(((((map__24294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24294):map__24294);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24294__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24294__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___25025 = cljs.core.seq(items);
if(temp__5735__auto___25025){
var items_25026__$1 = temp__5735__auto___25025;
var vec__24296_25027 = items_25026__$1;
var seq__24297_25028 = cljs.core.seq(vec__24296_25027);
var first__24298_25029 = cljs.core.first(seq__24297_25028);
var seq__24297_25030__$1 = cljs.core.next(seq__24297_25028);
var vec__24299_25031 = first__24298_25029;
var k_25032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24299_25031,(0),null);
var v_25033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24299_25031,(1),null);
var r_25034 = seq__24297_25030__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_25032),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25033) : emit_js_object_val.call(null,v_25033)));

var seq__24302_25035 = cljs.core.seq(r_25034);
var chunk__24303_25036 = null;
var count__24304_25037 = (0);
var i__24305_25038 = (0);
while(true){
if((i__24305_25038 < count__24304_25037)){
var vec__24312_25039 = chunk__24303_25036.cljs$core$IIndexed$_nth$arity$2(null,i__24305_25038);
var k_25040__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24312_25039,(0),null);
var v_25041__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24312_25039,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25040__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25041__$1) : emit_js_object_val.call(null,v_25041__$1)));


var G__25042 = seq__24302_25035;
var G__25043 = chunk__24303_25036;
var G__25044 = count__24304_25037;
var G__25045 = (i__24305_25038 + (1));
seq__24302_25035 = G__25042;
chunk__24303_25036 = G__25043;
count__24304_25037 = G__25044;
i__24305_25038 = G__25045;
continue;
} else {
var temp__5735__auto___25046__$1 = cljs.core.seq(seq__24302_25035);
if(temp__5735__auto___25046__$1){
var seq__24302_25047__$1 = temp__5735__auto___25046__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24302_25047__$1)){
var c__4556__auto___25048 = cljs.core.chunk_first(seq__24302_25047__$1);
var G__25049 = cljs.core.chunk_rest(seq__24302_25047__$1);
var G__25050 = c__4556__auto___25048;
var G__25051 = cljs.core.count(c__4556__auto___25048);
var G__25052 = (0);
seq__24302_25035 = G__25049;
chunk__24303_25036 = G__25050;
count__24304_25037 = G__25051;
i__24305_25038 = G__25052;
continue;
} else {
var vec__24315_25053 = cljs.core.first(seq__24302_25047__$1);
var k_25054__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24315_25053,(0),null);
var v_25055__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24315_25053,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25054__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25055__$1) : emit_js_object_val.call(null,v_25055__$1)));


var G__25056 = cljs.core.next(seq__24302_25047__$1);
var G__25057 = null;
var G__25058 = (0);
var G__25059 = (0);
seq__24302_25035 = G__25056;
chunk__24303_25036 = G__25057;
count__24304_25037 = G__25058;
i__24305_25038 = G__25059;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__24318){
var map__24319 = p__24318;
var map__24319__$1 = (((((!((map__24319 == null))))?(((((map__24319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24319):map__24319);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24319__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24319__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24319__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__24321){
var map__24322 = p__24321;
var map__24322__$1 = (((((!((map__24322 == null))))?(((((map__24322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24322):map__24322);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24322__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24322__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__24324){
var map__24325 = p__24324;
var map__24325__$1 = (((((!((map__24325 == null))))?(((((map__24325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24325):map__24325);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24325__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__24327){
var map__24328 = p__24327;
var map__24328__$1 = (((((!((map__24328 == null))))?(((((map__24328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24328):map__24328);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24328__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24328__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__24330 = cljs.analyzer.unwrap_quote(expr);
var map__24330__$1 = (((((!((map__24330 == null))))?(((((map__24330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24330):map__24330);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__24332 = cljs.analyzer.unwrap_quote(expr);
var map__24332__$1 = (((((!((map__24332 == null))))?(((((map__24332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24332):map__24332);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24332__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24332__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24332__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4126__auto__ = (function (){var fexpr__24335 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__24335.cljs$core$IFn$_invoke$arity$1 ? fexpr__24335.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__24335.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__24336){
var map__24337 = p__24336;
var map__24337__$1 = (((((!((map__24337 == null))))?(((((map__24337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24337):map__24337);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__24339){
var map__24340 = p__24339;
var map__24340__$1 = (((((!((map__24340 == null))))?(((((map__24340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24340):map__24340);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24340__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24340__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24340__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24340__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__24342_25060 = cljs.core.seq(nodes);
var chunk__24343_25061 = null;
var count__24344_25062 = (0);
var i__24345_25063 = (0);
while(true){
if((i__24345_25063 < count__24344_25062)){
var map__24370_25064 = chunk__24343_25061.cljs$core$IIndexed$_nth$arity$2(null,i__24345_25063);
var map__24370_25065__$1 = (((((!((map__24370_25064 == null))))?(((((map__24370_25064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24370_25064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24370_25064):map__24370_25064);
var ts_25066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24370_25065__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24371_25067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24370_25065__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24371_25068__$1 = (((((!((map__24371_25067 == null))))?(((((map__24371_25067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24371_25067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24371_25067):map__24371_25067);
var then_25069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24371_25068__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24374_25070 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25066));
var chunk__24375_25071 = null;
var count__24376_25072 = (0);
var i__24377_25073 = (0);
while(true){
if((i__24377_25073 < count__24376_25072)){
var test_25074 = chunk__24375_25071.cljs$core$IIndexed$_nth$arity$2(null,i__24377_25073);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25074,":");


var G__25075 = seq__24374_25070;
var G__25076 = chunk__24375_25071;
var G__25077 = count__24376_25072;
var G__25078 = (i__24377_25073 + (1));
seq__24374_25070 = G__25075;
chunk__24375_25071 = G__25076;
count__24376_25072 = G__25077;
i__24377_25073 = G__25078;
continue;
} else {
var temp__5735__auto___25079 = cljs.core.seq(seq__24374_25070);
if(temp__5735__auto___25079){
var seq__24374_25080__$1 = temp__5735__auto___25079;
if(cljs.core.chunked_seq_QMARK_(seq__24374_25080__$1)){
var c__4556__auto___25081 = cljs.core.chunk_first(seq__24374_25080__$1);
var G__25082 = cljs.core.chunk_rest(seq__24374_25080__$1);
var G__25083 = c__4556__auto___25081;
var G__25084 = cljs.core.count(c__4556__auto___25081);
var G__25085 = (0);
seq__24374_25070 = G__25082;
chunk__24375_25071 = G__25083;
count__24376_25072 = G__25084;
i__24377_25073 = G__25085;
continue;
} else {
var test_25086 = cljs.core.first(seq__24374_25080__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25086,":");


var G__25087 = cljs.core.next(seq__24374_25080__$1);
var G__25088 = null;
var G__25089 = (0);
var G__25090 = (0);
seq__24374_25070 = G__25087;
chunk__24375_25071 = G__25088;
count__24376_25072 = G__25089;
i__24377_25073 = G__25090;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25069);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25069);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25091 = seq__24342_25060;
var G__25092 = chunk__24343_25061;
var G__25093 = count__24344_25062;
var G__25094 = (i__24345_25063 + (1));
seq__24342_25060 = G__25091;
chunk__24343_25061 = G__25092;
count__24344_25062 = G__25093;
i__24345_25063 = G__25094;
continue;
} else {
var temp__5735__auto___25095 = cljs.core.seq(seq__24342_25060);
if(temp__5735__auto___25095){
var seq__24342_25096__$1 = temp__5735__auto___25095;
if(cljs.core.chunked_seq_QMARK_(seq__24342_25096__$1)){
var c__4556__auto___25097 = cljs.core.chunk_first(seq__24342_25096__$1);
var G__25098 = cljs.core.chunk_rest(seq__24342_25096__$1);
var G__25099 = c__4556__auto___25097;
var G__25100 = cljs.core.count(c__4556__auto___25097);
var G__25101 = (0);
seq__24342_25060 = G__25098;
chunk__24343_25061 = G__25099;
count__24344_25062 = G__25100;
i__24345_25063 = G__25101;
continue;
} else {
var map__24378_25102 = cljs.core.first(seq__24342_25096__$1);
var map__24378_25103__$1 = (((((!((map__24378_25102 == null))))?(((((map__24378_25102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24378_25102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24378_25102):map__24378_25102);
var ts_25104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24378_25103__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24379_25105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24378_25103__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24379_25106__$1 = (((((!((map__24379_25105 == null))))?(((((map__24379_25105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24379_25105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24379_25105):map__24379_25105);
var then_25107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24379_25106__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24382_25108 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25104));
var chunk__24383_25109 = null;
var count__24384_25110 = (0);
var i__24385_25111 = (0);
while(true){
if((i__24385_25111 < count__24384_25110)){
var test_25112 = chunk__24383_25109.cljs$core$IIndexed$_nth$arity$2(null,i__24385_25111);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25112,":");


var G__25113 = seq__24382_25108;
var G__25114 = chunk__24383_25109;
var G__25115 = count__24384_25110;
var G__25116 = (i__24385_25111 + (1));
seq__24382_25108 = G__25113;
chunk__24383_25109 = G__25114;
count__24384_25110 = G__25115;
i__24385_25111 = G__25116;
continue;
} else {
var temp__5735__auto___25117__$1 = cljs.core.seq(seq__24382_25108);
if(temp__5735__auto___25117__$1){
var seq__24382_25118__$1 = temp__5735__auto___25117__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24382_25118__$1)){
var c__4556__auto___25119 = cljs.core.chunk_first(seq__24382_25118__$1);
var G__25120 = cljs.core.chunk_rest(seq__24382_25118__$1);
var G__25121 = c__4556__auto___25119;
var G__25122 = cljs.core.count(c__4556__auto___25119);
var G__25123 = (0);
seq__24382_25108 = G__25120;
chunk__24383_25109 = G__25121;
count__24384_25110 = G__25122;
i__24385_25111 = G__25123;
continue;
} else {
var test_25124 = cljs.core.first(seq__24382_25118__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25124,":");


var G__25125 = cljs.core.next(seq__24382_25118__$1);
var G__25126 = null;
var G__25127 = (0);
var G__25128 = (0);
seq__24382_25108 = G__25125;
chunk__24383_25109 = G__25126;
count__24384_25110 = G__25127;
i__24385_25111 = G__25128;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25107);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25107);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25129 = cljs.core.next(seq__24342_25096__$1);
var G__25130 = null;
var G__25131 = (0);
var G__25132 = (0);
seq__24342_25060 = G__25129;
chunk__24343_25061 = G__25130;
count__24344_25062 = G__25131;
i__24345_25063 = G__25132;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__24386){
var map__24387 = p__24386;
var map__24387__$1 = (((((!((map__24387 == null))))?(((((map__24387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24387):map__24387);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24387__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24387__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24392 = env;
var G__24393 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24392,G__24393) : cljs.compiler.resolve_type.call(null,G__24392,G__24393));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__24394 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24394,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24394,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__24389_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__24389_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__24389_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__24397 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__24397,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__24397;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24400 = env;
var G__24401 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24400,G__24401) : cljs.compiler.resolve_type.call(null,G__24400,G__24401));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24402_SHARP_){
return cljs.compiler.resolve_type(env,p1__24402_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__24403 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24404 = cljs.core.seq(vec__24403);
var first__24405 = cljs.core.first(seq__24404);
var seq__24404__$1 = cljs.core.next(seq__24404);
var p = first__24405;
var first__24405__$1 = cljs.core.first(seq__24404__$1);
var seq__24404__$2 = cljs.core.next(seq__24404__$1);
var ts = first__24405__$1;
var first__24405__$2 = cljs.core.first(seq__24404__$2);
var seq__24404__$3 = cljs.core.next(seq__24404__$2);
var n = first__24405__$2;
var xs = seq__24404__$3;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__24406 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24407 = cljs.core.seq(vec__24406);
var first__24408 = cljs.core.first(seq__24407);
var seq__24407__$1 = cljs.core.next(seq__24407);
var p = first__24408;
var first__24408__$1 = cljs.core.first(seq__24407__$1);
var seq__24407__$2 = cljs.core.next(seq__24407__$1);
var ts = first__24408__$1;
var xs = seq__24407__$2;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__24411 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__24410 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__24410.cljs$core$IFn$_invoke$arity$1 ? fexpr__24410.cljs$core$IFn$_invoke$arity$1(G__24411) : fexpr__24410.call(null,G__24411));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__24414 = arguments.length;
switch (G__24414) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__24426 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24412_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__24412_SHARP_);
} else {
return p1__24412_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__24427 = cljs.core.seq(vec__24426);
var first__24428 = cljs.core.first(seq__24427);
var seq__24427__$1 = cljs.core.next(seq__24427);
var x = first__24428;
var ys = seq__24427__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__24429 = cljs.core.seq(ys);
var chunk__24430 = null;
var count__24431 = (0);
var i__24432 = (0);
while(true){
if((i__24432 < count__24431)){
var next_line = chunk__24430.cljs$core$IIndexed$_nth$arity$2(null,i__24432);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25134 = seq__24429;
var G__25135 = chunk__24430;
var G__25136 = count__24431;
var G__25137 = (i__24432 + (1));
seq__24429 = G__25134;
chunk__24430 = G__25135;
count__24431 = G__25136;
i__24432 = G__25137;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24429);
if(temp__5735__auto__){
var seq__24429__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24429__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24429__$1);
var G__25138 = cljs.core.chunk_rest(seq__24429__$1);
var G__25139 = c__4556__auto__;
var G__25140 = cljs.core.count(c__4556__auto__);
var G__25141 = (0);
seq__24429 = G__25138;
chunk__24430 = G__25139;
count__24431 = G__25140;
i__24432 = G__25141;
continue;
} else {
var next_line = cljs.core.first(seq__24429__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25142 = cljs.core.next(seq__24429__$1);
var G__25143 = null;
var G__25144 = (0);
var G__25145 = (0);
seq__24429 = G__25142;
chunk__24430 = G__25143;
count__24431 = G__25144;
i__24432 = G__25145;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__24433_25146 = cljs.core.seq(docs__$2);
var chunk__24434_25147 = null;
var count__24435_25148 = (0);
var i__24436_25149 = (0);
while(true){
if((i__24436_25149 < count__24435_25148)){
var e_25150 = chunk__24434_25147.cljs$core$IIndexed$_nth$arity$2(null,i__24436_25149);
if(cljs.core.truth_(e_25150)){
print_comment_lines(e_25150);
} else {
}


var G__25151 = seq__24433_25146;
var G__25152 = chunk__24434_25147;
var G__25153 = count__24435_25148;
var G__25154 = (i__24436_25149 + (1));
seq__24433_25146 = G__25151;
chunk__24434_25147 = G__25152;
count__24435_25148 = G__25153;
i__24436_25149 = G__25154;
continue;
} else {
var temp__5735__auto___25155 = cljs.core.seq(seq__24433_25146);
if(temp__5735__auto___25155){
var seq__24433_25156__$1 = temp__5735__auto___25155;
if(cljs.core.chunked_seq_QMARK_(seq__24433_25156__$1)){
var c__4556__auto___25157 = cljs.core.chunk_first(seq__24433_25156__$1);
var G__25158 = cljs.core.chunk_rest(seq__24433_25156__$1);
var G__25159 = c__4556__auto___25157;
var G__25160 = cljs.core.count(c__4556__auto___25157);
var G__25161 = (0);
seq__24433_25146 = G__25158;
chunk__24434_25147 = G__25159;
count__24435_25148 = G__25160;
i__24436_25149 = G__25161;
continue;
} else {
var e_25162 = cljs.core.first(seq__24433_25156__$1);
if(cljs.core.truth_(e_25162)){
print_comment_lines(e_25162);
} else {
}


var G__25163 = cljs.core.next(seq__24433_25156__$1);
var G__25164 = null;
var G__25165 = (0);
var G__25166 = (0);
seq__24433_25146 = G__25163;
chunk__24434_25147 = G__25164;
count__24435_25148 = G__25165;
i__24436_25149 = G__25166;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4115__auto__ = cljs.core.some((function (p1__24438_SHARP_){
return goog.string.startsWith(p1__24438_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__24440){
var map__24441 = p__24440;
var map__24441__$1 = (((((!((map__24441 == null))))?(((((map__24441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24441):map__24441);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24441__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24441__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24441__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24441__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24441__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24441__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24441__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24441__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24441__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24441__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__24445){
var map__24446 = p__24445;
var map__24446__$1 = (((((!((map__24446 == null))))?(((((map__24446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24446):map__24446);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24446__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24446__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24446__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__24448_25167 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__24449_25168 = null;
var count__24450_25169 = (0);
var i__24451_25170 = (0);
while(true){
if((i__24451_25170 < count__24450_25169)){
var vec__24458_25171 = chunk__24449_25168.cljs$core$IIndexed$_nth$arity$2(null,i__24451_25170);
var i_25172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24458_25171,(0),null);
var param_25173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24458_25171,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25173);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25174 = seq__24448_25167;
var G__25175 = chunk__24449_25168;
var G__25176 = count__24450_25169;
var G__25177 = (i__24451_25170 + (1));
seq__24448_25167 = G__25174;
chunk__24449_25168 = G__25175;
count__24450_25169 = G__25176;
i__24451_25170 = G__25177;
continue;
} else {
var temp__5735__auto___25178 = cljs.core.seq(seq__24448_25167);
if(temp__5735__auto___25178){
var seq__24448_25179__$1 = temp__5735__auto___25178;
if(cljs.core.chunked_seq_QMARK_(seq__24448_25179__$1)){
var c__4556__auto___25180 = cljs.core.chunk_first(seq__24448_25179__$1);
var G__25181 = cljs.core.chunk_rest(seq__24448_25179__$1);
var G__25182 = c__4556__auto___25180;
var G__25183 = cljs.core.count(c__4556__auto___25180);
var G__25184 = (0);
seq__24448_25167 = G__25181;
chunk__24449_25168 = G__25182;
count__24450_25169 = G__25183;
i__24451_25170 = G__25184;
continue;
} else {
var vec__24461_25185 = cljs.core.first(seq__24448_25179__$1);
var i_25186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24461_25185,(0),null);
var param_25187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24461_25185,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25187);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25188 = cljs.core.next(seq__24448_25179__$1);
var G__25189 = null;
var G__25190 = (0);
var G__25191 = (0);
seq__24448_25167 = G__25188;
chunk__24449_25168 = G__25189;
count__24450_25169 = G__25190;
i__24451_25170 = G__25191;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__24464_25192 = cljs.core.seq(params);
var chunk__24465_25193 = null;
var count__24466_25194 = (0);
var i__24467_25195 = (0);
while(true){
if((i__24467_25195 < count__24466_25194)){
var param_25196 = chunk__24465_25193.cljs$core$IIndexed$_nth$arity$2(null,i__24467_25195);
cljs.compiler.emit(param_25196);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25196,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25197 = seq__24464_25192;
var G__25198 = chunk__24465_25193;
var G__25199 = count__24466_25194;
var G__25200 = (i__24467_25195 + (1));
seq__24464_25192 = G__25197;
chunk__24465_25193 = G__25198;
count__24466_25194 = G__25199;
i__24467_25195 = G__25200;
continue;
} else {
var temp__5735__auto___25201 = cljs.core.seq(seq__24464_25192);
if(temp__5735__auto___25201){
var seq__24464_25202__$1 = temp__5735__auto___25201;
if(cljs.core.chunked_seq_QMARK_(seq__24464_25202__$1)){
var c__4556__auto___25203 = cljs.core.chunk_first(seq__24464_25202__$1);
var G__25204 = cljs.core.chunk_rest(seq__24464_25202__$1);
var G__25205 = c__4556__auto___25203;
var G__25206 = cljs.core.count(c__4556__auto___25203);
var G__25207 = (0);
seq__24464_25192 = G__25204;
chunk__24465_25193 = G__25205;
count__24466_25194 = G__25206;
i__24467_25195 = G__25207;
continue;
} else {
var param_25208 = cljs.core.first(seq__24464_25202__$1);
cljs.compiler.emit(param_25208);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25208,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25209 = cljs.core.next(seq__24464_25202__$1);
var G__25210 = null;
var G__25211 = (0);
var G__25212 = (0);
seq__24464_25192 = G__25209;
chunk__24465_25193 = G__25210;
count__24466_25194 = G__25211;
i__24467_25195 = G__25212;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__24468_25213 = cljs.core.seq(params);
var chunk__24469_25214 = null;
var count__24470_25215 = (0);
var i__24471_25216 = (0);
while(true){
if((i__24471_25216 < count__24470_25215)){
var param_25217 = chunk__24469_25214.cljs$core$IIndexed$_nth$arity$2(null,i__24471_25216);
cljs.compiler.emit(param_25217);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25217,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25218 = seq__24468_25213;
var G__25219 = chunk__24469_25214;
var G__25220 = count__24470_25215;
var G__25221 = (i__24471_25216 + (1));
seq__24468_25213 = G__25218;
chunk__24469_25214 = G__25219;
count__24470_25215 = G__25220;
i__24471_25216 = G__25221;
continue;
} else {
var temp__5735__auto___25222 = cljs.core.seq(seq__24468_25213);
if(temp__5735__auto___25222){
var seq__24468_25223__$1 = temp__5735__auto___25222;
if(cljs.core.chunked_seq_QMARK_(seq__24468_25223__$1)){
var c__4556__auto___25224 = cljs.core.chunk_first(seq__24468_25223__$1);
var G__25225 = cljs.core.chunk_rest(seq__24468_25223__$1);
var G__25226 = c__4556__auto___25224;
var G__25227 = cljs.core.count(c__4556__auto___25224);
var G__25228 = (0);
seq__24468_25213 = G__25225;
chunk__24469_25214 = G__25226;
count__24470_25215 = G__25227;
i__24471_25216 = G__25228;
continue;
} else {
var param_25229 = cljs.core.first(seq__24468_25223__$1);
cljs.compiler.emit(param_25229);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25229,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25230 = cljs.core.next(seq__24468_25223__$1);
var G__25231 = null;
var G__25232 = (0);
var G__25233 = (0);
seq__24468_25213 = G__25230;
chunk__24469_25214 = G__25231;
count__24470_25215 = G__25232;
i__24471_25216 = G__25233;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__24472 = cljs.core.seq(params);
var chunk__24473 = null;
var count__24474 = (0);
var i__24475 = (0);
while(true){
if((i__24475 < count__24474)){
var param = chunk__24473.cljs$core$IIndexed$_nth$arity$2(null,i__24475);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25234 = seq__24472;
var G__25235 = chunk__24473;
var G__25236 = count__24474;
var G__25237 = (i__24475 + (1));
seq__24472 = G__25234;
chunk__24473 = G__25235;
count__24474 = G__25236;
i__24475 = G__25237;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24472);
if(temp__5735__auto__){
var seq__24472__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24472__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24472__$1);
var G__25238 = cljs.core.chunk_rest(seq__24472__$1);
var G__25239 = c__4556__auto__;
var G__25240 = cljs.core.count(c__4556__auto__);
var G__25241 = (0);
seq__24472 = G__25238;
chunk__24473 = G__25239;
count__24474 = G__25240;
i__24475 = G__25241;
continue;
} else {
var param = cljs.core.first(seq__24472__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25242 = cljs.core.next(seq__24472__$1);
var G__25243 = null;
var G__25244 = (0);
var G__25245 = (0);
seq__24472 = G__25242;
chunk__24473 = G__25243;
count__24474 = G__25244;
i__24475 = G__25245;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__24476){
var map__24477 = p__24476;
var map__24477__$1 = (((((!((map__24477 == null))))?(((((map__24477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24477):map__24477);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24477__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24477__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24477__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24477__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24477__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24477__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__24479){
var map__24480 = p__24479;
var map__24480__$1 = (((((!((map__24480 == null))))?(((((map__24480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24480):map__24480);
var f = map__24480__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_25246__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25247 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25246__$1);
var delegate_name_25248 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25247),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_25248," = function (");

var seq__24482_25249 = cljs.core.seq(params);
var chunk__24483_25250 = null;
var count__24484_25251 = (0);
var i__24485_25252 = (0);
while(true){
if((i__24485_25252 < count__24484_25251)){
var param_25253 = chunk__24483_25250.cljs$core$IIndexed$_nth$arity$2(null,i__24485_25252);
cljs.compiler.emit(param_25253);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25253,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25254 = seq__24482_25249;
var G__25255 = chunk__24483_25250;
var G__25256 = count__24484_25251;
var G__25257 = (i__24485_25252 + (1));
seq__24482_25249 = G__25254;
chunk__24483_25250 = G__25255;
count__24484_25251 = G__25256;
i__24485_25252 = G__25257;
continue;
} else {
var temp__5735__auto___25258 = cljs.core.seq(seq__24482_25249);
if(temp__5735__auto___25258){
var seq__24482_25259__$1 = temp__5735__auto___25258;
if(cljs.core.chunked_seq_QMARK_(seq__24482_25259__$1)){
var c__4556__auto___25260 = cljs.core.chunk_first(seq__24482_25259__$1);
var G__25261 = cljs.core.chunk_rest(seq__24482_25259__$1);
var G__25262 = c__4556__auto___25260;
var G__25263 = cljs.core.count(c__4556__auto___25260);
var G__25264 = (0);
seq__24482_25249 = G__25261;
chunk__24483_25250 = G__25262;
count__24484_25251 = G__25263;
i__24485_25252 = G__25264;
continue;
} else {
var param_25265 = cljs.core.first(seq__24482_25259__$1);
cljs.compiler.emit(param_25265);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25265,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25266 = cljs.core.next(seq__24482_25259__$1);
var G__25267 = null;
var G__25268 = (0);
var G__25269 = (0);
seq__24482_25249 = G__25266;
chunk__24483_25250 = G__25267;
count__24484_25251 = G__25268;
i__24485_25252 = G__25269;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_25247," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_25270 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_25270,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_25248,".call(this,");

var seq__24486_25271 = cljs.core.seq(params);
var chunk__24487_25272 = null;
var count__24488_25273 = (0);
var i__24489_25274 = (0);
while(true){
if((i__24489_25274 < count__24488_25273)){
var param_25275 = chunk__24487_25272.cljs$core$IIndexed$_nth$arity$2(null,i__24489_25274);
cljs.compiler.emit(param_25275);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25275,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25276 = seq__24486_25271;
var G__25277 = chunk__24487_25272;
var G__25278 = count__24488_25273;
var G__25279 = (i__24489_25274 + (1));
seq__24486_25271 = G__25276;
chunk__24487_25272 = G__25277;
count__24488_25273 = G__25278;
i__24489_25274 = G__25279;
continue;
} else {
var temp__5735__auto___25280 = cljs.core.seq(seq__24486_25271);
if(temp__5735__auto___25280){
var seq__24486_25281__$1 = temp__5735__auto___25280;
if(cljs.core.chunked_seq_QMARK_(seq__24486_25281__$1)){
var c__4556__auto___25282 = cljs.core.chunk_first(seq__24486_25281__$1);
var G__25283 = cljs.core.chunk_rest(seq__24486_25281__$1);
var G__25284 = c__4556__auto___25282;
var G__25285 = cljs.core.count(c__4556__auto___25282);
var G__25286 = (0);
seq__24486_25271 = G__25283;
chunk__24487_25272 = G__25284;
count__24488_25273 = G__25285;
i__24489_25274 = G__25286;
continue;
} else {
var param_25287 = cljs.core.first(seq__24486_25281__$1);
cljs.compiler.emit(param_25287);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25287,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25288 = cljs.core.next(seq__24486_25281__$1);
var G__25289 = null;
var G__25290 = (0);
var G__25291 = (0);
seq__24486_25271 = G__25288;
chunk__24487_25272 = G__25289;
count__24488_25273 = G__25290;
i__24489_25274 = G__25291;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25247,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_25247,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_25246__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25247,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_25248,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25247,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__24493){
var map__24494 = p__24493;
var map__24494__$1 = (((((!((map__24494 == null))))?(((((map__24494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24494):map__24494);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24490_SHARP_){
var and__4115__auto__ = p1__24490_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__24490_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_25292__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25293 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25292__$1);
var maxparams_25294 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_25295 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25293),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_25296 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__24491_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__24491_SHARP_)));
}),cljs.core.seq(mmap_25295));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_25293," = null;");

var seq__24499_25297 = cljs.core.seq(ms_25296);
var chunk__24500_25298 = null;
var count__24501_25299 = (0);
var i__24502_25300 = (0);
while(true){
if((i__24502_25300 < count__24501_25299)){
var vec__24509_25301 = chunk__24500_25298.cljs$core$IIndexed$_nth$arity$2(null,i__24502_25300);
var n_25302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24509_25301,(0),null);
var meth_25303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24509_25301,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25302," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25303))){
cljs.compiler.emit_variadic_fn_method(meth_25303);
} else {
cljs.compiler.emit_fn_method(meth_25303);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25304 = seq__24499_25297;
var G__25305 = chunk__24500_25298;
var G__25306 = count__24501_25299;
var G__25307 = (i__24502_25300 + (1));
seq__24499_25297 = G__25304;
chunk__24500_25298 = G__25305;
count__24501_25299 = G__25306;
i__24502_25300 = G__25307;
continue;
} else {
var temp__5735__auto___25308 = cljs.core.seq(seq__24499_25297);
if(temp__5735__auto___25308){
var seq__24499_25309__$1 = temp__5735__auto___25308;
if(cljs.core.chunked_seq_QMARK_(seq__24499_25309__$1)){
var c__4556__auto___25310 = cljs.core.chunk_first(seq__24499_25309__$1);
var G__25311 = cljs.core.chunk_rest(seq__24499_25309__$1);
var G__25312 = c__4556__auto___25310;
var G__25313 = cljs.core.count(c__4556__auto___25310);
var G__25314 = (0);
seq__24499_25297 = G__25311;
chunk__24500_25298 = G__25312;
count__24501_25299 = G__25313;
i__24502_25300 = G__25314;
continue;
} else {
var vec__24512_25315 = cljs.core.first(seq__24499_25309__$1);
var n_25316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24512_25315,(0),null);
var meth_25317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24512_25315,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25316," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25317))){
cljs.compiler.emit_variadic_fn_method(meth_25317);
} else {
cljs.compiler.emit_fn_method(meth_25317);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25318 = cljs.core.next(seq__24499_25309__$1);
var G__25319 = null;
var G__25320 = (0);
var G__25321 = (0);
seq__24499_25297 = G__25318;
chunk__24500_25298 = G__25319;
count__24501_25299 = G__25320;
i__24502_25300 = G__25321;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25293," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_25294),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_25294)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_25294));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__24515_25322 = cljs.core.seq(ms_25296);
var chunk__24516_25323 = null;
var count__24517_25324 = (0);
var i__24518_25325 = (0);
while(true){
if((i__24518_25325 < count__24517_25324)){
var vec__24525_25326 = chunk__24516_25323.cljs$core$IIndexed$_nth$arity$2(null,i__24518_25325);
var n_25327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24525_25326,(0),null);
var meth_25328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24525_25326,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25328))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25329 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25329," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25330 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25329," = new cljs.core.IndexedSeq(",a_25330,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25327,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25294)),(((cljs.core.count(maxparams_25294) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25329,");"], 0));
} else {
var pcnt_25331 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25328));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25331,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25327,".call(this",(((pcnt_25331 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25331,maxparams_25294)),null,(1),null)),(2),null))),");");
}


var G__25332 = seq__24515_25322;
var G__25333 = chunk__24516_25323;
var G__25334 = count__24517_25324;
var G__25335 = (i__24518_25325 + (1));
seq__24515_25322 = G__25332;
chunk__24516_25323 = G__25333;
count__24517_25324 = G__25334;
i__24518_25325 = G__25335;
continue;
} else {
var temp__5735__auto___25336 = cljs.core.seq(seq__24515_25322);
if(temp__5735__auto___25336){
var seq__24515_25337__$1 = temp__5735__auto___25336;
if(cljs.core.chunked_seq_QMARK_(seq__24515_25337__$1)){
var c__4556__auto___25338 = cljs.core.chunk_first(seq__24515_25337__$1);
var G__25339 = cljs.core.chunk_rest(seq__24515_25337__$1);
var G__25340 = c__4556__auto___25338;
var G__25341 = cljs.core.count(c__4556__auto___25338);
var G__25342 = (0);
seq__24515_25322 = G__25339;
chunk__24516_25323 = G__25340;
count__24517_25324 = G__25341;
i__24518_25325 = G__25342;
continue;
} else {
var vec__24528_25343 = cljs.core.first(seq__24515_25337__$1);
var n_25344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24528_25343,(0),null);
var meth_25345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24528_25343,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25345))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25346 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25346," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25347 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25346," = new cljs.core.IndexedSeq(",a_25347,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25344,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25294)),(((cljs.core.count(maxparams_25294) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25346,");"], 0));
} else {
var pcnt_25348 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25345));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25348,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25344,".call(this",(((pcnt_25348 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25348,maxparams_25294)),null,(1),null)),(2),null))),");");
}


var G__25349 = cljs.core.next(seq__24515_25337__$1);
var G__25350 = null;
var G__25351 = (0);
var G__25352 = (0);
seq__24515_25322 = G__25349;
chunk__24516_25323 = G__25350;
count__24517_25324 = G__25351;
i__24518_25325 = G__25352;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_25353 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_25296)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_25353,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25293,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25293,".cljs$lang$applyTo = ",cljs.core.some((function (p1__24492_SHARP_){
var vec__24534 = p1__24492_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24534,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24534,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_25296),".cljs$lang$applyTo;");
} else {
}

var seq__24537_25354 = cljs.core.seq(ms_25296);
var chunk__24538_25355 = null;
var count__24539_25356 = (0);
var i__24540_25357 = (0);
while(true){
if((i__24540_25357 < count__24539_25356)){
var vec__24547_25358 = chunk__24538_25355.cljs$core$IIndexed$_nth$arity$2(null,i__24540_25357);
var n_25359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24547_25358,(0),null);
var meth_25360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24547_25358,(1),null);
var c_25361 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25360));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25360))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25293,".cljs$core$IFn$_invoke$arity$variadic = ",n_25359,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25293,".cljs$core$IFn$_invoke$arity$",c_25361," = ",n_25359,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25362 = seq__24537_25354;
var G__25363 = chunk__24538_25355;
var G__25364 = count__24539_25356;
var G__25365 = (i__24540_25357 + (1));
seq__24537_25354 = G__25362;
chunk__24538_25355 = G__25363;
count__24539_25356 = G__25364;
i__24540_25357 = G__25365;
continue;
} else {
var temp__5735__auto___25366 = cljs.core.seq(seq__24537_25354);
if(temp__5735__auto___25366){
var seq__24537_25367__$1 = temp__5735__auto___25366;
if(cljs.core.chunked_seq_QMARK_(seq__24537_25367__$1)){
var c__4556__auto___25368 = cljs.core.chunk_first(seq__24537_25367__$1);
var G__25369 = cljs.core.chunk_rest(seq__24537_25367__$1);
var G__25370 = c__4556__auto___25368;
var G__25371 = cljs.core.count(c__4556__auto___25368);
var G__25372 = (0);
seq__24537_25354 = G__25369;
chunk__24538_25355 = G__25370;
count__24539_25356 = G__25371;
i__24540_25357 = G__25372;
continue;
} else {
var vec__24550_25373 = cljs.core.first(seq__24537_25367__$1);
var n_25374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24550_25373,(0),null);
var meth_25375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24550_25373,(1),null);
var c_25376 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25375));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25375))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25293,".cljs$core$IFn$_invoke$arity$variadic = ",n_25374,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25293,".cljs$core$IFn$_invoke$arity$",c_25376," = ",n_25374,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25377 = cljs.core.next(seq__24537_25367__$1);
var G__25378 = null;
var G__25379 = (0);
var G__25380 = (0);
seq__24537_25354 = G__25377;
chunk__24538_25355 = G__25378;
count__24539_25356 = G__25379;
i__24540_25357 = G__25380;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25293,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__24557){
var map__24558 = p__24557;
var map__24558__$1 = (((((!((map__24558 == null))))?(((((map__24558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24558):map__24558);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24558__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24558__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24558__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__24560_25381 = cljs.core.seq(statements);
var chunk__24561_25382 = null;
var count__24562_25383 = (0);
var i__24563_25384 = (0);
while(true){
if((i__24563_25384 < count__24562_25383)){
var s_25385 = chunk__24561_25382.cljs$core$IIndexed$_nth$arity$2(null,i__24563_25384);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25385);


var G__25386 = seq__24560_25381;
var G__25387 = chunk__24561_25382;
var G__25388 = count__24562_25383;
var G__25389 = (i__24563_25384 + (1));
seq__24560_25381 = G__25386;
chunk__24561_25382 = G__25387;
count__24562_25383 = G__25388;
i__24563_25384 = G__25389;
continue;
} else {
var temp__5735__auto___25390 = cljs.core.seq(seq__24560_25381);
if(temp__5735__auto___25390){
var seq__24560_25391__$1 = temp__5735__auto___25390;
if(cljs.core.chunked_seq_QMARK_(seq__24560_25391__$1)){
var c__4556__auto___25392 = cljs.core.chunk_first(seq__24560_25391__$1);
var G__25393 = cljs.core.chunk_rest(seq__24560_25391__$1);
var G__25394 = c__4556__auto___25392;
var G__25395 = cljs.core.count(c__4556__auto___25392);
var G__25396 = (0);
seq__24560_25381 = G__25393;
chunk__24561_25382 = G__25394;
count__24562_25383 = G__25395;
i__24563_25384 = G__25396;
continue;
} else {
var s_25397 = cljs.core.first(seq__24560_25391__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25397);


var G__25398 = cljs.core.next(seq__24560_25391__$1);
var G__25399 = null;
var G__25400 = (0);
var G__25401 = (0);
seq__24560_25381 = G__25398;
chunk__24561_25382 = G__25399;
count__24562_25383 = G__25400;
i__24563_25384 = G__25401;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__24564){
var map__24565 = p__24564;
var map__24565__$1 = (((((!((map__24565 == null))))?(((((map__24565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24565):map__24565);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24565__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24565__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24565__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24565__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24565__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__24568,is_loop){
var map__24569 = p__24568;
var map__24569__$1 = (((((!((map__24569 == null))))?(((((map__24569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24569):map__24569);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24569__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24569__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24569__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__24575_25402 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__24576_25403 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__24576_25403);

try{var seq__24577_25404 = cljs.core.seq(bindings);
var chunk__24578_25405 = null;
var count__24579_25406 = (0);
var i__24580_25407 = (0);
while(true){
if((i__24580_25407 < count__24579_25406)){
var map__24600_25408 = chunk__24578_25405.cljs$core$IIndexed$_nth$arity$2(null,i__24580_25407);
var map__24600_25409__$1 = (((((!((map__24600_25408 == null))))?(((((map__24600_25408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24600_25408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24600_25408):map__24600_25408);
var binding_25410 = map__24600_25409__$1;
var init_25411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24600_25409__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25410);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25411,";");


var G__25412 = seq__24577_25404;
var G__25413 = chunk__24578_25405;
var G__25414 = count__24579_25406;
var G__25415 = (i__24580_25407 + (1));
seq__24577_25404 = G__25412;
chunk__24578_25405 = G__25413;
count__24579_25406 = G__25414;
i__24580_25407 = G__25415;
continue;
} else {
var temp__5735__auto___25416 = cljs.core.seq(seq__24577_25404);
if(temp__5735__auto___25416){
var seq__24577_25417__$1 = temp__5735__auto___25416;
if(cljs.core.chunked_seq_QMARK_(seq__24577_25417__$1)){
var c__4556__auto___25418 = cljs.core.chunk_first(seq__24577_25417__$1);
var G__25419 = cljs.core.chunk_rest(seq__24577_25417__$1);
var G__25420 = c__4556__auto___25418;
var G__25421 = cljs.core.count(c__4556__auto___25418);
var G__25422 = (0);
seq__24577_25404 = G__25419;
chunk__24578_25405 = G__25420;
count__24579_25406 = G__25421;
i__24580_25407 = G__25422;
continue;
} else {
var map__24602_25423 = cljs.core.first(seq__24577_25417__$1);
var map__24602_25424__$1 = (((((!((map__24602_25423 == null))))?(((((map__24602_25423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24602_25423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24602_25423):map__24602_25423);
var binding_25425 = map__24602_25424__$1;
var init_25426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24602_25424__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25425);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25426,";");


var G__25427 = cljs.core.next(seq__24577_25417__$1);
var G__25428 = null;
var G__25429 = (0);
var G__25430 = (0);
seq__24577_25404 = G__25427;
chunk__24578_25405 = G__25428;
count__24579_25406 = G__25429;
i__24580_25407 = G__25430;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__24575_25402);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__24604){
var map__24605 = p__24604;
var map__24605__$1 = (((((!((map__24605 == null))))?(((((map__24605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24605):map__24605);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24605__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24605__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24605__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___25431 = cljs.core.count(exprs);
var i_25432 = (0);
while(true){
if((i_25432 < n__4613__auto___25431)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25432) : temps.call(null,i_25432))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_25432) : exprs.call(null,i_25432)),";");

var G__25433 = (i_25432 + (1));
i_25432 = G__25433;
continue;
} else {
}
break;
}

var n__4613__auto___25434 = cljs.core.count(exprs);
var i_25435 = (0);
while(true){
if((i_25435 < n__4613__auto___25434)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_25435) : params.call(null,i_25435)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25435) : temps.call(null,i_25435)),";");

var G__25436 = (i_25435 + (1));
i_25435 = G__25436;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__24645){
var map__24646 = p__24645;
var map__24646__$1 = (((((!((map__24646 == null))))?(((((map__24646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24646):map__24646);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24646__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24646__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24646__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__24648_25437 = cljs.core.seq(bindings);
var chunk__24649_25438 = null;
var count__24650_25439 = (0);
var i__24651_25440 = (0);
while(true){
if((i__24651_25440 < count__24650_25439)){
var map__24659_25441 = chunk__24649_25438.cljs$core$IIndexed$_nth$arity$2(null,i__24651_25440);
var map__24659_25442__$1 = (((((!((map__24659_25441 == null))))?(((((map__24659_25441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24659_25441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24659_25441):map__24659_25441);
var binding_25443 = map__24659_25442__$1;
var init_25444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24659_25442__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25443)," = ",init_25444,";");


var G__25445 = seq__24648_25437;
var G__25446 = chunk__24649_25438;
var G__25447 = count__24650_25439;
var G__25448 = (i__24651_25440 + (1));
seq__24648_25437 = G__25445;
chunk__24649_25438 = G__25446;
count__24650_25439 = G__25447;
i__24651_25440 = G__25448;
continue;
} else {
var temp__5735__auto___25449 = cljs.core.seq(seq__24648_25437);
if(temp__5735__auto___25449){
var seq__24648_25450__$1 = temp__5735__auto___25449;
if(cljs.core.chunked_seq_QMARK_(seq__24648_25450__$1)){
var c__4556__auto___25451 = cljs.core.chunk_first(seq__24648_25450__$1);
var G__25452 = cljs.core.chunk_rest(seq__24648_25450__$1);
var G__25453 = c__4556__auto___25451;
var G__25454 = cljs.core.count(c__4556__auto___25451);
var G__25455 = (0);
seq__24648_25437 = G__25452;
chunk__24649_25438 = G__25453;
count__24650_25439 = G__25454;
i__24651_25440 = G__25455;
continue;
} else {
var map__24670_25456 = cljs.core.first(seq__24648_25450__$1);
var map__24670_25457__$1 = (((((!((map__24670_25456 == null))))?(((((map__24670_25456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24670_25456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24670_25456):map__24670_25456);
var binding_25458 = map__24670_25457__$1;
var init_25459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24670_25457__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25458)," = ",init_25459,";");


var G__25460 = cljs.core.next(seq__24648_25450__$1);
var G__25461 = null;
var G__25462 = (0);
var G__25463 = (0);
seq__24648_25437 = G__25460;
chunk__24649_25438 = G__25461;
count__24650_25439 = G__25462;
i__24651_25440 = G__25463;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__24718){
var map__24719 = p__24718;
var map__24719__$1 = (((((!((map__24719 == null))))?(((((map__24719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24719):map__24719);
var expr = map__24719__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_(tag)))){
if(cljs.core.not((function (){var fexpr__24747 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__24747.cljs$core$IFn$_invoke$arity$1 ? fexpr__24747.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__24747.call(null,tag));
})())){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__24749 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__24749.cljs$core$IFn$_invoke$arity$1 ? fexpr__24749.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__24749.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__24721 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__24709_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24709_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__24713_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24713_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24721,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24721,(1),null);
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_25464 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_25464,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_25465 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_25465,args)),(((mfa_25465 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_25465,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var G__24753 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__24752 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__24752.cljs$core$IFn$_invoke$arity$1 ? fexpr__24752.cljs$core$IFn$_invoke$arity$1(G__24753) : fexpr__24752.call(null,G__24753));
} else {
return and__4115__auto__;
}
})())){
var fprop_25466 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25466," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25466,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25466," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25466,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__24754){
var map__24755 = p__24754;
var map__24755__$1 = (((((!((map__24755 == null))))?(((((map__24755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24755):map__24755);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24755__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24755__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24755__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__24757){
var map__24758 = p__24757;
var map__24758__$1 = (((((!((map__24758 == null))))?(((((map__24758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24758):map__24758);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24758__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24758__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__24760 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__24760__$1 = (((((!((map__24760 == null))))?(((((map__24760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24760):map__24760);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24760__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24760__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__24761 = options;
var map__24761__$1 = (((((!((map__24761 == null))))?(((((map__24761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24761):map__24761);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24761__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24761__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24761__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__24762 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__24767 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__24767__$1 = (((((!((map__24767 == null))))?(((((map__24767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24767):map__24767);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24767__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24767__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24762,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24762,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__24772_25467 = cljs.core.seq(libs_to_load);
var chunk__24773_25468 = null;
var count__24774_25469 = (0);
var i__24775_25470 = (0);
while(true){
if((i__24775_25470 < count__24774_25469)){
var lib_25471 = chunk__24773_25468.cljs$core$IIndexed$_nth$arity$2(null,i__24775_25470);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25471)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25471),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25471),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25471),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25471),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25471,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25471),"');");
}

}
}
}


var G__25472 = seq__24772_25467;
var G__25473 = chunk__24773_25468;
var G__25474 = count__24774_25469;
var G__25475 = (i__24775_25470 + (1));
seq__24772_25467 = G__25472;
chunk__24773_25468 = G__25473;
count__24774_25469 = G__25474;
i__24775_25470 = G__25475;
continue;
} else {
var temp__5735__auto___25476 = cljs.core.seq(seq__24772_25467);
if(temp__5735__auto___25476){
var seq__24772_25477__$1 = temp__5735__auto___25476;
if(cljs.core.chunked_seq_QMARK_(seq__24772_25477__$1)){
var c__4556__auto___25478 = cljs.core.chunk_first(seq__24772_25477__$1);
var G__25479 = cljs.core.chunk_rest(seq__24772_25477__$1);
var G__25480 = c__4556__auto___25478;
var G__25481 = cljs.core.count(c__4556__auto___25478);
var G__25482 = (0);
seq__24772_25467 = G__25479;
chunk__24773_25468 = G__25480;
count__24774_25469 = G__25481;
i__24775_25470 = G__25482;
continue;
} else {
var lib_25483 = cljs.core.first(seq__24772_25477__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25483)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25483),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25483),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25483),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25483),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25483,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25483),"');");
}

}
}
}


var G__25484 = cljs.core.next(seq__24772_25477__$1);
var G__25485 = null;
var G__25486 = (0);
var G__25487 = (0);
seq__24772_25467 = G__25484;
chunk__24773_25468 = G__25485;
count__24774_25469 = G__25486;
i__24775_25470 = G__25487;
continue;
}
} else {
}
}
break;
}

var seq__24789_25488 = cljs.core.seq(node_libs);
var chunk__24790_25489 = null;
var count__24791_25490 = (0);
var i__24792_25491 = (0);
while(true){
if((i__24792_25491 < count__24791_25490)){
var lib_25492 = chunk__24790_25489.cljs$core$IIndexed$_nth$arity$2(null,i__24792_25491);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25492)," = require('",lib_25492,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25493 = seq__24789_25488;
var G__25494 = chunk__24790_25489;
var G__25495 = count__24791_25490;
var G__25496 = (i__24792_25491 + (1));
seq__24789_25488 = G__25493;
chunk__24790_25489 = G__25494;
count__24791_25490 = G__25495;
i__24792_25491 = G__25496;
continue;
} else {
var temp__5735__auto___25497 = cljs.core.seq(seq__24789_25488);
if(temp__5735__auto___25497){
var seq__24789_25498__$1 = temp__5735__auto___25497;
if(cljs.core.chunked_seq_QMARK_(seq__24789_25498__$1)){
var c__4556__auto___25499 = cljs.core.chunk_first(seq__24789_25498__$1);
var G__25500 = cljs.core.chunk_rest(seq__24789_25498__$1);
var G__25501 = c__4556__auto___25499;
var G__25502 = cljs.core.count(c__4556__auto___25499);
var G__25503 = (0);
seq__24789_25488 = G__25500;
chunk__24790_25489 = G__25501;
count__24791_25490 = G__25502;
i__24792_25491 = G__25503;
continue;
} else {
var lib_25504 = cljs.core.first(seq__24789_25498__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25504)," = require('",lib_25504,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25505 = cljs.core.next(seq__24789_25498__$1);
var G__25506 = null;
var G__25507 = (0);
var G__25508 = (0);
seq__24789_25488 = G__25505;
chunk__24790_25489 = G__25506;
count__24791_25490 = G__25507;
i__24792_25491 = G__25508;
continue;
}
} else {
}
}
break;
}

var seq__24797_25509 = cljs.core.seq(global_exports_libs);
var chunk__24798_25510 = null;
var count__24799_25511 = (0);
var i__24800_25512 = (0);
while(true){
if((i__24800_25512 < count__24799_25511)){
var lib_25513 = chunk__24798_25510.cljs$core$IIndexed$_nth$arity$2(null,i__24800_25512);
var map__24807_25514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25513));
var map__24807_25515__$1 = (((((!((map__24807_25514 == null))))?(((((map__24807_25514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24807_25514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24807_25514):map__24807_25514);
var global_exports_25516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24807_25515__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25516,lib_25513);


var G__25517 = seq__24797_25509;
var G__25518 = chunk__24798_25510;
var G__25519 = count__24799_25511;
var G__25520 = (i__24800_25512 + (1));
seq__24797_25509 = G__25517;
chunk__24798_25510 = G__25518;
count__24799_25511 = G__25519;
i__24800_25512 = G__25520;
continue;
} else {
var temp__5735__auto___25521 = cljs.core.seq(seq__24797_25509);
if(temp__5735__auto___25521){
var seq__24797_25522__$1 = temp__5735__auto___25521;
if(cljs.core.chunked_seq_QMARK_(seq__24797_25522__$1)){
var c__4556__auto___25523 = cljs.core.chunk_first(seq__24797_25522__$1);
var G__25524 = cljs.core.chunk_rest(seq__24797_25522__$1);
var G__25525 = c__4556__auto___25523;
var G__25526 = cljs.core.count(c__4556__auto___25523);
var G__25527 = (0);
seq__24797_25509 = G__25524;
chunk__24798_25510 = G__25525;
count__24799_25511 = G__25526;
i__24800_25512 = G__25527;
continue;
} else {
var lib_25528 = cljs.core.first(seq__24797_25522__$1);
var map__24809_25529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25528));
var map__24809_25530__$1 = (((((!((map__24809_25529 == null))))?(((((map__24809_25529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24809_25529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24809_25529):map__24809_25529);
var global_exports_25531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24809_25530__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25531,lib_25528);


var G__25532 = cljs.core.next(seq__24797_25522__$1);
var G__25533 = null;
var G__25534 = (0);
var G__25535 = (0);
seq__24797_25509 = G__25532;
chunk__24798_25510 = G__25533;
count__24799_25511 = G__25534;
i__24800_25512 = G__25535;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__24813){
var map__24814 = p__24813;
var map__24814__$1 = (((((!((map__24814 == null))))?(((((map__24814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24814):map__24814);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24814__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24814__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24814__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24814__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24814__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24814__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24814__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__24816){
var map__24817 = p__24816;
var map__24817__$1 = (((((!((map__24817 == null))))?(((((map__24817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24817):map__24817);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__24819){
var map__24820 = p__24819;
var map__24820__$1 = (((((!((map__24820 == null))))?(((((map__24820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24820):map__24820);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__24822_25536 = cljs.core.seq(protocols);
var chunk__24823_25537 = null;
var count__24824_25538 = (0);
var i__24825_25539 = (0);
while(true){
if((i__24825_25539 < count__24824_25538)){
var protocol_25540 = chunk__24823_25537.cljs$core$IIndexed$_nth$arity$2(null,i__24825_25539);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25540)),"}");


var G__25541 = seq__24822_25536;
var G__25542 = chunk__24823_25537;
var G__25543 = count__24824_25538;
var G__25544 = (i__24825_25539 + (1));
seq__24822_25536 = G__25541;
chunk__24823_25537 = G__25542;
count__24824_25538 = G__25543;
i__24825_25539 = G__25544;
continue;
} else {
var temp__5735__auto___25545 = cljs.core.seq(seq__24822_25536);
if(temp__5735__auto___25545){
var seq__24822_25546__$1 = temp__5735__auto___25545;
if(cljs.core.chunked_seq_QMARK_(seq__24822_25546__$1)){
var c__4556__auto___25547 = cljs.core.chunk_first(seq__24822_25546__$1);
var G__25548 = cljs.core.chunk_rest(seq__24822_25546__$1);
var G__25549 = c__4556__auto___25547;
var G__25550 = cljs.core.count(c__4556__auto___25547);
var G__25551 = (0);
seq__24822_25536 = G__25548;
chunk__24823_25537 = G__25549;
count__24824_25538 = G__25550;
i__24825_25539 = G__25551;
continue;
} else {
var protocol_25552 = cljs.core.first(seq__24822_25546__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25552)),"}");


var G__25553 = cljs.core.next(seq__24822_25546__$1);
var G__25554 = null;
var G__25555 = (0);
var G__25556 = (0);
seq__24822_25536 = G__25553;
chunk__24823_25537 = G__25554;
count__24824_25538 = G__25555;
i__24825_25539 = G__25556;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__24826_25557 = cljs.core.seq(fields__$1);
var chunk__24827_25558 = null;
var count__24828_25559 = (0);
var i__24829_25560 = (0);
while(true){
if((i__24829_25560 < count__24828_25559)){
var fld_25561 = chunk__24827_25558.cljs$core$IIndexed$_nth$arity$2(null,i__24829_25560);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25561," = ",fld_25561,";");


var G__25562 = seq__24826_25557;
var G__25563 = chunk__24827_25558;
var G__25564 = count__24828_25559;
var G__25565 = (i__24829_25560 + (1));
seq__24826_25557 = G__25562;
chunk__24827_25558 = G__25563;
count__24828_25559 = G__25564;
i__24829_25560 = G__25565;
continue;
} else {
var temp__5735__auto___25566 = cljs.core.seq(seq__24826_25557);
if(temp__5735__auto___25566){
var seq__24826_25567__$1 = temp__5735__auto___25566;
if(cljs.core.chunked_seq_QMARK_(seq__24826_25567__$1)){
var c__4556__auto___25568 = cljs.core.chunk_first(seq__24826_25567__$1);
var G__25569 = cljs.core.chunk_rest(seq__24826_25567__$1);
var G__25570 = c__4556__auto___25568;
var G__25571 = cljs.core.count(c__4556__auto___25568);
var G__25572 = (0);
seq__24826_25557 = G__25569;
chunk__24827_25558 = G__25570;
count__24828_25559 = G__25571;
i__24829_25560 = G__25572;
continue;
} else {
var fld_25573 = cljs.core.first(seq__24826_25567__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25573," = ",fld_25573,";");


var G__25574 = cljs.core.next(seq__24826_25567__$1);
var G__25575 = null;
var G__25576 = (0);
var G__25577 = (0);
seq__24826_25557 = G__25574;
chunk__24827_25558 = G__25575;
count__24828_25559 = G__25576;
i__24829_25560 = G__25577;
continue;
}
} else {
}
}
break;
}

var seq__24830_25578 = cljs.core.seq(pmasks);
var chunk__24831_25579 = null;
var count__24832_25580 = (0);
var i__24833_25581 = (0);
while(true){
if((i__24833_25581 < count__24832_25580)){
var vec__24840_25582 = chunk__24831_25579.cljs$core$IIndexed$_nth$arity$2(null,i__24833_25581);
var pno_25583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24840_25582,(0),null);
var pmask_25584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24840_25582,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25583,"$ = ",pmask_25584,";");


var G__25585 = seq__24830_25578;
var G__25586 = chunk__24831_25579;
var G__25587 = count__24832_25580;
var G__25588 = (i__24833_25581 + (1));
seq__24830_25578 = G__25585;
chunk__24831_25579 = G__25586;
count__24832_25580 = G__25587;
i__24833_25581 = G__25588;
continue;
} else {
var temp__5735__auto___25589 = cljs.core.seq(seq__24830_25578);
if(temp__5735__auto___25589){
var seq__24830_25590__$1 = temp__5735__auto___25589;
if(cljs.core.chunked_seq_QMARK_(seq__24830_25590__$1)){
var c__4556__auto___25591 = cljs.core.chunk_first(seq__24830_25590__$1);
var G__25592 = cljs.core.chunk_rest(seq__24830_25590__$1);
var G__25593 = c__4556__auto___25591;
var G__25594 = cljs.core.count(c__4556__auto___25591);
var G__25595 = (0);
seq__24830_25578 = G__25592;
chunk__24831_25579 = G__25593;
count__24832_25580 = G__25594;
i__24833_25581 = G__25595;
continue;
} else {
var vec__24843_25596 = cljs.core.first(seq__24830_25590__$1);
var pno_25597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24843_25596,(0),null);
var pmask_25598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24843_25596,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25597,"$ = ",pmask_25598,";");


var G__25599 = cljs.core.next(seq__24830_25590__$1);
var G__25600 = null;
var G__25601 = (0);
var G__25602 = (0);
seq__24830_25578 = G__25599;
chunk__24831_25579 = G__25600;
count__24832_25580 = G__25601;
i__24833_25581 = G__25602;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__24846){
var map__24847 = p__24846;
var map__24847__$1 = (((((!((map__24847 == null))))?(((((map__24847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24847):map__24847);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__24849_25603 = cljs.core.seq(protocols);
var chunk__24850_25604 = null;
var count__24851_25605 = (0);
var i__24852_25606 = (0);
while(true){
if((i__24852_25606 < count__24851_25605)){
var protocol_25607 = chunk__24850_25604.cljs$core$IIndexed$_nth$arity$2(null,i__24852_25606);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25607)),"}");


var G__25608 = seq__24849_25603;
var G__25609 = chunk__24850_25604;
var G__25610 = count__24851_25605;
var G__25611 = (i__24852_25606 + (1));
seq__24849_25603 = G__25608;
chunk__24850_25604 = G__25609;
count__24851_25605 = G__25610;
i__24852_25606 = G__25611;
continue;
} else {
var temp__5735__auto___25612 = cljs.core.seq(seq__24849_25603);
if(temp__5735__auto___25612){
var seq__24849_25613__$1 = temp__5735__auto___25612;
if(cljs.core.chunked_seq_QMARK_(seq__24849_25613__$1)){
var c__4556__auto___25614 = cljs.core.chunk_first(seq__24849_25613__$1);
var G__25615 = cljs.core.chunk_rest(seq__24849_25613__$1);
var G__25616 = c__4556__auto___25614;
var G__25617 = cljs.core.count(c__4556__auto___25614);
var G__25618 = (0);
seq__24849_25603 = G__25615;
chunk__24850_25604 = G__25616;
count__24851_25605 = G__25617;
i__24852_25606 = G__25618;
continue;
} else {
var protocol_25619 = cljs.core.first(seq__24849_25613__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25619)),"}");


var G__25620 = cljs.core.next(seq__24849_25613__$1);
var G__25621 = null;
var G__25622 = (0);
var G__25623 = (0);
seq__24849_25603 = G__25620;
chunk__24850_25604 = G__25621;
count__24851_25605 = G__25622;
i__24852_25606 = G__25623;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__24853_25624 = cljs.core.seq(fields__$1);
var chunk__24854_25625 = null;
var count__24855_25626 = (0);
var i__24856_25627 = (0);
while(true){
if((i__24856_25627 < count__24855_25626)){
var fld_25628 = chunk__24854_25625.cljs$core$IIndexed$_nth$arity$2(null,i__24856_25627);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25628," = ",fld_25628,";");


var G__25629 = seq__24853_25624;
var G__25630 = chunk__24854_25625;
var G__25631 = count__24855_25626;
var G__25632 = (i__24856_25627 + (1));
seq__24853_25624 = G__25629;
chunk__24854_25625 = G__25630;
count__24855_25626 = G__25631;
i__24856_25627 = G__25632;
continue;
} else {
var temp__5735__auto___25633 = cljs.core.seq(seq__24853_25624);
if(temp__5735__auto___25633){
var seq__24853_25634__$1 = temp__5735__auto___25633;
if(cljs.core.chunked_seq_QMARK_(seq__24853_25634__$1)){
var c__4556__auto___25635 = cljs.core.chunk_first(seq__24853_25634__$1);
var G__25636 = cljs.core.chunk_rest(seq__24853_25634__$1);
var G__25637 = c__4556__auto___25635;
var G__25638 = cljs.core.count(c__4556__auto___25635);
var G__25639 = (0);
seq__24853_25624 = G__25636;
chunk__24854_25625 = G__25637;
count__24855_25626 = G__25638;
i__24856_25627 = G__25639;
continue;
} else {
var fld_25640 = cljs.core.first(seq__24853_25634__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25640," = ",fld_25640,";");


var G__25641 = cljs.core.next(seq__24853_25634__$1);
var G__25642 = null;
var G__25643 = (0);
var G__25644 = (0);
seq__24853_25624 = G__25641;
chunk__24854_25625 = G__25642;
count__24855_25626 = G__25643;
i__24856_25627 = G__25644;
continue;
}
} else {
}
}
break;
}

var seq__24857_25645 = cljs.core.seq(pmasks);
var chunk__24858_25646 = null;
var count__24859_25647 = (0);
var i__24860_25648 = (0);
while(true){
if((i__24860_25648 < count__24859_25647)){
var vec__24867_25649 = chunk__24858_25646.cljs$core$IIndexed$_nth$arity$2(null,i__24860_25648);
var pno_25650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24867_25649,(0),null);
var pmask_25651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24867_25649,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25650,"$ = ",pmask_25651,";");


var G__25652 = seq__24857_25645;
var G__25653 = chunk__24858_25646;
var G__25654 = count__24859_25647;
var G__25655 = (i__24860_25648 + (1));
seq__24857_25645 = G__25652;
chunk__24858_25646 = G__25653;
count__24859_25647 = G__25654;
i__24860_25648 = G__25655;
continue;
} else {
var temp__5735__auto___25656 = cljs.core.seq(seq__24857_25645);
if(temp__5735__auto___25656){
var seq__24857_25657__$1 = temp__5735__auto___25656;
if(cljs.core.chunked_seq_QMARK_(seq__24857_25657__$1)){
var c__4556__auto___25658 = cljs.core.chunk_first(seq__24857_25657__$1);
var G__25659 = cljs.core.chunk_rest(seq__24857_25657__$1);
var G__25660 = c__4556__auto___25658;
var G__25661 = cljs.core.count(c__4556__auto___25658);
var G__25662 = (0);
seq__24857_25645 = G__25659;
chunk__24858_25646 = G__25660;
count__24859_25647 = G__25661;
i__24860_25648 = G__25662;
continue;
} else {
var vec__24870_25663 = cljs.core.first(seq__24857_25657__$1);
var pno_25664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24870_25663,(0),null);
var pmask_25665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24870_25663,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25664,"$ = ",pmask_25665,";");


var G__25666 = cljs.core.next(seq__24857_25657__$1);
var G__25667 = null;
var G__25668 = (0);
var G__25669 = (0);
seq__24857_25645 = G__25666;
chunk__24858_25646 = G__25667;
count__24859_25647 = G__25668;
i__24860_25648 = G__25669;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__24873){
var map__24874 = p__24873;
var map__24874__$1 = (((((!((map__24874 == null))))?(((((map__24874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24874):map__24874);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24874__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24874__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24874__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24874__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24874__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__24876){
var map__24877 = p__24876;
var map__24877__$1 = (((((!((map__24877 == null))))?(((((map__24877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24877):map__24877);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24877__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24877__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24877__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24877__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24877__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__13752__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13752__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__24883 = cljs.core.seq(table);
var chunk__24884 = null;
var count__24885 = (0);
var i__24886 = (0);
while(true){
if((i__24886 < count__24885)){
var vec__24897 = chunk__24884.cljs$core$IIndexed$_nth$arity$2(null,i__24886);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24897,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24897,(1),null);
var ns_25670 = cljs.core.namespace(sym);
var name_25671 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__25672 = seq__24883;
var G__25673 = chunk__24884;
var G__25674 = count__24885;
var G__25675 = (i__24886 + (1));
seq__24883 = G__25672;
chunk__24884 = G__25673;
count__24885 = G__25674;
i__24886 = G__25675;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24883);
if(temp__5735__auto__){
var seq__24883__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24883__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24883__$1);
var G__25676 = cljs.core.chunk_rest(seq__24883__$1);
var G__25677 = c__4556__auto__;
var G__25678 = cljs.core.count(c__4556__auto__);
var G__25679 = (0);
seq__24883 = G__25676;
chunk__24884 = G__25677;
count__24885 = G__25678;
i__24886 = G__25679;
continue;
} else {
var vec__24900 = cljs.core.first(seq__24883__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24900,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24900,(1),null);
var ns_25680 = cljs.core.namespace(sym);
var name_25681 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__25682 = cljs.core.next(seq__24883__$1);
var G__25683 = null;
var G__25684 = (0);
var G__25685 = (0);
seq__24883 = G__25682;
chunk__24884 = G__25683;
count__24885 = G__25684;
i__24886 = G__25685;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__24904 = arguments.length;
switch (G__24904) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_25687 = cljs.core.first(ks);
var vec__24905_25688 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_25687);
var top_25689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24905_25688,(0),null);
var prefix_SINGLEQUOTE__25690 = vec__24905_25688;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_25687)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__25690) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_25689)) || (cljs.core.contains_QMARK_(known_externs,top_25689)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__25690)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_25689);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__25690)),";");
}
} else {
}

var m_25691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_25687);
if(cljs.core.empty_QMARK_(m_25691)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__25690,m_25691,top_level,known_externs);
}

var G__25692 = cljs.core.next(ks);
ks = G__25692;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

