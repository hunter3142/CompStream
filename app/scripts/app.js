angular.module('compStream', [])
	.controller('StreamListController', function() {
		var streamList = this;

		streamList.providers = [
			{provider: "Hulu", live: true},
			{provider: "Netflix", live: false},
			{provider: "Amazon Prime", live: false},
			{provider: "Youtube TV", live: true},
			{provider: "HD Antenna", live: true}];

		streamList.filteredResults = streamList.providers;

		streamList.updateList = function() {
			var options = {
				live: streamList.liveChecked
			}
			streamList.filteredResults = streamList.filterBy(options);
		}

		streamList.filterBy = function(options) {
			var filteredArray = [];
			streamList.providers.filter(function(p) {
				var match = false;
				for(opt in options) {
					if(!options[opt]) {
						filteredArray = streamList.providers;
					} else if(!match && p[opt] == options[opt]) {match = true;}
				}
				if(match) {
					filteredArray.push(p)
				}
			})
			return filteredArray
		}
	});
