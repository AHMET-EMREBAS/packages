import { Transform } from 'class-transformer';
import { ILike } from 'typeorm';

export function SearchQueryTransformer(searchables: string[]) {
  return Transform(({ value }) => {
    if (value != undefined) {
      return searchables
        .map((e) => {
          return { [e]: ILike(`%${value}%`) };
        })
        .reduce((p, c) => ({ ...p, ...c }));
    }
    return undefined;
  });
}
