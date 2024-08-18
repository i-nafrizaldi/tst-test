import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, X } from "lucide-react";

interface PricingCardItemProps {
  price: string;
  plan: string;
  description: string;
  features: { text: string; included: boolean }[];
}

const PricingCardItem: React.FC<PricingCardItemProps> = ({
  price,
  plan,
  description,
  features,
}) => {
  const isEntrepreneur = plan.toLowerCase() === "entrepreneur";

  return (
    <Card
      className={`w-full md:w-80 py-4 ${
        isEntrepreneur
          ? "bg-mythemes-secondaryPurple text-white"
          : "bg-white text-black"
      }`}
    >
      <CardContent>
        <div className="flex gap-2 mb-10">
          <p className="text-3xl font-bold">{price}</p>
          <p className="font-light">/month</p>
        </div>
        <p className="font-bold text-2xl">{plan}</p>
        <p className="text-sm my-2 font-light">{description}</p>
        <Separator className="mb-5" />
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              {feature.included ? (
                <Check className="text-green-400" />
              ) : (
                <X className="text-red-400" />
              )}
              <p className="text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="place-content-center">
        <Button className="bg-mythemes-darkPurple">
          Start free 14-day trial
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCardItem;
