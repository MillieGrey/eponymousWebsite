import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/logo.svg";

export default function AnimLogo() {
  return (
    <Container fluid>
      <img
        alt="mh-logo"
        id="logo-svg"
        height="370"
        style={{ marginTop: "5em", overflow: "", height: "35vh" }}
        src={logo}
      />
    </Container>
  );
}

// const LogoRawSVG = () => {
//   return (
//     <>
//       <path
//         id="backPath1"
//         d="M31.3713 1.70423L0.343294 209.204C0.16252 210.413 1.09893 211.5 2.3213 211.5H41.1092C42.0973 211.5 42.9372 210.779 43.0863 209.802L74.7608 2.3018C74.9456 1.091 74.0085 0 72.7837 0H33.3493C32.359 0 31.5178 0.724782 31.3713 1.70423Z"
//         fill="#C4C4C4"
//       />
//       <path
//         id="backPath2"
//         d="M96.6003 1.70423L65.5723 209.204C65.3915 210.413 66.3279 211.5 67.5503 211.5H106.338C107.326 211.5 108.166 210.779 108.315 209.802L139.99 2.3018C140.175 1.091 139.237 0 138.013 0H98.5783C97.588 0 96.7468 0.724782 96.6003 1.70423Z"
//         fill="#C4C4C4"
//       />
//       <path
//         id="backPath3"
//         d="M161.17 1.70423L130.142 209.204C129.962 210.413 130.898 211.5 132.12 211.5H170.908C171.896 211.5 172.736 210.779 172.885 209.802L204.56 2.3018C204.745 1.091 203.808 0 202.583 0H163.148C162.158 0 161.317 0.724782 161.17 1.70423Z"
//         fill="#C4C4C4"
//       />
//       <path
//         className="backPath"
//         id="backPath4"
//         d="M225.74 1.70423L194.712 209.204C194.532 210.413 195.468 211.5 196.69 211.5H235.478C236.466 211.5 237.306 210.779 237.455 209.802L269.13 2.3018C269.315 1.091 268.378 0 267.153 0H227.718C226.728 0 225.887 0.724782 225.74 1.70423Z"
//         fill="#C4C4C4"
//       />
//       <path
//         id="frontPath1"
//         d="M65.9527 208.996L33.6338 2.15438C33.539 1.5479 34.008 1 34.6218 1H74.054C74.5478 1 74.9677 1.36049 75.0424 1.84864L106.715 208.69C106.808 209.295 106.339 209.841 105.727 209.841H66.9407C66.4481 209.841 66.0288 209.482 65.9527 208.996Z"
//         fill="#202020"
//         stroke="#C4C4C4"
//         stroke-width="2"
//       />
//       <path
//         id="frontPath2"
//         d="M130.523 208.996L98.2039 2.15438C98.1091 1.5479 98.5781 1 99.1919 1H138.624C139.118 1 139.538 1.36049 139.613 1.84864L171.285 208.69C171.378 209.295 170.909 209.841 170.297 209.841H131.511C131.018 209.841 130.599 209.482 130.523 208.996Z"
//         fill="#202020"
//         stroke="#C4C4C4"
//         stroke-width="2"
//       />
//       <path
//         id="frontPath3"
//         d="M195.093 208.996L162.774 2.15438C162.679 1.5479 163.148 1 163.762 1H203.194C203.688 1 204.108 1.36049 204.183 1.84864L235.855 208.69C235.948 209.295 235.479 209.841 234.867 209.841H196.081C195.588 209.841 195.169 209.482 195.093 208.996Z"
//         fill="#202020"
//         stroke="#C4C4C4"
//         stroke-width="2"
//       />
//       <path
//         id="frontPath4"
//         d="M259.663 208.996L227.344 2.15438C227.249 1.5479 227.718 1 228.332 1H267.764C268.258 1 268.678 1.36049 268.753 1.84864L300.425 208.69C300.518 209.295 300.049 209.841 299.437 209.841H260.651C260.158 209.841 259.739 209.482 259.663 208.996Z"
//         fill="#202020"
//         stroke="#C4C4C4"
//         stroke-width="2"
//       />
//       <path
//         id="hPath"
//         d="M249.774 97.514H216.136C215.031 97.514 214.136 98.4094 214.136 99.514V121.869C214.136 122.974 215.031 123.869 216.136 123.869H253.901C255.151 123.869 256.094 122.735 255.867 121.506L251.74 99.1509C251.565 98.2024 250.738 97.514 249.774 97.514Z"
//         fill="#202020"
//       />
//     </>
//   );
// };
