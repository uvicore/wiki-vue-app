export interface Space {
  id: number,
  slug: string,
  section: string,
  name: string,
  order: number,
}

export type Spaces = Space[];



// This is a variant of the original data
export interface SpacesVariant {
  section: string,
  spaces: Spaces,
}


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
