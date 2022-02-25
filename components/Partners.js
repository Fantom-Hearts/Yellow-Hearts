import React from "react";
import Link from "next/link";
function Partners() {
    const partnersList = [
        {
            name: "FakeWorms Studio",
            site: "https://fakeworms.studio/",
            twitter: "https://twitter.com/FakewormsStudio",
            discord: "https://discord.gg/jTeeFwMxnt",
            image: "https://storage.googleapis.com/cdn.nftkey.app/nft-collections/fantomkittens/0x2bfd5e7253053ef60ab4e6a0a45aaf8948f5c88c62a3063483913726365acc33-thumb.png",
        },
        {
            name: "Munkverse",
            site: "https://www.munksnft.com/",
            twitter: "https://twitter.com/munks_nft",
            discord: "https://discord.gg/8C3yeeKbnK",
            image: "https://cloudflare-ipfs.com/ipfs/Qmb6GwsnKuFJiR3wP5wKWbwRwEWqRhV3Vknux8noC93v9w",
        },
        {
            name: "Mules Studio",
            site: "https://mulesstudio.vercel.app/",
            twitter: "https://twitter.com/fantommules",
            discord: "https://discord.gg/28HgDHfQsw",
            image: "https://gateway.pinata.cloud/ipfs/QmciswmvRJgD8RxbwVptb5ZnXKUjFgpqSS1aYjB5UAobXW/18.png",
        },
        {
            name: "PixelGator",
            site: "https://www.pixelgators.art/",
            twitter: "https://twitter.com/ftmPixelGators",
            discord: "https://discord.gg/99ycdv3Gdn",
            image: "https://storage.googleapis.com/cdn.nftkey.app/nft-collections/pixelgators/0x7d98d02fe1b0020abf14a063f0e4f10f55565a733772de32f9761b5b27b54009-thumb.png",
        },
        {
            name: "Rookie Studio",
            site: "https://www.rookiebears.com/",
            twitter: "https://twitter.com/RookieStudioHQ",
            discord: "https://discord.gg/VHMzAkA6gv",
            image: "https://www.rookiebears.com/api/image/560",
        },
        {
            name: "Fantom Louvre",

            site: "https://fantomlouvre.art/",
            twitter: "https://twitter.com/fantomlouvre",
            discord: "https://discord.gg/AQDZBUG4nc",
            image: "https://stm.fantomlouvre.art/_next/image?url=https%3A%2F%2Fstm.fantomlouvre.art%2Fapi%2Ftokens%2Fimages%2F170.png&w=1920&q=75",
        },
        {
            name: "Fantom Shrooms",
            site: "https://ftmshrooms.io/",
            twitter: "https://twitter.com/FantomShrooms",
            discord: "https://discord.gg/hBGFGFk3jF",
            image: "https://pbs.twimg.com/media/FIaJVarXIAUybOe?format=png&name=small",
        },
        {
            name: "Fantom Quest",
            site: "https://www.fantomquest.com/",
            twitter: "https://twitter.com/FTMQuest",
            discord: "https://t.co/nE79CUYnIW",
            image: "https://storage.googleapis.com/cdn.nftkey.app/nft-collections/fantomquestweapons/0x63c8ecffeabc6219141ee0e4cc8980088b1ffa0ddadc43030bc89144443ceaff-thumb.png",
        },
        {
            name: "Fantomized",
            site: "https://neonghosts.fantomized.art/",
            twitter: "https://twitter.com/fantomized_nfts",
            discord: "https://discord.com/invite/cEBMSaz34Y",
            image: "https://pbs.twimg.com/media/FLzBIZeWYAEd0X0?format=jpg&name=large",
        },
        {
            name: "Fantom Pills",
            site: "https://mint.fantompills.club/",
            twitter: "https://twitter.com/FantomPills",
            discord: "https://discord.fantompills.club",
            image: "https://pbs.twimg.com/media/FLyj_r3WUAIcdT1?format=jpg&name=medium",
        },
        {
            name: "The Fantom Heroes",
            site: "https://www.fantomheroes.com/",
            twitter: "https://twitter.com/TheFantomHeroes/",
            discord: "https://discord.com/invite/thefantomheroes",
            image: "https://pbs.twimg.com/media/FLrfktnVcAQd2m8?format=jpg&name=4096x4096",
        },
        {
            name: "Turtle Turtle Club",
            site: "https://timmynfts.com",
            twitter: "https://twitter.com/TimmyTurtleNFT",
            discord: "https://discord.gg/TcpDKSFC7P",
            image: "https://pbs.twimg.com/media/FL7rwfvWYAM5mcb?format=png&name=360x360",
        },

    ];
    return (


        <div className="container mx-auto pt-16">
            <div className="">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-8 text-center">Friends of Heart</h1>
                <p className="font-normal text-base leading-6 text-black mb-4 text-center">Meet our friends and partners below, without the support and exchange of knowledge with and among them our project would not work</p>
            </div>
            <div className="flex items-center justify-center mt-10 mx-auto sm:mb-10 mb-16">
                <div className="grid overflow-hidden lg:grid-cols-3 lg:grid-rows-4 gap-2 lg:grid-flow-row">

                    {partnersList.map((partner, index) => (
                        <div key={index} className="w-full flex items-center justify-center">
                            <div className="w-full ">
                                <div className="w-full flex justify-center items-center flex-col rounded-md">
                                    <div className="bg-grey-100 rounded-md">
                                        <div style={{ "background-image": `url('` + partner.image + `');` }} className="w-72 h-72 relative bg-cover flex justify-center flex-col rounded-md ">
                                            <h1 className="bg-white text-black font-semibold text-left absolute top-6 left-0 px-2 py-1 text-lg ml-7 rounded-md ">{partner.name}</h1>
                                            <div className="absolute right-10 bottom-7">
                                                <a href={partner.twitter}>
                                                    <button className="mr-2 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none bg-white rounded-2xl p-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                                    </button>
                                                </a>
                                                <a href={partner.discord}>
                                                    <button className="mr-2 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none bg-white rounded-2xl p-2">
                                                        <svg className="h-6 w-6 text-black" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" /></svg>
                                                    </button>
                                                </a>
                                                <a href={partner.site}>
                                                    <button className="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none bg-white rounded-2xl p-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" /></svg>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Partners;
