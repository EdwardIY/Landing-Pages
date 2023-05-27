import { Dragon } from "./asset.js";
import { Navigation_Feature,Numbers_Feature,Model_Feature,Video_Feature,SlideShow_Feature} from "./main.js";

Navigation_Feature();
Numbers_Feature(Dragon.numbers);
Model_Feature();
Video_Feature();
SlideShow_Feature(new Array(Dragon.slideImages.length),Dragon.slideImages,Dragon.slideNotes)
//Numbers_Feature,Model_Feature, Video_Feature,SlideShow_Feature 