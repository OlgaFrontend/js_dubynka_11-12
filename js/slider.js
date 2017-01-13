;(function($) {
	
	$.fn.carousel = function() {

		var left = $('.carousel-arrow-left');
		var right = $('.carousel-arrow-right');

		var elementList = $('.carousel-list');

		var pixelOffset = 150;
		var currentLeftValue = 0;
		var elementsCount = elementList.find('li').length;
		var minimumOffset = - ((elementsCount - 4) * pixelOffset);
		var maximumOffset = 0;

		function goLeft () {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += pixelOffset;
				elementList.animate({left: currentLeftValue + "px"}, 500);
			}
		}

		function goRight () {
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= pixelOffset;
				elementList.animate({left: currentLeftValue + "px"}, 500);
			}
		}

		right.on('click', goRight);
		left.on('click', goLeft);
		
		return this;
	}


}) (jQuery);









// $(document).ready(function() {
//     var leftUIEl = $('.carousel-arrow-left');
//     var rightUIEl = $('.carousel-arrow-right');
//     var elementsList = $('.carousel-list');
 
//     var pixelsOffset = 150;
//     var currentLeftValue = 0;
//     var elementsCount = elementsList.find('li').length;
//     var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
//     var maximumOffset = 0;
 
//     leftUIEl.click(function() {        
//         if (currentLeftValue != maximumOffset) {
//             currentLeftValue += 150;
//             elementsList.animate({ left : currentLeftValue + "px"}, 100);
//         }        
//     });
 
//     rightUIEl.click(function() {        
//         if (currentLeftValue != minimumOffset) {
//             currentLeftValue -= 150;
//             elementsList.animate({ left : currentLeftValue + "px"}, 100);
//         }        
//     });
// });