/** @format */

var app = new Vue({
	el: "#app",
	data: {
		files: "",
	},
	methods: {
		handleFile() {
			this.files = this.$refs.files.files;
		},
		showFileName() {
			if (this.files.length) {
				const file = this.files[0];
				console.log("file", file);
				setTimeout(function () {
					alert(file.name);
				}, 3000);
			} else {
				alert("Selecciona un archivo...");
			}
		},
	},
});
