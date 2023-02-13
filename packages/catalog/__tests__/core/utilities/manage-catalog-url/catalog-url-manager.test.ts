import { GlobalTypes } from '@thoughtindustries/content';
import { SortColumn } from '@thoughtindustries/content/src/graphql/global-types';
import { SortDirection } from '../../../../src/core/utilities';
import { CatalogURLManager } from '../../../../src/core/utilities/manage-catalog-url';

const setup = ({
  searchString,
  isCurated,
  displayType
}: {
  searchString: string;
  isCurated?: boolean;
  displayType?: GlobalTypes.ContentItemDisplayType;
}): CatalogURLManager => {
  const parsedUrl = {
    pathname: '/base',
    searchString
  };
  const manager = new CatalogURLManager(parsedUrl);
  if (isCurated !== undefined) {
    manager.setIsCurated(isCurated);
  }
  manager.setSelectedDisplayType(displayType);
  return manager;
};

describe('@thoughtindustries/catalog/core/CatalogURLManager', () => {
  it('should create new instance', () => {
    const urlManager = new CatalogURLManager({ pathname: '/' });
    expect(urlManager).toBeInstanceOf(CatalogURLManager);
  });

  describe('getParsedRequestParams', () => {
    it('should parse the request params from the URL', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=calendar&sort=createdAt%3Adesc';
      const manager = setup({ searchString });

      const actual = manager.getParsedRequestParams();
      expect(actual).toMatchInlineSnapshot(`
        Object {
          "aggregationFilters": Array [
            Object {
              "label": "label1",
              "value": "value1",
            },
            Object {
              "label": "label2",
              "value": "value2",
            },
          ],
          "contentTypes": Array [
            "type1",
          ],
          "displayType": "calendar",
          "page": 3,
          "searchTerm": "test",
          "sort": Object {
            "direction": "desc",
            "field": "createdAt",
          },
          "token": "abc",
        }
      `);
    });

    it('should ignore unrecognized parameters', () => {
      const searchString = '?page=3&foo=bar&anything';
      const manager = setup({ searchString });

      const actual = manager.getParsedRequestParams();
      expect(actual).toMatchInlineSnapshot(`
        Object {
          "page": 3,
        }
      `);
    });

    it('should correctly handle multiple instances of the same parameter (take first instance)', () => {
      const searchString =
        '?token=abc&token=badtoken&page=3&page=1&labels=%5B%22label%22%5D&labels=%5B%22badlabel%22%5D&values=%5B%22value%22%5D&values=%5B%22badvalue%22%5D';
      const manager = setup({ searchString });

      const actual = manager.getParsedRequestParams();
      expect(actual).toMatchInlineSnapshot(`
        Object {
          "aggregationFilters": Array [
            Object {
              "label": "label",
              "value": "value",
            },
          ],
          "page": 3,
          "token": "abc",
        }
      `);
    });
  });

  describe('composeURLsForRemoveAggregationFilterBatch', () => {
    it('should remove provided aggregation filter and reset page', () => {
      const searchString =
        '?page=3&token=abc&labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D';
      const manager = setup({ searchString });

      const filtersToRemove = [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' }
      ];

      const actual = manager.composeURLsForRemoveAggregationFilterBatch(filtersToRemove);
      expect(actual).toMatchInlineSnapshot(`
        Array [
          Object {
            "filter": Object {
              "label": "label1",
              "value": "value1",
            },
            "url": "/base?token=abc&labels=%5B%22label2%22%5D&values=%5B%22value2%22%5D",
          },
          Object {
            "filter": Object {
              "label": "label2",
              "value": "value2",
            },
            "url": "/base?token=abc&labels=%5B%22label1%22%5D&values=%5B%22value1%22%5D",
          },
        ]
      `);
    });

    it('should clear aggregation filters', () => {
      const searchString = '?labels=%5B%22label%22%5D&values=%5B%22value%22%5D';
      const manager = setup({ searchString });

      const filtersToRemove = [{ label: 'label', value: 'value' }];

      const actual = manager.composeURLsForRemoveAggregationFilterBatch(filtersToRemove);
      expect(actual).toMatchInlineSnapshot(`
        Array [
          Object {
            "filter": Object {
              "label": "label",
              "value": "value",
            },
            "url": "/base",
          },
        ]
      `);
    });

    it('should reset existing params when is curated', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=calendar&sort=createdAt%3Adesc';
      const manager = setup({ searchString, isCurated: true });

      const filtersToRemove = [{ label: 'label1', value: 'value1' }];

      const actual = manager.composeURLsForRemoveAggregationFilterBatch(filtersToRemove);
      expect(actual).toMatchInlineSnapshot(`
        Array [
          Object {
            "filter": Object {
              "label": "label1",
              "value": "value1",
            },
            "url": "/base",
          },
        ]
      `);
    });
  });

  describe('composeURLForAddAggregationFilter', () => {
    it('should add aggregation filter', () => {
      const searchString = '?labels=%5B%22label%22%5D&values=%5B%22value%22%5D';
      const manager = setup({ searchString });

      const filter = { label: 'label2', value: 'value2' };

      const actual = manager.composeURLForAddAggregationFilter(filter);
      expect(actual).toMatchInlineSnapshot(
        `"/base?labels=%5B%22label%22%2C%22label2%22%5D&values=%5B%22value%22%2C%22value2%22%5D"`
      );
    });

    it('should reset existing params and add new aggregation filter when is curated', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=calendar&sort=createdAt%3Adesc';
      const manager = setup({ searchString, isCurated: true });

      const filter = { label: 'label', value: 'value' };

      const actual = manager.composeURLForAddAggregationFilter(filter);
      expect(actual).toMatchInlineSnapshot(
        `"/base?labels=%5B%22label%22%5D&values=%5B%22value%22%5D"`
      );
    });
  });

  describe('composeURLForSetPage', () => {
    it('should set page', () => {
      const searchString = '?token=abc&page=3';
      const manager = setup({ searchString });

      const actual = manager.composeURLForSetPage(2);
      expect(actual).toMatchInlineSnapshot(`"/base?token=abc&page=2"`);
    });

    it('should reset existing params and set page when is curated', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=calendar&sort=createdAt%3Adesc';
      const manager = setup({ searchString, isCurated: true });

      const actual = manager.composeURLForSetPage(2);
      expect(actual).toMatchInlineSnapshot(`"/base?page=2"`);
    });
  });

  describe('composeURLForRemoveToken', () => {
    it('should remove token and reset page', () => {
      const searchString = '?token=abc&page=3&query=test';
      const manager = setup({ searchString });

      const actual = manager.composeURLForRemoveToken();
      expect(actual).toMatchInlineSnapshot(`"/base?query=test"`);
    });

    it('should reset existing params when is curated', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=calendar&sort=createdAt%3Adesc';
      const manager = setup({ searchString, isCurated: true });

      const actual = manager.composeURLForRemoveToken();
      expect(actual).toMatchInlineSnapshot(`"/base"`);
    });
  });

  describe('composeURLForAddContentType', () => {
    it('should add content type', () => {
      const searchString = '?content-types=%5B%22type1%22%5D';
      const manager = setup({ searchString });

      const newType = 'type2';

      const actual = manager.composeURLForAddContentType(newType);
      expect(actual).toMatchInlineSnapshot(`"/base?content-types=%5B%22type1%22%2C%22type2%22%5D"`);
    });

    it('should reset existing params and add content type when is curated', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=calendar&sort=createdAt%3Adesc';
      const manager = setup({ searchString, isCurated: true });

      const newType = 'type2';

      const actual = manager.composeURLForAddContentType(newType);
      expect(actual).toMatchInlineSnapshot(`"/base?content-types=%5B%22type2%22%5D"`);
    });
  });

  describe('composeURLForRemoveContentTypeBatch', () => {
    it('should remove provided content type', () => {
      const searchString = '?page=3&token=abc&content-types=%5B%22type1%22%2C%22type2%22%5D';
      const manager = setup({ searchString });

      const typesToRemove = ['type1', 'type2'];

      const actual = manager.composeURLForRemoveContentTypeBatch(typesToRemove);
      expect(actual).toMatchInlineSnapshot(`
        Array [
          Object {
            "contentType": "type1",
            "url": "/base?page=3&token=abc&content-types=%5B%22type2%22%5D",
          },
          Object {
            "contentType": "type2",
            "url": "/base?page=3&token=abc&content-types=%5B%22type1%22%5D",
          },
        ]
      `);
    });

    it('should clear content types', () => {
      const searchString = '?page=3&token=abc&content-types=%5B%22type1%22%5D';
      const manager = setup({ searchString });

      const typesToRemove = ['type1'];

      const actual = manager.composeURLForRemoveContentTypeBatch(typesToRemove);
      expect(actual).toMatchInlineSnapshot(`
        Array [
          Object {
            "contentType": "type1",
            "url": "/base?page=3&token=abc",
          },
        ]
      `);
    });

    it('should reset existing params when is curated', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=calendar&sort=createdAt%3Adesc';
      const manager = setup({ searchString, isCurated: true });

      const typesToRemove = ['type1'];

      const actual = manager.composeURLForRemoveContentTypeBatch(typesToRemove);
      expect(actual).toMatchInlineSnapshot(`
        Array [
          Object {
            "contentType": "type1",
            "url": "/base",
          },
        ]
      `);
    });
  });

  describe('composeURLForSetSearchTermForm', () => {
    it('should set form url', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=calendar&sort=createdAt%3Adesc';
      const manager = setup({ searchString });

      const actual = manager.composeURLForSetSearchTermForm();
      expect(actual).toMatchInlineSnapshot(`"/base"`);
    });
  });

  describe('composeSearchTermFormHiddenFields', () => {
    it('should return hidden fields', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=calendar&sort=createdAt%3Adesc';
      const manager = setup({ searchString });

      const actual = manager.composeSearchTermFormHiddenFields();
      expect(actual).toMatchInlineSnapshot(`
        Array [
          Object {
            "name": "labels",
            "value": "[\\"label1\\",\\"label2\\"]",
          },
          Object {
            "name": "values",
            "value": "[\\"value1\\",\\"value2\\"]",
          },
          Object {
            "name": "token",
            "value": "abc",
          },
          Object {
            "name": "content-types",
            "value": "[\\"type1\\"]",
          },
          Object {
            "name": "display-type",
            "value": "calendar",
          },
          Object {
            "name": "sort",
            "value": "createdAt:desc",
          },
        ]
      `);
    });

    it('should reset existing params and return hidden fields when is curated', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=calendar&sort=createdAt%3Adesc';
      const manager = setup({ searchString, isCurated: true });

      const actual = manager.composeSearchTermFormHiddenFields();
      expect(actual).toMatchInlineSnapshot(`Array []`);
    });
  });

  describe('composeURLForRemoveSearchTerm', () => {
    it('should remove search term', () => {
      const searchString = '?token=abc&page=3&query=test';
      const manager = setup({ searchString });

      const actual = manager.composeURLForRemoveSearchTerm();
      expect(actual).toMatchInlineSnapshot(`"/base?token=abc&page=3"`);
    });

    it('should reset existing params when is curated', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=calendar&sort=createdAt%3Adesc';
      const manager = setup({ searchString, isCurated: true });

      const actual = manager.composeURLForRemoveSearchTerm();
      expect(actual).toMatchInlineSnapshot(`"/base"`);
    });
  });

  describe('composeURLForSetDisplayType', () => {
    it('should set display type', () => {
      const searchString = '?token=abc&page=3&display-type=list';
      const manager = setup({ searchString });

      const actual = manager.composeURLForSetDisplayType(GlobalTypes.ContentItemDisplayType.Grid);
      expect(actual).toMatchInlineSnapshot(`"/base?token=abc&page=3&display-type=grid"`);
    });

    it('should reset existing params and set display type when is curated', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=calendar&sort=createdAt%3Adesc';
      const manager = setup({ searchString, isCurated: true });

      const actual = manager.composeURLForSetDisplayType(GlobalTypes.ContentItemDisplayType.List);
      expect(actual).toMatchInlineSnapshot(`"/base?display-type=list"`);
    });

    it('should reset existing content type when provided display type is calendar', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=list&sort=createdAt%3Adesc';
      const manager = setup({ searchString });

      const actual = manager.composeURLForSetDisplayType(
        GlobalTypes.ContentItemDisplayType.Calendar
      );
      expect(actual).toMatchInlineSnapshot(
        `"/base?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&display-type=calendar&sort=createdAt%3Adesc"`
      );
    });
  });

  describe('composeURLForSetSort', () => {
    it('should set sort', () => {
      const searchString = '?token=abc&page=3&sort=createdAt%3Adesc';
      const manager = setup({ searchString });

      const actual = manager.composeURLForSetSort({
        field: SortColumn.PublishDate,
        direction: SortDirection.Asc
      });
      expect(actual).toMatchInlineSnapshot(`"/base?token=abc&page=3&sort=publishDate%3Aasc"`);
    });

    it('should reset existing params and set sort when is curated', () => {
      const searchString =
        '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc&query=test&content-types=%5B%22type1%22%5D&display-type=calendar&sort=createdAt%3Adesc';
      const manager = setup({ searchString, isCurated: true });

      const actual = manager.composeURLForSetSort({
        field: SortColumn.PublishDate,
        direction: SortDirection.Asc
      });
      expect(actual).toMatchInlineSnapshot(`"/base?sort=publishDate%3Aasc"`);
    });
  });
});
