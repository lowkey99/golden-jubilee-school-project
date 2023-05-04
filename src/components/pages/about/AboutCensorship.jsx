import { RiArrowRightDownLine } from "react-icons/ri";

const AboutCensorship = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold leading-none mb-10">
          What is censorship <br /> resistance?
        </h1>
        <div className="sm:max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <article className="">
              A core feature of the Solana network is the ability for everyone
              to have equal access to all information written to the blockchain
              ledger. Similarly, anyone should have equal and fair access to
              make changes to the ledger by submitting transactions at any time.
            </article>
            <article className="my-5">
              Censorship happens when any user or application is prevented from
              doing either of these things, for any reason.
            </article>
            <article>
              A censorship resistant network is therefore one in which it
              becomes increasingly difficult or impossible for users to be
              censored either due to unintentional reasons such as computer or
              infrastructure failure or due to intentional reasons such as
              malicious activity from one or more entities on the network
            </article>
          </div>
          <div className="flex flex-col justify-between ">
            <article>
              A common metric for quantifying censorship resistance is the
              superminority. The superminority refers to the minimum number of
              nodes on the network that would need to be simultaneously
              compromised in order to censor new transactions or prevent new
              blocks from being added to the blockchain. As the superminority
              increases, so increases the security and resilience of the Solana
              network.
            </article>
            <h6>You can find Solana’s superminority here:</h6>
            <p className="mt-8 sm:mt-0">
              <a
                href="https://solanabeach.io/"
                className="flex items-center gap-2 text-[#9111f1]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiArrowRightDownLine />
                <span className="font-semibold">solanabeach.io</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCensorship;
