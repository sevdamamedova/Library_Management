import React from "react";

const Card = () => {
  return (
    <div className="w-[300px] border-[2px] gap-2 border-zinc-300 shadow-xl shadow-zinc-500/50 px-[15px] py-[30px] flex flex-col items-center rounded-lg">
      <img
        className="size-46"
        src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ="
        alt=""
      />
      <h3 className="text-[22px] font-semibold">Book name</h3>
      <p className="font-light">Kitab haqqinda qisa melumat</p>
    </div>
  );
};

export default Card;
