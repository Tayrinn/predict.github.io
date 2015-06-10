Experigen.initialize = function () {

    var frames = this.resource("frames");
    var block1 = []
            .concat(frames)
			.pairWith("view","stimulus.ejs")
			;

	this.addStaticScreen("intro.ejs");
    this.addBlock(block1);
    this.addStaticScreen("demographic.ejs");
	this.addStaticScreen("finalthanks.ejs");

}
