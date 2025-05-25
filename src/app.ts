const apiKey = process.env.GOOGLE_MAPS_API_KEY;

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
}

form?.addEventListener('submit',searchAddressHandler);