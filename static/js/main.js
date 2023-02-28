let latitude;
let longitude;
let map;
let marker;
let flair;
let title = '';
let desc = '';

const colorCodes = {
    "1" : "red",
    "2" : "orange",
    "3" : "purple",
    "4" : "black",
    "5" : "yellow",
}

function initMap() {
    // Create map
    map = new google.maps.Map(document.getElementById("map"), {
        // Start at Toronto
        center: { lat: 43.6532, lng: -79.3832 },
        zoom: 15,
    });

    // Create marker on click
    google.maps.event.addListener(map, 'click', function(event) {
        if (checkArgs()) {
            latitude = event.latLng.lat();
            longitude = event.latLng.lng();
            if (marker) {
                marker.setMap(null);
            }
            marker = new google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map: map,
            });
            console.log("Latitude: " + latitude + " Longitude: " + longitude);
        }
    });
}

function submitPost() {
    // Get attributes
    title = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    flair = document.getElementById("category").value;

    // Check if empty;
    if (checkArgs()) {
        alert("Done!")
    } else {
        console.log("Not ready");
    }
}

function checkArgs() {
    // Check if empty
    let arguments = [title, desc];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === '') {
            alert("Please fill in all the categories");
            return false;
        }
    }
    return true;
}