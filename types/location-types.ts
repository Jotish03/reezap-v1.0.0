export interface Location {
  lat: number;
  lng: number;
  description?: string;
}

export interface Origin {
  location: Location;
  description?: string; // Add a description property
}
