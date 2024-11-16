import Button from "../../button/Button";

const StepOne = ({ nextStep, formData, handleInputChange }) => {
  //css in js for button
  const buttonStyles2 = {
    color: "white",
    backgroundColor: "green",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "4px",
    paddingBottom: "4px",
    fontSize: "12px",
    width: "100px",
    fontWeight: 300,
  };
  return (
    <div className="mt-10">
      <h3>Step 1: Enter Name</h3>
      <input
        className="w-full lg:w-1/2 placeholder:text-xs me-5 placeholder:text-gray-500  border-[1px] border-gray-300 shadowm-lg outline-none px-3 py-1 text-xs"
        type="text"
        name="name"
        placeholder="enter your name..."
        value={formData.name}
        onChange={handleInputChange}
      />
      <Button buttonStyle={buttonStyles2} onClick={nextStep}>
        Next
      </Button>
    </div>
  );
};

export default StepOne;
