function calculateLimitAndOffset(
    page: number,
    pageSize: number,
) {
    //
    if (!Number.isInteger(page) && !Number.isInteger(pageSize)) {
        page = Number(page);
        pageSize = Number(pageSize);
    }
    //
    if (page && Number(page) <= 0) {
        page = 1;
    }

    const offset = page && pageSize ? (Number(page) - 1) * Number(pageSize) : 0;
    const limit = pageSize ? Number(pageSize) : 10;
    return {
        limit,
        offset,
    };
}



export {
    calculateLimitAndOffset,
};
