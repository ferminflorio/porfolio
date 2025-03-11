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
	const images = document.querySelectorAll(".clickable-img");

	images.forEach((img) => {
		img.addEventListener("click", () => {
			if (img.style.transform === "scale(1.2)") {
				img.style.transform = "scale(1)"; // Vuelve al tamaño original
			} else {
				img.style.transform = "scale(1.2)"; // Se agranda
			}
		});
	});
});
