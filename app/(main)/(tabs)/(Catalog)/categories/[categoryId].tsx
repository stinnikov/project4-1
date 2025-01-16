"use client"
import { useLocalSearchParams, usePathname, Stack, useRouter} from 'expo-router';
import { categories } from '@/app/data/categories';
import { products } from '@/app/data/products';
import CategoryListScreen from '@/app/screens/CategoryListScreen';
import { Category } from '@/app/interfaces/Category';
import { useState,useEffect } from 'react';
import { getCategoriesById } from '@/app/services/CategoryService';

export default function(){
    const router = useRouter();
    const { categoryId, categoryDepth } = useLocalSearchParams();

    const [Categories,setCategories] = useState<Category[]>([]);
        useEffect(()=>{
            const getEntries = async()=>{
                let cats:Category[]=[];
                if(typeof(categoryId)=="string")
                {
                    var temp= await getCategoriesById(categoryId)
                    if(temp!==undefined)
                    {
                        cats = temp;
                        setCategories(cats);
                    }

                }
                
            }
            getEntries();
        },[])

    const data = categories.filter(i => i.depth==2).slice(0,20);

    const topGoodsData = products.slice(0,20);

    const currentCategory = categories.find(i => i.id === categoryId)
    

    return(
        <CategoryListScreen  
            currentCategory={currentCategory}
            data={Categories}
            topGoodsData={topGoodsData}
            router={router}
        />
    )
}