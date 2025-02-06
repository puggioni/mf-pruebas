import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));

console.log('ROUTES SINGLE-SPA LAYOUT', routes)
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    window.console.log('-- NAME APLICATIONS ROOT CONTAINER ---', name);
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
