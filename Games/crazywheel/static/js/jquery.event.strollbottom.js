(function() {
	var oldTop = 0;
	var newTop = 0;
	var issetTimer = false;

	function isInBottom($doc){
		return $doc.height() - $doc.scrollTop() - $(window).height() - 1000 <= 0;
	}
	function isDown(){
		return oldTop - newTop < 0;
	}
	
    $.event.special.strollbottom = {
		setAwayBottom : function(){
			var $doc = $(document);
			if($doc.height() - $doc.scrollTop() - $(window).height() <= 0){
				$doc.scrollTop($doc.scrollTop()-20);
			}
		},
        setup: function() {
			var doc = this;
            var $doc = $(doc);
			$(window).bind("scroll", function(event){
				oldTop = newTop;
				newTop = $(window).scrollTop();
				if(isDown() && isInBottom($doc)){
					$doc.trigger("strollbottom");
					if(!issetTimer){
						issetTimer= true;
						setInterval('$.event.special.strollbottom.setAwayBottom()',200);
					}
				}			
			})
		}
    };
})();