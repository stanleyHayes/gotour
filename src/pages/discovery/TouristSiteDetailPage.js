import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import { connect, useDispatch } from 'react-redux';
import { getSite } from '../../redux/touristsites/touristsite-action-creator';
import { useParams } from 'react-router-dom';

function TouristsiteDetailPage({ site }) {
  const dispatch = useDispatch();

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
        {/* <!--Touristsite details--> */}
        <section>
          <section id="Touristsite Detail" className="container grey-text">
            <div className="container">
              <div>
                <img
                  className="responsive-img"
                  src={
                    site
                      ? site.image
                      : `${process.env.PUBLIC_URL}/images/default.jpg`
                  }
                  alt=""
                />
              </div>
              <div>
                <p className="flow-text">{site && site.name}</p>
                <p>{site && site.description}</p>
              </div>
              <div className="row" id="1">
                <h4 className="center">
                  <span>Gallery</span>
                </h4>

                {/**Site gallery here */}
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
