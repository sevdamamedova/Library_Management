import React from "react";

const CardDetail = () => {
  return (
    <div className="container mx-auto py-5 flex gap-3">
      <img
        className="size-42"
        src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ="
        alt=""
      />
      <div>
        <h3 className="text-[38px] font-semibold">Book name</h3>
        <p className="font-light text-[22px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor nobis debitis! Inventore ducimus, id
          velit libero expedita et architecto voluptatem, accusantium consequatur delectus sequi aliquam corporis odio
          cum distinctio?
        </p>
      </div>
    </div>
  );
};

export default CardDetail;
