zsimpleCart.ready(function() {
  simpleCart.each(function(item, x) {
    $('form').append('<input type="hidden" name="' + item.get('id') + ' Name" value="' + item.get('name') + '">');
    $('form').append('<input type="hidden" name="' + item.get('id') + ' Wrna" value="' + item.get('warna') + '">');
    $('form').append('<input type="hidden" name="' + item.get('id') + ' Varian" value="' + item.get('varian') + '">');
    $('form').append('<input type="hidden" name="' + item.get('id') + ' Qty" value="' + item.get('quantity') + '">');
    $('form').append('<input type="hidden" name="' + item.get('id') + ' Price" value="' + item.get('price') + '">');
    $('form').append('<input type="hidden" name="' + item.get('id') + ' Total" value="' + item.get('total') + '">');
  });
});