export interface BrandItem {
  conCategory2Id: number;
  discountRate: number;
  id: number;
  imageUrl: string;
  info: string | null;
  information: string | null;
  isOnlyAccount: number;
  minSellingPrice: number;
  name: string;
  ncSellingPrice: number;
  originalPrice: number;
  tip: string;
  warning: string;
}

export interface Brand {
  conCategory2: {
    id: number;
    name: string;
    imageUrl: string;
    conCategory1Id: number;
  };
}

export interface CategoryData {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}

export interface CategoryResponse {
  categories: CategoryData[];
}

export interface SaleItemResponse {
  conItems: BrandItem[];
}

export interface BrandType {
  id: number;
  imageUrl: string;
  name: string;
  conItems: BrandItem[];
  conCategory1Id: number;
}

export interface BrandListType {
  conCategory1: {
    conCategory2s: CategoryData[];
    name: string;
    id: number;
  };
}

export interface BrandItemListType {
  conCategory1: BrandListType["conCategory1"];
}
