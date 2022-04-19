import React from 'react'
import Head from "next/head";

import { useSelector } from "react-redux";
import EditablePlotCard from '../component/EditablePlotCard';

function addplot() {
  const { address, isLoggedIn } = useSelector((state) => state.user);

  return (
    <div>
      <Head>
        <title>CornerStone</title>
      </Head>
      <main>
        {isLoggedIn && (
          <div className="container my-3">
            <EditablePlotCard/>
          </div>
        )}
        {!isLoggedIn && (
          <div className="container">
            <p className="h5 text-center mt-5">
              Sorry, You need to login to add Plots!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default addplot