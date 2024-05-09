import { Ingridient } from "../shopping-list/ingridient.model";

export class Recipe {
        public name: string;
        public description: string;
        public imagePath: string;
        public ingridients: Ingridient[]
        constructor(name: string, desc: string, imageUrl: string, ingrids: Ingridient[]) {
                this.name = name;
                this.description = desc;
                this.imagePath = imageUrl
                this.ingridients = ingrids
        }
}