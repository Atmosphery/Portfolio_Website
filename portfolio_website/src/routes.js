import AboutMe from "./components/About_Me.svelte";
import Projects from "./components/Projects.svelte";
import Resume from "./components/Resume.svelte";
import Landing from "./components/Landing.svelte"

export const routes = {
    "/": Landing,
    "/aboutme": AboutMe,
    "/projects": Projects,
    "/resume": Resume
};