import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";
import { MinusCircle, PlusCircle, TrashIcon } from "lucide-react";
import { useMemo } from "react";
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
import { useNavigate } from "react-router";

export function Cart() {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();

  const totalQty = useMemo(() => {
    return state.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.qty,
      0
    );
  }, [state]);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Articoli nel carrello</CardTitle>
        <CardDescription>
          Lista degli articoli presenti nel carrello
        </CardDescription>
        <CardAction>
          <Button
            onClick={() => dispatch({ type: "CLEAR_CART" })}
            variant="link"
          >
            <TrashIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
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
                    <TableCell className="space-x-2">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="size-8"
                        onClick={() =>
                          dispatch({ type: "ADD_PRODUCT", payload: item })
                        }
                      >
                        <PlusCircle />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="size-8"
                        onClick={() =>
                          dispatch({ type: "REMOVE_PRODUCT", payload: item })
                        }
                      >
                        <MinusCircle />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={2}>Totale</TableCell>
                  <TableCell>{totalQty}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className="w-full"
          onClick={() => navigate("/checkout")}
        >
          Procedi
        </Button>
      </CardFooter>
    </Card>
  );
}
