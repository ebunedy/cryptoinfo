import React from "react";
import moment from "moment";

const SingleNews = ({ newsList }) => {
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
      {newsList?.map((news, index) => {
        const { url, name, description, image, provider, datePublished } = news;
        return (
          <div key={index + datePublished} className=" rounded shadow-lg bg-primary-3 text-primary-2 bg-opacity-20 ">
            <div className="flex justify-between">
              <img
                className="w-32 h-36 md:h-32"
                src={image?.thumbnail?.contentUrl || demoImage}
                alt={name.slice(0, 20)}
              />
              <h1 className="font-bold mb-2 ml-2 text-lg text-primary-1 mr-2 mt-4">
                {name}
              </h1>
            </div>
            <div className="px-4 py-2 ">
              <p className="text-#cbd5e1 text-sm md:text-base">
                {description.slice(0, 200)} <span>...</span>
              </p>
              <span className="inline-block bg-primary-3 rounded-md p-1 mt-1 text-primary-1">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  read more
                </a>
              </span>
            </div>
            <div className="px-4 pt-2 pb-2 grid grid-cols-3 place-items-stretch gap-6 md:gap-4">
              <img
                className="w-14 h-14 rounded-full bg-dark-blue self-end"
                src={provider[0].image?.thumbnail?.contentUrl || demoImage}
                alt="Sunset in the mountains"
              />
              <span className="inline-block self-end rounded-full  text-sm font-semibold text-light-green mr-2 mb-2">
                {provider[0].name}
              </span>
              <span className="inline-block self-end rounded-full text-sm font-semibold text-light-green mr-2 mb-2">
                {moment(datePublished).startOf("ss").fromNow()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleNews;
