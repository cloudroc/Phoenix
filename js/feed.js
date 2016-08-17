(function($) {
	var parseFeed = function(dstList) {
		var feed = {
			id:'',
			originId:'',
			published:'',
			title: '',
			summary: '',
			content: '',
			cover: '',
			items: []
		};
		dstList.forEach(function(srcItem) {
			feed.items.push({
				id: srcItem.id,
				title: srcItem.title,
				published: srcItem.published,
				originId: srcItem.originId,
				cover: srcItem.cover,
				summary: srcItem.summary.content,
				content: srcItem.content.content
			});
		});
		//feed.items = items;
		return feed;
	};
	$.getFeed = function(url, success, error) {
		error = error || $.noop;
		//console.log(url);
		$.ajax({
			type: "get",
			url: url,
			dataType: 'json',
			success: function(response) {
				if (!response) {
					return error();
				}
				success(parseFeed(response.items));
			},
			error: error
		});
	};
})(mui);