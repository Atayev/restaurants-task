interface Restaurant {
    available_tables: number;
    category: string;
    createdAt: number;
    hours: string[];
    id: string;
    image: string;
    name: string;
    description: string;
  }
  
interface Reservation { 
    "restaurant_id": string,
    "time": string,
    "date": string,
    "reservation_id": string,
    "id": string,
    "guests": number
}