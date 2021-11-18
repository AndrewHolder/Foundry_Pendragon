import  { pendragon } from "./module/config.js"
import PendragonItemSheet from "./module/sheets/PendragonItemSheet.js";

Hooks.once("init", function() {
    
    console.log("Pendragon 5e | Initializing Pendragon system");

    CONFIG.pendragon = pendragon;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("Pendragon", PendragonItemSheet, {makeDefault: true});
});