const applicationName = process.env.NEXT_PUBLIC_PAGE_TITLE!


export function getPageTitle(pageTitle?: string) {
    if (!pageTitle) {
        return applicationName
    }

    return `${pageTitle} - ${applicationName}`
}
