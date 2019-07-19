(function () {
    document.querySelectorAll('[data-toggle-search]').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.stopImmediatePropagation();

            document.getElementById('js-search-modal').classList.add('is-active');

            document.querySelector('#js-search-modal input[type="search"]').focus();
        });
    });

    document.querySelector('#js-search-modal .modal-close').addEventListener('click', function (e) {
        e.stopImmediatePropagation();

        document.getElementById('js-search-modal').classList.remove('is-active');
    });

})();