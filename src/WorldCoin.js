/** @format */

import { IDKitWidget ,solidityEncode} from '@worldcoin/idkit';

function WorldCoin({props}) {
  <IDKitWidget
    app_id="app_staging_037e4ab05939862897bb5e4590281a1c" // obtain this from developer.worldcoin.org
    action={solidityEncode(["uint256"] , ["verifyUser"])}
  credentential_types = {[CreedentialType.Orb]}
  address = {props.address}
    enableTelemetry
    onSuccess={(result) => console.log(result)} // pass the proof to the API or your smart contract
  />;
}

export default WorldCoin;
