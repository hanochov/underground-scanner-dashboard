export interface Location {
  lat: number;
  lng: number;
}

export interface LocationInfo {
  country: string;
  city: string;
  location: string;
}

export interface ScanEvent {
  id: string;
  timestamp: number;
  location: Location;
  depth: number;
  signalStrength: number;
  type: "metal" | "pipe" | "cavity" | "unknown";
  source: "drone" | "robot" | "manual";
  locationInfo: LocationInfo;
}

export interface NominatimResponse {
  display_name?: string;
  address?: {
    city?: string;
    town?: string;
    village?: string;
    state?: string;
    country?: string;
  };
}
