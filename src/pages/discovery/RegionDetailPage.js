import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import { connect, useDispatch } from 'react-redux';
import TouristSite from '../../components/shared/TouristSite';
import { getRegion } from '../../redux/regions/region-action-creator';
import { useParams } from 'react-router-dom';
import "../../App.css";
import {LinearProgress} from "@material-ui/core";

function RegionDetailPage({ region, loading }) {
  console.log(region);
  const dispatch = useDispatch();

  const { regionID } = useParams();
  useEffect(
    function () {
      dispatch(getRegion(regionID));
    },
    [dispatch, regionID]
  );
  return (
    <Layout>
      <div>
        {loading && <LinearProgress variant="query" />}
        <section>
          <section id="Region Detail" className="section section-region">
            <div className="container">
              <div>
                <img
                  className="responsive-img inline-block full-screen image-display-cover"
                  src={
                    region
                      ? region.image
                      : `${process.env.PUBLIC_URL}/images/default.jpg`
                  }
                  alt=""
                />
              </div>
              <div>
                <p className="flow-text">{region && region.name}</p>
                <p>{region && region.description}</p>
              </div>
              <div className="row" id="1">
                <h4 className="center">
                  <span>Tourist sites</span>
                </h4>

                {region &&
                  region.touristsites &&
                  region.touristsites.map(function (site, index) {
                    return (
                      <div className="col s12 m6 l4" key={index}>
                        <TouristSite site={site} />
                      </div>
                    );
                  })}
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
    region: state.regions.selectedRegion,
    loading: state.regions.loading,
  };
}
export default connect(mapStateToProps)(RegionDetailPage);
