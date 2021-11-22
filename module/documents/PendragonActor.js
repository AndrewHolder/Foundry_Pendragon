/**
 * Extend the base Actor document by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export default class PendragonActor extends Actor {

    /** @override */
    prepareData() {
        // Prepare data for the actor. Calling the super version of this executes
        // the following, in order: data reset (to clear active effects),
        // prepareBaseData(), prepareEmbeddedDocuments() (including active effects),
        // prepareDerivedData().
        super.prepareData();
    }

    /** @override */
    prepareBaseData() {
        // Data modifications in this step occur before processing embedded
        // documents or derived data.
    }

    /**
     * @override
     * Augment the basic actor data with additional dynamic data. Typically,
     * you'll want to handle most of your calculated/derived data in this step.
     * Data calculated in this step should generally not exist in template.json
     * (such as ability modifiers rather than ability scores) and should be
     * available both inside and outside of character sheets (such as if an actor
     * is queried and has a roll executed directly from it).
     */
    prepareDerivedData() {

        const actorData = this.data;
        const data = actorData.data;

        // Make separate methods for each Actor type (character, npc, etc.) to keep
        // things organized.
        this._prepareKnightData(actorData);
    }

    _prepareKnightData(actorData) {

        if (actorData.type !== 'Knight' && actorData.type !== 'Female Knight') return;

        actorData.data.damage = Math.floor((actorData.data.attributeBase.SIZ + actorData.data.attributeBase.STR) / 6);

        actorData.data.healingRate = Math.floor((actorData.data.attributeBase.CON + actorData.data.attributeBase.STR) / 10);

        actorData.data.movementRate = Math.floor((actorData.data.attributeBase.STR + actorData.data.attributeBase.DEX) / 10);

        actorData.data.totalHP = actorData.data.attributeBase.CON + actorData.data.attributeBase.SIZ;

        actorData.data.uncon = Math.floor((actorData.data.totalHP) / 4);

    }

}
