import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const prevStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-10">
      {step === 1 && (
        <StepOne
          nextStep={nextStep}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 2 && (
        <StepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 3 && <StepThree prevStep={prevStep} formData={formData} />}
    </div>
  );
};

export default MultiStepForm;
