import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import LegacyImage from "next/legacy/image";
import styles from "@/styles/Home.module.css";
import { BrandItem, CategoryData } from "@/types/data";
import { BASE_URL } from "@/constants/api";

export interface IProps {
  categories: CategoryData[];
  conItems: BrandItem[];
}

const HomePage = ({ categories, conItems }: IProps) => {
  // img 태그를 사용해서 나타낼 카테고리 데이터
  const category1 = categories.slice(0, 3);
  // next js 12버전 이하의 next/image를 사용해서 나타낸다
  const category2 = categories.slice(3, 6);
  // next js 13버전 이상의 next/image를 사용해서 나타낸다
  const category3 = categories.slice(6, 9);

  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.categoryList}>
        {category1.map((category) => (
          <a href={`/categories/${category.id}`} key={category.id}>
            <div className="category-item">
              <img
                className={styles.categoryImage}
                src={category.imageUrl}
                alt={category.name}
              />
              <p>{category.name}</p>
            </div>
          </a>
        ))}
        {category2.map((category) => (
          <div
            className="category-item"
            key={category.id}
            onClick={() => router.push(`/categories/${category.id}`)}
          >
            <LegacyImage
              src={category.imageUrl}
              alt={category.name}
              width={100}
              height={100}
            />
            <p>{category.name}</p>
          </div>
        ))}
        {category3.map((category) => (
          <Link href={`/categories/${category.id}`} key={category.id}>
            <div className="category-item">
              <Image
                src={category.imageUrl}
                alt={category.name}
                width={100}
                height={100}
              />
              <p>{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div>
        {/* {conItems.map((item) => (
          <div className={styles.saleList} key={item.id}>
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={100}
              height={100}
            />
            <p>{item.name}</p>
            <p>{item.originalPrice}</p>
            <p>{item.ncSellingPrice}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const categoryData = await fetch(`${BASE_URL}/con-category1s`);
  const { conCategory1s } = await categoryData.json();

  const saleData = await fetch(`${BASE_URL}/con-items/soon`);
  const { conItems } = await saleData.json();

  return {
    props: {
      categories: conCategory1s,
      conItems: conItems,
    },
    revalidate: 604800,
  };
};
