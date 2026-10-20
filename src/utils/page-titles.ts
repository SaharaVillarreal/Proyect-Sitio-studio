export const pageTitles: Record<string, string> = {
    "/": "Home",
    "/chi-siamo": "Chi siamo",
    "/cosa-facciamo": " Cosa faciamo",
    "/contatti": "Contatti",
};
export function getPageTitle(pathname: string): string {
    return pageTitles[pathname] ?? "Página";
}