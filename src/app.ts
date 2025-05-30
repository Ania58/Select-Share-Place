const apiKey = process.env.GOOGLE_MAPS_API_KEY;

import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
script.async = true;
document.head.appendChild(script);

script.onload = () => {
  console.log('Google Maps JS loaded');
};


type GoogleGeocodingResponse = {
    results: {geometry: {location: {lat: number, lng: number}}}[];
    status: 'OK' | 'ZERO_RESULTS';
}

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    axios.get<GoogleGeocodingResponse>
    (`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${apiKey}`)
    .then(response => {
        if (response.data.status !== 'OK') {
            throw new Error('Could not fetch location!');
        }
        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
            center: coordinates,
            zoom: 12
        });

        new google.maps.Marker({
            position: coordinates,
            map: map, 
        });
    }).catch(err => {
        alert(err.message);
        console.log(err);
    })
}

form?.addEventListener('submit',searchAddressHandler);