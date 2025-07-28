export type ScanStatus = "warning" | "active" | "inactive";
export type ScanType = "metal" | "pipe" | "tunnel" | "mine";
export type ScanSource = "drone" | "robot" | "manual";

export interface Location {
  lat: number;
  lng: number;
}

export interface LocationInfo {
  country: string;
  city: string;
  displayName: string;
}

export interface ScanEvent {
  id: string;
  timestamp: string;
  location: Location;
  depth: number;
  signalStrength: number;
  status: ScanStatus;
  type: ScanType;
  source: ScanSource;
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
