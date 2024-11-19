import { useState } from "react";

import CountdownTimer from "../elements/CountdownTimer";

export default function VCode() {
    const [open, setOpen] = useState(false);
    
    const modalVCodeHandler = () => {
      setOpen((prev) => !prev);
    
      // get verification code
    
      setTimeout(() => setOpen((prev) => !prev), 120000);
    };

  return (
    <section className="mb-2 mt-10 flex justify-around px-2 items-center">
      {!open ? (
        <button
          onClick={modalVCodeHandler}
          className="text-xl font-semibold tracking-wide"
        >
          کد یک بار مصرف
        </button>
      ) : (
        <section className="flex flex-col w-full h-[90px] justify-between">
          <CountdownTimer initialSeconds={120} />

          <div className="flex justify-between items-center px-2 md:px-6">
            <input
              type="text"
              className="text-2xl w-[50px] h-[40px] rounded-md border border-solid border-orange-600 outline-none text-center"
              maxLength={1}
            />
            <input
              type="text"
              className="text-2xl w-[50px] h-[40px] rounded-md border border-solid border-orange-600 outline-none text-center"
              maxLength={1}
            />
            <input
              type="text"
              className="text-2xl w-[50px] h-[40px] rounded-md border border-solid border-orange-600 outline-none text-center"
              maxLength={1}
            />
            <input
              type="text"
              className="text-2xl w-[50px] h-[40px] rounded-md border border-solid border-orange-600 outline-none text-center"
              maxLength={1}
            />
          </div>
        </section>
      )}
    </section>
  );
}
