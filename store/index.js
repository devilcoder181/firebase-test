import Vuex from "vuex";
import * as enquiry from "./modules/enquiry";
import * as loader from "./modules/loader";
import * as banner from "./modules/banner";
import * as testimonials from "./modules/testimonials";
import * as about from "./modules/about";
import * as social from "./modules/social";
import * as seo from "./modules/seo";

const createStore = () => {
  return new Vuex.Store({

    modules: {
        loader,
        enquiry,
        banner,
        testimonials,
        about,
        social,
        seo
    }
  })
}
export default createStore;
