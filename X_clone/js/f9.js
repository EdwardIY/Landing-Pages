import { F9 } from "./asset.js";
import { Navigation_Feature,Numbers_Feature,Model_Feature, Video_Feature,SlideShow_Feature } from "./main.js";

Navigation_Feature();
Numbers_Feature(F9.numbers);
Model_Feature();
Video_Feature()
SlideShow_Feature(new Array(F9.slideImages.length),F9.slideImages,F9.slideNotes)