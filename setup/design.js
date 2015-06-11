Experigen.initialize = function () {

    var items = this.resource("items")
    var words = []
    var result = []
    var right_answer = []
	var order_max = 4
	
	var order = Math.floor(Math.random() * (order_max))
	var left = Math.floor(items.length * order / order_max)
	var right = Math.floor(items.length * (order + 1) / order_max) - 1
	
    for(var i = left, count = 0; i < right; i++, count++) {  
        items[i].text = items[i].id + ". " + items[i].text
		words.push(items[i].text.split(/\s*[ ]+\s*/))
        result.push(words[count][0])
        for (var j = 1; j < words[count].length; j++) {
            right_answer.push(words[count][j])
			var new_result = result[result.length - 1] + " " + words[count][j]
            result.push(new_result)
        }
        right_answer.push(i + ". __end__")
        result[result.length - 1] += "<br> Нажмите enter для продолжения..."
    }    
    
    items = items.pairWith("item", result)
    var block1 = [].concat(items)
            .pairWith("right_answer", right_answer)
			.pairWith("view","stimulus.ejs")
			;

	this.addStaticScreen("intro.ejs")
	this.addStaticScreen("agreement.ejs")
    this.addBlock(block1);
	
    
}
