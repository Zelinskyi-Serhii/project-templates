import "./App.scss";
import { Suspense } from "react";
import { Loader } from "@/components/Loader";
import { Routes } from "./Routes";

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </div>
  );
};
