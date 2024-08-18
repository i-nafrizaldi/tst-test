import PricingCardItem from "./PricingCardItem";

const PricingCard = () => {
  const pricingData = [
    {
      price: "Rp10.000.000",
      plan: "Basic",
      description:
        "Essential features for small businesses to track inventory and profits efficiently.",
      features: [
        { text: "Record incoming goods.", included: true },
        { text: "Record outgoing goods.", included: true },
        { text: "Record profit result.", included: true },
        { text: "Analyze sales results with CHART.", included: false },
        { text: "24/7 Support.", included: false },
        { text: "Export data to Excel.", included: false },
        { text: "AI-based income prediction.", included: false },
      ],
    },
    {
      price: "Rp30.000.000",
      plan: "Entrepreneur",
      description:
        "Comprehensive solution for entrepreneurs, offering advanced analytics, Excel export, and AI-driven income predictions.",
      features: [
        { text: "Record incoming goods.", included: true },
        { text: "Record outgoing goods.", included: true },
        { text: "Record profit result.", included: true },
        { text: "Analyze sales results with CHART.", included: true },
        { text: "24/7 Support.", included: true },
        { text: "Export data to Excel.", included: true },
        { text: "AI-based income prediction.", included: true },
      ],
    },
    {
      price: "Rp20.000.000",
      plan: "Business",
      description:
        "Advanced tools for growing businesses, including sales analysis and comprehensive support.",
      features: [
        { text: "Record incoming goods.", included: true },
        { text: "Record outgoing goods.", included: true },
        { text: "Record profit result.", included: true },
        { text: "Analyze sales results with CHART.", included: true },
        { text: "24/7 Support.", included: true },
        { text: "Export data to Excel.", included: false },
        { text: "AI-based income prediction.", included: false },
      ],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
      {pricingData.map((data, index) => (
        <PricingCardItem
          key={index}
          price={data.price}
          plan={data.plan}
          description={data.description}
          features={data.features}
        />
      ))}
    </div>
  );
};

export default PricingCard;

