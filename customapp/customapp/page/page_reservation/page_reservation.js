frappe.pages['page-reservation'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Room Availablability Data :',
		single_column: true
	});
	$(frappe.render_template ("page_reservation",{})).appendTo(page.body);
	
// let resrvation_id = page.add_field(
// 	{
// 		label: "Reservation ID",
// 		fieldname: "naming_series",
// 		fieldtype: "Select",
// 		options: "RES--.###",
		
// })


}