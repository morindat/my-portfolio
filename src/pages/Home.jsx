import { useEffect } from "react";
import Contact from "../components/Contact";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home = () => {
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        if (window.location.hash) {
            window.history.replaceState(
                null,
                "",
                `${window.location.pathname}${window.location.search}`
            );
        }

        requestAnimationFrame(() => window.scrollTo(0, 0));
    }, []);

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden font-body">
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
