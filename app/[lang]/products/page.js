import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator"; // Assuming the path is correct
import MainHeading from "@/components/Headings/MainHeading";
import ProductList from "@/components/ProductList/ProductList";
import { getDictionary } from "@/getDictionary";
import productData from "/data.json";


const page = async ({params}) => {
  const totalSteps = 6;
  const activeStep = 1;

  const lang = await getDictionary(params.lang);


  return (
    <div className="relative  overflow-hidden w-screen max-w-[1080px] min-h-[1920px] space-y-6 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={false} />
      <MainHeading heading={lang.products.heading} />
      <ProductList
        products={productData.Products}
        comingsoon={lang.products.comingsoon}
        lang={params.lang}
        gotocategory={lang.products.gotocategory}
        prerolled={lang.products.prerolled}
      />
    </div>
  );
};

export default page;
