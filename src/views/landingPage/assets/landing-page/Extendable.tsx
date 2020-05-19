import React from "react";
import styled from "@styled";

const StyledSvg = styled.svg`
  padding: 5px;
  max-width: 100%;

  #extendable-rect-right-bottom {
    transform-origin: 50% 50%;
    animation: extendable-rect-right-bottom 3s linear infinite;
  }

  #extendable-rect-left-bottom {
    transform-origin: 50% 50%;
    animation: extendable-rect-left-bottom 3s linear infinite;
  }

  #extendable-rect-right-top {
    transform-origin: 50% 50%;
    animation: extendable-rect-right-top 3s linear infinite;
  }

  #extendable-rect-left-top {
    transform-origin: 50% 50%;
    animation: extendable-rect-left-top 3s linear infinite;
  }

  @keyframes extendable-rect-right-bottom {
    0% {
      transform: scale(1);
    }
    50% {
      transform: translate(6px, 7px);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes extendable-rect-left-bottom {
    0% {
      transform: scale(1);
    }
    50% {
      transform: translate(-6px, 7px);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes extendable-rect-right-top {
    0% {
      transform: scale(1);
    }
    50% {
      transform: translate(6px, -7px);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes extendable-rect-left-top {
    0% {
      transform: scale(1);
    }
    50% {
      transform: translate(-6px, -7px);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Extendable = () => (
  <StyledSvg
    version="1.1"
    id="Ebene_1"
    xmlns="http://www.w3.org/2000/svg"
    width="269px"
    height="270px"
    viewBox="0 0 275 256"
    xmlSpace="preserve"
    aria-labelledby="extendable-title"
  >
    <g
      id="extendable-Element-35-Copy-2"
      transform="translate(171.000000, 726.000000)"
    >
      <g
        id="extendable-Combined-Shape"
        transform="translate(0.000000, 37.000000)"
      >
        <g id="extendable-Mask">
          <linearGradient
            id="extendable-path-2_2_"
            gradientUnits="userSpaceOnUse"
            x1="-99.0684"
            y1="-571.7988"
            x2="-98.5136"
            y2="-573.2733"
            gradientTransform="matrix(262.4462 0 0 -217.9854 25911.1172 -125378.1875)"
          >
            <stop offset="0" style={{ stopColor: "#0B74DE" }} />
            <stop offset="1" style={{ stopColor: "#4D10E1" }} />
          </linearGradient>
          <path
            id="extendable-path-2_1_"
            fill="url(#extendable-path-2_2_)"
            d="M-40.379-724.823
                    c-83.417-3.338-141.19,39.894-128.996,91.623c13.311,55.56,71.084,113.544,128.996,124.174
                    c59.118,10.931,116.891-23.849,130.202-78.362C102.018-644.615,44.244-711.052-40.379-724.823z"
          />
        </g>
        <defs>
          <filter
            id="Adobe_OpacityMaskFilter"
            filterUnits="userSpaceOnUse"
            x="-123"
            y="-648"
            width="109.516"
            height="106.832"
          >
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
            />
          </filter>
        </defs>
        <mask
          maskUnits="userSpaceOnUse"
          x="-123"
          y="-648"
          width="109.516"
          height="106.832"
          id="extendable-mask-3"
        >
          <g filter="url(#Adobe_OpacityMaskFilter)">
            <path
              id="extendable-path-2"
              fill="#FFFFFF"
              d="M-40.379-724.823c-83.417-3.338-141.19,39.894-128.996,91.623
                        c13.311,55.56,71.084,113.544,128.996,124.174c59.118,10.931,116.891-23.849,130.202-78.362
                        C102.018-644.615,44.244-711.052-40.379-724.823z"
            />
          </g>
        </mask>
        <path
          id="extendable-rect-left-bottom"
          fill="#3298FF"
          d="M-23.899-555.418c0.001-1.381,1.12-2.5,2.5-2.5s2.499,1.119,2.5,2.5
                c-0.001,1.38-1.12,2.499-2.5,2.5C-22.779-552.919-23.898-554.038-23.899-555.418z M-23.899-567.168c0.001-1.381,1.12-2.5,2.5-2.5
                s2.499,1.119,2.5,2.5c-0.001,1.38-1.12,2.499-2.5,2.5C-22.779-564.669-23.898-565.788-23.899-567.168z M-23.899-578.918
                c0.001-0.662,0.265-1.297,0.733-1.764c0.469-0.468,1.104-0.729,1.767-0.727c0.662-0.002,1.298,0.259,1.767,0.727
                c0.469,0.467,0.732,1.102,0.733,1.764c-0.001,1.38-1.12,2.499-2.5,2.5C-22.779-576.419-23.898-577.538-23.899-578.918z
                 M-23.899-590.658c0.001-1.381,1.12-2.5,2.5-2.5s2.499,1.119,2.5,2.5c-0.004,1.379-1.121,2.496-2.5,2.5
                C-22.778-588.162-23.896-589.279-23.899-590.658z M-23.899-602.408c0.001-1.381,1.12-2.5,2.5-2.5s2.499,1.119,2.5,2.5
                c-0.001,1.38-1.12,2.499-2.5,2.5C-22.779-599.909-23.898-601.028-23.899-602.408z M-29.47-609.778c-0.97-0.981-0.97-2.56,0-3.54
                c0.469-0.471,1.106-0.734,1.771-0.734s1.301,0.264,1.77,0.734c0.97,0.98,0.97,2.559,0,3.54c-0.473,0.466-1.107,0.728-1.771,0.729
                C-28.363-609.051-28.998-609.312-29.47-609.778z M-37.779-618.088c-0.971-0.98-0.971-2.561,0-3.541c0.98-0.97,2.56-0.97,3.54,0
                c0.47,0.47,0.734,1.106,0.734,1.771s-0.265,1.301-0.734,1.771c-0.47,0.469-1.106,0.731-1.771,0.729
                C-36.673-617.355-37.311-617.619-37.779-618.088z M-46.08-626.398c-0.47-0.469-0.734-1.105-0.734-1.77s0.264-1.302,0.734-1.771
                c0.977-0.97,2.554-0.97,3.53,0c0.471,0.469,0.735,1.105,0.735,1.771c0,0.664-0.265,1.301-0.735,1.77
                c-0.464,0.471-1.099,0.734-1.76,0.73C-44.974-625.666-45.611-625.93-46.08-626.398z M-54.39-634.708
                c-0.97-0.977-0.97-2.553,0-3.53c0.469-0.471,1.105-0.735,1.77-0.735c0.664,0,1.301,0.265,1.77,0.735c0.97,0.977,0.97,2.553,0,3.53
                c-0.468,0.472-1.105,0.738-1.771,0.74C-53.285-633.971-53.921-634.236-54.39-634.708L-54.39-634.708z M-64.26-642.769
                c0-1.38,1.12-2.5,2.5-2.5c1.38,0,2.5,1.12,2.5,2.5c0,1.38-1.12,2.5-2.5,2.5C-63.14-640.269-64.259-641.388-64.26-642.769
                L-64.26-642.769z M-76.01-642.769c0-1.38,1.12-2.5,2.5-2.5c1.38,0,2.5,1.12,2.5,2.5c0,1.38-1.12,2.5-2.5,2.5
                C-74.89-640.269-76.009-641.388-76.01-642.769L-76.01-642.769z M-87.76-642.769c0-1.38,1.12-2.5,2.5-2.5c1.38,0,2.5,1.12,2.5,2.5
                c0,1.38-1.12,2.5-2.5,2.5C-86.64-640.269-87.759-641.388-87.76-642.769L-87.76-642.769z M-99.51-642.769c0-1.38,1.12-2.5,2.5-2.5
                c1.38,0,2.5,1.12,2.5,2.5c0,1.38-1.12,2.5-2.5,2.5C-98.39-640.269-99.509-641.388-99.51-642.769L-99.51-642.769z M-111.26-642.769
                c0-1.38,1.12-2.5,2.5-2.5c0.665-0.002,1.302,0.261,1.773,0.729c0.471,0.469,0.736,1.106,0.737,1.771
                c-0.001,0.665-0.266,1.301-0.737,1.771c-0.471,0.469-1.108,0.731-1.773,0.729C-110.14-640.269-111.259-641.388-111.26-642.769
                L-111.26-642.769z M-34.41-626.449c-0.991-0.962-1.018-2.544-0.06-3.539c0.962-0.992,2.545-1.019,3.54-0.061
                c0.477,0.463,0.75,1.096,0.76,1.76s-0.246,1.305-0.71,1.781c-0.47,0.484-1.115,0.759-1.79,0.76
                C-33.318-625.751-33.941-626.002-34.41-626.449z M-26.069-635.079c-0.476-0.461-0.747-1.092-0.757-1.754s0.244-1.301,0.706-1.775
                c0.459-0.479,1.09-0.754,1.753-0.765c0.662-0.011,1.303,0.243,1.777,0.705c0.477,0.46,0.75,1.09,0.762,1.752
                s-0.241,1.301-0.701,1.777c-0.471,0.49-1.121,0.765-1.801,0.76C-24.979-634.378-25.602-634.629-26.069-635.079L-26.069-635.079z
                 M-17.72-643.699c-0.991-0.962-1.019-2.545-0.06-3.54c0.46-0.476,1.09-0.75,1.752-0.761s1.301,0.241,1.777,0.701
                c0.479,0.461,0.754,1.093,0.766,1.757c0.011,0.664-0.242,1.306-0.705,1.783c-0.473,0.485-1.122,0.759-1.8,0.76
                C-16.635-642.997-17.257-643.248-17.72-643.699z M-123-556.059c0-1.381,1.12-2.5,2.5-2.5s2.5,1.119,2.5,2.5
                c0,1.381-1.12,2.5-2.5,2.5S-123-554.678-123-556.059z M-123-568.438c-0.001-0.663,0.262-1.3,0.73-1.77
                c0.469-0.47,1.106-0.731,1.77-0.73c0.664-0.001,1.3,0.261,1.77,0.73s0.732,1.106,0.73,1.77c-0.004,1.379-1.121,2.496-2.5,2.5
                C-121.879-565.942-122.996-567.06-123-568.438L-123-568.438z M-123-580.828c-0.001-0.664,0.262-1.301,0.73-1.77
                c0.469-0.47,1.106-0.732,1.77-0.73c0.664-0.002,1.3,0.261,1.77,0.73c0.469,0.469,0.732,1.105,0.73,1.77c0,1.38-1.12,2.499-2.5,2.5
                C-121.88-578.329-123-579.448-123-580.828L-123-580.828z M-123-593.219c0-1.381,1.12-2.5,2.5-2.5s2.5,1.119,2.5,2.5
                c0,1.381-1.12,2.5-2.5,2.5S-123-591.838-123-593.219L-123-593.219z M-123-605.608c0-1.38,1.12-2.499,2.5-2.5
                c1.38,0.001,2.5,1.12,2.5,2.5c0,1.38-1.12,2.499-2.5,2.5C-121.88-603.109-123-604.229-123-605.608L-123-605.608z M-123-617.998
                c0-1.381,1.12-2.5,2.5-2.5s2.5,1.119,2.5,2.5c0,1.38-1.12,2.499-2.5,2.5C-121.88-615.499-123-616.618-123-617.998L-123-617.998z
                 M-123-630.389c0.005-1.377,1.123-2.49,2.5-2.49s2.495,1.113,2.5,2.49c0.001,0.664-0.261,1.301-0.73,1.77s-1.106,0.732-1.77,0.73
                c-0.664,0.002-1.3-0.262-1.77-0.73S-123.001-629.725-123-630.389L-123-630.389z M-21.399-541.168
                c-0.165-0.002-0.329-0.02-0.49-0.051s-0.317-0.078-0.47-0.14c-0.15-0.063-0.295-0.14-0.431-0.229
                c-0.134-0.096-0.261-0.199-0.38-0.311c-0.973-0.979-0.973-2.561,0-3.54c0.119-0.112,0.246-0.216,0.38-0.31
                c0.136-0.091,0.28-0.168,0.431-0.23c0.152-0.062,0.309-0.109,0.47-0.141c0.323-0.06,0.655-0.06,0.979,0
                c0.322,0.062,0.629,0.188,0.9,0.371c0.133,0.094,0.26,0.197,0.38,0.31c0.974,0.979,0.974,2.562,0,3.54
                c-0.12,0.111-0.247,0.215-0.38,0.311c-0.136,0.09-0.279,0.166-0.43,0.229c-0.152,0.062-0.31,0.108-0.471,0.14
                S-21.235-541.17-21.399-541.168z M-36.29-543.668c0-1.381,1.12-2.5,2.5-2.5s2.499,1.119,2.5,2.5c-0.001,1.38-1.12,2.499-2.5,2.5
                C-35.17-541.169-36.29-542.288-36.29-543.668z M-48.68-543.668c0-1.381,1.12-2.5,2.5-2.5c1.382-0.001,2.504,1.117,2.51,2.5
                c-0.005,1.382-1.127,2.5-2.51,2.5C-47.56-541.169-48.679-542.288-48.68-543.668z M-61.06-543.668
                c-0.001-0.664,0.261-1.301,0.73-1.77c0.469-0.47,1.106-0.732,1.77-0.73c0.662,0,1.296,0.264,1.764,0.732
                c0.467,0.47,0.729,1.105,0.727,1.768c0.002,0.662-0.259,1.297-0.727,1.766s-1.102,0.733-1.764,0.734
                c-0.664,0.001-1.3-0.262-1.77-0.73C-60.798-542.368-61.061-543.005-61.06-543.668L-61.06-543.668z M-73.45-543.668
                c0-1.381,1.12-2.5,2.5-2.5c1.381,0,2.5,1.119,2.5,2.5c0,1.38-1.119,2.499-2.5,2.5C-72.331-541.169-73.45-542.288-73.45-543.668z
                 M-85.84-543.668c0-1.381,1.12-2.5,2.5-2.5s2.5,1.119,2.5,2.5c0,1.38-1.12,2.499-2.5,2.5
                C-84.72-541.169-85.839-542.288-85.84-543.668z M-98.229-543.668c0-1.381,1.12-2.5,2.5-2.5s2.5,1.119,2.5,2.5
                c0,1.38-1.12,2.499-2.5,2.5C-97.11-541.169-98.229-542.288-98.229-543.668z M-110.609-543.668c-0.001-0.664,0.261-1.301,0.73-1.77
                c0.469-0.47,1.106-0.732,1.77-0.73c0.662,0,1.296,0.264,1.763,0.733c0.467,0.469,0.728,1.104,0.726,1.767
                c0.002,0.661-0.259,1.297-0.726,1.766s-1.102,0.733-1.763,0.734c-0.664,0.001-1.3-0.262-1.77-0.73
                C-110.348-542.368-110.611-543.005-110.609-543.668z M-71.869-594.945h13c1.104,0,2,0.896,2,2s-0.896,2-2,2h-13v13
                c0,1.104-0.896,2-2,2s-2-0.896-2-2v-13h-13c-1.104,0-2-0.896-2-2s0.896-2,2-2h13v-13c0-1.104,0.896-2,2-2s2,0.896,2,2V-594.945z
                 M-123-543.668c0-1.381,1.12-2.5,2.5-2.5s2.5,1.119,2.5,2.5c0,1.38-1.12,2.499-2.5,2.5C-121.88-541.169-123-542.288-123-543.668z
                 M-120.989-640.317c-0.161-0.031-0.319-0.078-0.471-0.14c-0.149-0.064-0.293-0.142-0.43-0.23c-0.137-0.093-0.265-0.2-0.38-0.32
                c-0.119-0.113-0.224-0.241-0.311-0.38c-0.092-0.134-0.169-0.278-0.229-0.43c-0.062-0.148-0.109-0.302-0.141-0.46
                c-0.036-0.161-0.052-0.325-0.05-0.49c-0.003-0.165,0.013-0.329,0.05-0.49c0.031-0.161,0.079-0.318,0.141-0.47
                c0.061-0.151,0.137-0.295,0.229-0.43c0.087-0.139,0.191-0.267,0.311-0.38c0.115-0.117,0.242-0.221,0.38-0.31
                c0.134-0.092,0.278-0.169,0.43-0.23c0.152-0.062,0.31-0.108,0.471-0.14c0.323-0.07,0.657-0.07,0.979,0
                c0.157,0.033,0.311,0.08,0.46,0.14c0.154,0.063,0.301,0.14,0.44,0.23c0.134,0.09,0.258,0.193,0.37,0.31
                c0.119,0.116,0.226,0.243,0.319,0.38c0.088,0.137,0.166,0.281,0.23,0.43c0.123,0.306,0.187,0.631,0.189,0.96
                c-0.002,0.165-0.019,0.329-0.05,0.49c-0.032,0.158-0.079,0.312-0.14,0.46c-0.065,0.149-0.142,0.293-0.23,0.43
                c-0.093,0.138-0.2,0.265-0.319,0.381c-0.114,0.117-0.238,0.224-0.37,0.319c-0.142,0.087-0.289,0.164-0.44,0.23
                c-0.149,0.06-0.303,0.107-0.46,0.14c-0.162,0.031-0.326,0.048-0.49,0.05C-120.664-640.269-120.828-640.285-120.989-640.317z"
        />
      </g>
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="-97.7578"
        y1="-532.4717"
        x2="-98.6859"
        y2="-535.3293"
        gradientTransform="matrix(220.1035 0 0 -219.1035 21724.8477 -117910.2266)"
      >
        <stop offset="0" style={{ stopColor: "#00E833" }} />
        <stop offset="1" style={{ stopColor: "#0B74DE" }} />
      </linearGradient>
      <path
        fill="url(#SVGID_1_)"
        d="M33.25-656.25l-3.666-3.5l-40.657,42.104l-57.426-55.603l-3.833,3.417l58.125,56.112
            c-0.062,0.442-0.008,0.902,0.174,1.331c0.392,0.924,1.298,1.523,2.74,1.485l78.628,76.073l3.583-3.75l-78.396-75.589L33.25-656.25z
            "
      />
      <linearGradient
        id="extendable-Shape_3_"
        gradientUnits="userSpaceOnUse"
        x1="-99.6406"
        y1="-538.9062"
        x2="-97.8338"
        y2="-536.9236"
        gradientTransform="matrix(99.1035 0 0 -99.1036 9745.8486 -53890.25)"
      >
        <stop offset="0" style={{ stopColor: "#00E833" }} />
        <stop offset="1" style={{ stopColor: "#3197FE" }} />
      </linearGradient>
      <path
        id="extendable-rect-right-top"
        fill="url(#extendable-Shape_3_)"
        d="M-2-721v54.512c0,1.326,0.527,2.598,1.465,3.536l34.591,34.591
            c0.938,0.938,2.21,1.464,3.536,1.464h54.512c2.762,0,5-2.238,5-5V-721c0-2.761-2.238-5-5-5H3C0.238-726-2-723.761-2-721z"
      />
      <linearGradient
        id="extendable-Shape_4_"
        gradientUnits="userSpaceOnUse"
        x1="-96.6465"
        y1="-538.1768"
        x2="-97.7924"
        y2="-537.0216"
        gradientTransform="matrix(99.1035 0 0 -99.1035 9624.8516 -53890.2305)"
      >
        <stop offset="0" style={{ stopColor: "#00E833" }} />
        <stop offset="1" style={{ stopColor: "#3197FE" }} />
      </linearGradient>
      <path
        id="extendable-rect-left-top"
        fill="url(#extendable-Shape_4_)"
        d="M-23.896-721v54.512c0,1.326-0.527,2.598-1.465,3.536
            l-34.591,34.591c-0.938,0.938-2.209,1.464-3.535,1.464H-118c-2.761,0-5-2.239-5-5V-721c0-2.761,2.239-5,5-5h89.104
            C-26.135-726-23.896-723.761-23.896-721z"
      />
      <linearGradient
        id="extendable-Shape_5_"
        gradientUnits="userSpaceOnUse"
        x1="-100.2583"
        y1="-534.4707"
        x2="-97.8099"
        y2="-537.0026"
        gradientTransform="matrix(99.1035 0 0 -99.1035 9745.8486 -53770.2266)"
      >
        <stop offset="0" style={{ stopColor: "#00E833" }} />
        <stop offset="1" style={{ stopColor: "#3197FE" }} />
      </linearGradient>
      <path
        id="extendable-rect-right-bottom"
        fill="url(#extendable-Shape_5_)"
        d="M-2-511.896v-54.512c0-1.326,0.527-2.599,1.465-3.536
            l34.591-34.591c0.938-0.938,2.21-1.464,3.536-1.464h54.512c2.762,0,5,2.239,5,5v89.104c0,2.762-2.238,5-5,5H3
            c-1.326,0-2.598-0.527-3.535-1.465S-2-510.57-2-511.896z"
      />
      <g id="extendable-circle">
        <circle
          id="extendable-path-8"
          fill="#3298FF"
          cx="-11.731"
          cy="-613.367"
          r="27.5"
        />
        <circle
          id="extendable-path-8_1_"
          fill="none"
          cx="-11.731"
          cy="-613.367"
          r="27.5"
        />
        <circle
          id="extendable-Oval"
          fill="#00E833"
          cx="-11.731"
          cy="-613.367"
          r="10"
        />
      </g>
    </g>
  </StyledSvg>
);

export default Extendable;
