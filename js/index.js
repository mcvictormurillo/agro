/** @format */

var app = new Vue({
	el: "#app",
	data: {
		files: "",
	},
	methods: {
		handleFileUploads() {
			this.files = this.$refs.files.files;
			const file = this.files[0];
			console.log("file", file);
			setTimeout(function () {
				alert(file.name);
			}, 3000);
		},
	},
});
