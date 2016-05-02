$(document).ready(function() {
console.log("hello!");
  $("#p1").click(function() {
    console.log("hello!");
    $("#results").empty();
    $("#results").append(
      '<div class="jumbotron">' +
      '<p>Soma de todos os múltiplos de 3 ou 5, inferiores a 1000:</p>' +
      '<h1>' + p1() + '</h1>' +
      '</div>'
    );
  });

  $("#p2").click(function() {
    $("#results").empty();
    $("#results").append(
      '<div class="jumbotron">' +
      '<p>Soma dos termos pares de uma sequência dew Fibonacci, para termos não maiores que 4 000 000:</p>' +
      '<h1>' + p2() + '</h1>' +
      '</div>'
    );
  });

  $("#p3").click(function() {
    $("#results").empty();
    $("#results").append(
      '<div class="jumbotron">' +
      '<p>O maior factor primo do número 600851475143:</p>' +
      '<h1>' + p3() + '</h1>' +
      '</div>'
    );
  });

});
