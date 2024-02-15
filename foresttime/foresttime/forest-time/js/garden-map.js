var iframe = document.createElement('iframe');

// Set attributes for the iframe
iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31662.00731546695!2d36.22539957330316!3d7.269161106272875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17aebd1102952915%3A0xd16b6396b568e9de!2sBonga!5e0!3m2!1sen!2set!4v1706166624088!5m2!1sen!2set";
iframe.width = "600";
iframe.height = "450";
iframe.style.border = "0";
iframe.allowfullscreen = "";
iframe.loading = "lazy";
iframe.referrerpolicy = "no-referrer-when-downgrade";

// Append the iframe to a container element with the id "map-container"
var mapContainer = document.getElementById('map-container');
mapContainer.appendChild(iframe);