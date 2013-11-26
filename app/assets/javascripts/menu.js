var Menu = {
  init: function() {
    $('a.new-menu').on('click', this.toggleMenuForm);

    $('ul.menus').find('a').on('click', this.toggleMenuItemForm);

    $('form#new_menu').on('ajax:success', this.appendMenu);
    $('form#new_menu').on('ajax:error', this.appendErrors);
    $('form#new_item').on('ajax:success', this.appendItem);
    $('form#new_item').on('ajax:error', this.appendErrors);
  },

  toggleMenuForm: function(e) {
    e.preventDefault();
    $('form#new_menu').toggleClass('hidden');
  },

   toggleMenuItemForm: function(e) {
    e.preventDefault();
    console.log("hello");
    console.log(this);
    $(this).siblings('#hiddenshit').toggleClass('hidden');

  },

  appendMenu: function(event, data, status, xhr) {
    console.log(this)
    $('ul.menus').append(data.menu_template);
    console.log(data)
  },

  appendErrors: function(event, xhr, status, error) {
    $('ul.menus').before($.parseJSON(xhr.responseText).error);
  },

  appendItem: function(event, xhr, status, error) {
    $('#list-items').append(data.item_template);
    console.log("Inside append item AJAX!");
  }
}

$(document).ready(function() {
  Menu.init();
})
