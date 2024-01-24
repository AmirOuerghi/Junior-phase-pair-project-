import React, { useEffect } from 'react';
import './NavBar.css';

const Navbar = () => {
  useEffect(() => {
    function test() {
      var tabsNewAnim = document.getElementById('navbarSupportedContent');
      var selectorNewAnim = document.getElementById('navbarSupportedContent').querySelectorAll('li').length;
      var activeItemNewAnim = tabsNewAnim.querySelector('.active');
      var activeWidthNewAnimHeight = activeItemNewAnim.offsetHeight;
      var activeWidthNewAnimWidth = activeItemNewAnim.offsetWidth;
      var itemPosNewAnimTop = activeItemNewAnim.offsetTop;
      var itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;

      document.querySelector(".hori-selector").style.cssText = "top: " + itemPosNewAnimTop + "px; left: " + itemPosNewAnimLeft + "px; height: " + activeWidthNewAnimHeight + "px; width: " + activeWidthNewAnimWidth + "px;";
      
      tabsNewAnim.addEventListener("click", function(e){
        var target = e.target;
        if(target.nodeName === "LI"){
          document.getElementById('navbarSupportedContent').querySelectorAll('.nav-item').forEach(function(navItem){
            navItem.classList.remove('active');
          });
          target.classList.add('active');
          var activeWidthNewAnimHeight = target.offsetHeight;
          var activeWidthNewAnimWidth = target.offsetWidth;
          var itemPosNewAnimTop = target.offsetTop;
          var itemPosNewAnimLeft = target.offsetLeft;
          document.querySelector(".hori-selector").style.cssText = "top: " + itemPosNewAnimTop + "px; left: " + itemPosNewAnimLeft + "px; height: " + activeWidthNewAnimHeight + "px; width: " + activeWidthNewAnimWidth + "px;";
        }
      });
    }

    // Initial call to test function
    test();

    // Event listener for window resize
    const handleResize = () => {
      test();
    };

    // Attach event listener on component mount
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      // Remove event listener on component unmount
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <a className="navbar-brand navbar-logo" href="#">
        Navbar
      </a>
      <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);"><i className="fas fa-tachometer-alt"></i>Dashboard</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="javascript:void(0);"><i className="far fa-address-book"></i>Address Book</a>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
