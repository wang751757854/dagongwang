

function getByClass(className,context) {
	context=context || document;
	if (context.getElementsByClassName) {
		return context.getElementsByClassName(className);
	}
	var nodes=context.getElementsByTagName('*'),
			ret=[];
	for (var i=0;i<nodes.length;i++) {
		if (hasClass(nodes[i],className)) ret.push(nodes[i]);
	}
	return ret;
}
function $(id) {
	return document.getElementById(id);
}












