import { useState } from "react";
import slider from "../assets/icon-slider.svg";
import check from "../assets/icon-check.svg";
import { PricingDeets } from "@/constants/data";
import { checkList } from "@/constants/data";

const Card = () => {
  const [pageviews, setPageviews] = useState(3);
  const [isMonthly, setIsMonthly] = useState(true);

  function updateRangePosition(pageviews) {
    if (pageviews == 1) {
      return "0%";
    }
    if (pageviews == 5) {
      return "100%";
    }
    return `${(pageviews - 1) * 20}%`;
  }

  const handleSliderChange = (e) => {
    setPageviews(parseInt(e.target.value, 10));
  };

  return (
    <div className="mt-[50px] flex flex-col justify-center items-center">
      <div className="shadow-lg rounded-[10px] w-[350px] md:w-[500px] bg-white">
        <div className="py-[25px] px-[35px] ">
          {/* Top */}
          <div>
            {/* 1 */}
            <div className="flex justify-between items-center">
              <p className="uppercase text-[#8a91a3] text-[14px] font-bold tracking-widest">
                {PricingDeets[pageviews].pageviews} pageviews
              </p>
              <p className="flex items-center gap-1 text-[36px] font-bold text-[#2a3259]">
                $
                {isMonthly
                  ? PricingDeets[pageviews].monthly
                  : PricingDeets[pageviews].yearly}
                <span className="text-[#8a91a3] font-light text-[14px]">
                  / {isMonthly ? "month" : "year"}
                </span>
              </p>
            </div>

            {/* 2 */}
            <div className="w-full">
              <div className="range-wrapper">
                <input
                  type="range"
                  name="pageviews"
                  id="pageviews"
                  min="1"
                  max="5"
                  step="1"
                  aria-label={`${PricingDeets[pageviews].pageviews} pageviews`}
                  value={pageviews}
                  onInput={(e) => {
                    setPageviews(e.target.value);
                  }}
                  onChange={handleSliderChange}
                />
                <div
                  className="fake-range"
                  style={{
                    "--width": updateRangePosition(pageviews),
                  }}
                >
                  <div className="track">
                    <div className="filled"></div>
                  </div>
                  <div
                    className="thumb"
                    style={{
                      transform: `translateX(${
                        pageviews == 5 ? "-100%" : "0"
                      })`,
                    }}
                  >
                    <img src={slider} alt="slider" />
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="billing-wrapper mt-6">
              <input
                type="checkbox"
                z
                name="billingType"
                id="billingType"
                onChange={(e) => setIsMonthly(!isMonthly)}
              />
              <label htmlFor="billingType" className="billing-type">
                <p>Monthly Billing</p>
                <div className="fake-checkbox"></div>
                <p>Yearly Billing </p>
                <span className="badge">
                  25% <span className="hidden md:block">discount</span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <hr />
        {/* Bottom */}
        <div className="py-[25px] px-[35px] flex flex-col gap-4 md:flex-row justify-between items-center">
          <ul className="flex flex-col items-center md:items-start">
            {checkList.map((list) => (
              <li
                key={list.id}
                className="flex items-center gap-4 text-[#8c8c96] text-[14px] mb-1"
              >
                <img src={check} alt="check" /> {list.text}
              </li>
            ))}
          </ul>
          <button className="bg-[#2a3259] text-white text-[14px] px-[30px] py-[8px] rounded-[25px]">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
