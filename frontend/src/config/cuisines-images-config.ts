import allCusines from "../assets/all-cuisines.jpg";
import chinesePic from "../assets/chinese.jpg";
import japanesePic from "../assets/japanese.jpg";
import spanishPic from "../assets/spanish.jpg";
import cafePic from "../assets/cafe.jpg";
import americanPic from "../assets/american.jpg";

type CuisineImageMapType = {
    [key: string]: string;
};

export const cuisineImageMap: CuisineImageMapType = {
   Chinese: chinesePic,
   Japanese: japanesePic,
   Spanish: spanishPic,
   Cafe: cafePic,
   American: americanPic 
}

export const allCuisinesImage = allCusines;
