import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import { connect, useDispatch } from 'react-redux';
import Region from '../../components/shared/Region';
import { getRegions } from '../../redux/regions/region-action-creator';
function DiscoveryPage({ regions }) {
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getRegions());
    },
    [dispatch, getRegions]
  );

  return (
    <Layout>
      <div>
        {/* <!--List of regions and their attractions--> */}
        <section>
          <section id="discovery" className="section section-discovery">
            <div className="container">
              <div className="row" id="1">
                <h4 className="center">
                  <span>DISCOVER PLACES</span>
                </h4>

                {regions &&
                  regions.map(function (region, index) {
                    return (
                      <div className="col s12 m6 l4" key={index}>
                        <Region region={region} />
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
    regions: state.regions.regions,
    loading: state.regions.loading,
  };
}
export default connect(mapStateToProps)(DiscoveryPage);
