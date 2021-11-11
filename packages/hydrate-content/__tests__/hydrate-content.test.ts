import { hydrateContent, ContentKind } from "../src";

describe('@thoughtindustries/hydrate-content/hydrateContent', () => {
    const courseStartDate = new Date(2020, 0, 1, 12);
    const baseContentItem = {
        id: "test-item",
        coursePresold: false,
        courseGracePeriodEnded: false,
        courseStartDate,
        timeZone: '',
        waitlistingTriggered: false,
        waitlistingEnabled: false,
        contentTypeLabel: 'test type'
    }
    const testCases = [
        {
            contentItem: {
                ...baseContentItem,
                kind: ContentKind.Product,
                slug: 'test-product'
            },
            customFields: undefined,
            expected: {
                isActive: true,
                hasAvailability: false,
                callToAction: 'View Details',
                href: '/products/test-product'
            }
        }
    ]
    it.each(testCases)(
        'should hydrate content item', 
        ({ contentItem, customFields, expected }) => {
            const hydrated = hydrateContent(contentItem, customFields);
            expect(hydrated.isActive).toEqual(expected.isActive);
            expect(hydrated.hasAvailability).toEqual(expected.hasAvailability);
            expect(hydrated.callToAction).toEqual(expected.callToAction);
            expect(hydrated.href).toEqual(expected.href);
        }
    );
});
