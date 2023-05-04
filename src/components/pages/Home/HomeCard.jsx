import { Link } from "react-router-dom";

const HomeCard = () => {
  const cardData = [
    {
      id: "101",
      name: "Stake Pools",
      details:
        "Stake Pools are a liquid staking solution that promote censorship resistance, decentralization, and the growth of DeFi on Solana.",
      buttonText: "Learn about liquid staked SOL",
      buttonLink: "/",
      color: "#f7d02099",
    },
    {
      id: "102",
      name: "Grants",
      details:
        "The Solana Foundation Grants Program is focused on funding efforts to further censorship resistance on the Solana Network",
      buttonText: "Build for the common good",
      buttonLink: "/",
      color: "#444bcb99",
    },
    {
      id: "103",
      name: "Server Program",
      details:
        "Get access to servers at discounted prices with month to month contracts from our partners. An optional Foundation Program to help bootstrap the network.",
      buttonText: "Get your server",
      buttonLink: "/",
      color: "#FF884D99",
    },
    {
      id: "104",
      name: "Delegation Program",
      details:
        "Validators can participate in the Solana Foundation Delegation Program if they meet certain performance requirements. Foundation Delegation participants are eligible to receive a delegation from the Solana Foundation, helping decentralize the network.",
      buttonText: "What to expect",
      buttonLink: "/",
      color: "#f7d02099",
    },
  ];
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cardData &&
            cardData.map((data) => (
              <>
                <div className="p-8 flex flex-col justify-between rounded-xl hover:drop-shadow-lg" style={{ backgroundColor: data.color }}>
                  <h1 className="text-[32px] sm:text-[50px] font-[700] ">{data.name}</h1>
                  <p className="text-[18px] mt-5 mb-10">{data.details}</p>
                  <Link to={data.buttonLink}>
                    <button className="border text-[#000] border-[#000] hover:border-none hover:bg-white px-5 py-3 text-[20px] font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg">{data.buttonText}</button>
                  </Link>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
