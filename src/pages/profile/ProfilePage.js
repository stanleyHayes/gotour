import React from 'react';
import Layout from '../../components/layout/Layout';
import { connect } from 'react-redux';
import Favorite from '../../components/shared/Favorite';
import Bookmark from '../../components/shared/Bookmark';

function ProfilePage({ currentUser }) {
  return (
    <Layout>
      <div>
        <div className="container">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>Favourites</h4>
            </li>

            {currentUser && currentUser.favorites ? (
              currentUser.favorites.map(function (favorite, index) {
                return <Favorite favorite={favorite} />;
              })
            ) : (
              <div>
                <p className="flow-text center">You have no favorites</p>
              </div>
            )}
          </ul>
        </div>
        <div className="container">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>Want to go</h4>
            </li>

            {currentUser && currentUser.wantToGo ? (
              currentUser.wantToGo.map(function (place, index) {
                return <Bookmark place={place} key={index} />;
              })
            ) : (
              <div>
                <p className="flow-text center">You have no bookmarks</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.authentication.currentUser,
  };
}
export default connect(mapStateToProps)(ProfilePage);
