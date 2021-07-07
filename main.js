$(document).ready(function() {
  $('#datatable').dataTable({
    "aLengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
    "iDisplayLength": 5
  }
  );
  
   $("[data-toggle=tooltip]").tooltip();
  
} );
