'use client';

import { usePageContext } from './template';

const page = ({ params }: { params: { act: string } }) => {
    const page = usePageContext();

    return (
        <div className="flex justify-center items-center w-full">
            <h1 className="text-[2rem]">
                {page > 0
                    ? [
                          'O nás',
                          'Portfólio',
                          'Čistáaaa fantáaaazia',
                          'Napíšte nám',
                          'Ritmus',
                      ][page - 1]
                    : 'Domov'}
            </h1>
        </div>
    );
};

export default page;
