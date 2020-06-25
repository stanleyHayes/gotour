import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import { connect, useDispatch } from 'react-redux';
import { getSite } from '../../redux/touristsites/touristsite-action-creator';
import { useParams } from 'react-router-dom';
import "../../App.css";
import {LinearProgress} from "@material-ui/core";

function TouristsiteDetailPage({ site, loading }) {
  const dispatch = useDispatch();
  console.log('Site',site);

  const { siteID } = useParams();
  useEffect(
    function () {
      dispatch(getSite(siteID));
    },
    [dispatch, siteID]
  );
  return (
    <Layout>
      <div>
        {loading && <LinearProgress variant="query" />}
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
