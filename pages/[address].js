import React from 'react';

import { useRouter } from "next/router";
import PlotCard from '../component/PlotCard';

const data = {
  ownerName: "Edwin Roosevelt",
  cityName: "Vellore, India",
  plotLocation: "",
  cornerCoordinates: []
}

function Profile() {
    const router = useRouter()
    const { address } = router.query

  return (
    <div>
      
      Hi, {address}
      <PlotCard data={data}/>
    </div>
  );
}

export default Profile