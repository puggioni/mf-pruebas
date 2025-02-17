import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../../routes/routes";

export default () => {
  return (
    <div className="app__content">
      <div className="content">
        <BrowserRouter>
          <h1>SEED-2</h1>
        </BrowserRouter>
      </div>
    </div>
  );
};
