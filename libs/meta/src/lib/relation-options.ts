export type RelationOptions = {
  name: string;
  type: 'owner' | 'child' | 'childs' | 'sub' | 'subs';
  target: string;
};
