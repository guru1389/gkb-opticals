import Hero from "./components/home/Hero";
import FeaturedProducts from "./components/home/FeaturedProducts";
import CategoryShowcase from "./components/home/CategoryShowcase";
import BrandCampaignSlider from "./components/home/BrandCampaignSlider";
import CategorySlider from "./components/home/CategorySlider";
import FashionCollection from "./components/home/FashionCollection";
import ProductTabs from "./components/home/ProductTabs";
import Brandcampaignslider from "./components/home/brandcampaign/BrandCampaignSlider";
import SeasonalEdit from "./components/home/seasonal-edit/SeasonalEdit";
import Countries from "./components/home/Countries";



export default function Home() {
  return (
    <main>
     
       <Hero />
      <FeaturedProducts />
      <CategoryShowcase /> 
      <BrandCampaignSlider />  
      <CategorySlider />
      <FashionCollection />
      <ProductTabs />
      <Brandcampaignslider />
      <SeasonalEdit />
      <Countries />
     
    </main>
  );
}