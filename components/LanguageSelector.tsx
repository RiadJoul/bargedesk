import { Menu, Transition } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import { i18n as i18nType } from 'next-i18next';
import React, { Fragment, useEffect, useState } from 'react'
import ReactCountryFlag from 'react-country-flag';
import { IoMdArrowDropdown } from 'react-icons/io';
import pkg from '../next-i18next.config.js';

export default function LanguageSelector() {
  const { t } = useTranslation('common');
  console.log(t('language'));
  const languages = [
    { flag: 'gb', code: 'en', name: 'English' },
    { flag: 'es', code: 'es', name: 'Español' },
    { flag: 'fr', code: 'fr', name: 'Français' },
    { flag: 'de', code: 'de', name: 'Deutsch' },
    { flag: 'nl', code: 'nl', name: 'Nederlands' },
  ];




  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-steel-gray px-3 py-2 text-sm font-semibold text-black shadow-sm">
          {t('language')}
          <ReactCountryFlag
            className="emojiFlag"
            countryCode={t('countryCode')}
          />
          <IoMdArrowDropdown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute bg-white right-0 z-10 mt-2 w-56 origin-top-right text-black rounded-md bg-steel-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {
              languages.map((language) => (
                <Menu.Item key={language.code}>
               
                    <a
                   href={`/${language.code}`}
                      className={`block px-4 py-2 text-sm hover:bg-gray-100`}
                      
                    >
                      <ReactCountryFlag
                        className="emojiFlag mr-2"
                        countryCode={language.flag}
                      />
                      {language.name.toUpperCase()}
                    </a>
                    
                </Menu.Item>
              ))
            }
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}