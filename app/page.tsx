'use client';

import Product from './components/Product';
import { usePageContext } from './template';
import doggo from '@/common/pictures/doggo.webp';
import logs from '@/common/pictures/logs.jpg';
import vbaks from '@/common/pictures/vbaks.webp';

const page = ({ params }: { params: { act: string } }) => {
  const page = usePageContext();

  return (
    <div className="relative h-full flex justify-center items-center w-full">
      <Content page={page} />
    </div>
  );
};

function Content({ page }: { page: number }) {
  if (page !== 0) {
    const title = [
      'O nás',
      'Portfólio',
      'Čistáaaa fantáaaazia',
      'Napíšte nám',
      'Ritmus',
    ][page];

    return <h1 className="text-[2rem]">{title}</h1>;
  }

  return (
    <div className="w-full h-full grid place-items-center grid-cols-3 px-[10%]">
      <Product
        name="Hafo"
        desc="Pes spí psy spia. Tento papá lýzatko."
        img={doggo}
        price={1580.33}
      />
      <Product
        name="Drievko"
        desc="Drievko na robenie domkov. Alebo na robenie lodiek."
        img={logs}
        price={2.99}
      />
      <Product
        name="vbaks"
        desc="Bud top G a kup si vbaks. Ziaden skin ziaden skill."
        img={vbaks}
        price={399999.99}
      />
    </div>
  );
}

export default page;
