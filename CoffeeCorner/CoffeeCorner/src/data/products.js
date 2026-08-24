export const products = [
  // =========================
  // COFFEE
  // =========================

  {
    id: 1,
    name: "Cappuccino",
    category: "coffee",
    price: 180,
    oldPrice: 220,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
    description:
      "Rich espresso combined with steamed milk and a creamy layer of foam.",
    popular: true,
    bestSeller: true,
  },

  {
    id: 2,
    name: "Caffe Latte",
    category: "coffee",
    price: 190,
    oldPrice: 230,
    rating: 4.7,
    reviews: 98,
    image:
      "https://images.pexels.com/photos/6747870/pexels-photo-6747870.jpeg",
    description:
      "Smooth espresso blended with steamed milk for a creamy coffee experience.",
    popular: true,
    bestSeller: true,
  },

  {
    id: 3,
    name: "Mocha",
    category: "coffee",
    price: 210,
    oldPrice: 250,
    rating: 4.9,
    reviews: 156,
    image:
        "https://images.pexels.com/photos/13737035/pexels-photo-13737035.jpeg",
    description:
      "A delicious combination of espresso, chocolate and steamed milk.",
    popular: true,
    bestSeller: false,
  },

  {
    id: 4,
    name: "Cold Coffee",
    category: "beverages",
    price: 160,
    oldPrice: 190,
    rating: 4.6,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    description:
      "Refreshing chilled coffee blended with milk and a touch of sweetness.",
    popular: true,
    bestSeller: true,
  },

  {
    id: 5,
    name: "Hot Chocolate",
    category: "coffee",
    price: 210,
    oldPrice: 250,
    rating: 4.8,
    reviews: 100,
    image:
      "https://images.pexels.com/photos/11043663/pexels-photo-11043663.jpeg",
    description:
      "A warm, rich drink made from melted real chocolate or cocoa powder mixed with milk or water.",
    popular: true,
    bestSeller: true,
  },

  // =========================
  // TEA
  // =========================

  {
    id: 6,
    name: "Masala Chai",
    category: "tea",
    price: 90,
    oldPrice: 110,
    rating: 4.9,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    description:
      "Traditional Indian chai brewed with aromatic spices and fresh milk.",
    popular: true,
    bestSeller: true,
  },

  {
    id: 7,
    name: "Green Tea",
    category: "tea",
    price: 100,
    oldPrice: 120,
    rating: 4.5,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
    description:
      "Light and refreshing green tea prepared from premium tea leaves.",
    popular: false,
    bestSeller: false,
  },

  {
    id: 8,
    name: "Lemon Tea",
    category: "tea",
    price: 85,
    oldPrice: 100,
    rating: 4.6,
    reviews: 63,
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
      
    description:
      "Refreshing black tea infused with fresh lemon and a hint of honey.",
    popular: true,
    bestSeller: false,
  },

  // =========================
  // PIZZA
  // =========================

  {
    id: 9,
    name: "Margherita Pizza",
    category: "pizza",
    price: 299,
    oldPrice: 349,
    rating: 4.7,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    description:
      "Classic pizza topped with tomato sauce, mozzarella and fresh basil.",
    popular: true,
    bestSeller: true,
  },

  {
    id: 10,
    name: "Veggie Supreme Pizza",
    category: "pizza",
    price: 349,
    oldPrice: 399,
    rating: 4.8,
    reviews: 118,
    image:
      "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=800&q=80",
    description:
      "Loaded with fresh vegetables, mozzarella and delicious pizza sauce.",
    popular: true,
    bestSeller: true,
  },

  // =========================
  // BURGERS
  // =========================

  {
    id: 11,
    name: "Classic Veg Burger",
    category: "burger",
    price: 179,
    oldPrice: 210,
    rating: 4.6,
    reviews: 91,
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80",
    description:
      "Crispy vegetable patty with fresh lettuce, tomato and creamy sauce.",
    popular: true,
    bestSeller: false,
  },

  {
    id: 12,
    name: "Cheese Burger",
    category: "burger",
    price: 219,
    oldPrice: 260,
    rating: 4.8,
    reviews: 133,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description:
      "Juicy burger topped with melted cheese, vegetables and special sauce.",
    popular: true,
    bestSeller: true,
  },

  // =========================
  // SNACKS
  // =========================

  {
    id: 13,
    name: "French Fries",
    category: "snacks",
    price: 129,
    oldPrice: 150,
    rating: 4.5,
    reviews: 74,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    description:
      "Golden crispy fries seasoned with our special blend of spices.",
    popular: true,
    bestSeller: false,
  },

  {
    id: 14,
    name: "Garlic Bread",
    category: "snacks",
    price: 149,
    oldPrice: 180,
    rating: 4.7,
    reviews: 88,
    image:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=800&q=80",
    description:
      "Soft baked bread topped with garlic butter and aromatic herbs.",
    popular: false,
    bestSeller: false,
  },

  {
    id: 15,
    name: "Veg Sandwich",
    category: "sandwich",
    price: 159,
    oldPrice: 190,
    rating: 4.6,
    reviews: 69,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    description:
      "Fresh vegetables, cheese and creamy dressing between toasted bread.",
    popular: true,
    bestSeller: false,
  },

  // =========================
  // DESSERTS
  // =========================

  {
    id: 16,
    name: "Chocolate Brownie",
    category: "desserts",
    price: 149,
    oldPrice: 180,
    rating: 4.9,
    reviews: 102,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    description:
      "Rich, fudgy chocolate brownie perfect with a cup of coffee.",
    popular: true,
    bestSeller: true,
  },

  {
    id: 17,
    name: "Cheesecake",
    category: "desserts",
    price: 199,
    oldPrice: 230,
    rating: 4.8,
    reviews: 97,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
    description:
      "Creamy cheesecake with a buttery biscuit base and fresh topping.",
    popular: true,
    bestSeller: false,
  },

   {
    id: 18,
    name: "Tiramisu",
    category: "desserts",
    price: 299,
    oldPrice: 380,
    rating: 4.8,
    reviews: 98,
    image:
      "https://images.pexels.com/photos/37934621/pexels-photo-37934621.jpeg",
    description:
      "An Italian dessert made with coffee-soaked ladyfingers (savoiardi ) covered with a cream of egg yolks, sugar, mascarpone, and cocoa powder.",
    popular: true,
    bestSeller: false,
  },

  // =========================
  // BEVERAGES
  // =========================

  {
    id: 19,
    name: "Strawberry Milkshake",
    category: "beverages",
    price: 189,
    oldPrice: 220,
    rating: 4.7,
    reviews: 83,
    image:
      "https://images.pexels.com/photos/19424569/pexels-photo-19424569.jpeg",
    description:
      "Creamy strawberry milkshake made with fresh strawberries and milk.",
    popular: true,
    bestSeller: false,
  },

  {
    id: 20,
    name: "Chocolate Milkshake",
    category: "beverages",
    price: 179,
    oldPrice: 200,
    rating: 4.7,
    reviews: 79,
    image:
      "https://images.pexels.com/photos/11381485/pexels-photo-11381485.jpeg",
    description:
      "Creamy chocolate milkshake made with dark chocolate and milk.",
    popular: true,
    bestSeller: false,
  },

  {
    id: 21,
    name: "Fresh Mojito",
    category: "beverages",
    price: 149,
    oldPrice: 180,
    rating: 4.6,
    reviews: 71,
    image:
      "https://images.pexels.com/photos/11009216/pexels-photo-11009216.jpeg",
    description:
      "Refreshing mint and lime beverage served chilled with ice.",
    popular: false,
    bestSeller: false,
  },
];

export const categories = [
  "all",
  "coffee",
  "tea",
  "pizza",
  "burger",
  "snacks",
  "sandwich",
  "desserts",
  "beverages",
];