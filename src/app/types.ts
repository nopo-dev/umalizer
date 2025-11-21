export interface Spark {
  name: string;
  type: 'Race' | 'Skill' | 'Scenario';
  level: 1 | 2 | 3;
}

export interface UmaParent {
  name: string;
  sparks: Spark[];
}

export interface Uma {
  id: string; // unique ID for app purposes
  name: string;
  sparks: Spark[];
  parent1?: UmaParent;
  parent2?: UmaParent;
}