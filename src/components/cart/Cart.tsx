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
import { TrashIcon } from "lucide-react";

export function Cart() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Articoli nel carrello</CardTitle>
        <CardDescription>
          Lista degli articoli presenti nel carrello
        </CardDescription>
        <CardAction>
          <Button variant="link">
            <TrashIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2"></div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Procedi
        </Button>
      </CardFooter>
    </Card>
  );
}
