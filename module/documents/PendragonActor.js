export class PendragonActor extends Actor {

    prepareDerivedData() {

        console.log("Pendragon 5e | Prepareing Dervied Data");

        const actorData = super.getData();

        let sheetData = {
            owner: this.actor.isOwner,
            editable: this.isEditable,
            actor: baseData.actor,
            data: baseData.actor.data.data,
            config: CONFIG.pendragon
        }
      
        this._prepareKnightData(actorData);
    }

    _prepareKnightData(actorData) {
        console.log("Pendragon 5e | Prepareing Knight Data");

        if (actorData.actor.type !== 'knight')
            return;

        actor.data.healingRate = Math.floor((actor.attributeBase.CON + actor.attributeBase.STR) / 10 );

        console.log("Pendragon 5e | DEBUG: Healingrate");
    }
    
}