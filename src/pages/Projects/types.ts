export type searchType = {
    id: number
    title: string
}

export type TablePaginationActionsProps = {
    count: number
    page: number
    rowsPerPage: number
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number
    ) => void
}
