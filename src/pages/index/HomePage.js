import React from 'react';
import Layout from '../../components/layout/Layout';
import "../../App.css";
import {Carousel} from "rsuite";

function HomePage() {

    return (
        <Layout>
            <div className="full-screen">
                <Carousel
                    className="responsive-carousel responsive-height"
                    shape="bar"
                    autoplay={true}>
                    <img
                        width="100%"
                        height="100%"
                        alt=""
                        src={`${process.env.PUBLIC_URL}/images/cover.jpg`}/>

                    <img
                        height="100%"
                        width="100%"
                        alt=""
                        src={`${process.env.PUBLIC_URL}/images/secondcover.jpg`}
                    />

                    <img
                        height="100%"
                        width="100%"
                        alt=""
                        src={`${process.env.PUBLIC_URL}/images/thirdcover.jpg`}/>

                </Carousel>
            </div>
            <div className="carousel carousel-slider">

                <div className="carousel-item">
                    <img className="responsive-img full-screen inline-block" alt=""
                         src={`${process.env.PUBLIC_URL}/images/cover.jpg`}/>
                    <div className="caption center-align">
                        <h3>GO TOUR!</h3>
                        <h5 className="light grey-text text-darken-3 hide-on-small-only">
                            Across Ghana, you can find everything from beautiful sites to rich
                            culture Visit museums, Makola market and Independence Square.
                        </h5>
                    </div>
                </div>

                <div className="carousel-item">
                    <img
                        className="full-screen inline-block"
                        alt=""
                        src={`${process.env.PUBLIC_URL}/images/secondcover.jpg`}
                    />
                    <div className="caption center-align">
                        <h3>Extraordinary Experience</h3>
                        <h5 className="light grey-text text-darken-3 hide-on-small-only">
                            Take a digital tour of our unique attractions
                        </h5>
                    </div>
                </div>

                <div className="carousel-item">
                    <img className="full-screen inline-block" alt=""
                         src={`${process.env.PUBLIC_URL}/images/thirdcover.jpg`}/>
                    <div className="caption center-align">
                        <h3>Sightseeing & City Strolls</h3>
                        <h5 className="light grey-text text-darken-3 hide-on-small-only">Start your discovery tour
                            now</h5>
                    </div>
                </div>
            </div>

            {/* <!--section:Popular Places--> */}
            <section>
                <section id="popular" className="section section-popular">
                    <div className="container">
                        <div className="row">
                            <h4 className="center">
                                <span className="yellow-text darken-4">Popular</span>{' '}
                                Places
                            </h4>
                            <div className="col s12 m6">
                                <div className="card large">
                                    <div className="card-image">
                                        <img
                                            alt=""
                                            src={`${process.env.PUBLIC_URL}/images/gotourimage.jpg`}
                                        />

                                    </div>
                                    <div className="card-content">
                    <span className="card-title">
                      Independence Square,Greater Accra Region
                    </span>
                                        This place often hosts the annual independence celebrations
                                        as well as other national events. Every visitor is free to
                                        take pictures of buildings.
                                        <a href="https://goo.gl/maps/oR7qeXarLqMotXhH8">
                                            click for directions
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6">
                                <div className="card large">
                                    <div className="card-image">
                                        <img
                                            alt=""
                                            src={`${process.env.PUBLIC_URL}/images/larabanga mosque.jpg`}
                                        />

                                    </div>
                                    <div className="card-content">
                    <span className="card-title">
                      Larabanga Mosque,Northen Region
                    </span>
                                        It is the oldest mosque in the country and one of the oldest
                                        in West Africa, and has been referred to as the "Mecca of
                                        West Africa".
                                        <p>
                                            <a href="https://goo.gl/maps/KpM9BtJCCnpkJ5EC7">
                                                click for directions
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6">
                                <div className="card large">
                                    <div className="card-image">
                                        <img
                                            alt=""
                                            src={`${process.env.PUBLIC_URL}/images/bosomtwe.jpg`}
                                        />

                                    </div>
                                    <div className="card-content">
                    <span className="card-title">
                      Lake Bosomtwe,Ashanti Region
                    </span>
                                        Lake Bosumtwi (also spelled Bosomtwe) situated within an
                                        ancient meteorite impact crater,and is the only natural lake
                                        in Ashanti.
                                        <a href="https://goo.gl/maps/iPQBVyb6mHhKjp9cA">
                                            click for directions
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    );
}

export default HomePage;
