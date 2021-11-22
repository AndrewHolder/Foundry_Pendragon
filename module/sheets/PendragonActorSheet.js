export default class PendragonActorSheet extends ActorSheet {

    /*
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/Foundry_Pendragon/templates/sheets/knight-sheet.hbs",
            classes: ["pendragon","sheet","knight"]
        });
    }
    */

    get template() {

        return `systems/Foundry_Pendragon/templates/sheets/${this.actor.data.type}-sheet.html`;
    }

    getData() {
        const baseData = super.getData();

        let sheetData = {
            owner: this.actor.isOwner,
            editable: this.isEditable,
            actor: baseData.actor,
            data: baseData.actor.data.data,
            config: CONFIG.pendragon
        }

        return sheetData;
    }
}
