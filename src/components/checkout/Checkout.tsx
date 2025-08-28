import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Il nome deve contenere almeno 2 caratteri.",
  }),
  email: z.email({
    message: "Inserisci un indirizzo email valido.",
  }),
  address: z.string().min(5, {
    message: "L'indirizzo deve contenere almeno 5 caratteri.",
  }),
  paymentMethod: z.enum(["creditCard", "paypal", "cash"]),
});

export function Checkout() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      paymentMethod: "creditCard",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          <CardDescription>
            Compila il form in modo da terminare il checkout O
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome" {...field} />
                    </FormControl>
                    <FormDescription>Inserisci il tuo nome.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormDescription>Inserisci la tua mail.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Indirizzo</FormLabel>
                    <FormControl>
                      <Input placeholder="Indirizzo" {...field} />
                    </FormControl>
                    <FormDescription>
                      Inserisci il tuo indirizzo.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Metodo di pagamento.</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col"
                      >
                        <FormItem className="flex items-center gap-3">
                          <FormControl>
                            <RadioGroupItem value="creditCard" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Carta di credito
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center gap-3">
                          <FormControl>
                            <RadioGroupItem value="paypal" />
                          </FormControl>
                          <FormLabel className="font-normal">Paypal</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center gap-3">
                          <FormControl>
                            <RadioGroupItem value="cash" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Contanti
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Conferma</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
