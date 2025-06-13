import { revalidateTag } from 'next/cache';
import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import { SubmitButton } from 'components/submit-button';

export const metadata = {
    title: 'Áreas de Atuação'
};

const tagName = 'randomWiki';
const randomWikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';
const maxExtractLength = 200;
const revalidateTTL = 60;

export default function RevalidationPage() {
  return (
    <main style={{ padding: '1rem' }}>
      <h1>Áreas de Atuação</h1>
      <p>
        O Escritório Munayer Advogados é especializado em demandas cíveis, administrativas e ambientais,
        trabalhando conjuntamente nas áreas de Direito Privado e Público para fornecer os serviços jurídicos
        de interesse aos seus clientes.
      </p>
      <p>
        Para conhecer mais nossas áreas de atuação, compartilhamos um breve portfólio de serviços.
      </p>
    </main>
  );
}