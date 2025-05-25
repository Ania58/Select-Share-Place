# Select & Share Place

A simple TypeScript project that allows users to enter an address, fetch its coordinates using the Google Maps Geocoding API, and display the location on a Google Map with a marker.

## Features

- Enter and submit an address
- Uses Google Maps Geocoding API to get coordinates
- Dynamically loads and displays Google Maps
- Places a marker on the selected address

## Setup

1. **Install dependencies**  

```bash
npm install
```

2. **Set up environment variables**  
Create a `.env` file in the root of the project and add your Google Maps API key:

```
GOOGLE_MAPS_API_KEY=your-api-key-here
```

3. **Run the project**  

```bash
npm start
```


## Requirements

- Node.js & npm
- A valid Google Maps API key with Geocoding and Maps JavaScript API enabled

## Notes

- `.env` is included in `.gitignore` to keep your API key private.
