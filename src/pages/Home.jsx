import Contact from "../components/Contact";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            {/* Now we can render the pages */}
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Contact />

        </div>
    );


};

export default Home;