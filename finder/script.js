//Friend

//Alan Changed this

function friend(f_name){
  if(f_name=="justin"){
    fcontacts="<h1> Justin Hardcastle </h1>";
	//fcontacts+="Address:  <br>"
	fcontacts+="Phone Number: 202-555-0188<br>"
	fcontacts+="Mobile Number: 202-555-0100<br>"
	fcontacts+="Email: justin@codes.com:<br>"
	fcontacts+="Put any HTML here, including image tags.<br>"
  }
  
  //function friend(f_name){
  if(f_name=="liz"){
    fcontacts="<h1> Liz Sheridan </h1>";
	//fcontacts+="Address: <br>"
	fcontacts+="Phone Number: 317-555-0105<br>"
	fcontacts+="Mobile Number: 202-555-0153<br>"
	fcontacts+="Email: liz@codes.com:<br>"
	fcontacts+="Put any HTML here, including image tags.<br>"
  }
  
  //function friend(f_name){
  if(f_name=="hannah"){
    fcontacts="<h1> Hannah Anderson </h1>";
	//fcontacts+="Address: <br>"
	fcontacts+="Phone Number: 317-367-9204<br>"
	fcontacts+="Mobile Number: 123-345-8374<br>"
	fcontacts+="Email: hannah@codes.com:<br>"
	fcontacts+="Put any HTML here, including image tags.<br>"
  }
  
  //function friend(f_name){
  if(f_name=="josh"){
    fcontacts="<h1> Joshua Bannister </h1>";
	//fcontacts+="Address: <br>"
	fcontacts+="Phone Number: 317-738-6184<br>"
	fcontacts+="Mobile Number: 364-564-995<br>"
	fcontacts+="Email: joshua@codes.com:<br>"
	fcontacts+="Put any HTML here, including image tags.<br>"
  }
  
  //function friend(f_name){
  if(f_name=="racheal"){
    fcontacts="<h1> Shawn Kays </h1>";
	//fcontacts+="Address: <br>"
	fcontacts+="Phone Number: 316-345-7388<br>"
	fcontacts+="Mobile Number: 344-236-5463<br>"
	fcontacts+="Email: racheal@codes.com:<br>"
	fcontacts+="Put any HTML here, including image tags.<br>"
  }
  
  //function friend(f_name){
  if(f_name=="sara"){
    fcontacts="<h1> Sara Kays </h1>";
	//fcontacts+="Address: <br>"
	fcontacts+="Phone Number: 345-444-6543<br>"
	fcontacts+="Mobile Number: 317-253-4364<br>"
	fcontacts+="Email: sara@codes.com :<br>"
	fcontacts+="Put any HTML here, including image tags.<br>"
  }
  
  //function friend(f_name){
  if(f_name=="logan"){ 
    fcontacts="<h1> Logan Schildknecht </h1>";
	//fcontacts+="Address: <br>"
	fcontacts+="Phone Number: 562-224-464<br>"
	fcontacts+="Mobile Number: 234-343-3436<br>"
	fcontacts+="Email: logan@codes.com :<br>"
	fcontacts+="Put any HTML here, including image tags.<br>"
  }
  
  //function friend(f_name){
  if(f_name=="joseph"){
    fcontacts="<h1> Joseph Booth </h1>";
	//fcontacts+="Address: <br>"
	fcontacts+="Phone Number: 234-235-2342<br>"
	fcontacts+="Mobile Number: 234-235-3333<br>"
	fcontacts+="Email: joseph@codes.com :<br>"
	fcontacts+="Put any HTML here, including image tags.<br>"
  }
  
  //function friend(f_name){
  if(f_name=="katie"){
    fcontacts="<h1> Katie Helou </h1>";
	//fcontacts+="Address: <br>"
	fcontacts+="Phone Number: 234-346-2346<br>"
	fcontacts+="Mobile Number: 234-234-3621<br>"
	fcontacts+="Email: katie@codes.com :<br>"
	fcontacts+="Put any HTML here, including image tags.<br>"
  }
  
  //function friend(f_name){
  if(f_name=="payge"){
    fcontacts="<h1> Payge Gillig </h1>";
	//fcontacts+="Address: <br>"
	fcontacts+="Phone Number: 678-796-6895<br>"
	fcontacts+="Mobile Number: 687-678-5675<br>"
	fcontacts+="Email: payge@codes.com :<br>"
	fcontacts+="Put any HTML here, including image tags.<br>"
  }
  

  
  
  //To add a new friend, add another if statement like this. For example, if you have a friend called alan
  // you would add this section (repeated from above):
  
  if(f_name=="allison"){
    fcontacts="<h1> Allison Lafon </h1>";
	//fcontacts+="Address: <br>"
	fcontacts+="Phone Number: 345-234-5355<br>"
	fcontacts+="Mobile Number: 576-345-3572<br>"
	fcontacts+="Email: allison@codes.com :<br>"
	fcontacts+="Put any HTML here, including image tags.<br>"
  } //End of the repeated section
  
  $('#contacts').html(fcontacts);
}

// End of what Alan changed


function initMap() {
  var justin = {lat: 39.993701, lng: -86.151470}; 
  var liz = {lat: 39.994093, lng: -86.151720};  
  var hannah = {lat: 39.988025, lng: -86.155469};  
  var josh = {lat: 39.980543, lng: -86.066701};  
  var racheal = {lat: 39.981998, lng: -86.156338}; 
  var sara = {lat: 40.010150, lng: -86.067596};  
  var logan = {lat: 39.995687, lng: -86.141831};  
  var joseph = {lat: 39.997085, lng: -86.141324};  
  var katie = {lat: 39.996882, lng: -86.150086};  
  var payge = {lat: 39.985823, lng: -86.211359};  
  var allison = {lat: 39.994277, lng: -86.151475};  
  var carmel = {lat: 39.993696, lng: -86.151456}; 
  //Fill with several fake friends, more then 10.
  
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: carmel
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<img border="0" align="center" src="images/carmel.jpg" onclick="friend(&#x27;carmel&#x27;)">'+
      '</div>'+
      '</div>';
	  
	  //In the content above, the name of the friend that goes after friend( must be enclosed in &#x27;
	  //Because we already have both single and double-quotes in the code, we can't use them around uluru
	  // like this: friend('uluru') or friend("uluru"). So, we have to use HTML entitied to trick our
	  // Javascript into thinking there are quotes there. The HTML entity code for ' is &#x27;. That's
	  // how I got friend(&#x27;uluru&#x27;)  
	  // In short, replace uluru with the name of the friend you're trying to add content for.

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
   });
  
  //var image = 'images/justin.jpg" onclick="friend(&#x27;justin&#x27;)"'
  var marker = new google.maps.Marker({
    position: carmel,
    map: map,
    //icon: image,
    title: 'City of Carmel'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  infowindow.open(map);

  //Friend 1
  
  var contentString1 = '<div id="content">'+ 
          '<img border="0" align="center" src="images/justin.jpg" onclick="friend(&#x27;justin&#x27;)">'+
      '</div>';

  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1,
   });
   
 

  var marker1 = new google.maps.Marker({
    position: justin,
    map: map,
    title: 'Justin Hardcastle'
  });
  marker1.addListener('click', function() {
    infowindow1.open(map, marker1);
  });
  infowindow1.open(map);
  
  
  

 //Friend 2
  
 var contentString2 = '<div id="content">'+ 
          '<img border="0" align="center" src="images/liz.jpg" onclick="friend(&#x27;liz&#x27;)">'+
      '</div>';


  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
   });

  var marker2 = new google.maps.Marker({
    position: liz,
    map: map,
    title: 'Liz Sheridan' 
  });
  marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });
  infowindow2.open(map);
  
  
  

 //Friend 3
  
  var contentString3 = '<div id="content">'+ 
          '<img border="0" align="center" src="images/hannah.jpg" onclick="friend(&#x27;hannah&#x27;)">'+
      '</div>';


  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
   });

  var marker3 = new google.maps.Marker({
    position: hannah,
    map: map,
    title: 'Hannah Anderson'
  });
  marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
  });
  infowindow3.open(map);
  
  
  

 //Friend 4
  
 var contentString4 = '<div id="content">'+ 
          '<img border="0" align="center" src="images/josh.jpg" onclick="friend(&#x27;josh&#x27;)">'+
      '</div>';

  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4,
   });

  var marker4 = new google.maps.Marker({
    position: josh,
    map: map,
    title: 'Joshua Bannister'
  });
  marker4.addListener('click', function() {
    infowindow4.open(map, marker4);
  });
  infowindow4.open(map);
  
  
  


 //Friend 5
  
  var contentString5 = '<div id="content">'+ 
          '<img border="0" align="center" src="images/racheal.jpg" onclick="friend(&#x27;racheal&#x27;)">'+
      '</div>';


  var infowindow5 = new google.maps.InfoWindow({
    content: contentString5,
   });

  var marker5 = new google.maps.Marker({
    position: racheal,
    map: map,
    title: 'Racheal Schinbeckler' 
  });
  marker5.addListener('click', function() {
    infowindow5.open(map, marker5);
  });
  infowindow5.open(map);
  
  
  


 //Friend 6
  
 var contentString6 = '<div id="content">'+ 
          '<img border="0" align="center" src="images/sara.jpg" onclick="friend(&#x27;sara&#x27;)">'+
      '</div>';


  var infowindow6 = new google.maps.InfoWindow({
    content: contentString6,
   });

  var marker6 = new google.maps.Marker({
    position: sara,
    map: map,
    title: 'Sara Kays'
  });
  marker1.addListener('click', function() {
    infowindow6.open(map, marker6);
  });
  infowindow6.open(map);
  
  
  
  
   //Friend 7
  
 var contentString7 = '<div id="content">'+ 
          '<img border="0" align="center" src="images/logan.jpg" onclick="friend(&#x27;logan&#x27;)">'+
      '</div>';


  var infowindow7 = new google.maps.InfoWindow({
    content: contentString7,
   });

  var marker7 = new google.maps.Marker({
    position: logan,
    map: map,
    title: 'Logan Schildknecht'
  });
  marker7.addListener('click', function() {
    infowindow7.open(map, marker7);
  });
  infowindow7.open(map);
  
  
  

 //Friend 8
  
 var contentString8 = '<div id="content">'+ 
          '<img border="0" align="center" src="images/joseph.jpg" onclick="friend(&#x27;joseph&#x27;)">'+
      '</div>';


  var infowindow8 = new google.maps.InfoWindow({
    content: contentString8,
   });

  var marker8 = new google.maps.Marker({
    position: joseph,
    map: map,
    title: 'Joesph Booth'
  });
  marker8.addListener('click', function() {
    infowindow8.open(map, marker8);
  });
  infowindow8.open(map);
  
  
  

 //Friend 9
  
 var contentString9 = '<div id="content">'+ 
          '<img border="0" align="center" src="images/katie.jpg" onclick="friend(&#x27;katie&#x27;)">'+
      '</div>';


  var infowindow9 = new google.maps.InfoWindow({
    content: contentString9,
   });

  var marker9 = new google.maps.Marker({
    position: katie,
    map: map,
    title: 'Katie Helou'
  });
  marker9.addListener('click', function() {
    infowindow9.open(map, marker9);
  });
  infowindow9.open(map);
  
  
  

 //Friend 10
  
  var contentString10 = '<div id="content">'+ 
          '<img border="0" align="center" src="images/payge.jpg" onclick="friend(&#x27;payge&#x27;)">'+
      '</div>';


  var infowindow10 = new google.maps.InfoWindow({
    content: contentString10,
   });

  var marker10 = new google.maps.Marker({
    position: payge,
    map: map,
    title: 'Payge Gillig'
  });
  marker10.addListener('click', function() {
    infowindow10.open(map, marker10);
  });
  infowindow10.open(map);
  
  
  

 //Friend 11
  
  var contentString11 = '<div id="content">'+ 
          '<img border="0" align="center" src="images/allison.jpg" onclick="friend(&#x27;allison&#x27;)">'+
      '</div>';

  var infowindow11 = new google.maps.InfoWindow({
    content: contentString11,
   });

  var marker11 = new google.maps.Marker({
    position: allison,
    map: map,
    title: 'Allison Lafon'
  });
  marker11.addListener('click', function() {
    infowindow11.open(map, marker11);
  });
  infowindow11.open(map);
  
  
  

  
  
  }
  






   
