import { useRef, useState } from "react";
import useOutsideClick from "./useClickOutside";

export default function  ClickOutSide() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div className="flex justify-center items-center text-center p-10 ">
      {showContent ? (
        <div ref={ref}  className="w-6/12">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sapiente?</h1>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam praesentium fugit modi inventore quas laudantium, recusandae itaque eum voluptates perspiciatis eligendi voluptatem dolorum beatae.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}  className="bg-blue-500 p-2 rounded-lg text-white font-semibold">Show Content</button>
      )}
    </div>
  );
}