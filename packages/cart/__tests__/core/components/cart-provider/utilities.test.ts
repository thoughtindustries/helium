import { EcommItemType } from '../../../../src/core/components/cart-provider/types';
import {
  parseCartCookie,
  serializeCart
} from '../../../../src/core/components/cart-provider/utilities';

describe('@thoughtindustries/cart/core/CartProvider/utilities', () => {
  describe('serializeCart', () => {
    it('should serialize cart object to base64 string', () => {
      const cart = {
        items: [
          {
            purchasableType: EcommItemType.Course,
            purchasableId: '1',
            title: 'course-1',
            priceInCents: 1000,
            quantity: 1
          },
          {
            purchasableType: EcommItemType.Product,
            purchasableId: '2',
            title: 'product-1',
            priceInCents: 2500,
            quantity: 3
          }
        ]
      };

      const actual = serializeCart(cart);
      expect(actual).toMatchInlineSnapshot(
        `"eyJpZCI6ImNhcnQiLCJjYXJ0SXRlbXMiOlt7InB1cmNoYXNhYmxlVHlwZSI6ImNvdXJzZSIsInB1cmNoYXNhYmxlSWQiOiIxIiwidGl0bGUiOiJjb3Vyc2UtMSIsInByaWNlSW5DZW50cyI6MTAwMCwicXVhbnRpdHkiOjF9LHsicHVyY2hhc2FibGVUeXBlIjoicHJvZHVjdCIsInB1cmNoYXNhYmxlSWQiOiIyIiwidGl0bGUiOiJwcm9kdWN0LTEiLCJwcmljZUluQ2VudHMiOjI1MDAsInF1YW50aXR5IjozfV19"`
      );
    });

    it('should serialize cart object with non-binary data', () => {
      const cart = {
        items: [
          {
            purchasableType: EcommItemType.Course,
            purchasableId: '1',
            title: '测试',
            priceInCents: 1000,
            quantity: 1
          }
        ]
      };

      const actual = serializeCart(cart);
      expect(actual).toMatchInlineSnapshot(
        `"eyJpZCI6ImNhcnQiLCJjYXJ0SXRlbXMiOlt7InB1cmNoYXNhYmxlVHlwZSI6ImNvdXJzZSIsInB1cmNoYXNhYmxlSWQiOiIxIiwidGl0bGUiOiLmtYvor5UiLCJwcmljZUluQ2VudHMiOjEwMDAsInF1YW50aXR5IjoxfV19"`
      );
    });
  });

  describe('parseCartCookie', () => {
    it('should return default cart when cookie is not set', () => {
      const actual = parseCartCookie();
      expect(actual).toMatchInlineSnapshot(`
        Object {
          "id": "cart",
          "items": Array [],
        }
      `);
    });

    it('should return default cart when cookie value is invalid', () => {
      const actual = parseCartCookie('invalid-value');
      expect(actual).toMatchInlineSnapshot(`
        Object {
          "id": "cart",
          "items": Array [],
        }
      `);
    });

    it('should return parsed cart object', () => {
      const actual = parseCartCookie(
        'eyJpZCI6ImNhcnQiLCJjYXJ0SXRlbXMiOlt7InB1cmNoYXNhYmxlVHlwZSI6ImNvdXJzZSIsInB1cmNoYXNhYmxlSWQiOiIxIiwidGl0bGUiOiJjb3Vyc2UtMSIsInByaWNlSW5DZW50cyI6MTAwMCwicXVhbnRpdHkiOjF9LHsicHVyY2hhc2FibGVUeXBlIjoicHJvZHVjdCIsInB1cmNoYXNhYmxlSWQiOiIyIiwidGl0bGUiOiJwcm9kdWN0LTEiLCJwcmljZUluQ2VudHMiOjI1MDAsInF1YW50aXR5IjozfV19'
      );
      expect(actual).toMatchInlineSnapshot(`
        Object {
          "id": "cart",
          "items": Array [
            Object {
              "priceInCents": 1000,
              "purchasableId": "1",
              "purchasableType": "course",
              "quantity": 1,
              "title": "course-1",
            },
            Object {
              "priceInCents": 2500,
              "purchasableId": "2",
              "purchasableType": "product",
              "quantity": 3,
              "title": "product-1",
            },
          ],
        }
      `);
    });

    it('should return parsed cart object with non-binary data', () => {
      const actual = parseCartCookie(
        'eyJpZCI6ImNhcnQiLCJjYXJ0SXRlbXMiOlt7InB1cmNoYXNhYmxlVHlwZSI6ImNvdXJzZSIsInB1cmNoYXNhYmxlSWQiOiIxIiwidGl0bGUiOiLmtYvor5UiLCJwcmljZUluQ2VudHMiOjEwMDAsInF1YW50aXR5IjoxfV19'
      );
      expect(actual).toMatchInlineSnapshot(`
        Object {
          "id": "cart",
          "items": Array [
            Object {
              "priceInCents": 1000,
              "purchasableId": "1",
              "purchasableType": "course",
              "quantity": 1,
              "title": "测试",
            },
          ],
        }
      `);
    });
  });
});
