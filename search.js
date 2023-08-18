$(document).ready(function() {
    const searchInput = $('#loc');
    const searchResults = $('#searchResults'); // Display suggestions here

    function filterCities(query) {
        query = query.toLowerCase();
        const matchingCities = [];

        for (const state in indianLocations) {
            const cities = indianLocations[state];
            const matchingStateCities = cities.filter(city => city.toLowerCase().includes(query));
            matchingCities.push(...matchingStateCities.map(city => `${city}, ${state}`));
        }

        return matchingCities;
    }

    function updateSearchResults(query) {
        searchResults.html('');

        if (!query) {
            return;
        }

        const matchingCities = filterCities(query);

        if (matchingCities.length === 0) {
            searchResults.html('No matching cities found.');
            return;
        }

        $.each(matchingCities, function(_, city) {
            const resultItem = $('<div>').text(city);
            searchResults.append(resultItem);
        });
    }

    searchInput.on('input', function() {
        const query = searchInput.val().trim();
        updateSearchResults(query);
    });
});
