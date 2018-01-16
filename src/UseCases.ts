export interface Product {
    name: string;
    identifier: string;
    summary: string;
    longerDescription?: string;
    price?: number;
    carousel?: {
        url: string,
        imageAlt: string,
        text: {
            title: string,
            caption?: string,
        },
    };
}

export interface UseCase {
    area: string;
    color: string;
    identifier: string;
    title: string;
    description: string;
    longerDescription?: string[];
    products: Product[];
}

const uses: UseCase[] = [
    {
        area: 'Personal Life',
        color: 'primary',
        identifier: 'personal',
        title: 'Explore how our Artificial Intelligence is used in personal life',
        description: 'description goes here',
        longerDescription: ['This is my LONGER DESCRIPTION!!!', 'SECOND LINE', 'THIRD LINE'],
        products: [{
            name: 'Product Sample Name',
            identifier: 'sample-product',
            summary: 'This is a summary for the product.',
            longerDescription: 'This is a longer description for the product.',
            price: 49.99,
            carousel: {
                url: 'SoftBank_pepper.JPG',
                imageAlt: 'Meet Alex',
                text: {
                    title: 'Meet Alex',
                    caption: 'Alex is a highly intelligent robot suitable for personal use',
                },
            },
        }, {
            name: 'Secondary Product Sample Name',
            identifier: 'sample-product-secondary',
            summary: 'This is a summary for the secondary product.',
            longerDescription: 'This is a longer description for the product.',
            price: 49.99,
            carousel: {
                url: 'SoftBank_pepper.JPG',
                imageAlt: 'Meet Alex',
                text: {
                    title: 'Meet Alex',
                    caption: 'Alex is a highly intelligent robot suitable for personal use',
                },
            },
        }],
    },
    {
        area: 'Commerce',
        color: 'secondary',
        identifier: 'commercial',
        title: 'Find out how businesses use our Artificial Intelligence to grow and expand',
        description: 'description goes here',
        products: [{
            name: 'Product Sample Name',
            identifier: 'sample-product',
            summary: 'This is a summary for the product.',
            longerDescription: 'This is a longer description for the product.',
            price: 49.99,
        }],
    },
    {
        area: 'Education',
        color: 'warning',
        identifier: 'educational',
        title: 'See how educational instructors are using our technology to improve the classroom',
        description: 'description goes here',
        products: [{
            name: 'Product Sample Name',
            identifier: 'sample-product',
            summary: 'This is a summary for the product.',
            longerDescription: 'This is a longer description for the product.',
            price: 49.99,
        }],
    },
    {
        area: 'Recreation',
        color: 'info',
        identifier: 'recreational',
        title: 'Find out how our technology can be used to enhance recreational activities',
        description: 'description goes here',
        products: [{
            name: 'Product Sample Name',
            identifier: 'sample-product',
            summary: 'This is a summary for the product.',
            longerDescription: 'This is a longer description for the product.',
            price: 49.99,
        }],
    },
    {
        area: 'Research',
        color: 'dark',
        identifier: 'research',
        title: 'Take a look into cutting-edge Artificial Intelligence for research',
        description: 'description goes here',
        products: [{
            name: 'Product Sample Name',
            identifier: 'sample-product',
            summary: 'This is a summary for the product.',
            longerDescription: 'This is a longer description for the product.',
            price: 49.99,
        }],
    },
];

export default uses;
