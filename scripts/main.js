import initializeDetailButtonEvents from './dialog.js';
import initializeDetailButtonEventsNat from './nat-dialog.js';
import initializeDetailButtonEventsBetty from './betty-dialog.js';
import initializeDetailButtonEventsDory from './dory-dialog.js';
import initializeDetailButtonEventsLusk from './lusk-dialog.js';
import initializeDetailButtonEventsPink from './pink-dialog.js';
import initializeDetailButtonEventsNemo from './nemo-dialog.js';
import {useFish} from './fishprovider.js';

initializeDetailButtonEventsNemo();
initializeDetailButtonEventsPink();
initializeDetailButtonEventsLusk();
initializeDetailButtonEventsDory();
initializeDetailButtonEventsBetty();
initializeDetailButtonEvents();
initializeDetailButtonEventsNat();
const arrayOfTheFishObject = useFish();
for (const currentFish of arrayOfTheFishObject) {
    console.log(currentFish);
}