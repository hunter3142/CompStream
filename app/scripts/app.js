angular.module('compStream', [])
	.controller('StreamListController', function() {
		var streamList = this;

		streamList.providers = [
			{provider: "Hulu", link: "https://www.hulu.com/", price: 5.99, live: false, original: true, sports: false, pricingPackage: false},
			{provider: "Hulu Live", link: "https://www.hulu.com/live-tv", price: 39.99, live: true, original: true, sports: true, pricingPackage: false},
			{provider: "Netflix", link: "https://www.netflix.com/originals",price: 7.99, live: false, original: true, sports: false, pricingPackage: false},
			{provider: "Amazon Prime", link: "https://www.amazon.com/Prime-Video/b?node=2676882011", price: 10.99, live: false, original: true, sports: false, pricingPackage: false},
			{provider: "Youtube TV", link: "https://tv.youtube.com/welcome/", price: 35, live: true, original: false, sports: true, pricingPackage: false},
			{provider: "HD Antenna", link: "https://www.antennasdirect.com/transmitter-locator.html", price: 11.99, live: true, original: false, sports: true, pricingPackage: false}];

		streamList.filteredResults = streamList.providers;

		streamList.filter = "none";

		streamList.updateList = function() {
			var options = {
				live: streamList.liveChecked,
				original: streamList.originalChecked,
				sports: streamList.sportsChecked,
				none: streamList.noneChecked
			}
			options = removeUndefined(options);
			streamList.filteredResults = streamList.filterBy(options);
		}

		var removeUndefined = function(opts) {
			var result = {}
			for(var prop in opts) {
				if (opts[prop]) {result[prop]=opts[prop]}
			}
			if(angular.equals(result, {})) {
				result = {
				live: true,
				original: true,
				sports: true,
			}
			}
			return result;
		}

		streamList.filterBy = function(options) {
			streamList.filteredResults = streamList.providers;
			var filteredArray = [];
			streamList.providers.filter(function(p) {
				var match = false;
				for(opt in options) {
					if(angular.equals(options, {}) || !match && options[opt] == true && p[opt] == options[opt]) {match = true;}
				}
				if(match) {
					filteredArray.push(p)
				}
			})
			return filteredArray
		}

		streamList.pricingPackageTotal = function() {
			var totalPrice = 0;
			for(provider in streamList.providers) {
				var currentProvider = streamList.providers[provider];
				if(currentProvider.pricingPackage) {
					totalPrice += currentProvider.price
				}
			}
			return Math.ceil(totalPrice * 100) / 100
		}
	});
