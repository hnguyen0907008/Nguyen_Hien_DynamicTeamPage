(()=>{
	console.log('fired!');

	const name = document.querySelector(".memberInfo h2"),
		  contents = document.querySelector(".detail"),
		  buttons = document.querySelectorAll(".controlImg button"),
		  memberImg =  document.querySelector(".imageCon");
		  des = document.querySelector("#hien");
		  dev = document.querySelector("#other");

	const twoMembers = [
		["Hien Nguyen", `Info 1: orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam faucibus purus in massa tempor nec. Quam id leo in vitae turpis massa sed elementum tempus. Magna eget est lorem ipsum. Sed odio morbi quis commodo odio aenean. Egestas congue quisque egestas diam in arcu cursus euismod quis. Condimentum lacinia quis vel eros donec ac odio tempor orci. Urna nec tincidunt praesent semper feugiat nibh. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Enim neque volutpat ac tincidunt vitae. Nibh nisl condimentum id venenatis. Risus ultricies tristique nulla aliquet enim tortor at auctor. Arcu vitae elementum curabitur vitae nunc sed. Sed augue lacus viverra vitae congue. Viverra nibh cras pulvinar mattis nunc sed blandit. Sagittis purus sit amet volutpat. Ac ut consequat semper viverra. Nullam non nisi est sit amet. Consectetur a erat nam at lectus urna duis.`, `images/portrait_bw.jpg`], 

		["The Other Person", `Info 2: Sed felis eget velit aliquet sagittis id consectetur purus. Felis donec et odio pellentesque. Sed libero enim sed faucibus turpis in eu mi bibendum. Imperdiet sed euismod nisi porta lorem mollis aliquam. Egestas pretium aenean pharetra magna. Semper eget duis at tellus at urna condimentum mattis pellentesque. Turpis massa tincidunt dui ut ornare. Viverra aliquet eget sit amet tellus cras adipiscing enim. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Duis ut diam quam nulla. Mi proin sed libero enim sed.`, `images/portrait2_bw.jpg`]
		];

	function showBioInfo(){
		arrayIndex = this.dataset.arrayref;
		name.textContent = twoMembers[arrayIndex][0];
		contents.textContent = twoMembers[arrayIndex][1];
	}

	function changeImageDes(){
		document.getElementById('defaultImg').src = "images/portrait_bw.jpg";
	}

	function changeImageDev(){
		document.getElementById('defaultImg').src = "images/portrait_bw2.jpg";
	}

	buttons.forEach(button => button.addEventListener("click", showBioInfo));
	des.addEventListener("click", changeImageDes);
	dev.addEventListener("click", changeImageDev);
})();