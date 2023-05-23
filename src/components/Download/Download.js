import React from "react";

const Download = () => {
  return (
    <section className="w-full max-w-6xl p-4">
      <hr className="opacity-20 text-btnColor" />
      <div className="grid md: grid-cols-1 md:grid-cols-5 items-start justify-between py-4">
        <div className="col-span-1 md:col-span-4 flex flex-col items-center justify-center gap-1">
          <p className="text-2xl font-bold">Download Now</p>
          <p className="text-sm md:text-base text-center px-8 md:px-0">
            This app supports both iOS and Android. You may download it from
            AppStore or Google Play.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6">
            <a href={process.env.REACT_APP_PlayStoreUrl} target="blank">
              <button className="">
                <img
                  className="h-10"
                  src="https://i.ibb.co/YhCPF56/Google-Play.png"
                  alt=""
                />
              </button>
            </a>
            <a href={process.env.REACT_APP_AppStoreUrl} target="blank">
              <button className="">
                <img
                  className="h-10"
                  src="https://i.ibb.co/DQQhR75/App-Store.png"
                  alt=""
                />
              </button>
            </a>
            <a href={process.env.REACT_APP_ApkUrl} target="blank">
              <button className="">
                <img
                  className="h-10"
                  src="https://i.ibb.co/Qp9xfQk/Mac-App-Store.png"
                  alt=""
                />
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-1 flex items-start justify-center gap-8">
          <div className="hidden md:flex justify-center opacity-30 pt-10">
            <img
              className="h-28"
              src="https://i.ibb.co/zN2PyN7/Vertical-Line.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-lg font-bold pb-2">Scan QR code</p>
            <img
              className="w-28"
              src="https://i.ibb.co/V2dkzTh/QR.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr className="opacity-20 text-btnColor" />
    </section>
  );
};

export default Download;
