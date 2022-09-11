import * as React from "react";

function clogo(props) {
  return (
    <label>
      <a href="/" aria-label="CHIP logo - home">
        <svg
          //   width="1em"
          height="100%"
          viewBox="0 0 33 50"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_505_2)">
            <path
              d="M23.241 29.475h8.777c-1.765 6.722-7.138 10.959-14.313 11.387-.404.025-.807.05-1.223.05-.895 0-1.765-.076-2.598-.202C5.624 39.589 0 33.145 0 24.255c0-8.89 5.624-15.385 13.884-16.52a19.292 19.292 0 012.598-.19c.416 0 .82.026 1.223.039 7.175.44 12.548 4.729 14.313 11.438h-8.777c-1.148-2.371-3.115-3.733-5.536-4.086a9.08 9.08 0 00-1.324-.113c-.883 0-1.728.126-2.497.353-3.506 1.047-5.763 4.338-5.763 9.08s2.257 8.02 5.763 9.067a8.846 8.846 0 003.821.252c2.421-.353 4.388-1.715 5.536-4.098v-.002z"
              fill="#fff"
            />
            <path
              d="M13.208 0L9.453.709l9.163 48.494 3.755-.71L13.208 0z"
              fill="#FCB638"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_505_2">
              <path fill="#fff" d="M0 0h32.018v49.205H0z" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </label>
  );
}

export default clogo;
