// any other web3 ui lib is also acceptable
import { useWeb3React } from "@web3-react/core";
.
.
.
const { account, library, chainId } = useWeb3React();
const signer = library.getSigner(account);
const videoObject = new PushAPI.video.Video({
  signer: SignerType;
  chainId: number;
  pgpPrivateKey: string;
  env?: ENV;
  setData: (fn: (data: VideoCallData) => VideoCallData) => void;
});
// IMediaStream is a custom type that represents a media stream object or null
type IMediaStream = MediaStream | null;

// VideoCallStatus is an enum that represents different statuses of a video call
// These values are used to indicate the current status of a video call
enum VideoCallStatus {
  // call hasn't been started yet
  UNINITIALIZED,
  
  // call has been started by the initiator but not received by the receiver
  INITIALIZED,
  
  // call has been received by the receiver but not connected yet
  RECEIVED,
  
  // call has been connected, and both users can interact now
  // MediaStream (includes both audio and video) exchange is now possible 
  CONNECTED,
  
  // call has been ended by one of the users
  DISCONNECTED,
  
  // retrying to establish the call from the INITIALIZED state
  RETRY_INITIALIZED,
  
  // retrying to establish the call from the RECEIVED state
  RETRY_RECEIVED,
}

type VideoCallData = {
  meta: { // contains meta info of the video call
    chatId: string; // unique identifier for every push chat
    initiator: {
      address: string; // address of the initiator of the call
      signal: any; // signal data from the initiator
    };
    broadcast?: { // will be used in Push Spaces
      livepeerInfo: any;
      hostAddress: string;
      coHostAddress: string;
    };
  };
  // This property is used to store the info of the local peer/user
  local: {
    stream: IMediaStream; // the stream object
    audio: boolean | null; // whether local audio is on or not
    video: boolean | null; // whether local video is on or not
    address: string; // address of the local peer/user
  };
  incoming: [
  // This property is used to store the info of an incoming peer/user
  {
    stream: IMediaStream; // the stream object
    audio: boolean | null; // whether incoming audio is on or not
    video: boolean | null; // whether incoming video is on or not
    address: string; // address of the incoming peer/user
    status: VideoCallStatus; // video call status with a particular incoming peer
    retryCount: number; // no. of retries required in establishing the call 
  }];
};
// As mentioned earlier, this should be used to initialize the data variable.
const initVideoCallData: PushAPI.VideoCallData = {
  meta: {
    chatId: '', 
    initiator: {
      address: '',
      signal: null,
    },
  },
  local: {
    stream: null,
    audio: null,
    video: null,
    address: '',
  },
  incoming: [
    {
      stream: null,
      audio: null,
      video: null,
      address: '',
      status: VideoCallStatus.UNINITIALIZED, // call is at the UNINITIALIZED status
      retryCount: 0,
    },
  ],
};
// NOTE: You don't have to define initVideoCallData in your project.
// Just import it using the following and use it:
import { initVideoCallData } from '@pushprotocol/restapi/src/lib/video';

// 1. For a vanilla JS project
let data: PushAPI.VideoCallData = initVideoCallData;

// 2. For a React project
import { useState } from "react";
const [data, setData] = useState<PushAPI.VideoCallData>(initVideoCallData);
/*
 - fn function is supplied by the caller of setData()
 - fn is a function that accepts current 'data' as input and returns updated 'data' 
*/
const setData: : (fn: (data: VideoCallData) => VideoCallData) => void = (fn) => {
  /*
    - Here, we are passing the current value of 'data' to fn
    - The return value of fn() i.e., the updated value of 'data' is assigned back to 'data'
  */
  data = fn(data);
};
const videoObject = new PushAPI.video.Video({
  signer: SignerType;
  chainId: number;
  pgpPrivateKey: string;
  env?: ENV;
  setData: (fn: (data: VideoCallData) => VideoCallData) => void;
});
await videoObject.create({
    video?: boolean; // for frontend use
    audio?: boolean; // for frontend use
    stream?: MediaStream; // for backend use
});
