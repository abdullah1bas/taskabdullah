import { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <section className="relative -pt-16 h-lvh bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative h-full flex mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="w-full text-center ltr:sm:text-left rtl:sm:text-right flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Welcome to our
            <strong className="block font-extrabold text-rose-500">
              website.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-wrap gap-4 text-center w-full"
          >
            <input
              className="flex-2 focus:outline-none px-3 rounded border border-rose-600 text-rose-600"
              type="text"
              placeholder="user name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <button
              type="submit"
              className="flex-1 w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Home;
