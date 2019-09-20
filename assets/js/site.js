
function makeTextLarger(obj) {
    obj.style.fontSize = "30px";
}


function makeTextSmaller(obj) {
            obj.style.fontSize = "10px";

        

 var content =
                "<h2>What is HTML?</h2>" +
                "<p>HTML is a markup language for describing web documents.</p>" +
                "<ul>" +
                "<li>HTML stands for Hyper Text Markup Language</li>" +
                "<li>A markup language is a set of markup tags</li>" +
                "<li>HTML documents are described by HTML tags</li>" +
                "<li>Each HTML tag describes different document content</li>" +
                "</ul>" +
                "<p>www.w3schools.com</p>";

            var w = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

            var h = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight;

             //The browser window (the browser viewport) is NOT including toolbars and scrollbars.
            document.getElementById("wndw").innerHTML = "Browser viewport window width: " + w + ", height: " + h + ".";
             //The screen.width property returns the width of the visitor's screen in pixels.
            document.getElementById("scrn").innerHTML = "Screen width: " + screen.width + ", screen height: " + screen.height;
             //The screen.availWidth property returns the width of the visitor's screen, in
             //pixels, minus interface features like the Windows Taskbar.
            document.getElementById("avail").innerHTML = "Available Screen Width: " + screen.availWidth + "px";
             //Display the href (URL) of the current page:
            document.getElementById("url").innerHTML = "Page location is " + window.location.href;
            // Display the name of the host:
            document.getElementById("hst").innerHTML = "Page hostname is " + window.location.hostname;
            // Display the path name of the current URL
            document.getElementById("pth").innerHTML = "Page path is " + window.location.pathname;


            document.getElementById("mydiv").innerHTML = content;
            document.getElementById("mydiv").style = "color:blue; background-color:lightgrey;";
            document.getElementById("mydiv").className = "btn-primary";
        
}

 //Load a new document
function loadGoogle() {
    window.location.assign("http://www.google.com.au")
}

 //An alert box is used to make sure information comes through to the user
function alertFunc() {
    alert("Hello, World!");
}

// A confirm box is used if you want the user to verify or accept something
function confirmFunc() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("cnfrm").innerHTML = txt;
}

// A prompt box is often used for user to input a value before entering a page.
function promptFunc() {
    var txt;
    var mark = prompt("Enter your mark", "00");
    if (mark == null || mark == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Your mark is " + mark;
    }
    document.getElementById("prmpt").innerHTML = txt;
}



// Declare a variable for map
var map;
// Get lattitude and longitude of Canberra Centre
var canberraCentre = new google.maps.LatLng(-35.312465, 149.130410);
// Initialise the map
function initMap() {
    // Define the properties for Canberra Centre map
    var canberraMap = {
        center: canberraCentre,
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };



    // Create a map object for Canberra Centre 
    // using canberraMap and the <div> element with id="googleMap"
    map = new google.maps.Map(
        document.getElementById("googleMap"), canberraMap);

    // Add markers below this line

    //addCanberraCentreMarker(map);
    //addIbmHeadquarterLocation(map);
    //addAmazanHLMarker(map);


    addIBM(map);
    addAmazon(map);
    addGoogle(map);
    addOracle(map);
    addMicrosoft(map);
    addSAS(map);
}


// Fuction ---1----////////////
// Add other functions below this line
function addGoogle(map) {
    var googleHQ =
        new google.maps.LatLng(37.422113, -122.083680);
    var markergoogleHQ = new google.maps.Marker({
        position: googleHQ,
    });
    markergoogleHQ.setMap(map);

    var contentgoogleHQ =
        ' <h3>Google Headquarters</h3>' +
        ' <img src="../assets/images/maps/google-map.jpg " ' +

        ' style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Google</b> Search the worlds information, including webpages, images, videos and more.' +
        'Google has many special features to help you find exactly what youre looking for. ' +
        'Find local businesses, view maps and get driving directions in Google Maps.<br> ' +
        'Phone number 1-866-246-6453<br>' +
        '<a href="https://www.google.com">Google Website</a>' +
        ' </p>';

    var infogoogleHQ = new google.maps.InfoWindow({
        content: contentgoogleHQ
    });

    google.maps.event.addListener(markergoogleHQ, 'click',
        function () {
            infogoogleHQ.open(map, markergoogleHQ);
        });
}


// Fuction ---2----////////////
// Add other functions below this line
function addMicrosoft(map) {
    var microsoftHQ =
        new google.maps.LatLng(47.6370891183, -122.123);
    var markermicrosoftHQ = new google.maps.Marker({
        position: microsoftHQ,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }
    });

    markermicrosoftHQ.setMap(map);

    var contentmicrosoftHQ =
        ' <h3>Microsoft Headquarters</h3>' +
        ' <img src="../assets/images/maps/microsoft-map.jpg " ' +

        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Microsoft Corporation</b>is an American multinational technology company with headquarters in Redmond, Washington <br>' +
        'It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. <br>' +
        'Phone number 1-866-246-6453<br>' +
        '<a href="https://www.microsoft.com">Microsoft Website</a>' +
        ' </p>';

    var infomicrosoftHQ = new google.maps.InfoWindow({
        content: contentmicrosoftHQ
    });

    google.maps.event.addListener(markermicrosoftHQ, 'click',
        function () {
            infomicrosoftHQ.open(map, markermicrosoftHQ);
        });
}


// Fuction ---3----////////////
// Add other functions below this line
function addAmazon(map) {
    var amazonHQ =
        new google.maps.LatLng(47.615603, -122.339778);
    var markeramazonHQ = new google.maps.Marker({
        position: amazonHQ,
    });

    markeramazonHQ.setMap(map);

    var contentamazonHQ =

        ' <h3>Amazon Headquarters</h3>' +
        ' <img src="../assets/images/maps/amazon-map.jpg " ' +

        'style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Amazon</b> Amazon Electronic Commerce Company  <br />' +
        ' Electronic commerce and cloud computing company  <br /> ' +
        'Phone Number: 1-866-216-1072 <br>' +
        '<a href="https://www.amazon.com">Amazon Website</a>' +
        ' </p>';

    var infoamazonHQ = new google.maps.InfoWindow({
        content: contentamazonHQ
    });

    google.maps.event.addListener(markeramazonHQ, 'click',
        function () {
            infoamazonHQ.open(map, markeramazonHQ);
        });
}


// Fuction ---4----////////////
// Add other functions below this line
function addIBM(map) {
    var ibmHQ =
        new google.maps.LatLng(41.109128, -73.718918);
    var markeribmHQ = new google.maps.Marker({
        position: ibmHQ,
    });

    markeribmHQ.setMap(map);

    var contentibmHQ =

        ' <h3>IBM Corporate Office Headquarters HQ</h3>' +
        ' <img src="../assets/images/maps/IBMMap.jpg " ' +

        'style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>IBM</b> International Business Machines Corp. <br />' +
        'IBM manufactures and markets computer hardware, middleware and software. <br />' +
        'Phone Number: 1-914-499-1900.<br>' +
        '<a href="https://www.ibm.com/us-en/">IBM Website</a>' +
        ' </p>';

    var infoibmHQ = new google.maps.InfoWindow({
        content: contentibmHQ
    });

    google.maps.event.addListener(markeribmHQ, 'click',
        function () {
            infoibmHQ.open(map, markeribmHQ);
        });
}


// Fuction ---5----////////////
// Add other functions below this line
function addOracle(map) {
    var oracleHQ =
        new google.maps.LatLng(37.4852, -122.2364);
    var markeroracleHQ = new google.maps.Marker({
        position: oracleHQ,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
        }
    });

    markeroracleHQ.setMap(map);

    var contentoracleHQ =

        ' <h3>Oracle Corporation Headquarters Office</h3>' +
        ' <img src="../assets/images/maps/oracle-map.jpg " ' +

        'style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Oracle</b> is an American multinational computer technology corporation . <br />' +
        'The headquartered is in Redwood Shores, California.The company sells database software and technology, cloud engineered systems, and enterprise software products <br />' +
        'Phone Number: +1 650-506-7000.<br>' +
        '<a href="https://www.oracle.com/products/">Oracle Website</a>' +
        ' </p>';

    var infooracleHQ = new google.maps.InfoWindow({
        content: contentoracleHQ
    });

    google.maps.event.addListener(markeroracleHQ, 'click',
        function () {
            infooracleHQ.open(map, markeroracleHQ);
        });
}



// Fuction ---6----////////////
// Add other functions below this line
function addSAS(map) {
    var sASHQ =
        new google.maps.LatLng(35.822802, -78.756137);
    var markersASHQ = new google.maps.Marker({
        position: sASHQ,
    });

    markersASHQ.setMap(map);

    var contentsASHQ =

        ' <h3>SAS  Headquarters LocationHQ</h3>' +
        ' <img src="../assets/images/maps/sas-map.jpg " ' +

        'style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>SAS</b> SAS is a statistical software suite developed by SAS Institute<br />' +
        'for advanced analytics, multivariate analysis, business intelligence, criminal investigation, data management, and predictive analytics. <br />' +
        'Phone Number: +1 919-677-8000.<br>' +
        '<a href="https://www.sas.com/en_au/home.html">SAS Website</a>' +
        ' </p>';

    var infosASHQ = new google.maps.InfoWindow({
        content: contentsASHQ
    });

    google.maps.event.addListener(markersASHQ, 'click',
        function () {
            infosASHQ.open(map, markersASHQ);
        });
}

// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initMap);   












////function addCanberraCentreMarker(map) {
////    // Canberra Centre
////    var canberraCentre = new google.maps.LatLng(-35.2792284, 149.1321033);
////    var markerCanberraCentre = new google.maps.Marker({
////        position: canberraCentre,
////    });

////    markerCanberraCentre.setMap(map);

////    var infoCanberraCentre = new google.maps.InfoWindow({
////        content: "Canberra Centre"
////    });

////    google.maps.event.addListener(markerCanberraCentre, 'click', function () {
////        infoCanberraCentre.open(map, markerCanberraCentre);
////    });
////}


//// -----------------Fuction of IBM----------------//
//function addIbmHeadquarterLocation(map) {
//    // IBM Headquarters Location
//    var IbmHeadquarterLocation =
//        new google.maps.LatLng(-35.312465, 149.130410); 
//    var markerIbmHeadquarterLocation = new google.maps.Marker({
//        position: IbmHeadquarterLocation,
//    });

//    markerIbmHeadquarterLocation.setMap(map);

//    var contentIbmHeadquarterLocation =
//        ' <h1>IBM Australia</h1>' +
//        ' <img src="../assets/images/imb-map.jpg" ' +
//        '      style="float:left; width:25%; margin-right:10px;">' +
//        ' <p><b>IBM Heardquarters Location</b>' +
//        'is in Canberra, the capital of Australia.' +
//        'It is located on 28 Sydney Ave, Forrest ACT 2603 ' +
//        '<a href="https://www.ibm.com/au-en_' +
//        'IBM_Australia">IBM Website</a>' +
//        ' </p>';

//    var infoIbmHeadquarterLocation = new google.maps.InfoWindow({
//        content: contentIbmHeadquarterLocation
//    });

//    google.maps.event.addListener(markerIbmHeadquarterLocation, 'click',
//        function () {
//            infoIbmHeadquarterLocation.open(map, markerIbmHeadquarterLocation);
//        });
//}




//// -----------------Fuction of Amazon ----------------//
//function addAmazanHL(map) {
//    // IBM Headquarters Location
//    var AmazanHL =
//        new google.maps.LatLng(-33.872665, 151.207689);  
//    var markerAmazanHL = new google.maps.Marker({
//        position: AmazanHL,
//    });

//    markerAmazanHL.setMap(map);

//    var contentAmazanHL =
//        ' <h1>IBM Australia</h1>' +
//        ' <img src="../assets/images/imb-map.jpg" ' +
//        '      style="float:left; width:25%; margin-right:10px;">' +
//        ' <p><b>IBM Heardquarters Location</b>' +
//        'is in Canberra, the capital of Australia.' +
//        'It is located on 28 Sydney Ave, Forrest ACT 2603 ' +
//        '<a href="https://www.ibm.com/au-en_' +
//        'IBM_Australia">IBM Website</a>' +
//        ' </p>';

//    var infoAmazanHL = new google.maps.InfoWindow({
//        content: AmazanHL
//    });

//    google.maps.event.addListener(AmazanHL, 'click',
//        function () {
//            infoIAmazanHL.open(map, markerAmazanHL);
//        });
//}



////////////////////////

////var markers = [
////    {
////        coords: { lat: 42.4668, lng: -70.9495 },
////        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
////        content: '<h1>Lynn MA</h1>'
////    },
////    {
////        coords: { lat: 42.8584, lng: -70.9300 },
////        content: '<h1>Amesbury MA</h1>'
////    },
////    {
////        coords: { lat: 42.7762, lng: -71.0773 }
////    }
////];

/////////////////////









//    var map;
 
//    var London = new google.maps.LatLng(51.5073509, -0.1277583);
   
//            function initMap() {
              
//                var newyorkMap = {
//        center: London,
//    zoom: 2,
//    mapTypeId: google.maps.MapTypeId.ROADMAP
//};


//map = new google.maps.Map(
//    document.getElementById("googleMap"), newyorkMap);


//addIBM(map);
//addAmazon(map);
//addGoogle(map);
//addCsiro(map);
//addMicrosoft(map);
//addDiis(map);
//}

//            function addDiis(map) {
//                var diisHQ =
//        new google.maps.LatLng(-35.281589, 149.134056);
//                var markerdiisHQ = new google.maps.Marker({
//        position: diisHQ,
//});

//markerdiisHQ.setMap(map);

//var contentdiisHQ =
//                    ' <h3>Department of Industry Innovation and Science</h3>' +
//                    ' <img src="..assets/images/maps/DepartmentOfIndustryInnovationAndScience.jpg" ' +

//    '      style="float:left; width:25%; margin-right:10px;">' +
//                    ' <p><b>DIIS</b> Department of Industry, Innovation and Science ' +
//    'Phone: (02) 6277 7180. ' +
//                    '<a href="https://www.industry.gov.au/">Department of Industry Innovation and Science</a>' +
//                    ' </p>';

//                var infodiisHQ = new google.maps.InfoWindow({
//        content: contentdiisHQ
//});

//google.maps.event.addListener(markerdiisHQ, 'click',
//                    function () {
//        infodiisHQ.open(map, markerdiisHQ);
//    });
//}

//            function addCsiro(map) {
//                var csiroHQ =
//        new google.maps.LatLng(-35.274314, 149.114231);
//                var markercsiroHQ = new google.maps.Marker({
//        position: csiroHQ,
//});

//markercsiroHQ.setMap(map);

//var contentcsiroHQ =
//                    ' <h3>CSIRO Headquarters</h3>' +
//                    ' <img src="..assets/images/maps/CSIROMap.jpg" ' +

//    '      style="float:left; width:25%; margin-right:10px;">' +
//                    ' <p><b>CSIRO</b> Using science and research to solve issues and make a difference to industry, people and the planet. National science agency.<br>' +
//                    'Work with talented people to solve the world’s biggest challenges At CSIRO you can be ….<br> ' +
//                    'Phone number 1300 363 400<br>' +
//                    '<a href="https://www.csiro.au/">CSIRO</a>' +
//                    ' </p>';

//                var infocsiroHQ = new google.maps.InfoWindow({
//                content: contentcsiroHQ
//        });

//        google.maps.event.addListener(markercsiroHQ, 'click',
//                    function () {
//                infocsiroHQ.open(map, markercsiroHQ);
//            });
//    }

//            function addGoogle(map) {
//                var googleHQ =
//                new google.maps.LatLng(37.422113, -122.083680);
//                var markergoogleHQ = new google.maps.Marker({
//                position: googleHQ,
//        });
//                markergoogleHQ.setMap(map); 

//        var contentgoogleHQ =
//                    ' <h3>Google Headquarters</h3>' +
//                    ' <img src="../assets/images/maps/google-map.jpg " ' +

//                    ' style="float:left; width:25%; margin-right:10px;">' +
//                    ' <p><b>Google</b> Search the worlds information, including webpages, images, videos and more.' +
//                    'Google has many special features to help you find exactly what youre looking for. ' +
//                    'Find local businesses, view maps and get driving directions in Google Maps.<br> ' +
//                    'Phone number 1-866-246-6453<br>' +
//                    '<a href="https://www.google.com">Google Website</a>' +
//                    ' </p>';

//                var infogoogleHQ = new google.maps.InfoWindow({
//                        content: contentgoogleHQ
//                });

//                google.maps.event.addListener(markergoogleHQ, 'click',
//                    function () {
//                        infogoogleHQ.open(map, markergoogleHQ);
//                    });
//            }

//            function addMicrosoft(map) {
//                var microsoftHQ =
//                        new google.maps.LatLng(47.651450, -122.132595);
//                var markermicrosoftHQ = new google.maps.Marker({
//                        position: microsoftHQ,
//                });

//                markermicrosoftHQ.setMap(map);

//                var contentmicrosoftHQ =
//                    ' <h3>Microsoft Headquarters</h3>' +
//                    ' <img src="..assets/images/maps/MicrosoftMap.jpg" ' +

//                    '      style="float:left; width:25%; margin-right:10px;">' +
//                    ' <p><b>Microsoft</b> Get one-on-one support from Microsoft’s own experts. They can help with technical issues, getting up and running, and billing questions.. <br>' +
//                    'Contact us How can we help you? The Get Help app in Windows 10 provides fast, free support for Microsoft products. Open Get Help app <br>' +
//                    'Phone number 1-866-246-6453<br>' +
//                    '<a href="https://www.microsoft.com">Microsoft Corporation</a>' +
//                    ' </p>';
        
//                var infomicrosoftHQ = new google.maps.InfoWindow({
//                                content: contentmicrosoftHQ
//                        });
        
//                        google.maps.event.addListener(markermicrosoftHQ, 'click',
//                    function () {
//                                infomicrosoftHQ.open(map, markermicrosoftHQ);
//                            });
//                    }
        
        
        
//            function addAmazon(map) {
//                var amazonHQ =
//                                new google.maps.LatLng(47.615603, -122.339778);
//                var markeramazonHQ = new google.maps.Marker({
//                                position: amazonHQ,
//                        });
        
//                        markeramazonHQ.setMap(map);
        
//                var contentamazonHQ =

//                    ' <h3>Amazon Headquarters</h3>' +
//                    ' <img src="../assets/images/maps/amazan-map.jpg " ' +

//                    'style="float:left; width:25%; margin-right:10px;">' +
//                    ' <p><b>Amazon</b> Amazon Electronic Commerce Company  <br />' +
//                    ' Electronic commerce and cloud computing company  <br /> ' +
//                    'Phone Number: 1-866-216-1072 <br>' +
//                    '<a href="https://www.amazon.com">Amazon Website</a>' +
//                    ' </p>';
            
//                var infoamazonHQ = new google.maps.InfoWindow({
//                                    content: contentamazonHQ
//                            });
            
//                            google.maps.event.addListener(markeramazonHQ, 'click',
//                    function () {
//                                    infoamazonHQ.open(map, markeramazonHQ);
//                                });
//                        }
            
//            function addIBM(map) {
//                var ibmHQ =
//                                    new google.maps.LatLng(41.109128, -73.718918);
//                var markeribmHQ = new google.maps.Marker({
//                                    position: ibmHQ,
//                            });
            
//                markeribmHQ.setMap(map); 
            
//                var contentibmHQ =

//                    ' <h3>IBM Corporate Office Headquarters HQ</h3>' +
//                    ' <img src="../assets/images/maps/IBMMap.jpg " ' +

//                    'style="float:left; width:25%; margin-right:10px;">' +
//                    ' <p><b>IBM</b> International Business Machines Corp. <br />' +
//                    'IBM manufactures and markets computer hardware, middleware and software. <br />' +
//                    'Phone Number: 1-914-499-1900.<br>' +
//                    '<a href="https://www.ibm.com/us-en/">IBM Website</a>' +
//                    ' </p>';
                
//                var infoibmHQ = new google.maps.InfoWindow({
//                                        content: contentibmHQ
//                                });
                
//                                google.maps.event.addListener(markeribmHQ, 'click',
//                    function () {
//                                        infoibmHQ.open(map, markeribmHQ);
//                                    });
//                            }
                
                            
//                            google.maps.event.addDomListener(window, 'load', initMap);
       

