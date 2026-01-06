export interface ClinicLocation {
  id: string;
  name: string;
  address: string;
  image: string;
  mapsUrl: string;
  waUrl: string;
}

export interface Treatment {
  id: string;
  title: string;
  description: string;
  iconName: string; // Mapping to Lucide icon name
}

export interface PriceItem {
  treatment: string;
  price: string;
  note?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}