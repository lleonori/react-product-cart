import { getProducts } from "@/api/product";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCart } from "@/hooks/useCart";
import { useQuery } from "@tanstack/react-query";
import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

export function ProductList() {
  const { dispatch } = useCart();

  const products = useQuery({ queryKey: ["products"], queryFn: getProducts });

  return (
    <Table>
      <TableCaption>Prodotti presenti.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID Prodotto</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Prezzo</TableHead>
          <TableHead>Disponibiltà</TableHead>
          <TableHead>Carrello</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.data?.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>
              <Button
                variant="secondary"
                size="icon"
                className="size-8"
                onClick={() =>
                  dispatch({
                    type: "ADD_PRODUCT",
                    payload: { ...product, qty: 1 },
                  })
                }
              >
                <ShoppingBag />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
