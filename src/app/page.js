import AccesAnywhereSection from '@/components/access/AccesAnywhereSection';
import BottomSection from '@/components/bottom/BottomSection';
import FeaturesSection from '@/components/features/FeaturesSection';
import Footer from '@/components/footer/Footer';
import HeroSection from '@/components/hero/HeroSection';
import ReferencesSection from '@/components/reference/ReferencesSection';
import SnippetsSection from '@/components/snippets/SnippetsSection';
import SuperchargeSection from '@/components/supercharge/SuperchargeSection';

export default function Home() {
  return (
    <main className='header-bg-image'>
      <HeroSection />
      <SnippetsSection />
      <FeaturesSection />
      <AccesAnywhereSection />
      <SuperchargeSection />
      <ReferencesSection />
      <BottomSection />
      <Footer />
    </main>
  );
}
