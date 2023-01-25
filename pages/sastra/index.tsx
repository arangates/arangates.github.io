import { allSnippets } from '.contentlayer/data';
import Container from 'components/Container';
import MuhurtaCard from 'components/metrics/Muhurta';
import { pick } from 'lib/utils';
import type { InferGetStaticPropsType } from 'next';

export default function Sastra() {
  return (
    <Container
      title="Sastrayonitvat– Aranganathan Rathinavelu"
      description="Place for some practical information from sastras"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Sanatana Dharma
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          These are a collection of details I've used in the past and
          saved.</p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          <MuhurtaCard />
        </div>
      </div>
    </Container>
  );
}

