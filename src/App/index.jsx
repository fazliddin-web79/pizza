import React from "react";
import Generic from "../Generic";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Select } from "../Mock/select";
import NotFound from "../NotFound";
import Footer from "../Components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer />}>
          <Route path="/" element={<Generic />}>
            {Select.map((item) => {
              return (
                <Route
                  key={item.id}
                  path={`${item.path}`}
                  element={item.element}
                />
              );
            })}
          </Route>
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
