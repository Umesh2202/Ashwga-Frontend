import { Button, Input } from "@/components";
import { useAddProductMutation } from "@/services/queries";
import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amountAvailable, setAmountAvailable] = useState(0);
  const [description, setDescription] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);

  const { mutateAsync: addProduct } = useAddProductMutation();

  const inputBackground = "neutral-100";
  const fieldTextSize = "xl"; // Function to dynamically handle input changes

  const handleOnChange = (setter, value: string | number) => {
    const finalValue =
      typeof value === "string" &&
      (setter === setPrice || setter === setAmountAvailable)
        ? Number(value)
        : value;

    setter(finalValue);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first selected file
    if (file) {
      setImageFile(file);
      console.log("File selected:", file.name);
    } else {
      setImageFile(null);
    }
  };

  return (
    <div className="flex flex-col items-center pt-10 pb-10">
      <span className="text-5xl font-semibold">
        Please Add Required Details of Product{" "}
      </span>
      <div className="w-1/2 flex flex-col gap-6 mt-8">
        <div>
          <div className={`text-${fieldTextSize}`}>Name of Product</div>
          <div>
            <Input
              type="text"
              placeholder="Name of Product"
              background={inputBackground}
              value={name}
              onChange={(e) => handleOnChange(setName, e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className={`text-${fieldTextSize}`}>Price of Product</div>
          <div>
            <Input
              type="number"
              placeholder="Price"
              background={inputBackground}
              value={price}
              onChange={(e) => handleOnChange(setPrice, e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className={`text-${fieldTextSize}`}>Amount Available</div>
          <div>
            <Input
              type="number"
              placeholder="Amount Available"
              background={inputBackground}
              value={amountAvailable}
              onChange={(e) =>
                handleOnChange(setAmountAvailable, e.target.value)
              }
            />
          </div>
        </div>
        <div>
          <div className={`text-${fieldTextSize}`}>Description of Product</div>
          <div>
            <Input
              type="text"
              placeholder="Description"
              background={inputBackground}
              value={description}
              onChange={(e) => handleOnChange(setDescription, e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className={`text-${fieldTextSize}`}>Upload Image of Product</div>
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
            text="Add Product"
            css="bg-yellow-500"
            fontSize="text-xl"
            onButtonClick={() => {
              console.log("Product Added:", {
                name,
                price,
                amountAvailable,
                description,
                imageFile,
              });
              addProduct({
                name,
                price,
                amountAvailable,
                description,
                imageSrc: imageFile,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
