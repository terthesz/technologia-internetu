'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image, { StaticImageData } from 'next/image';
import ProductForm from './ProductForm';
import { useState } from 'react';

export default function Product({
  name,
  desc,
  price,
  img,
}: {
  name: string;
  desc: string;
  price: number;
  img: StaticImageData;
}) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="flex flex-col w-[20rem] shadow-[20px_20px_60px_#f2f2f2,-20px_-20px_60px_#ffffff] px-3 bg-white pt-3 rounded-lg pb-4">
      <div className="w-full overflow-hidden grid place-items-center rounded-md">
        <Image
          src={img}
          alt="img"
          className="w-auto h-[15rem] min-w-full object-cover"
        />
      </div>

      <div className="px-2 mt-4 h-full">
        <h1 className="text-lg font-bold">{name}</h1>
        <p>{desc}</p>

        <div className="mt-4">
          <p className="text-xl">{price.toString()}€</p>

          <Dialog
            open={dialogOpen}
            onOpenChange={setDialogOpen}
          >
            <DialogTrigger className="w-full">
              <Button className="w-full">Kúpiť</Button>
            </DialogTrigger>
            <DialogContent className="w-[30rem]">
              <DialogHeader>
                <DialogTitle>Obdžednac</DialogTitle>
                <DialogDescription>
                  Obdženac zboží
                </DialogDescription>
              </DialogHeader>

              <ProductForm
                dialogClose={() => setDialogOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
