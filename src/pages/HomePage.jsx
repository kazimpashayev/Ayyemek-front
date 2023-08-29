import Header from '../layout/Header';
import Hero from '../components/home/Hero';
import SliderCategory from '../components/home/SliderCategory';
import ProcessOverview from '../components/home/ProcessOverview';
import TopDishesSlider from '../components/home/TopDishesSlider';
import FeedbackSlider from '../components/home/FeedbackSlider';
import FAQ from '../components/home/FAQ';
import Footer from '../layout/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <SliderCategory />
      <ProcessOverview />
      <TopDishesSlider />
      <FeedbackSlider />
      <FAQ />
      <Footer />
    </>
  );
}

export default HomePage;
