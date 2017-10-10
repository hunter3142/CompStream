angular.module('compStream', [])
	.controller('StreamListController', function() {
		var streamList = this;
		streamList.providers = [
			{provider: "Hulu"},
			{provider: "Netflix"},
			{provider: "Amazon Prime"},
			{provider: "Youtube TV"},
			{provider: "HD Antenna"}];
	});
