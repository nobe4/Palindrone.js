$(function(){
  $('#palindrone-input').on('keyup', function(){
    $('#palindrone-output').text(
      JSON.stringify(
      palindrone($(this).val())
      , null, '\t')
    );
  });
});
