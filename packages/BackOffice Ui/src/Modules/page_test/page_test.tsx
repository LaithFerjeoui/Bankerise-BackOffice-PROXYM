import React from 'react';
import LanguageSelector from './../../Components/LanguageSelector'
import {  useTranslation } from "react-i18next";
const AllProducts = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>yousri</p>
      <LanguageSelector />
      <h1>{ t("title")}</h1>
    </div>
  );
};

export default AllProducts;