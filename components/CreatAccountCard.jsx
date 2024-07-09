import Link from "next/link";


export default function CreateAccountCard({ token }) {
    return (
      <>
        {!token && (
          <div className="bg-[#FFFFFF] p-4 rounded-lg border border-gray-300">
            <h2 className="text-gray-800 text-xl">
              DEV Community is a community of 1,344,697 amazing developers
            </h2>
            <p className="text-gray-700 text-base mt-2">
              We're a place where coders share, stay up-to-date and grow their careers.
            </p>
            <div className="mt-4">
              <Link
                href="/new-user"
                className="block bg-gray-100 text-blue-600 text-base font-bold py-2 px-4 border border-blue-600 rounded-md mt-4 text-center hover:bg-blue-600 hover:text-gray-100 "
              >
                Create account
              </Link>
              <Link
                href="/login"
                className="block rounded text-gray-700 text-base py-2 px-4 mt-2 text-center hover:bg-gray-200 "
              >
                Log in
              </Link>
            </div>
          </div>
        )}
      </>
    );
  }