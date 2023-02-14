import AboutMe from "./components/About_Me.svelte";
import Portfolio from "./components/Portfolio.svelte";
import Resume from "./components/Resume.svelte";

export const routes = {
    "/": AboutMe,
    "/portfolio": Portfolio,
    "/resume": Resume
};