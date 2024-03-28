import AccesAnywhereSection from '@/components/access/AccesAnywhereSection';
import FeaturesSection from '@/components/features/FeaturesSection';
import HeroSection from '@/components/hero/HeroSection';
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
    </main>
  );
}
