Fancybox.bind("[data-fancybox='gallery']", {
  Carousel: {
    infinite: true,
  },
});

$('.gallery-wrapper').readmore({
  speed: 500,
  lessLink: '<button class="more">Read less</button>',
  collapsedHeight: 438
});

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 50.12377, lng: 28.39105 },
    zoom: 3,
    mapId: '2f084b4895741534',
  });
  const marker = new google.maps.Marker({
    position: { lat: 40.6781, lng: -73.8981 },
    map: map,
    title: "Monticello",
    icon: {
      url: "https://i.postimg.cc/30jd33nS/Pin.png",
      scaledSize: new google.maps.Size(100, 100),
    },
  });
}


