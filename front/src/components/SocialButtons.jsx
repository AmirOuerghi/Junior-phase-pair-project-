import React from 'react';
import '../button.css';

const SocialButtons = () => {
  return (
    <div className="social">
      <div className="go">
        <i className="fab fa-google"></i> Google
      </div>
      <div className="fb">
        <i className="fab fa-facebook"></i> Facebook
      </div>
    </div>
  );
};

export default SocialButtons;
