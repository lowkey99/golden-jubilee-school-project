import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={`${isOpen && "text-[#444bcb]"} text-[26px] sm:text-[46px]`}>{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const AboutItem = () => {
  return (
    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
      <div className="space-y-4">
        <Item title="Open Source">
          Fostering an open-source community to spur the development of a robust
          network of financial products and services to help people access and
          use the Solana network.
        </Item>
        <Item title="Decentralization">
          Growing the network by adding more validator nodes and increasing the
          superminority through delegations.
        </Item>
        <Item title="Staking">
          Facilitate staking by providing grants, open source reference
          implementations, and community support.
        </Item>
      </div>
    </div>
  );
};
