import React from 'react';

const logo = "m 499.3 736.7 c -51 -64 -81 -120.1 -91 -168.1 c -10 -39 -6 -70 11 -93 c 18 -27 45 -40 80 -40 s 62 13 80 40 c 17 23 21 54 11 93 c -11 49 -41 105 -91 168.1 Z m 362.2 43 c -7 47 -39 86 -83 105 c -85 37 -169.1 -22 -241.1 -102 c 119.1 -149.1 141.1 -265.1 90 -340.2 c -30 -43 -73 -64 -128.1 -64 c -111 0 -172.1 94 -148.1 203.1 c 14 59 51 126.1 110 201.1 c -37 41 -72 70 -103 88 c -24 13 -47 21 -69 23 c -101 15 -180.1 -83 -144.1 -184.1 c 5 -13 15 -37 32 -74 l 1 -2 c 55 -120.1 122.1 -256.1 199.1 -407.2 l 2 -5 l 22 -42 c 17 -31 24 -45 51 -62 c 13 -8 29 -12 47 -12 c 36 0 64 21 76 38 c 6 9 13 21 22 36 l 21 41 l 3 6 c 77 151.1 144.1 287.1 199.1 407.2 l 1 1 l 20 46 l 12 29 c 9.2 23.1 11.2 46.1 8.2 70.1 Z m 46 -90.1 c -7 -22 -19 -48 -34 -79 v -1 c -71 -151.1 -137.1 -287.1 -200.1 -409.2 l -4 -6 c -45 -92 -77 -147.1 -170.1 -147.1 c -92 0 -131.1 64 -171.1 147.1 l -3 6 c -63 122.1 -129.1 258.1 -200.1 409.2 v 2 l -21 46 c -8 19 -12 29 -13 32 c -51 140.1 54 263.1 181.1 263.1 c 1 0 5 0 10 -1 h 14 c 66 -8 134.1 -50 203.1 -125.1 c 69 75 137.1 117.1 203.1 125.1 h 14 c 5 1 9 1 10 1 c 127.1 0.1 232.1 -123 181.1 -263.1 Z"

const Logo = () => {
  return (
    <div className="logo-box">
      <svg viewBox="0 0 1000 1000" role="presentation" className="logo">
        <path d={logo} />
      </svg>
    </div>
  );
};

export default Logo;