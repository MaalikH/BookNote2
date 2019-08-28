export interface BookSearch {
    kind: string;
    totalItems: number;
    items?: (ItemsEntity)[] | null;
}
export interface ItemsEntity {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
    searchInfo: SearchInfo;
}
export interface VolumeInfo {
    title: string;
    authors?: (string)[] | null;
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers?: (IndustryIdentifiersEntity)[] | null;
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    categories?: (string)[] | null;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export interface IndustryIdentifiersEntity {
    type: string;
    identifier: string;
}
export interface ReadingModes {
    text: boolean;
    image: boolean;
}
export interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}
export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}
export interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
}
export interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: Pdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}
export interface Epub {
    isAvailable: boolean;
}
export interface Pdf {
    isAvailable: boolean;
    acsTokenLink: string;
}
export interface SearchInfo {
    textSnippet: string;
}
