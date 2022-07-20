export interface Country {
  name: string;
  symbol: string;
  rate: number;
}
export interface Package {
  id: string;
  name: string;
}

export const COUNTRY: Country[] = [
  { name: "Hong Kong", symbol: "HKD", rate: 1 },
  { name: "USA", symbol: "USD", rate: 2 },
  { name: "Australia", symbol: "AUD", rate: 3 },
];

export const PACKAGES: Package[] = [
  { id: "standard", name: "Standard" },
  { id: "safe", name: "Safe" },
  { id: "supper_safe", name: "Super Safe" },
];

export const STANDARD_PRICE = 1000;
