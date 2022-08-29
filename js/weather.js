const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You Live in", lat, lng);
};

const onGeoError = () => {
  alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
