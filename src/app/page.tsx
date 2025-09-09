import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Gallery from "./components/Gallery";
import WeddingDetails from "./components/WeddingDetails";
import Gift from "./components/Gift";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import WelcomeModal from "./components/WelcomeModal";
import Location from "./components/Location";

export default function Home() {
    return (
        <main>
            <WelcomeModal />
            <Header />
            <Hero />
            <OurStory />
            <Gallery />
            <WeddingDetails />
            <Location />
            <Gift />
            <RSVP />
            <Footer />
        </main>
    );
}
