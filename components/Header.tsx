import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'next-i18next';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}



export default function Header() {
  const { t } = useTranslation('common');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scroll = (to: string) => {
    setMobileMenuOpen(false);
    const section = document.querySelector(`#${to}`);
    section!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto" src="/logo.png" alt="" />
          </a>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">




          <a href="#" onClick={() => scroll("features")} className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary duration-300">
            {t('Features')}
          </a>
          <a href="#" onClick={() => scroll("steps")} className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary duration-300">
            {t('How does it work')}
          </a>
          <a href="#" onClick={() => scroll("contact")} className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary duration-300">
            {t('Contact')}

          </a>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="bg-primary px-2 py-1 mr-5 rounded-md text-sm font-semibold leading-6 text-white">
            {t('Demo')}
          </a>
        </div>
        <LanguageSelector />
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-12 w-auto" src="/logo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#" onClick={() => scroll("features")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t('Features')}
                </a>
                <a
                  href="#" onClick={() => scroll("steps")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t('How does it work')}
                </a>
                <a
                  href="#" onClick={() => scroll("contact")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t('Contact')}
                </a>
              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
