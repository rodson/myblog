var title = document.getElementById('myHeading').innerHTML;
alert(title);
The purpose of jQuery is to make it much easier to use JavaScript on your website.
This is to prevent any jQuery code from running before the document is finished loading (is ready).
// Basic syntax is:
$(selector).action()

// A $ sign to define/access jQuery
// A (selector) to "query (or find)" HTML elements
// A jQuery action() to be performed on the element(s)

$(function() {
  $.ajax({
    type: 'GET',
    url: '/api/orders',
    success: function(data) {
      console.log('success', data);
    },
    error: function(err) {
      console.log('error', err);
    }
  })
});
