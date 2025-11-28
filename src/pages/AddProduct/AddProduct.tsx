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
    const file = event.target.files?.[0]; // Get the first selected file
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

  return (
    <div className="flex flex-col items-center pt-10 pb-10">
      <span className="text-5xl font-semibold">
        Please Add Required Details of Product
      </span>
      <form action="#" className="w-1/2" onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-6 mt-8">
          <div>
            <div className={`text-${fieldTextSize}`}>Name of Product</div>
            <div>
              <Input
                type="text"
                placeholder="Name of Product"
                background={inputBackground}
                value={name}
                onChange={(e) =>
                  handleOnChange(setName as SetterFunction, e.target.value)
                }
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
                onChange={(e) =>
                  handleOnChange(setPrice as SetterFunction, e.target.value)
                }
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
                  handleOnChange(
                    setAmountAvailable as SetterFunction,
                    e.target.value
                  )
                }
              />
            </div>
          </div>
          <div>
            <div className={`text-${fieldTextSize}`}>
              Description of Product
            </div>
            <div>
              <Input
                type="text"
                placeholder="Description"
                background={inputBackground}
                value={description}
                onChange={(e) =>
                  handleOnChange(
                    setDescription as SetterFunction,
                    e.target.value
                  )
                }
              />
            </div>
          </div>
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
