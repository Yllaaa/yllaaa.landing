"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

import catalan from "../../../public/flags/catalan.svg";
import spanish from "../../../public/flags/spanish.svg";
import english from "../../../public/flags/english.svg";
import arabic from "../../../public/flags/arabic.svg";

const LangBtn: React.FC = () => {
  // const router = useRouter();
  const pathname = usePathname();
  const locale: string | any = useLocale();
  // const [currentLang, setCurrentLang] = useState<string | any>("en"); // Default language
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages: { code: string; label: string; flag: string }[] = [
    {
      code: "en",
      label: "English",
      flag: english,
      
    },
    {
      code: "ar",
      label: "Arabic",
      flag: arabic,
      
    },
    {
      code: "es",
      label: "Spanish",
      flag: spanish,
      
    },
    {
      code: "ca",
      label: "Catalan",
      flag: catalan,
      
    },
  ];

    const pathWithoutLocale = pathname.replace(`/${locale}`, "");

  const currentLanguage: any = languages.find((lang) => lang.code === locale);
  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <Image
          src={currentLanguage?.flag}
          alt={currentLanguage?.label}
          style={styles.flag}
          width={40}
          height={40}
        />
        {/* {currentLanguage?.label} */}
      </button>
      {isDropdownOpen && (
        <div style={styles.dropdown}>
          {languages.filter((lang) => lang.code !== locale).map((lang) => (
            <Link
              href={`/${pathWithoutLocale}`}
              locale={lang.code}
              key={lang.code}
              style={styles.dropdownItem}
            >
              <Image
                src={lang.flag}
                alt={lang.label}
                style={styles.dropdownFlag}
                width={20}
                height={20}
              />
              {/* {lang.label} */}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const styles: any = {
  container: {
    position: "relative",
    display: "inline-block",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "transparent",
    
    border: "1px solid transparent",
    borderRadius: "5px",
    cursor: "pointer",
  },
  flag: {
    width: "40px",
    height: "30px",
    borderRadius: "2px",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: "0",
    border: "1px solid transparent",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    overflow: "hidden",
    marginTop: "5px",
  },
  dropdownItem: {
    display: "flex",
    alignItems: "center",
    padding: "8px 0px",
    cursor: "pointer",
    gap: "8px",
    transition: "background-color 0.2s",
  },
  dropdownItemHover: {
    backgroundColor: "#f0f0f0",
  },
  dropdownFlag: {
    width: "40px",
    height: "30px",
    borderRadius: "2px",
  },
};

export default LangBtn;
