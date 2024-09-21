export interface SettingsProps {
    color: string;
    productName: string;
    defaultPage: string;
    githubRepo: string | undefined;
    twitter: string | undefined;
    defaultDocsTitle: string
    homePage: string,
    loadingTime: number,
    missingPage: string
}

export enum SettingsEnum {
    color,
    productName,
    defaultPage,
    githubRepo,
    twitter,
    defaultDocsTitle,
    homePage,
    loadingTime,
    missingPage
}