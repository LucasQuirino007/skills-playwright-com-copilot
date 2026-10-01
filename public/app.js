document.getElementById('newsletter-form').addEventListener('submit', (event) => {
	event.preventDefault();
	document.getElementById('newsletter-status').textContent = 'Inscrição confirmada!';
});
