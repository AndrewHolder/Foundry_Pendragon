import  { pendragon } from "./module/config.js"
import PendragonItemSheet from "./module/sheets/PendragonItemSheet.js";
import PendragonActorSheet from "./module/sheets/PendragonActorSheet.js"
//import PendragonActor from "./module/documents/PendragonActor.js"


async function preloadHandlebarsTemplates() {
    const templatePaths = [
        
    ];

    return loadTemplates(templatePaths);
}


Hooks.once("init", function() {
    
    console.log("Pendragon 5e | Initializing Pendragon system");

    CONFIG.pendragon = pendragon;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("Pendragon", PendragonItemSheet, {makeDefault: true});

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("Pendragon", PendragonActorSheet, {makeDefault: true});

    preloadHandlebarsTemplates();
});