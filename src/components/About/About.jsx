import React from 'react';
import Divider from 'components/Divider';
import Button from 'components/Button';
import CV from 'assets/files/Adam Kopczynski - CV.pdf';

const About = () => {

    return(
        <section className="section about" id="about">
            <h3 className="mb-50 section-title">About me</h3>
            <div className="row justify-content-center">
                <div className="col-3">
                    <Divider />
                </div>
            </div>

            <div className="section-content">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-sm-12">
                        <div className="info-card">
                            <img src="https://scontent.flcj1-1.fna.fbcdn.net/v/t1.0-1/p320x320/53799316_1828195417285597_7862184510048174080_n.jpg?_nc_cat=103&_nc_eui2=AeHkV-UE2qTjcazlGb3-8IiOqSviseh81RxJus9B3DRy_dezJjecrn812IH9N8xWu9wWAByAMBfh7ndwcRXC1LkDwWv619j_x7tP7LiIX5MVKw&_nc_ht=scontent.flcj1-1.fna&oh=6b7357184ad6beafdbfed44072e1650c&oe=5D457C75" alt="Adam Kopczynski"/>
                            <div className="card-content">
                                <h2>Adam Kopczyński</h2>
                                <h3>Junior React/Javascript Developer</h3>
                                <p>
                                    I am junior who want to improve his programming skills.
                                </p>
                                <Button href={CV} download='Adam Kopczynski - CV.pdf'>Download CV</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;