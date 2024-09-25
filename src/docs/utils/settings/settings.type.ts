export interface SettingsProps {
    color: string;
    productName: string;
    defaultPage: string;
    githubRepo: string | undefined;
    twitter: string | undefined;
    defaultDocsTitle: string
    homePage: string,
    loadingTime: number,
    missingPage: string,
    appendSearch: {
        label: string,
        action: () => void,
        icon?: React.ReactNode,
    }[]
}