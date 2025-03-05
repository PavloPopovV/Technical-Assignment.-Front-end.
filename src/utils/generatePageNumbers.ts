import { Nav } from "../types";


const generatePageNumbers = (nav: Nav | null) => {
    if (!nav) return [];
    const { current, total } = nav;
    const pages: (number | string)[] = [];

    if (total <= 10) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }

    if (current <= 7) {
        pages.push(...Array.from({ length: 7 }, (_, i) => i + 1), "…", total);
    } else if (current >= total - 6) {
        pages.push(1, "…", ...Array.from({ length: 7 }, (_, i) => total - 6 + i));
    } else {
        pages.push(1, "…", current - 1, current, current + 1, "…", total);
    }

    return pages;
};

export default generatePageNumbers;
