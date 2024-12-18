"use client"
import { useLocalSearchParams, usePathname, Stack } from 'expo-router';
import CategoryList from '@/app/components/CategoryList';
import { categories } from '@/app/data/categories';
import { Category } from '@/app/interfaces/Category';
import { ScrollView } from 'react-native'
import  {getNameOfCategoryById} from '@/app/utils/usefulFunctions'


export default function(){

    const { subCategory,subSubCategory } = useLocalSearchParams();

    const subCat = categories.find(i=>i.id===subCategory)?.subcats;

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
        let subSubCatsArray = subCat.find(i=>i.id===subSubCategory)?.subcats

        subSubCats = subSubCatsArray !== undefined ? subSubCatsArray : [];
    }

    return(
            <CategoryList categories={subSubCats} parentLink={subSubCategory.toString()} title={titleName} ></CategoryList>
    )
}