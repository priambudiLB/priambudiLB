// Inspired by https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_difference
export function difference<T>(...arrays: T[][]) {
  return arrays.reduce((a, b) => a.filter((c) => !b.includes(c)));
}

type SortableValue = string | number;

// Inspired by https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_sortby-and-_orderby
export function sortBy<T>(array: T[], getter: (item: T) => SortableValue) {
  function compareBy(getterFn: (item: T) => SortableValue) {
    return (a: T, b: T) =>
      getterFn(a) > getterFn(b) ? 1 : getterFn(b) > getterFn(a) ? -1 : 0;
  }

  const sortedArray = [...array];
  sortedArray.sort(compareBy(getter));
  return sortedArray;
}

export function toggleListItem<T>(list: T[], item: T) {
  const itemIndex = list.indexOf(item);
  if (itemIndex === -1) {
    return list.concat(item);
  } else {
    const newList = [...list];
    newList.splice(itemIndex, 1);
    return newList;
  }
}
