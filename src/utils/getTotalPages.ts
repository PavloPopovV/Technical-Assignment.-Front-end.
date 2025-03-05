import { ITEMS_PER_PAGE } from "../constants";

export const getTotalPageCount = (rowCount: number): number =>
    Math.ceil(rowCount / ITEMS_PER_PAGE);