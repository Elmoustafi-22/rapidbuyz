import Product from "@/components/Product";

export default function NewProduct() {
    return (
      <>
        <div className="sm:flex sm:items-center sm:justify-between py-4">
          <div className="text-center sm:text-left">
            <p className="mt-1.5 text-md text-teal-500">
              Create a new product 🛒
            </p>
          </div>
        </div>
        <hr class="h-px border-0 bg-gray-300" />

        <div className="my-10">
            <Product />
        </div>
      </>
    );
}