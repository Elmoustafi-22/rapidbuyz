export default function Product(){
    return (
      <>
        <div class="mx-auto max-w-xs">
          <div>
            <label
              for="example1"
              class="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="example1"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="you@email.com"
            />
          </div>
        </div>
      </>
    );
}