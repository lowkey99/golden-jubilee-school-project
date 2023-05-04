const HomeCensorship = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="grid lg:grid-cols-2">
          <div>
            <h1 className="text-[52px] font-bold leading-none mb-5">Censorship resistance, now.</h1>
            <p>
              The Solana Foundation is working to make the Solana protocol the
              most censorship resistant network in the world.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="flex items-start divide-x divide-zinc-600 ">
                <h1 className=" pr-8 lg:px-8 text-[36px] font-semibold text-[#444bcb]">1</h1>
                <p className="px-8">On the permissionless Solana network, anyone can participate in helping to secure the network as a validator. The Solana Foundation encourages new and existing validators to maintain high quality operations via the incentive structure of our Delegation Program.</p>
            </div>
            <div className="flex items-start divide-x divide-zinc-600 my-20">
                <h1 className="pr-8 lg:px-8 text-[36px] font-semibold text-[#F7CF20]">2</h1>
                <p className="px-8">Validator operators and RPC node operators may choose to participate in our Server Program to locate their operations in data centers distributed around the globe.</p>
            </div>
            <div className="flex items-start divide-x divide-zinc-600 ">
                <h1 className="pr-8 lg:px-8 text-[36px] font-semibold text-[#FF884D]">3</h1>
                <p className="px-8">Community members and token holders can choose to participate in Stake Pools to directly increase the censorship resistance of the network while potentially earning tokens at the same time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCensorship;
