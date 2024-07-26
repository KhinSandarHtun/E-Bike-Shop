import React from "react";

const EbikeCard = ({ ebike }) => {
  return (
    <div className="max-w-sm cursor-pointer overflow-hidden shadow-lg border-4 border-transparent rounded-md hover:border-t-4 hover:border-t-green-300">
      <div className="px-6 py-4">
      <img
          src={ebike.src}
          alt="ebike"
          width={500}
          height={500}
          className="mx-auto w-full max-w-3xl"
        />
        <div className="font-bold text-xl mb-2">{ebike.name}</div>
        <p className="text-gray-700 text-base  mb-1">{ebike.desc}</p>
        <p className="text-gray-700 font-bold text-base">{ebike.price}</p>
      </div>
      <div className="flex items-center justify-center px-6 pt-4 pb-2">
        <p className="w-fit flex items-center justify-center mx-auto bg-yellow-300 rounded-md p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
            />
          </svg>
          {ebike.rating.averageRating}
        </p>
        <p className="w-fit flex items-center justify-center mx-auto bg-indigo-300 rounded-md p-1">
          reviews : {ebike.rating.numberOfReviews}
        </p>
      </div>
    </div>
  );
};

export default EbikeCard;
