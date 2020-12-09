//Import
import React from "react";

//Import CSS
import "../stylesheet/Footer.css";

const Footer = () => {
  return (
    <div className="row">
      <div className="text-center colorFooter col-12">
        © Copyright <script>document.write(new Date().getFullYear());</script>2020&nbsp;|&nbsp;&nbsp;&nbsp;All Rights Reserved&nbsp;&nbsp;&nbsp;<a className="link" href="mailto:ezequiel.salomon@gmail.com" target="_blank">EAS</a>
      </div>
    </div>
  );
};

export default Footer;
