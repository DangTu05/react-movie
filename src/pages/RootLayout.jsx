import Header from "@components/Header";
import LoadingAnimation from "@components/LoadingAnimation";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<LoadingAnimation />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootLayout;
