import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {

   const { data: session } = useSession();

   const router = useRouter();

   const {pathname} = router;

   const active = "text-teal-600 transition hover:text-teal-500/75 p-3 bg-gray-200 rounded-md"

   const inactive = "text-gray-500 transition hover:text-gray-500/75 p-3";

   if (session) {
    return (
      <>
        <header className="bg-white border-b sticky top-0">
          <div className="lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="block text-teal-600" href="#">
                  <span className="sr-only">Home</span>
                  <svg
                    class="h-8 w-8 text-teal-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </a>
              </div>

              <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center gap-6 text-md">
                    <li>
                      <Link
                        className={location.pathname === '/' ? active : inactive}
                        href="#"
                      >
                        {" "}
                        Dashboard{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={location.pathname === '/products' ? active : inactive}
                        href="#"
                      >
                        {" "}
                        Products{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={location.pathname === '/categories' ? active : inactive}
                        href="#"
                      >
                        {" "}
                        Categories{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={location.pathname === '/orders' ? active : inactive}
                        href="#"
                      >
                        {" "}
                        Orders{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={location.pathname === '/settings' ? active : inactive}
                        href="#"
                      >
                        {" "}
                        Settings{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4"></div>
                  <div class="h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src={session.user.image}
                      alt=""
                    />
                  </div>
                  <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
   }
}