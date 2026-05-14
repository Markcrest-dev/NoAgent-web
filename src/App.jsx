import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import FeaturesTenants from './components/FeaturesTenants';
import FeaturesLandlords from './components/FeaturesLandlords';
import TrustSafety from './components/TrustSafety';
import Roadmap from './components/Roadmap';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <FeaturesTenants />
        <FeaturesLandlords />
        <TrustSafety />
        <Roadmap />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
