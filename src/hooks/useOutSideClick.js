import { createContext, useEffect, useRef } from "react";

export const ModelContext = createContext();

export function useOutSideClick(handler, listenCapturing = true) {
    const ref = useRef();

    useEffect(
        function () {
            function handleClick(e) {
                if (ref.current && !ref.current.contains(e.target)) {
                    console.log(e.target, ref.current, ref.current.contains(e.target));
                    handler();
                }
            }

            document.addEventListener("click", handleClick, listenCapturing);

            return () => document.removeEventListener("click", handleClick, listenCapturing);
        },
        [handler, listenCapturing]
    );


    return ref;
}

