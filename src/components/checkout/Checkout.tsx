import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ClientDetailsForm, type FormUserData } from "./ClientDetailsForm";
import { OrderConfirmation } from "./OrderConfirmation";

export function Checkout() {
  const [formUserData, setFormUserData] = useState<FormUserData | undefined>(
    undefined
  );

  return (
    <div className="flex gap-6 p-4">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          <CardDescription>
            Compila il form in modo da terminare il checkout.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ClientDetailsForm
            handleFormUserData={(userData) => setFormUserData(userData)}
          />
        </CardContent>
      </Card>
      {formUserData && (
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Riepilogo Ordine</CardTitle>
            <CardDescription>
              Controlla i dettagli prima di confermare.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <OrderConfirmation userData={formUserData} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
