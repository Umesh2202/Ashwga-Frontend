import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router";

export function AddProduct() {
  const navigate = useNavigate();

  return (
    <Card
      className="w-full max-w-100 h-152 rounded-none border shadow-none hover:shadow-lg aspect-3/4 py-1 gap-1 cursor-pointer flex justify-center items-center"
      onClick={() => navigate("/product/add")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-plus-icon lucide-plus"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
      <div className="text-xl">Add Product</div>
    </Card>
  );
}

export default AddProduct;
