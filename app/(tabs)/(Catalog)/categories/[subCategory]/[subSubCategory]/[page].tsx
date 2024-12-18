"use client"
import { useLocalSearchParams, usePathname, Stack, useRouter } from 'expo-router';
import CategoryList from '@/app/components/CategoryList';
import { categories } from '@/app/data/categories';
import { Category } from '@/app/interfaces/Category';
import { View, TouchableOpacity } from 'react-native'
import  {getNameOfCategoryById} from '@/app/utils/usefulFunctions'


export default function(){
    const router = useRouter();

    const { subCategory: subCategoryId, subSubCategory: subSubCategoryId } = useLocalSearchParams();

    const subCat = categories.find(i=>i.id===subCategoryId)?.subcats;

    let titleName: string | undefined;

    let subSubCats : Category[] = [];
  
    if(subCat!==undefined)
    {
        //  Category/4d49d696-39c6-4f26-abde-7dd21ae50563/page
        const pathName = usePathname();
        
        //  [Category,  4d49d696-39c6-4f26-abde-7dd21ae50563, page]
        const pathNameSplitted = pathName.split('/');

        //  4d49d696-39c6-4f26-abde-7dd21ae50563 or undefined
        titleName = getNameOfCategoryById(pathNameSplitted[pathNameSplitted.length-2], subCat)

        if(titleName == undefined)
            titleName = "";

        // поиск подподкатегорий у подкатегории
        let subSubCatsArray = subCat.find(i=>i.id===subSubCategoryId)?.subcats

        subSubCats = subSubCatsArray !== undefined ? subSubCatsArray : [];
    }

    return(
        <View style={{flex : 1}}>
            <TouchableOpacity onPress={() => router.push({
                pathname:'./products/[page]',
                params:{
                    page:subSubCategoryId,
                }
                })}>TAKE PRODUCTS
            </TouchableOpacity>
            <CategoryList categories={subSubCats} parentLink='./' router={router} title={titleName} ></CategoryList>
            </View>
    )
}