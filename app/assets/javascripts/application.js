// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

jQuery(window).ready(function(){  
    
  initiate_geolocation();
	
	$("#showdeals").click(function(){
		MYMAP.placeMarkers(clat, clng);
	});
	
	$("#nyc").click(function(){
		MYMAP.placeMarkers(40.714623, -74.006605);
	});
	
	$("#la").click(function(){
		MYMAP.placeMarkers(34.0522222, -118.2427778);
	});
})
