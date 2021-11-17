export default class PendragonItemSheet extends ItemSheet {
    get template() {

        return `systems/Foundry_Pendragon/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.pendragon;

        return data;
    }
}
