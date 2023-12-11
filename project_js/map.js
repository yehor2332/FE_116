let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("googleMap"), {
        center: { lat: 50.26242, lng: 30.31069 },
        zoom: 12,
        mapId: '2f084b4895741534',
    });
    const marker = new google.maps.Marker({
        position: { lat: 47.52225, lng: 35.02204 },
        map: map,
        title: "Monticello",
        icon: {
            url: "https://i.postimg.cc/30jd33nS/Pin.png",
            scaledSize: new google.maps.Size(100, 100),
        },
    });
}