"use client";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator"; // Assuming the path is correct
import MainHeading from "@/components/Headings/MainHeading";
import ProductList from "@/components/ProductList/ProductList";

const page = () => {
  const totalSteps = 6;
  const activeStep = 1;

  return (
    <div className="relative bg-texture bg-no-repeat bg-cover overflow-hidden w-full max-w-lg min-h-screen space-y-4 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={false} />
      <MainHeading heading={"PRODUCTS"} />
      <ProductList />
    </div>
  );
};

export default page;
