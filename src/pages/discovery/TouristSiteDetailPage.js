import React, {useEffect, useState} from 'react';
import Layout from '../../components/layout/Layout';
import {connect, useDispatch} from 'react-redux';
import {getSite} from '../../redux/touristsites/touristsite-action-creator';
import {useParams} from 'react-router-dom';
import "../../App.css";
import {LinearProgress, Button} from "@material-ui/core";
import ReactMapGL, {Popup, Marker} from "react-map-gl";
import {LocationOn} from "@material-ui/icons";

function TouristsiteDetailPage({site, loading}) {
    const dispatch = useDispatch();

    const [showPopup, setShowPopup] = useState(true);

    const handlePopupClicked = () => {
        setShowPopup(!showPopup);
    }
    const [viewport, setViewport] = useState({
        zoom: 10,
        height: '50vh',
        width: '100%'
    });

    const handleViewportChange = viewport => {
        setViewport(viewport);
    }

    const {siteID} = useParams();
    useEffect(
        function () {
            dispatch(getSite(siteID));
        },
        [dispatch, siteID]
    );
    return (
        <Layout>
            <div>
                {loading && <LinearProgress variant="query"/>}
                <section>
                    <div>
                        <img
                            className="responsive-img inline-block image-display-cover responsive-image-fullscreen"
                            src={
                                site
                                    ? site.image
                                    : `${process.env.PUBLIC_URL}/images/default.jpg`
                            }
                            alt=""
                        />
                    </div>
                    <section id="Touristsite Detail" className="container grey-text">

                        <div className="container">
                            <div>
                                <p className="flow-text black-text text-lighten-2">{site && site.name}</p>
                                <p className="black-text text-lighten-3">{site && site.description}</p>
                                <h4 className="center">
                                    <span>Location</span>
                                </h4>

                                <ReactMapGL
                                    mapStyle="mapbox://styles/mapbox/streets-v11"
                                    {...viewport}
                                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                                    onViewportChange={handleViewportChange}
                                    latitude={site && site.coordinates[0]}
                                    longitude={site && site.coordinates[1]}>
                                    <Marker
                                        latitude={site && site.coordinates[0]}
                                        longitude={site && site.coordinates[1]}>

                                        <Button
                                            size={"large"}
                                            onClick={handlePopupClicked}
                                            startIcon={<LocationOn/>}/>

                                    </Marker>

                                    {
                                        showPopup && (
                                            <Popup
                                                onClose={handlePopupClicked}
                                                latitude={site && site.coordinates[0]}
                                                longitude={site && site.coordinates[1]}>
                                                <div className="white">
                                                    <p className="black-text text-lighten-2 flow-text">{site && site.name}</p>
                                                </div>
                                            </Popup>
                                        )
                                    }


                                </ReactMapGL>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        site: state.sites.selectedSite,
        loading: state.sites.loading,
    };
}

export default connect(mapStateToProps)(TouristsiteDetailPage);
