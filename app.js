const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		}
	});
});

const observerTranslate = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show_2");
		}
	});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const zoomElements = document.querySelectorAll(".hidden_2");
zoomElements.forEach((el) => observerTranslate.observe(el));

document.addEventListener("DOMContentLoaded", () => {
	// Seleccionamos todas las imágenes con la clase "clickable-img"
	const images = document.querySelectorAll(".clickable-img");

	images.forEach((img) => {
		img.addEventListener("click", () => {
			// Verificamos el tamaño actual y alternamos entre grande y original
			if (img.style.height === "650px") {
				img.style.height = "550px"; // Tamaño original
			} else {
				img.style.height = "650px"; // Se agranda
			}
		});
	});
});
