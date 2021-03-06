({define:typeof define!="undefined"?define:function(deps, factory){module.exports = factory(exports);}}).
define(["exports"], function(exports){
	
	function mapTransform(x,i,fn) {
		// value is curried into fn
		x[i] = fn(x[i]);
		return x;
	}
	
	function mapNew() {
		return {};
	}
	
	exports["new#0"] = mapNew;
	exports["transform#3"] = mapTransform;
	
	return exports;
	
});
