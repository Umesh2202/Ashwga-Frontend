import { Button, Input } from "@/components";
import { useAddProductMutation } from "@/services/queries";
import { useState } from "react";

type SetterFunction = React.Dispatch<React.SetStateAction<string | number>>;

const AddProduct = () => {
  const [name, setName] = useState("Test Product");
  const [price, setPrice] = useState(100);
  const [amountAvailable, setAmountAvailable] = useState(200);
  const [description, setDescription] = useState("This is a nice product");

  const [imageFile, setImageFile] = useState<File | null>(null);

  const { mutateAsync: addProduct } = useAddProductMutation();

  const inputBackground = "neutral-100";
  const fieldTextSize = "xl";

  const handleOnChange = (setter: SetterFunction, value: string | number) => {
    const finalValue =
      typeof value === "string" &&
      (setter === setPrice || setter === setAmountAvailable)
        ? Number(value)
        : value;

    setter(finalValue);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      console.log("File selected:", file.name);
    } else {
      setImageFile(null);
    }
  };

  const handleOnSubmit = () => {
    const formData = new FormData();

    if (imageFile) {
      formData.append("imageFile", imageFile);
    } else {
      console.error("Image file is missing.");
      return;
    }

    const productData = {
      name: name,
      price: price,
      amountAvailable: amountAvailable,
      description: description,
    };

    const productJsonString = JSON.stringify(productData);

    formData.append(
      "product",
      new Blob([productJsonString], {
        type: "application/json",
      })
    );

    addProduct(formData);
  };

  const productFields = [
    {
      id: "name",
      label: "Name of Product",
      placeholder: "Name of Product",
      type: "text",
      value: name,
      setter: setName,
    },
    {
      id: "price",
      label: "Price of Product",
      placeholder: "Price",
      type: "number",
      value: price,
      setter: setPrice,
    },
    {
      id: "amount",
      label: "Amount Available",
      placeholder: "Amount Available",
      type: "number",
      value: amountAvailable,
      setter: setAmountAvailable,
    },
    {
      id: "description",
      label: "Description of Product",
      placeholder: "Description",
      type: "text",
      value: description,
      setter: setDescription,
    },
  ];

  return (
    <div className="flex flex-col items-center pt-10 pb-10">
      <span className="text-5xl font-semibold">
        Please Add Required Details of Product
      </span>
      <form action="#" className="w-1/2" onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-6 mt-8">
          {productFields.map((field) => (
            <div key={field.id}>
              <div className={`text-${fieldTextSize}`}>{field.label}</div>
              <div>
                <Input
                  type={field.type}
                  placeholder={field.placeholder}
                  background={inputBackground}
                  value={field.value}
                  onChange={(e) =>
                    handleOnChange(
                      field.setter as SetterFunction,
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          ))}

          <div>
            <div className={`text-${fieldTextSize}`}>
              Upload Image of Product
            </div>
            <div>
              <Input
                id="picture"
                type="file"
                background={inputBackground}
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              text="Add Product"
              css="bg-yellow-500"
              fontSize="text-xl"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
