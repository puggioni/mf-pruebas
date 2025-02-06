
import { registerApplication, start } from "single-spa";
// import { myImports } from "./imports";

// const dynamicImports = myImports();

// System.config({
//     map: dynamicImports
// });
// System.addImportMap({
//     imports: {
//         "@redbee/seed": "http://localhost:8081/redbee-seed.bundle.js",
//     }
// });



// System.set('systemjs-importmap', {
//     'imports': {
//         "@redbee/seed": "http://localhost:8081/redbee-seed.bundle.js"
//     }
// });

registerApplication(
    // Name of our single-spa application
    "@redbee/seed",
    // loadingFunction
    () => System.import("@redbee/seed"),
    // activityFunction
    (location) =>
        location.pathname.startsWith("/seed"),
);

start()