(()=>{
	console.log('fired!');

	const name = document.querySelector(".memberInfo h2"),
		  contents = document.querySelector(".detail"),
		  position = document.querySelector(".memberInfo h3"),
		  buttons = document.querySelectorAll(".controlImg button"),
		  memberImg =  document.querySelector(".imageCon"),
		  desicons = document.querySelector("#desIcons"),
		  des = document.querySelector("#hien"),
		  dev = document.querySelector("#other");

	const twoMembers = [
		["Hien Nguyen", `I am aspiring graphic designer and brandeveloper based in London, Ontario, Canada.
		For me, designing is solving visual problems. I work with my team in Fanshawe College to help businesses' visualize their brand identity and reach out to their target audience in the smoothest way. To achieve these, I focus on working closely with teammates to find the best marketing strategy solutions.
		Aside from graphic design, I have expertise in illustration and motion graphic.
		Tools frequently used in my projects:`, `Designer`], 

		["The Other Person", `This is information of the developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Developer`]
		];

	function showBioInfo(){
		arrayIndex = this.dataset.arrayref;
		name.textContent = twoMembers[arrayIndex][0];
		contents.textContent = twoMembers[arrayIndex][1];
		position.textContent = twoMembers[arrayIndex][2];
	}

	function changeImageDes(){
		document.getElementById('defaultImg').src = "images/portrait_1.png";
		desicons.style.visibility='visible';
	}

	function changeImageDev(){
		document.getElementById('defaultImg').src = "images/portrait_2.jpg";
		desicons.style.visibility='hidden';
	}

	buttons.forEach(button => button.addEventListener("click", showBioInfo));
	des.addEventListener("click", changeImageDes);
	dev.addEventListener("click", changeImageDev);
})();
