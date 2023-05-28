import { StarS } from "./asset.js";
import { Navigation_Feature,Model_Feature, Video_Feature,SlideShow_Feature } from "./main.js";

Navigation_Feature();
Model_Feature();
Video_Feature()
SlideShow_Feature(new Array(StarS.slideImages.length),StarS.slideImages,StarS.slideNotes)