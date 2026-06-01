import foodImg from '../assets/food.png';
import transportImg from '../assets/transport.png';
import entertainmentImg from '../assets/entertainment.png';
import shoppingImg from '../assets/shopping.png';
import salaryImg from '../assets/salary.png';
import businessImg from '../assets/business.png';
import investmentsImg from '../assets/investments.png';

export const categories = {
  Income: [
    { name: "Salary", icon: salaryImg },
    { name: "Business", icon: businessImg },
    { name: "Investments", icon: investmentsImg },
  ],
  Expense: [
    { name: "Food", icon: foodImg },
    { name: "Transport", icon: transportImg },
    { name: "Entertainment", icon: entertainmentImg },
    { name: "Shopping", icon: shoppingImg },
  ]
};