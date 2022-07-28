import React from "react";
import { useForm } from "react-hook-form";

const NewReceipt = ({ setNewReceipt }) => {
  const methods = ["Card", "Cash", "Mobile Banking"];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    setNewReceipt(data);

    reset();
  };
  //   console.log(newReceipt);

  return (
    <div className="bg-stone-200 w-3/4 mx-auto ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-left ml-5 my-5">
          <span className="border-b-2 border-black">Receipt Details</span>
        </h1>
        <div className="flex justify-between">
          <label className="ml-5">
            Date<span className="w3-badge w3-red inline-block">&#9733;</span>
          </label>
          <input
            className="mr-8 p-2 my-2"
            placeholder="Enter Date"
            {...register("date", { required: true })}
          />
          {errors.date && <p>date is required</p>}
        </div>
        <div className="flex justify-between">
          <label className="ml-5">
            Amount<span>&#9733;</span>
          </label>
          <input
            className="mr-8 p-2 my-2"
            type="number"
            placeholder="Enter Amount (in INR)"
            {...register("amount", { required: true })}
          />
          {errors.amount && <p>amount is required</p>}
        </div>
        <div className="flex justify-between">
          <label className="ml-5">
            Payment Method<span>&#9733;</span>
          </label>
          <select className="mr-20 my-2 p-2" {...register("payment", { required: true })}>
            {methods.map(method => (
              <option value={method}>{method}</option>
            ))}
          </select>
          {/* <input {...register("payment", { required: true })} /> */}
          {errors.payment && <p>Payment Method is required</p>}
        </div>
        <div className="flex justify-between">
          <label className="ml-5 ">Remark</label>
          <input
            className="mr-8 p-2 my-2"
            placeholder="Enter Remark"
            {...register("remark")}
          />
        </div>
        <input className="my-7 ml-7 bg-transparent  text-red-600 font-semibold hover:text-red-400 py-2 px-4 border border-red-500 rounded mr-2" type="button" value="Cancel" />
        <input className="my-7 ml-7 bg-lime-700 text-white font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded mr-2" type="submit" />
      </form>
    </div>
  );
};

export default NewReceipt;
