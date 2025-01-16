import { useLocalSearchParams, usePathname, Stack, useGlobalSearchParams, useRouter as router } from 'expo-router';


import ProductListScreen from '@/app/screens/ProductListScreen';
import { useState,useEffect } from 'react';
import { getProductsByCategoryId } from '@/app/services/ProductService';
import { Product } from '@/app/interfaces/Product';
import { Category } from '@/app/interfaces/Category';
import { getCategoryNameById } from '@/app/services/CategoryService';


export default function(){

    const { categoryId } = useLocalSearchParams();



    const [CategoryName,setCategoryName] = useState<string>('');
            useEffect(()=>{
                const getEntries = async()=>{
                    let prods:Product[]=[];
                    if(typeof(categoryId)=="string")
                    {
                        var temp = await getCategoryNameById(categoryId)
                        if(temp!==undefined)
                        {
                            setCategoryName(temp);
                        }
                    }
                }
                getEntries();
            },[])
    
    const [Products,setProducts] = useState<Product[]>([]);
            useEffect(()=>{
                const getEntries = async()=>{
                    let prods:Product[]=[];
                    if(typeof(categoryId)=="string")
                    {
                        var temp = await getProductsByCategoryId(categoryId)
                        if(temp!==undefined)
                        {
                            prods = temp;
                            setProducts(prods);
                        }
                    }
                }
                getEntries();
            },[])
    return( 
            <ProductListScreen data={Products} router={router()} categoryName={CategoryName}></ProductListScreen>
)}