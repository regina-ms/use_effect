export type dataEl = {
    id: number,
    name: string
}

export type data = dataEl[];

export type ListProps = {
    list: data;
    onclick: (item: dataEl) => void
}
export type detailsData = {
    id: number,
    avatar: string,
    name: string,
    details: {
        city: string,
        company: string,
        position: string
    }
}

export type DetailProps = {
    item: detailsData,
}