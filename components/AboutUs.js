import React from "react";
import Link from "next/link";

const AboutUs = () => {
    return (
        <div className="px-8 sm:max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between gap-8 mt-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-8">About Us</h1>
                    <p className="font-normal text-base leading-6 text-black mb-4">Fantom Hearts is a project that was initially created by two friends, in a search for knowledge related to blockchain, cryptocurrencies, smart contracts and more!</p>
                    <p className="font-normal text-base leading-6 text-black ">For this we created our community, where we can interact internally and externally, with other people and communities.</p>
                </div>
                <div className="w-full lg:w-8/12 flex flex-col justify-center">
                    <img src="/assets/hearts-album.png" className=" relative" alt />
                    <div className="flex justify-center flex-row mt-4">
                        <Link href="https://discord.gg/RM49Sr3Jcn">
                            <div className="cursor-pointer hover:bg-yellow-200 transition-all duration-500 ease-in-out flex flex-row items-center p-4 rounded-2xl border-2 border-black mr-4">
                                <svg className="h-6 w-6 m-4" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                                </svg>
                                <div className="hidden flex-col sm:hidden md:hidden lg:flex">
                                    <span className="font-bold text-xl mr-2">Join our Discord</span>
                                </div>
                            </div>
                        </Link>
                        <Link href="https://twitter.com/ftmhearts">
                            <div className="cursor-pointer hover:bg-yellow-200 transition-all duration-500 ease-in-out flex flex-row items-center p-4 rounded-2xl border-2 border-black">
                                <svg className="m-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                                <div className="hidden flex-col sm:hidden md:hidden lg:flex mr-2">
                                    <span className="font-bold text-xl">Follow us on Twitter</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 mt-8">
                <div className="w-full justify-center">
                    {/* <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-8">Our Story</h1> */}
                    <p className="font-normal text-base leading-6 text-black pb-4">
                        One of the ways of interaction between individuals and/or communities is through dissemination and support, for that we launched the Yellow Hearts NFT collection with 1000 unique hearts on the Fantom network, this being the first of other collections 💕, where the purchase of a Yellow Heart is a way of supporting the project and the community itself, allowing us a way to return this support to you, whether through giveaways or acquiring NFTs to support another project, being able to donate these back to the community, thus creating a network of interaction between the entire web3's ecosystem. In addition to supporting the web3 community, we also want to pass on the meaning of a Heart to other people (love, union, care, life), so we will donate 25% of the sales proceeds to an NGO (for each collection a different ngo).
                    </p>
                    <p className="font-normal text-base leading-6 text-black pb-4">
                        Since the beginning of the pandemic, there has been a 31% growth in people living on the streets of São Paulo. This number, unfortunately, is often incorrect and much higher than that recorded by the government. With that in mind, the NGO chosen to receive this donation from the Yellow Hearts collection was Grupo do Panetone, an NGO located in the city of São Paulo, Brazil, which takes basic food baskets, hygiene kits and water to needy communities and homeless people.
                    </p>
                    <p className="font-normal text-base leading-6 text-black pb-4">
                        I, Vitagliano, know the work of the Grupo do Panetone and I know that this donation will be of great help to those who need it most. By acquiring and holding a Yellow Heart, you become a Heart Keeper and have greater power over future community decisions. You can also receive NFT of the new collections for free and various airdrops (ours and partners).
                    </p>
                    <p className="font-normal text-base leading-6 text-black pb-4">
                        Other project information can be seen in our roadmap (these can be changed as decisions are made together with the community), we are 100% open to community suggestions, always thinking about the improvement for it and all the steps taken by us (Vitagliano and Kinash) are and will be reported through social media and Discord annoucements.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default AboutUs;

