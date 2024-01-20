import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { BASE_URL } from "@/constants/api";
import { BrandType } from "@/types/data";

import styles from "@/styles/Categories.module.css";

interface IProps {
  brands: BrandType[];
  title: string;
  id: number;
}

const CategoriesPage = ({ brands, title, id }: IProps) => {
  return (
    <div>
      <p>{title}</p>
      <div className={styles.brandList}>
        {brands.map((brand) => (
          <Link href={`/brand/${brand.id}`} key={brand.id}>
            <Image
              src={brand.imageUrl}
              alt={brand.name}
              width={100}
              height={100}
            />
            <p>{brand.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const brandId = context.params?.id;

  const res = await fetch(`${BASE_URL}/con-category1s/${brandId}/nested`);
  const data = await res.json();
  const categoryItem = data.conCategory1;
  return {
    props: {
      brands: categoryItem.conCategory2s,
      title: categoryItem.name,
      id: categoryItem.id,
    },
  };
};
