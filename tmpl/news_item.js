/* compiled by tp */ ! function() {
	function e(e, n) {
		for(var u in e)
			if(e[u] === n) return !0;
		return !1
	}

	function n(e, n) {
		try {
			return e()
		} catch(u) {
			throw u.message = u.message || "", u.stack = u.stack || "", u.message = n + " : " + u.message + "\r\n    " + u.stack, u
		}
	}

	function u(n, u) {
		if(n) {
			u = u || t;
			for(var i in n) {
				if(e(["func", "push", "model", "buffer"], i)) throw 'Can not expand "' + i + ' function"';
				u[i] = n[i]
			}
		}
	}

	function i(e, n, i) {
		var t = function(e) {
			t.push(e)
		};
		t.push = function(e) {
			t.buffer.push(e)
		};
		for(var s in i) i[s] && u(i[s], t);
		return t.func = e, t.model = null !== n && void 0 != n ? n : "", t.buffer = [], t
	}
	var t = {},
		s = function(e, n) {
			return s.exec(e, n)
		};
	s.src = function(e, n) {
		return e.push("<li id='news_")
		,e.push(this.id)
		,e.push("' class='mui-table-view-cell mui-media'>")
		,e.push("<a href='detail.html?id="),e.push(this.pid)
		,e.push("'"),e.push(" data-guid='")
		,e.push(this.pid)
		,e.push("'> <div class='mui-media-body'>")
		,e.push(this.title)
		,e.push("<p class='mui-ellipsis-2'>"),e.push(this.summary)
		,e.push("</p>")
		,e.push("</div><p class='pt-time'>"),e.push(this.humanize)
		,e.push("</p></a></li>")
		, e.buffer.join("")
	}, s.exec = function(e, u) {
		u = u || {};
		var t = i(s, e, [u.extend]);
		return n(function() {
			return t.result = t.func.src.call(t.model, t, t.model) || "", u.returnHandler ? t : t.result
		}, "Template execute error")
	}, s.engine = "tp 3.7.0", "undefined" != typeof exports && (module.exports = s), "undefined" != typeof define && define.amd && define("news_item", [], function() {
		return s
	}), "undefined" != typeof window && (window.news_item = s)
}();