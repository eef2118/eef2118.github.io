

$('.button2').on('click', function(){
	$('.button2').text('Thank you! Check your email to confirm.');

});

$(document).ready(function(){
	$(".lavca").show(1500);
});

$(document).ready(function(){
	$("h1").delay(1000).animate({
		"opacity":"1"
	},2800);
	$(".other").delay(1000).animate({
		"opacity":"1"
	},2800);
});




var winH = $(window).height();
var mapSection = $(".map");
$(window).on("scroll", function(){
	var rect = mapSection[0].getBoundingClientRect();
	if (rect.top < (winH / 2)) {
		$(".callout").animate({
			"opacity":".9"
		},1500);  
		// $(".callout-mexico").animate({
		// 	"opacity":".9"
		// },1500);  
		// $(".callout-brazil").animate({
		// 	"opacity":".9"
		// },1500);  
		// $(".callout-argentina").animate({
		// 	"opacity":".9"
		// },1500);  
		// $(".callout-colombia").animate({
		// 	"opacity":".9"
		// },1500);  
		// $(".callout-chile").animate({
		// 	"opacity":".9"
		// },1500); 
		// $(".callout-peru").animate({
		// 	"opacity":".9"
		// },1500);   
		$(".box-1").animate({
			"left":"545px",
			"opacity":".9"
		},1350);  
		$(".brazil-circle").animate({
			"left":"60%",
			"opacity":".9"
		},1350);
		$(".box-2").animate({
			"left":"540px",
			"opacity":".9"
		},1650);  
		$(".mexico-circle").animate({
			"left":"60.5%",
			"opacity":".9"
		},1650);  
		$(".box-3").animate({
			"left":"550px",
			"opacity":".9"
		},1850);  
		$(".argentina-circle").animate({
			"left":"60.75%",
			"opacity":".9"
		},1850);  
		$(".box-4").animate({
			"left":"545px",
			"opacity":".9"
		},1950);  
		$(".colombia-circle").animate({
			"left":"61.5%",
			"opacity":".9"
		},1950);  
		$(".box-5").animate({
			"left":"545px",
			"opacity":".9"
		},2150);  
		$(".chile-circle").animate({
			"left":"61.7%",
			"opacity":".9"
		},2150);
		$(".amount-box").animate({
			"left":"",
			"opacity":"1"
		},2550);
		$(".number-box").animate({
			"right":"",
			"opacity":"1"
		},2550);
	}
});

var winH = $(window).height();
var mapSection = $(".map");
$(window).on("scroll", function(){
	var rect = mapSection[0].getBoundingClientRect();
	if ((rect.top < (winH / 2)) && 
		$(window).width() > 1280)
	{
		$(".callout").animate({
			"opacity":".9"
		},1500);  
		// $(".callout-mexico").animate({
		// 	"opacity":".9"
		// },1500);  
		// $(".callout-brazil").animate({
		// 	"opacity":".9"
		// },1500);  
		// $(".callout-argentina").animate({
		// 	"opacity":".9"
		// },1500);  
		// $(".callout-colombia").animate({
		// 	"opacity":".9"
		// },1500);  
		// $(".callout-chile").animate({
		// 	"opacity":".9"
		// },1500); 
		// $(".callout-peru").animate({
		// 	"opacity":".9"
		// },1500);   
		$(".box-1").animate({
			"left":"780px",
			"opacity":".9"
		},1350);  
		$(".brazil-circle").animate({
			"left":"60%",
			"opacity":".9"
		},1350);
		$(".box-2").animate({
			"left":"780px",
			"opacity":".9"
		},1650);  
		$(".mexico-circle").animate({
			"left":"60.5%",
			"opacity":".9"
		},1650);  
		$(".box-3").animate({
			"left":"780px",
			"opacity":".9"
		},1850);  
		$(".argentina-circle").animate({
			"left":"60.75%",
			"opacity":".9"
		},1850);  
		$(".box-4").animate({
			"left":"780px",
			"opacity":".9"
		},1950);  
		$(".colombia-circle").animate({
			"left":"61.5%",
			"opacity":".9"
		},1950);  
		$(".box-5").animate({
			"left":"780px",
			"opacity":".9"
		},2150);  
		$(".chile-circle").animate({
			"left":"61.7%",
			"opacity":".9"
		},2150);
		$(".amount-box").animate({
			"left":"",
			"opacity":"1"
		},2550);
		$(".number-box").animate({
			"right":"",
			"opacity":"1"
		},2550);
	}
});
		
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
$(btn).on("click", function() {
	modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
$(span).on("click", function() {
	modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
$(window).on("click", function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}  
});

// $(".callout-argentina").hover(
//   function(){
//     $(".argentina-box").animate({
//       "opacity":".9"
//     }, 300);
//   }, function(){
//     $(".argentina-box").animate({
//       "opacity": 0
//     }, 300);
//   }
// );

$('form').on('submit', function(){
	$('input').val('');
	$('input[type="radio"]').prop("checked", false);
});

 var boxName;
$(".callout").hover(
  function(){
    boxName = $(this).attr("data-box");
    $("."+boxName).animate({
      "opacity":".9"
    }, 300);
  }, function(){
    boxName = $(this).attr("data-box");
    $("."+$(this).attr("data-box")).animate({
      "opacity": 0
    }, 300);
  }
);




