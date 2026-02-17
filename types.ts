
export enum Condition {
  NEW = 'NEW',
  USED = 'USED',
  REFURBISHED = 'REFURBISHED'
}

export interface Product {
  id: string;
  name: string;
  model: string;
  storage: string;
  color: string;
  price: number;
  condition: Condition;
  image: string;
  description: string;
  batteryHealth?: number;
  warranty: string;
  isFeatured?: boolean;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface RepairType {
  id: string;
  name: string;
  icon: string;
  estimatedPrice: number;
  duration: string;
  warranty: string;
}

export interface Booking {
  id: string;
  model: string;
  issue: string;
  date: string;
  time: string;
  type: 'walk-in' | 'home-pickup';
  status: 'pending' | 'confirmed' | 'ready';
}
