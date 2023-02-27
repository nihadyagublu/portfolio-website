import ScreenshotBookstore from "../images/ScreenshotBookstore .png";
import ScreenshotEcommerce from "../images/ScreenshotEcommerce.png";
import ScreenshotLandingPage from "../images/ScreenshotLandingPage.png";
import ScreenshotCryptoApp from "../images/ScreenshotCryptoApp.png";
export const ProjectsData = [
  {
    id: 1,
    image: ScreenshotBookstore,
    title: "Online Bookstore",
    description:
      "The application uses The New York Times Books API that shows the current The New York Times Best Sellers list, and periodically updates the data. Visitors of the app can click the button to upload the list and choose an item that interests them. With that they can quickly look up to the details of the item and follow the Amazon link to actually make the purchase.",

    projectCode: "https://github.com/nihadyagublu/bookstore_app",
    liveDemo: "https://ny-bookstore-app.web.app",
  },

  {
    id: 2,
    image: ScreenshotCryptoApp,
    title: "Crypto App",
    description:
      "Crypto App that shows the price and other related data of different crypto currencies. The project uses CoinGecko API to load the data. React Router was utilized to enable client side routing. By loading the app, visitors easily see the current price of different crypto currencies and by clicking details button they can track more related info about them. Axios was used to fetch data.",
    projectCode: "https://github.com/nihadyagublu/crypto-currency-app",
    liveDemo: "https://react-http-b70cb.firebaseapp.com/",
  },

  {
    id: 3,
    image: ScreenshotLandingPage,
    title: "Landing page sample for a construction company",
    description:
      "Landing page that embodies simple yet elegant web design. The landing page uses AOS library to provide the application smooth scrolling effects and pleasant user experience. It uses Bootstrap and plain CSS to give styling. And it uses generic text to fill the spaces for description and details.",
    projectCode: "https://github.com/nihadyagublu/landing-page-sample",
    liveDemo: "https://landing-page-sample-const-company.netlify.app/",
  },

  {
    id: 4,
    image: ScreenshotEcommerce,
    title: "E-commerce app",
    description:
      "An example Front-end E-commerce React project with operational functionalities and prototype.  Visitors can easily look up the details of items and add to their cart. They can filter the products in alphabetical order or in prices ranging from low to high and high to low. In the project contextAPI was utilized for state management, Material UI was used for design purposes. ",
    projectCode: "https://github.com/nihadyagublu/e-commerce-app",
    liveDemo: "https://e-commerce-app-816e6.web.app/",
  },
];
