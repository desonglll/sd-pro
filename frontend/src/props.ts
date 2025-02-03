export interface CategoryProps {
    id: number;
    name: string;
    title: string;
    description: string;
    imageSrc: string;
    slug: string;
    series: SeriesProps
}

export interface ToothModelProps {
    id: number;
    name: string;
    company: string;
}

export interface ToothProps {
    id: number;
    name: string;
    model: ToothModelProps;
    description: string;
    category: CategoryProps;
    image: string;
    imageSrc: string;
}

export interface CategoryProps {
    name: string,
    title: string,
    description: string,
    imageSrc: string,
    slug: string,
}

export interface SeriesProps {
    id: number;
    name: string;
    title: string;
}

export interface NavProps {
    id: number;
    name: string;
    series: SeriesProps[];
    slug: string
}

export interface CardProps {
    id: number;
    title: string;
    content: string;
    image: string;
    navs: NavProps[];
    slug: string;
}

export interface Member {
    id: number; // Django 默认会有 id 字段
    name: string;
    phone: string;
    email: string;
}

export interface Information {
    id: number; // Django 默认会有 id 字段
    company_name: string;
    manager: Member | undefined; // ForeignKey 指向 Member
    email: string;
    phone: string;
    address: string;
    member: Member[]; // ManyToManyField 是一个数组
    available: boolean;
}

export interface AboutUsImageProps {
    id: number;
    image: string;
    caption: string;
    aboutUs: number
}

export interface AboutUsProps {
    id: number;
    images: AboutUsImageProps[];
    name: string;
    title: string;
    content: string;
    slug: string;
}