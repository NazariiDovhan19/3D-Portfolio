import { withBasePath } from "@/lib/base-path";
import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";

const NotFoundPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene={withBasePath("/assets/untitled3.spline")} style={{ height: "100vh" }} />
      </Suspense>
    </>
  );
};

export default NotFoundPage;
