import CatalogURLManager from '../../../src/core/driver/catalog-url-manager';

describe('@thoughtindustries/catalog/CatalogURLManager', () => {
  it('should create new instance', () => {
    const urlManager = new CatalogURLManager({ pathname: '/' });
    expect(urlManager).toBeInstanceOf(CatalogURLManager);
  });

  describe('getStateFromURL', () => {
    it('should parse the current state from the URL', () => {
      const parsedUrl = {
        pathname: '/',
        searchString:
          '?labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D&page=3&token=abc'
      };
      const manager = new CatalogURLManager(parsedUrl);

      const state = manager.getStateFromURL();
      expect(state).toMatchInlineSnapshot(`
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
          "page": 3,
          "token": "abc",
        }
      `);
    });

    it('should ignore unrecognized parameters', () => {
      const parsedUrl = {
        pathname: '/',
        searchString: '?page=3&foo=bar&anything'
      };
      const manager = new CatalogURLManager(parsedUrl);

      const state = manager.getStateFromURL();
      expect(state).toMatchInlineSnapshot(`
        Object {
          "page": 3,
        }
      `);
    });

    it('should correctly handle multiple instances of the same parameter (take first instance)', () => {
      const parsedUrl = {
        pathname: '/',
        searchString:
          '?token=abc&token=badtoken&page=3&page=1&labels=%5B%22label%22%5D&labels=%5B%22badlabel%22%5D&values=%5B%22value%22%5D&values=%5B%22badvalue%22%5D'
      };
      const manager = new CatalogURLManager(parsedUrl);

      const state = manager.getStateFromURL();
      expect(state).toMatchInlineSnapshot(`
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
    it('should remove provided aggregation filter', () => {
      const parsedUrl = {
        pathname: '/base',
        searchString:
          '?token=abc&page=3&labels=%5B%22label1%22%2C%22label2%22%5D&values=%5B%22value1%22%2C%22value2%22%5D'
      };
      const manager = new CatalogURLManager(parsedUrl);

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
      const parsedUrl = {
        pathname: '/base',
        searchString: '?token=abc&page=3&labels=%5B%22label%22%5D&values=%5B%22value%22%5D'
      };
      const manager = new CatalogURLManager(parsedUrl);

      const filtersToRemove = [{ label: 'label', value: 'value' }];

      const actual = manager.composeURLsForRemoveAggregationFilterBatch(filtersToRemove);
      expect(actual).toMatchInlineSnapshot(`
        Array [
          Object {
            "filter": Object {
              "label": "label",
              "value": "value",
            },
            "url": "/base?token=abc",
          },
        ]
      `);
    });
  });

  describe('composeURLForAddAggregationFilter', () => {
    it('should add aggregation filter and reset page', () => {
      const parsedUrl = {
        pathname: '/base',
        searchString: '?token=abc&page=3&labels=%5B%22label%22%5D&values=%5B%22value%22%5D'
      };
      const manager = new CatalogURLManager(parsedUrl);

      const filter = { label: 'label2', value: 'value2' };

      const actual = manager.composeURLForAddAggregationFilter(filter, false);
      expect(actual).toMatchInlineSnapshot(
        `"/base?token=abc&labels=%5B%22label%22%2C%22label2%22%5D&values=%5B%22value%22%2C%22value2%22%5D"`
      );
    });
    it('should clear existing and add new aggregation filter', () => {
      const parsedUrl = {
        pathname: '/base',
        searchString: '?labels=%5B%22label%22%5D&values=%5B%22value%22%5D'
      };
      const manager = new CatalogURLManager(parsedUrl);

      const filter = { label: 'label2', value: 'value2' };

      const actual = manager.composeURLForAddAggregationFilter(filter, true);
      expect(actual).toMatchInlineSnapshot(
        `"/base?labels=%5B%22label2%22%5D&values=%5B%22value2%22%5D"`
      );
    });
  });

  describe('composeURLForSetPage', () => {
    it('should set page', () => {
      const parsedUrl = {
        pathname: '/base',
        searchString: '?token=abc&page=3'
      };
      const manager = new CatalogURLManager(parsedUrl);

      const actual = manager.composeURLForSetPage(2);
      expect(actual).toMatchInlineSnapshot(`"/base?token=abc&page=2"`);
    });
  });

  describe('composeURLForRemoveToken', () => {
    it('should remove token and reset page', () => {
      const parsedUrl = {
        pathname: '/base',
        searchString: '?token=abc&page=3&labels=%5B%22label%22%5D&values=%5B%22value%22%5D'
      };
      const manager = new CatalogURLManager(parsedUrl);

      const actual = manager.composeURLForRemoveToken();
      expect(actual).toMatchInlineSnapshot(
        `"/base?labels=%5B%22label%22%5D&values=%5B%22value%22%5D"`
      );
    });
  });
});
