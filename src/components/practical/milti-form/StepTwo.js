import Button from "../../button/Button";

const StepOne = ({ prevStep, nextStep, formData, handleInputChange }) => {
  //css in js for button
  const buttonStyles3 = {
    color: "white",
    backgroundColor: "red",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "4px",
    paddingBottom: "4px",
    fontSize: "12px",
    width: "70px",
    fontWeight: 300,
    borderRadius: "8px",
  };
  const buttonStyles4 = {
    color: "white",
    backgroundColor: "green",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "4px",
    paddingBottom: "4px",
    fontSize: "12px",
    width: "70px",
    fontWeight: 300,
    borderRadius: "8px",
  };
  return (
    <div className="bg-white w-full lg:w-1/2 flex flex-col justify-center items-center py-10 rounded-md shadow-sm gap-y-3">
      <h3>Step 2: your email</h3>
      <input
        className="w-full lg:w-1/2 flex flex-col justify-center items-center placeholder:text-xs me-5 placeholder:text-gray-500  border-[1px] border-gray-300 shadowm-lg outline-none px-3 py-1 text-xs"
        type="email"
        name="name"
        required
        placeholder="enter your email..."
        value={formData.name}
        onChange={handleInputChange}
      />
      <span className="flex justify-center items-center gap-x-4 mt-5 w-full lg:w-1/2 mx-auto">
        <Button buttonStyle={buttonStyles3} onClick={prevStep}>
          Prev
        </Button>
        <Button buttonStyle={buttonStyles4} onClick={nextStep}>
          Next
        </Button>
      </span>
    </div>
  );
};

export default StepOne;
