'use client';

import { useRef } from 'react';

export default function QuoteForm() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLSelectElement>(null);
  const spaceRef = useRef<HTMLTextAreaElement>(null);

  async function onSubmit() {
    const firstName = firstNameRef.current?.value;
    const email = emailRef.current?.value;
    const company = companyRef.current?.value;
    const location = locationRef.current?.value;
    const space = spaceRef.current?.value;
    console.log(firstName, email, company, location, space);

    // scroll to the bottom
    // window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <>
      <div className="border-b border-gray-900/10 pb-12 mt-12">
        <h1 className="font-semibold text-gray-900">ask a Question</h1>
        <p className="mt-1 text-sm/6 text-gray-600">
          Drop your details below and we'll get in touch (typically within 5 minutes) to answer any
          questions you have and/or to arrange a time for you to take a look around the space.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
              First name
            </label>
            <div className="mt-2">
              <input
                ref={firstNameRef}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Company Email
            </label>
            <div className="mt-2">
              <input
                ref={emailRef}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="company" className="block text-sm/6 font-medium text-gray-900">
              Company Name
            </label>
            <div className="mt-2">
              <input
                ref={companyRef}
                id="company"
                name="company"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">
              Location Preference
            </label>
            <div className="mt-2">
              <select
                ref={locationRef}
                id="location"
                name="location"
                autoComplete="location-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
              >
                <option>London</option>
                <option>Bristol</option>
                <option>Brighton</option>
              </select>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="space" className="block text-sm/6 font-medium text-gray-900">
              Space Requirement
            </label>
            <div className="mt-2">
              <textarea
                ref={spaceRef}
                id="space"
                name="space"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="mt-3 text-sm/6 text-gray-600">Write about your space requirement.</p>
          </div>
        </div>

        <button type="button" className="" onClick={onSubmit}>
          submit
        </button>
      </div>
    </>
  );
}
