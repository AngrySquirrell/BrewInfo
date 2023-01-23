export interface formProps {
    type:
        | "by_name"
        | "by_city"
        | "by_dist"
        | "by_state"
        | "by_postal"
        | "by_type"
        | "by_country";
    handleSubmit:  React.FormEventHandler<HTMLFormElement>
}
export interface breweryProps {
    memory: memoryFormat[];
}
export interface memoryFormat {
    id: string;
    name: string;
    brewery_type: string;
    street: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    phone?: string;
    longitude?: string;
    latitude?: string;
    website_url?: string;
    updated_at: string;
}
export interface typeFormat {
    value: string;
    label: string;
    desc: string;
}
export interface buttonFormat {
    value: formProps['type'];
    label: string;
}
