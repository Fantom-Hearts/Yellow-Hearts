import { ethers } from "ethers";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useHearts from "../hooks/useHearts";
import useWeb3 from "../hooks/useWeb3";
import { toast } from "react-toastify";
import Button from "../components/Button";

export default function HeartsPage() {
  const { active, activate, deactivate, account, web3 } = useWeb3();
  const { contract, getuserHearts, getHeartMetadata } = useHearts(web3, account);

  const [userHearts, setuserHearts] = useState([]);
  const [heartSelected, setheartSelected] = useState(null);

  useEffect(() => {
    if (web3) {
      activate();
    }
  }, [web3]);

  useEffect(() => {
    if (contract && userHearts.length === 0) {
      const getHeartsPromise = new Promise((resolve, reject) => {
        getuserHearts()
          .then((hearts) => {
            if (hearts) {
              Promise.all(
                hearts.map((heart) =>
                  getHeartMetadata(ethers.utils.formatUnits(heart, 0))
                )
              )
                .then((metadatas) => {
                  console.log("metadatas", metadatas);
                  setuserHearts(metadatas);
                  resolve();
                })
                .catch((error) => {
                  console.log(error);
                  reject();
                });
            } else {
              reject();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
      toast.promise(getHeartsPromise, {
        success: "Hearts loaded",
        pending: "Loading hearts...",
        error: "Error loading hearts",
      });
    }
  }, [contract]);

  const openHeartDetails = (heart) => {
    setheartSelected(heart);
  };

  return (
    <div
      className={`px-5 sm:max-w-5xl mx-auto sm:h-screen ${
        heartSelected != null ? "overflow-hidden" : ""
      }`}
    >
      <div className="py-3 flex sm:flex-row flex-col justify-between items-center">
        <Link href="/">
          <Image src="/assets/logo.png" width="400" height="65" />
        </Link>

        <Button path="/hearts">My Hearts</Button>

        <Button onClick={() => activate()}>
          {active
            ? account.substring(0, 6) +
              "..." +
              account.substring(account.length - 4, account.length)
            : "Connect"}
        </Button>
      </div>
      <div className="py-5">
        <h1 className="text-xl sm:text-3xl mt-5 text-center font-extrabold text-white mb-4">
          My Hearts
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {userHearts.map((heart) => {
            if (!heart) return null;
            return (
              <li className="flex flex-col items-center justify-center">
                <button type="button" onClick={() => openHeartDetails(heart)}>
                  <img
                    src={heart.image.replace(
                      "ipfs://",
                      "https://cloudflare-ipfs.com/ipfs/"
                    )}
                    alt={heart.name}
                    className="w-64 h-64 rounded-xl"
                  />
                  <span className="font-bold py-2">{heart.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {heartSelected != null && (
        <div
          className="w-full h-full absolute bottom-0 top-0 left-0 right-0 bg-purple-900 bg-opacity-50 flex items-center justify-center"
          onClick={() => setheartSelected(null)}
        >
          <div
            className="w-3/4 h-3/4 rounded-xl bg-white p-5 flex flex-row "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={heartSelected.image.replace(
                "ipfs://",
                "https://cloudflare-ipfs.com/ipfs/"
              )}
              alt={heartSelected.name}
              className="w-2/4 mx-auto rounded-xl"
            />
            <div className="w-2/4 p-5">
              <h2 className="font-extrabold text-xl pb-5">
                {heartSelected.name}
              </h2>
              <table className="w-full">
                <tr>
                  <th className="text-left">Attribute</th>
                  <th className="text-left">Value</th>
                  <th className="text-left">Rarity</th>
                </tr>
                {heartSelected.attributes.map((attr) => {
                  return (
                    <tr>
                      <td>{attr.trait_type}</td>
                      <td>{attr.value}</td>
                      <td>Soon!</td>
                    </tr>
                  );
                })}
              </table>
              <div className="flex transition-all duration-500 ease-in-out bg-purple-600 hover:bg-purple-800 hover:shadow-xl px-4 rounded-xl text-white sm:w-auto w-full transform hover:scale-105 mt-3 text-center">
                <a href="#" className="py-3 w-full h-full">
                  PaintSwap
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
