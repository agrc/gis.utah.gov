(function () {
    var options = {
        valueNames: ['name', 'category', 'agency', 'description']
    };

    var filterNode = document.getElementById('filters');
    var togglerNode = document.getElementById('show_filters');
    var datatable = new List('table', options);

    function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }

        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);

        if (!results) {
            return null
        };
        if (!results[2]) {
            return '';
        }

        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    var category = getParameterByName('category');
    if (category) {
        datatable.filter(function (items) {
            return items.values().category === category;
        });
    }

    var filterCategories = function (e) {
        if (!e && !e.target) {
            return;
        }

        var clicked = e.target;
        if ((' ' + clicked.classList + ' ').indexOf('selected-filter') >= 0) {
            clicked.classList.remove('selected-filter');

            datatable.filter(function () {
                return true;
            });

            return;
        }

        var filters = filterNode.querySelectorAll('.filter-item');

        for (var i = 0; i < filters.length; i++) {
            if ((' ' + filters[i].classList + ' ').indexOf('selected-filter') >= 0) {
                filters[i].classList.remove('selected-filter');
            }
        }

        clicked.classList.add('selected-filter');

        var category = clicked.id.split('_')[1];

        if (category) {
            // datatable.search(category, ['category']);
            datatable.filter(function (items) {
                return items.values().category === category;
            });
        }
    };

    var toggleCategories = function () {
        if ((' ' + filterNode.classList + ' ').indexOf('hidden') >= 0) {
            filterNode.classList.remove('hidden');
            togglerNode.innerHTML = 'Hide Filters';
        } else {
            filterNode.classList.add('hidden');
            togglerNode.innerHTML = 'Show Filters';
        }
    };

    filterNode.addEventListener('click', filterCategories);
    togglerNode.addEventListener('click', toggleCategories);
}());
