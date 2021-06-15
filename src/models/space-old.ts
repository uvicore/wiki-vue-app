import axios from 'axios';
import { Store } from "@/uvicore/store"
import {reactive} from 'vue';


export interface Topic extends Object {
  id: number,
  slug: string,
  name: string,
  desc?: string,
  icon?: string,
  order: number,
  section_id: number,
}
export type Topics = Topic[];

export interface Section extends Object {
  id: number,
  slug: string,
  name: string,
  icon?: string,
  order: number,
  space_id: number,
  topics: Topics,
}
export type Sections = Section[];

export interface Space extends Object {
  id: number,
  slug: string,
  name: string,
  order: number,
  sections: Sections,
}
export type Spaces = Space[];



const api = axios.create({
  baseURL: "https://wiki-api-local.triglobal.io/api",
});



class SpaceStore extends Store<Spaces> {
  protected data(): Spaces {
    return [];
  }

  getSpaces() {
    this.clearState()
    api.get('/spaces?include=sections.topics').then((res) => {
      setTimeout(() => { // Fake timer for loading screens
        const spaces: Spaces = res && res.data;
        for (var space of spaces) {
          this.state.push(space);
        }
      }, 3000);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  setSpaces(spaces: Spaces) {
    this.state = spaces;
  }

  tweak() {
    this.state[0].name += '2';
  }
}

export const spaceStore: SpaceStore = new SpaceStore()



// // This is a variant of the original data
// export interface SpacesVariant {
//   section: string,
//   spaces: Spaces,
// }


// // Notice the plural of Presets is NOT an array of objects but an object of objects using the preset key
// // This is so we can add the presets to localStore['presets.myView'] easily.
// export interface DrfPresets {
//   [key: string]: DrfPreset;
// }



// /**
//  * DRF Entity State. For Django Rest Framework specific entities.
//  * E Type = Entity.
//  */
//  export interface DrfEntityState<E> extends EntityState<E> {
//   api: Partial<DrfApiState>;
//   query: Partial<DrfQueryState>;
//   columns?: DrfColumns;
//   presets: DrfPresets;
//   preset: string;
// }

// /**
//  * Basic state (non entity simple object)
//  */
//  export interface State {
//   /**
//    * Unique store key to separate this state from any other state
//    */
//   key: string;

//   /**
//    * Array of state keys to be automatically set and retrieved from localStorage to persist some values
//    */
//   localStorage?: string[];
// }


// /**
//  * Basic entity state (arrays of objects, but NOT API based). E Type = Entity.
//  */
// export interface EntityState<E> extends State {
//   /**
//    * Results array of entity objects
//    */
//   results?: E[];

//   /**
//    * Current Primary Key of selected record
//    */
//   resultId?: any;

//   /**
//    * Result of a single selected record
//    */
//   result?: E;

//   /**
//    * Is data being loaded
//    */
//   loading?: boolean;
// }
