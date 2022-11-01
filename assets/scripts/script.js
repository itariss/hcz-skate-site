(() => {
	const menuBtn = document.querySelector(".cabecalho__menu");
	const menuLateral = document.querySelector(".menu-lateral");

	menuBtn.addEventListener("click", () => {
		console.log("oi");
		menuLateral.classList.toggle("menu-lateral--ativo");
	});
})();
