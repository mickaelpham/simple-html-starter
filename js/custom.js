// self-invoking anonymous function
(function (window, document) {

  var searchForm = document.getElementById('search-form');
  var searchInput = document.getElementById('search-input');
  var placeholder = document.getElementById('placeholder');

  searchForm.onkeydown = function (ev) {
    var e = ev || event;
    if (e.keyCode === 13) {
      e.preventDefault();
      placeholder.innerHTML += searchInput.value + '<br>';
      searchInput.value = '';
      searchInput.focus();
    }
  };

}(this, this.document));