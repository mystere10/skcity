import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

console.log(process.env.REACT_APP_FLUTTER_WAVE_PUBLIC_KEY);

export default function App() {
  const config = {
    public_key: process.env.REACT_APP_FLUTTER_WAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: "RWF",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "Nkunzi Innocent",
    },
    customizations: {
      title: "Sneaker City",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Click to pay
      </button>
    </div>
  );
}
