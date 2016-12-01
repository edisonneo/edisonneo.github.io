$(".main-title h1")
	.blast({ delimiter: "character" , customClass: "weeee" })
	.css("opacity", 0)
	.velocity("transition.fadeIn", { stagger: 50, delay:100, duration: 4000, easing: 'ease-out' })
	.velocity({translateY:"-100px"},1000, 'ease-in-out');