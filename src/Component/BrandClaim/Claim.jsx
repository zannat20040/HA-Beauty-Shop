import React from "react";
import { FaBeer } from "react-icons/fa";

const Claim = () => {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-6 text-center py-20">
      <div>
        <div className="avatar justify-center">
          <div className="w-24 rounded-full">
            <img src="https://i.ibb.co/NSWTjxs/4652005-200.png" alt="" />
          </div>
        </div>
        <div>
          <h1 className="card-title justify-center text-slate-800 text-2xl uppercase">CRUELTY FREE</h1>
          <p>
            Kindness in every bottle, cruelty-free skincare for a compassionate
            beauty routine.
          </p>
        </div>
      </div>
      <div>
        <div>
          <div className="avatar justify-center">
            <div className="w-24 rounded-full">
              <img src="https://i.ibb.co/tbBkhBs/5627100.png" alt="" />
            </div>
          </div>

          <h1 className="card-title justify-center text-slate-800 text-2xl uppercase">
            Vegan Certified
          </h1>
          <p>
            Purely plant-powered, vegan-certified skincare for a natural and
            ethical beauty.
          </p>
        </div>
      </div>
      <div>
        <div className="avatar justify-center">
          <div className="w-24 rounded-full">
            <img src="https://i.ibb.co/f1Y0w7T/5716576-200.png" alt="" />
          </div>
        </div>

        <div>
          <h1 className="card-title justify-center text-slate-800 text-2xl uppercase">100% Authentic</h1>
          <p>
            Authenticity you can trust, genuine ingredients for genuine skincare
            results.
          </p>
        </div>
      </div>
      <div>
        <div className="avatar justify-center">
          <div className="w-24 rounded-full">
            <img src="https://i.ibb.co/YDGNFG2/1892654.png" alt="" />
          </div>
        </div>
        <div>
          <h1 className="card-title justify-center text-slate-800 text-lg uppercase">
            Premium Quality
          </h1>
          <p>
            Elevate your beauty with premium quality skincare for a radiant
            glow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Claim;
