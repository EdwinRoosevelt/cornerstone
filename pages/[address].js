import React from 'react';
import Head from "next/head";

import { useSelector } from 'react-redux';
import { useRouter } from "next/router";

import PlotCard from '../component/PlotCard';

const data = [
  {
    id: "978412345",
    ownerName: "Edwin Roosevelt",
    walletAddress: "0x2d34f7Ed5B4Dbe01E5e5739738303e0085830762",
    cityName: "Vellore, India",
    median: { lat: 12.3547, long: 13.4567 },
    cornerCoordinates: [
      { lat: 12.3546, long: 13.4567 },
      { lat: 12.3546, long: 13.4567 },
      { lat: 12.3546, long: 13.4567 },
    ],
  },
  {
    id: "978412346",
    ownerName: "Edwin Roosevelt",
    walletAddress: "0x2d34f7Ed5B4Dbe01E5e5739738303e0085830762",
    cityName: "Chennai, India",
    median: { lat: 22.3547, long: 33.4567 },
    cornerCoordinates: [
      { lat: 22.3546, long: 33.4567 },
      { lat: 24.3546, long: 34.4567 },
      { lat: 25.3546, long: 35.4567 },
    ],
  },
];

function UserPlots() {
    const router = useRouter()
    const {address, isLoggedIn} = useSelector(state => state.user)
    const { addressUrl } = router.query

  return (
    <div>
      <Head>
        <title>CornerStone</title>
      </Head>
      {isLoggedIn && (
        <div className="container">
          <p className="h5 mt-5">Hey, {address}</p>
          {data.map((plot) => {
            return <PlotCard data={plot} key={plot.id} />;
          })}
        </div>
      )}
      {!isLoggedIn && (
        <div className="container">
          <p className="h5 text-center mt-5">
            Sorry, You need to login to view your Plots!
          </p>
        </div>
      )}
    </div>
  );
}

export default UserPlots