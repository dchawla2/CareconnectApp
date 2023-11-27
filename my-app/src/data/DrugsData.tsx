export type DrugData = {
    id: number;
    drug_name: string;
    company_name: string;
    marketing_status: string;
    route: string;
    image_url: string;
    youtube_url: string;

}
export type IssueType = {
    drug_name: string,
    company_name: string,
    marketing_status: string,
    route: string
};


export const drug_data = [
    {
        route: "ORAl",
        img: "https://www.outsourcing-pharma.com/var/wrbm_gb_food_pharma/storage/images/publications/pharmaceutical-science/in-pharmatechnologist.com/headlines/drug-delivery/merck-kgaa-gets-fda-approval-for-oral-ms-drug/9341202-1-eng-GB/Merck-KGaA-gets-FDA-approval-for-oral-MS-drug.jpg"
    },
    {
        route: "TOPICAL",
        img: "https://cdn.sanity.io/images/0vv8moc6/pharmtech/35506d3128d69f0831163d4f98e69c3367647043-1280x720.jpg"
    },
    {
        route: "INJECTION",
        img: "data:image/jpeg;base64,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"

    },
    {
        route: "OPHTHALMIC",
        img: "data:image/jpeg;base64,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"
    }

]
