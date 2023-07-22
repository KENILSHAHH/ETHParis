/** @format */

import { IDKitWidget } from '@worldcoin/idkit';

function WorldCoin() {
  <IDKitWidget
    app_id="app_staging_037e4ab05939862897bb5e4590281a1c" // obtain this from developer.worldcoin.org
    action="my_action"
    enableTelemetry
    onSuccess={(result) => console.log(result)} // pass the proof to the API or your smart contract
  />;
}

export default WorldCoin;
