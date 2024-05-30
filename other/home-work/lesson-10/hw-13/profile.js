"use strict";

/**
 * Show user data
 */
(function () {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
        console.warn("No user data found");
        return (window.location.href = "login.html");
    }

    console.log(userData);
})();

/**
 * Show user screen resolution
 */
console.log(`Screen resolution: ${screen.width}x${screen.height}`);

/**
 * Show user's current position
 * @param {GeolocationPosition} pos
 * @returns {void}
 */
async function success(pos) {
    try {
        const geocoder = new google.maps.Geocoder();
        const map = document.querySelector("gmp-map").innerMap;
        const position = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        const response = await geocoder.geocode({ location: position });
        const marker = document.querySelector("gmp-advanced-marker");
        const infoWindow = new google.maps.InfoWindow();
        
        map.setZoom(11);
        map.setCenter(position);
        marker.position = position;
        infoWindow.setContent(response.results[0].formatted_address);
        infoWindow.open({ anchor: marker });
    } catch (e) {
        window.alert(`Geocoder failed due to: ${e}`);
    }
}

navigator.geolocation.getCurrentPosition(
    success, 
    (err) => console.warn(`ERROR(${err.code}): ${err.message}`),
    {enableHighAccuracy: true, timeout: 5000, maximumAge: 0}
);
