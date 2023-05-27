import { FHeavy } from "./asset.js";
import { Navigation_Feature,Numbers_Feature,Model_Feature, Video_Feature,SlideShow_Feature } from "./main.js";

Navigation_Feature();
Numbers_Feature(FHeavy.numbers);
Model_Feature();
Video_Feature()
SlideShow_Feature(new Array(FHeavy.slideImages.length),FHeavy.slideImages,FHeavy.slideNotes)