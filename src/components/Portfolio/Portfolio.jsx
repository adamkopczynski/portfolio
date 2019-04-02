import React from 'react';
import PortfolioCard from './ProjectCard';

import projects from './projects';

const Portfolio = () => {

    return(
        <section className="section portfolio" id="portfolio">
            <h3 className="mb-50 section-title">Portfolio</h3>

            <div className="portfolio-grid mb-2">
                <div className="row justify-content-center">
                    {
                        projects.map(item => 
                            <div className="col-sm-12 col-md-4">
                                <PortfolioCard {...item} />
                            </div>    
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio;