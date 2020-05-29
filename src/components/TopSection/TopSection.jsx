import React from "react";

import Divider from "components/Divider";
import Button from "components/Button";

const TopSection = () => {
  return (
    <div className="skewed-bg " id="home">
      <div className="skewed-content">
        <div className="row">
          <div className="top-section">
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-12">
                <h1 className="top-section__title">Javascript developer</h1>
                <Divider />
                <p>
                  I am <strong>Javascript/React developer</strong>, fascinated
                  with new technologies.
                </p>
                <Button to="#about" className="show-more" color="white">
                  Show more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
