export interface PizzaOrder {
    orderId: string;
    userName: string;
    userEmail: string;
    type: string; // Or any other property representing the type of pizza
    crustSize: string;
    sauce: string;
    cheese: string;
    toppings: string[];
    totalCost: number;
    status: string;
  }
  