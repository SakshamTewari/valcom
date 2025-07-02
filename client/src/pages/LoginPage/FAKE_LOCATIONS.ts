const fakeLocations = [
  { coords: { latitude: 37.7749, longitude: -122.4194 } }, // San Francisco
  { coords: { latitude: 34.0522, longitude: -118.2437 } }, // Los Angeles
  { coords: { latitude: 40.7128, longitude: -74.006 } }, // New York
  { coords: { latitude: 51.5074, longitude: -0.1278 } }, // London
  { coords: { latitude: 48.8566, longitude: 2.3522 } }, // Paris
  { coords: { latitude: 35.6895, longitude: 139.6917 } }, // Tokyo
  { coords: { latitude: 28.6139, longitude: 77.209 } }, // Delhi
  { coords: { latitude: -33.8688, longitude: 151.2093 } }, // Sydney
  { coords: { latitude: 55.7558, longitude: 37.6173 } }, // Moscow
  { coords: { latitude: -23.5505, longitude: -46.6333 } }, // São Paulo
];

export const getFakeLocation = (): unknown => {
  return fakeLocations[Math.floor(Math.random() * fakeLocations.length)];
};
