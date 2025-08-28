import { useCart } from "@/hooks/useCart";
import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { type FormUserData } from "./ClientDetailsForm";

type OrderConfirmationProps = {
  userData: FormUserData;
};

export function OrderConfirmation({ userData }: OrderConfirmationProps) {
  const { state } = useCart();

  const totalPrice = useMemo(() => {
    return state.items.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.qty,
      0
    );
  }, [state]);

  return (
    <>
      <Table>
        <TableCaption>Prodotti nel carrello.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Prezzo</TableHead>
            <TableHead>Quantità</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {state.items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1}>Totale</TableCell>
            <TableCell>{totalPrice}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          <CardDescription>
            Compila il form in modo da terminare il checkout.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Nome: </strong>
            {userData.name}
          </p>
          <p>
            <strong>Email: </strong>
            {userData.email}
          </p>
          <p>
            <strong>Indirizzo: </strong>
            {userData.address}
          </p>
          <p>
            <strong>Metodo di pagamento: </strong>
            {userData.paymentMethod}
          </p>
        </CardContent>
      </Card>
    </>
  );
}
