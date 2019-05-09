import React from 'react';

const whiteFill =
  'm 10.5 20.0005 c 0 1.93268 -1.56704 3.49949 -3.5 3.49949 s -3.5 -1.56682 -3.5 -3.49949 c 0 -1.93268 1.56704 -3.50051 3.5 -3.50051 s 3.5 1.56783 3.5 3.50051 m -9.99486 -18.5876 l -0.00513752 8.13836 c 0 0.457964 0.216821 0.889929 0.588807 1.17091 l 5.07731 3.8317 c 0.487076 0.367971 1.16837 0.367971 1.65647 0.0009994 l 5.08142 -3.8267 c 0.371986 -0.278978 0.589834 -0.710944 0.590861 -1.16791 c 0.0010271 -1.75186 0.0041101 -6.21051 0.0051391 -8.14036 c 0 -0.50396 -0.420283 -0.912928 -0.939216 -0.912928 l -11.1164 -0.00699945 c -0.517904 -0.00099942 -0.938187 0.407969 -0.939215 0.912928';

const orangeFill =
  'm 12 9.5 l -5 -3.70124 l 5 -3.79876 Z m -6.12923 9.18748 c -0.521827 0.318083 -0.870769 0.876246 -0.870769 1.51444 c 0 0.993753 0.837035 1.79808 1.87016 1.79808 c 0.818067 0 1.50435 -0.506501 1.75947 -1.20952 Z';

const redFill = 'm 12 9.5 l -5 3.75 l -5 -3.75 v -7.5 Z';

const grayOutline =
  'm 7 24 c -2.20605 0 -4 -1.79395 -4 -3.99902 c 0 -2.20605 1.79395 -4.00098 4 -4.00098 s 4 1.79492 4 4.00098 c 0 2.20508 -1.79395 3.99902 -4 3.99902 Z m 0 -7 c -1.6543 0 -3 1.34668 -3 3.00098 c 0 1.65332 1.3457 2.99902 3 2.99902 s 3 -1.3457 3 -2.99902 c 0 -1.6543 -1.3457 -3.00098 -3 -3.00098 Z m 0.0039062 -1.82422 c -0.456055 0 -0.912109 -0.106445 -1.26172 -0.316406 l -5.0459 -3.86426 c -0.469727 -0.364258 -0.696289 -0.852539 -0.696289 -1.49512 v -8 c 0.0009766 -0.373047 0.167969 -0.75293 0.458008 -1.04297 c 0.290039 -0.290527 0.668945 -0.457031 1.04102 -0.457031 h 0.0019531 h 10.999 c 0.785156 0 1.5 0.714844 1.5 1.5 v 7.92773 c -0.0009766 0.676269 -0.242188 1.21777 -0.695313 1.56689 l -5.00098 3.83252 c -0.350586 0.233399 -0.825195 0.348633 -1.2998 0.348633 Z m -5.50586 -14.1758 c -0.104492 0 -0.232422 0.0625 -0.333008 0.163574 c -0.101563 0.102051 -0.165039 0.230957 -0.165039 0.337402 v 7.99902 c 0 0.330566 0.0888672 0.53418 0.306641 0.703125 l 4.99707 3.83105 c 0.333008 0.195313 1.08594 0.200195 1.4209 -0.0205078 l 4.97168 -3.8125 c 0.200195 -0.154297 0.302734 -0.415527 0.303711 -0.774902 v -7.92676 c 0 -0.228516 -0.271484 -0.499512 -0.5 -0.499512 h -11 h -0.0009766 s 0 0 -0.0009765 0 Z';

const OwnerReview = () => {
  return (
    <div className="right-description-box">
      <div className="review-photo-description-box">
        <img
          src="http://pbs.twimg.com/profile_images/1002272769352978433/9S4QWSR0_400x400.jpg"
          alt="review-picture"
          className="review-picture"
        />
        <svg viewBox="0 0 14 24" role="img" className="review-picture-medal">
          <path d={whiteFill} fill="#fff" />
          <path d={orangeFill} fill="#ffb400" />
          <path d={redFill} fill="#ff5a5f" />
          <path d={grayOutline} fill="#484848" />
        </svg>
      </div>

      <div className="review-commentary-box">
        <div className="quote-comment">
          "Airbnb's most wish-listed listing in South Africa"
        </div>
        <div className="host-comment">Hosted by Spongebob</div>
      </div>
    </div>
  );
};

export default OwnerReview;
