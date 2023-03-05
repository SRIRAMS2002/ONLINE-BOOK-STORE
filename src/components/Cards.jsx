import React from "react";
import {RxCross2} from 'react-icons/rx';

const Cards = ({ book }) => {
  console.log(book);
  return (
    <div className="ml-14 grid grid-cols-1 gap-20 sm:grid-cols-2 md: md:grid-cols-3 md:gap-8 pb-10 ">
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail != undefined && amount != undefined) {
          return (
            <>
              <div
                className=" text-white"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}>
                <section className="  w-[13rem] h-[20rem] md:ml-20 sm:ml-14 mb-20 sm:mb-32 transform transition duration-500 hover:scale-110">
                  <div className=" ml-5  rounded-xl shadow-lg ">
                    <img
                      className=" w-[15rem] h-[17rem]"
                      src={thumbnail}
                      alt=""
                    />

                    <div className="ml-2 mt-2">
                      <p className="rounded-xl bg-gray-500 max-w-[8rem] flex items-center px-3 py-1 text-sm">
                        <RxCross2 />
                        SRIRAM
                      </p>
                    </div>

                    <h1 className="text-md pl-5 uppercase mt-3 text-yellow-200 font-bold font-Hanken leading-relaxed max-w-[25vw] sm:max-w-[30vw] ">
                      {" "}
                      {item.volumeInfo.title}
                    </h1>
                    <div className="flex  justify-between">
                      <h1 className="text-xl pl-5 font-bold text-[#ff6700]">
                        &#8377;{amount}{" "}
                        <span className="border-xl text-sm rounded-sm text-white">
                          save 20%
                        </span>
                      </h1>
                      
                      <br />
                    </div>
                    <br />
                    
                  </div>
                </section>
                
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default Cards;
