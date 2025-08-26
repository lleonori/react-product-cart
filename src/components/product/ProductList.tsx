import { getProducts } from "@/api/product";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { ShoppingBag } from "lucide-react";
import { useMemo } from "react";
import { Button } from "../ui/button";
import { useCart } from "@/hooks/useCart";

export function ProductList() {
  const { dispatch } = useCart();

  const products = useQuery({ queryKey: ["products"], queryFn: getProducts });

  const totalPrice = useMemo(() => {
    return products.data?.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
  }, [products]);

  return (
    <Table>
      <TableCaption>Lista dei prodotti presenti.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID Prodotto</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Prezzo</TableHead>
          <TableHead>Disponibiltà</TableHead>
          <TableHead>Carrello</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.data?.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>
              <Button
                variant="secondary"
                size="icon"
                className="size-8"
                onClick={() =>
                  dispatch({ type: "ADD_PRODUCT", payload: product })
                }
              >
                <ShoppingBag />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{totalPrice?.toFixed(2)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
