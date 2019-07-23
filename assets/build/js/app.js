(function() {
    // Dropdowns
    var $dropdowns = document.querySelectorAll('.dropdown:not(.is-hoverable)');

    if ($dropdowns.length > 0) {
        $dropdowns.forEach(function ($el) {
            $el.addEventListener('click', function (event) {
                event.stopPropagation();
                $el.classList.toggle('is-active');
            });
        });

        document.addEventListener('click', function (event) {
            closeDropdowns();
        });
    }

    function closeDropdowns() {
        $dropdowns.forEach(function ($el) {
            $el.classList.remove('is-active');
        });
    }
})();
(function() {
    var offcanvasEl = document.querySelector('.main-offcanvas');

    function isActive() {
        return offcanvasEl && offcanvasEl.classList.contains('main-offcanvas-active');
    }

    function showOffcanvas() {
        offcanvasEl.classList.add('main-offcanvas-active');
    }

    function hideOffcanvas() {
        offcanvasEl.classList.remove('main-offcanvas-active');
    }

    function hideEvent(e) {
        if (!e.target.closest('.main-offcanvas')) {
            hideOffcanvas();
            document.body.removeEventListener('click', hideEvent);
        }
    }

    document.querySelectorAll('[data-offcanvas]').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.stopImmediatePropagation();

            if (offcanvasEl) {
                if (isActive()) {
                    hideEvent();
                } else {
                    showOffcanvas();
                    document.body.addEventListener('click', hideEvent);
                }
            }

            return false;
        });
    });
})();

(function() {

})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLXRvZ2dsZS5qcyIsIm9mZmNhbnZhcy5qcyIsInNjcmlwdHMuanMiLCJzZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBEcm9wZG93bnNcclxuICAgIHZhciAkZHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duOm5vdCguaXMtaG92ZXJhYmxlKScpO1xyXG5cclxuICAgIGlmICgkZHJvcGRvd25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAkZHJvcGRvd25zLmZvckVhY2goZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICAgICAgICAkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgJGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY2xvc2VEcm9wZG93bnMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZURyb3Bkb3ducygpIHtcclxuICAgICAgICAkZHJvcGRvd25zLmZvckVhY2goZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICAgICAgICAkZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG9mZmNhbnZhc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tb2ZmY2FudmFzJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBY3RpdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG9mZmNhbnZhc0VsICYmIG9mZmNhbnZhc0VsLmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1vZmZjYW52YXMtYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd09mZmNhbnZhcygpIHtcclxuICAgICAgICBvZmZjYW52YXNFbC5jbGFzc0xpc3QuYWRkKCdtYWluLW9mZmNhbnZhcy1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlT2ZmY2FudmFzKCkge1xyXG4gICAgICAgIG9mZmNhbnZhc0VsLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tb2ZmY2FudmFzLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVFdmVudChlKSB7XHJcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcubWFpbi1vZmZjYW52YXMnKSkge1xyXG4gICAgICAgICAgICBoaWRlT2ZmY2FudmFzKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vZmZjYW52YXNdJykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob2ZmY2FudmFzRWwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dPZmZjYW52YXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGUtc2VhcmNoXScpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNlYXJjaC1tb2RhbCcpLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXNlYXJjaC1tb2RhbCBpbnB1dFt0eXBlPVwic2VhcmNoXCJdJykuZm9jdXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1zZWFyY2gtbW9kYWwgLm1vZGFsLWNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zZWFyY2gtbW9kYWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxufSkoKTsiXX0=