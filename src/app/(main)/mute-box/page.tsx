
import Loader from "@/components/share/loader/Loader";
import dynamic from "next/dynamic";
import React from "react";

const page = () => {
  const DynamicMuteBox = dynamic(
    () => import("@/components/main/mute-box/MuteBox"),
    {
      loading: () => <Loader />,
    }
  );
  return (
    <div>
      <DynamicMuteBox />
    </div>
  );
};

export default page;
