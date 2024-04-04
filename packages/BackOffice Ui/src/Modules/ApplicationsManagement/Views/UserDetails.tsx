import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function UserDetails() {
  return (
    <div className='bg-[--tableBg]  backdrop-blur-md backdrop:filter py-8 my-10 px-14  '>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-[--txt]">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border-t border-[--border-color] px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-[--txt]">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-[--textSeconday] sm:mt-2">Margot Foster</dd>
          </div>
          <div className="border-t border-[--border-color] px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-[--txt]">Application for</dt>
            <dd className="mt-1 text-sm leading-6 text-[--textSeconday] sm:mt-2">Backend Developer</dd>
          </div>
          <div className="border-t border-[--border-color] px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-[--txt]">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-[--textSeconday] sm:mt-2">margotfoster@example.com</dd>
          </div>
          <div className="border-t border-[--border-color] px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-[--txt]">Salary expectation</dt>
            <dd className="mt-1 text-sm leading-6 text-[--textSeconday] sm:mt-2">$120,000</dd>
          </div>
          <div className="border-t border-[--border-color] px-4 py-6 sm:col-span-2 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-[--txt]">About</dt>
            <dd className="mt-1 text-sm leading-6 text-[--textSeconday] sm:mt-2">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="border-t border-[--border-color] px-4 py-6 sm:col-span-2 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-[--txt]">Attachments</dt>
            <dd className="mt-2 text-sm text-[--txt]">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}