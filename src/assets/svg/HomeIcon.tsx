import type { Ref, SVGProps } from "react";
import { forwardRef } from "react";

const HomeIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
            ref={ref} 
            {...props}
        >
            <path
                stroke="currentColor"
                strokeWidth={2}
                d="M7 10.273V15a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4.727a2 2 0 0 0-.685-1.507l-3.658-3.192a1 1 0 0 0-1.315 0L7.685 8.766A2 2 0 0 0 7 10.273Z"
            />
            <path
                stroke="currentColor"
                strokeWidth={2}
                d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Z"
            />
        </svg>
    );
  },
);

export default HomeIcon;