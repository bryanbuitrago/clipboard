import FeaturesSection from '@/components/features/FeaturesSection';
import HeroSection from '@/components/hero/HeroSection';
import SnippetsSection from '@/components/snippets/SnippetsSection';

export default function Home() {
  return (
    <main className='header-bg-image'>
      <HeroSection />
      <SnippetsSection />
      <FeaturesSection />
    </main>
  );
}
