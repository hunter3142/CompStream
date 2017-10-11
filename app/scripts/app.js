angular.module('compStream', [])
	.controller('StreamListController', function() {
		var streamList = this;
		var hulu = {provider: "Hulu", live: true};
		var netflix = {provider: "Netflix", live: false};
		var amazonPrime = {provider: "Amazon Prime", live: false};
		var youtubeTV = {provider: "Youtube TV", live: true};
		var hdAntenna = {provider: "HD Antenna", live: true};

		streamList.providers = [hulu, netflix, amazonPrime, youtubeTV, hdAntenna];
		streamList.liveTV = [hulu, youtubeTV, hdAntenna];
	});
