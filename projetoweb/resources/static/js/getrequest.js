$( document ).ready(function() {
	
	// GET REQUEST
	$("#allUsers").click(function(event){
		event.preventDefault();
		ajaxGet();
	});
	
	// DO GET
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : "/api/users/all",
			success: function(result){
				$.each(result, function(i, customer){
          
					var customerRow = '<tr>' +
							  '<td>' + customer.id + '</td>' +
							  '<td>' + customer.content + '</td>' + 
							  '</tr>';
					
					$('#customerTable tbody').append(customerRow);
					
					  });
				  
				  $( "#customerTable tbody tr:odd" ).addClass("info");
				  $( "#customerTable tbody tr:even" ).addClass("success");
				},
			error : function(e) {
				$("#getResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
	}
})