 import LandingPage from '../components/LandingPage'
import TrustedPartners from '../components/TrustedPartners'
import FeaturedProperties from '../components/FeaturedProperties'
import InvestmentPartner from '../components/InvestmentPartner'
import PropertyShowcase from '../components/PropertyShowcase'
import ServicesSection from '../components/ServicesSection'
import Properties from '../components/Properties'
import ExploreCities from '../components/ExploreCities'
import SellProperty from '../components/SellProperty'
import SmarterWays from '../components/SmarterWays'
import TeamSection from '../components/TeamSection'
import TestimonialSection from '../components/TestimonialSection'
 import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <LandingPage/>
      <TrustedPartners/>
      <FeaturedProperties/>
      <InvestmentPartner/>
      <PropertyShowcase/>
      <ServicesSection/>
      <Properties/>
      <ExploreCities/>
      <SellProperty/>
      <SmarterWays/>
      <TeamSection/>
      <TestimonialSection/>
       <Footer/>
     </div>
  )
}

export default Home;
