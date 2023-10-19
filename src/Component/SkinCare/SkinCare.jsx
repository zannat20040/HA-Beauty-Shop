import React, { useEffect, useState } from "react";

const SkinCare = () => {
  const [allSkinCare, setAllSkinCare] = useState([]);
  useEffect(() => {
    fetch("Skincare.json")
      .then((res) => res.json())
      .then((data) => setAllSkinCare(data));
  }, []);

  return (
    <div className="bg-blue-950 text-white">
      <div className="py-16  container mx-auto mt-36 px-6">
        <div className="text-center">
          <h1 className="text-5xl uppercase font-semibold">Take Care Of your skin today</h1>
          <p className="text-sm uppercase tracking-[10px] mt-3">with the best</p>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {allSkinCare.map((data) => (
            <div className="card  text-center" key={data.id}>
              <div className="avatar justify-center">
                <div className="w-24 rounded-full">
                  <img src={data.img} />
                </div>
              </div>
              <div className="card-body items-center">
                <h2 className="card-title  text-lg uppercase">{data.title}</h2>
                <p>{data.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkinCare;
