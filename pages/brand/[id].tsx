import React from "react";
import Image from "next/image";
import { GetStaticProps } from "next";
import { BASE_URL } from "@/constants/api";
import { BrandItemListType, BrandType, CategoryData } from "@/types/data";

export interface IProps {
  brandData: {
    conItems: BrandType[];
  };
}

const BrandPage = ({ brandData }: IProps) => {
  return (
    // TODO: error handling (brandData가 없을 경우 error page로 이동 임시로 옵셔널 체이닝 사용)
    <div>
      {brandData?.conItems?.map((brand) => {
        return (
          <div key={brand.id}>
            <Image
              src={brand.imageUrl}
              alt={brand.name}
              width={100}
              height={100}
            />
            <p>{brand.name}</p>
          </div>
        );
      })}
    </div>
  );
};

const getItemListPath = (brandCategories: BrandItemListType[]) => {
  return brandCategories.map((category) => category.conCategory1.id);
};

export const getStaticPaths = async () => {
  // TODO: error handling
  const res = await fetch(`${BASE_URL}/con-category1s`);
  const categories = await res.json();
  const fetchPromises = categories.conCategory1s.map(({ id }: CategoryData) =>
    fetch(`${BASE_URL}/con-category1s/${id}/nested`).then((res) => res.json())
  );
  const brandCategories = await Promise.all(fetchPromises);

  const pathNums = getItemListPath(brandCategories);
  const paths = pathNums.map((num) => ({
    params: { id: num.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const res = await fetch(
    `${BASE_URL}/con-items/?conCategory2Id=${Number(id)}`
  ).then((res) => res.json());

  return {
    props: { brandData: res },
    revalidate: 86400,
  };
};
export default BrandPage;
