$("input[data-type=search]").keyup(function(e) {
  var value = this.value;
  $("#contacts-table").find("tr").each(function(index) {
    if (!index) return;
    var id = $(this).find("td").text();
    $(this).toggle(id.indexOf(value) !== -1);
  });
});
