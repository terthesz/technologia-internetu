'use client';

import { useForm } from 'react-hook-form';
import buySchema from '@/schemas/buy.schema';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DialogClose,
  DialogFooter,
} from '@/components/ui/dialog';

export default function ProductForm({
  dialogClose,
}: {
  dialogClose: Function;
}) {
  const form = useForm<z.infer<typeof buySchema>>({
    resolver: zodResolver(buySchema),
  });

  function onSubmit(values: z.infer<typeof buySchema>) {
    dialogClose();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 mt-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <div className="flex flex-row items-center space-x-3">
                <FormLabel className="whitespace-nowrap">
                  Meno
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Martin Ludka"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage className="pl-14" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <div className="flex flex-row items-center space-x-3">
                <FormLabel className="whitespace-nowrap">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="super.email@hehe.bac"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage className="pl-14" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <div className="flex flex-row items-center space-x-3">
                <FormLabel className="whitespace-nowrap">
                  Tel. číslo
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="0916728772"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage className="pl-[4.5rem]" />
            </FormItem>
          )}
        />

        <DialogFooter className="!mt-6">
          <DialogClose asChild>
            <Button variant="secondary">Zrušiť</Button>
          </DialogClose>
          <Button type="submit">Obdžednac</Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
