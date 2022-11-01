(() => {
	const menuBtn = document.querySelector(".cabecalho__menu");
	const menuLateral = document.querySelector(".menu-lateral");

	menuBtn.addEventListener("click", () => {
		menuLateral.classList.toggle("menu-lateral--ativo");
	});
})();
