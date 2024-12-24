"use client"
import { useLocalSearchParams, usePathname, Stack, useRouter as router } from 'expo-router';
import TakeProductsLine from '@/app/components/TakeProductsLine'
import CategoryList from '@/app/components/CategoryList';
import { categories } from '@/app/data/categories';
import { Category } from '@/app/interfaces/Category';
import { View, TouchableOpacity } from 'react-native'

export default function(){
    const { categoryId, categoryDepth } = useLocalSearchParams();

    let cats: Category[] = [];
    let cdepth: number = Number(categoryDepth);

    console.log("catId: " + categoryId);
    console.log("catDepth: " +cdepth);

    switch(cdepth)
    {
        case 0:
            {
                let temp = categories?.find(i=>i.id===categoryId)?.subcats;
                if(temp)
                {
                    cats = temp;    
                }
            }

        case 1:
            {
                let subcats: Category[] | undefined = [];

                for(let i = 0; i < categories.length; i++)
                {
                    if(categories[i].subcats.length > 0)
                    {
                        for(let j = 0; j < categories[i].subcats.length; j++)
                        {
                            if(categories[i].subcats[j].id == categoryId)
                            {
                                subcats = categories[i].subcats;
                            }
                        }
                    }
                }
                if(subcats)
                {
                    let temp = subcats?.find(i => i.id == categoryId)?.subcats;

                    if(temp)
                        cats = temp;
                }
            }

        case 2:
            {
                let subcats: Category[] | undefined = [];

                for(let i = 0; i < categories.length; i++)
                {
                    if(categories[i].subcats.length > 0)
                    {
                        for(let j = 0; j < categories[i].subcats.length; j++)
                        {
                            if(categories[i].subcats[j].id == categoryId)
                            {
                                subcats = categories[i].subcats;
                            }
                        }
                    }
                }
                if(subcats)
                {
                    let subSubCats : Category[] | undefined = [];
                    for(let i = 0; i < subcats.length; i++)
                    {
                        if(subcats[i].subcats.length > 0)
                        {
                            for(let j = 0; j < subcats[i].subcats.length; j++)
                            {
                                if(subcats[i].subcats[j].id == categoryId)
                                {
                                    subSubCats = subcats[i].subcats;
                                }
                            }
                        }
                    }
                    if(subSubCats)
                    {
                        let temp = subcats?.find(i => i.id == categoryId)?.subcats;

                        if(temp)
                          cats = temp;
                    }
                }
            }
    }

    return(
        <View style={{flex : 1}}>
            <TakeProductsLine categoryId={categoryId as string} router={router()}></TakeProductsLine>
            <CategoryList categories={cats} parentLink='./' router={router()}></CategoryList>
        </View>
        )
}