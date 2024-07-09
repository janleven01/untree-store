"use client";

import { useState } from "react";

type PaymentProps = {
  label: string;
  content: string;
};

const Payment = ({ label, content }: PaymentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevStat) => !prevStat);
  };

  return (
    <div key={label}>
      <div className="border p-3">
        <button onClick={() => handleClick()} className="payment_button">
          {label}
        </button>
        <p
          className={`payment_content
            ${isOpen ? "max-h-40" : "max-h-0"}
        `}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Payment;
