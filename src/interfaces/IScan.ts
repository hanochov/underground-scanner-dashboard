export type ScanStatus = "warning" | "active" | "inactive";
export type ScanType = "metal" | "pipe" | "cavity" | "unknown";
export type ScanSource = "drone" | "robot" | "manual";

export interface IScanEvent {
  id: string;
  timestamp: string;
  type: ScanType;
  status: ScanStatus;
  source: ScanSource;
  lat: number;
  lng: number;
  depth: number;
  signal_strength: number;
  country: string;
  city: string;
  display_name: string;
}
