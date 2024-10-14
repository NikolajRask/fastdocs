import type { Ref, SVGProps } from "react";
import { forwardRef } from "react";

const CheckIcon = forwardRef(
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
                strokeLinecap="round"
                strokeWidth={2}
                d="M20 7 9.707 17.293a1 1 0 0 1-1.414 0L4 13"
            />
        </svg>
    );
  },
);

export default CheckIcon;