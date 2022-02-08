import React from "react";
// A great library for fuzzy filtering/sorting items
import { matchSorter } from "match-sorter";

const FuzzyTextFilter = (rows, id, filterValue) => {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
};

// Let the table remove the filter if the string is empty
FuzzyTextFilter.autoRemove = (val) => !val;

export default FuzzyTextFilter;
