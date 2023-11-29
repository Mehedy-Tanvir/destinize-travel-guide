import FAQSection from "./FAQSection";
import GuideLines from "./GuideLines";
import SafetyTips from "./SafetyTips";

const Community = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="mb-8 text-5xl font-medium text-center">Community</h1>
      <GuideLines></GuideLines>
      <SafetyTips></SafetyTips>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Community;
