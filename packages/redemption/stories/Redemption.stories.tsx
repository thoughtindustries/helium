import { Story } from '@storybook/react';
import React from 'react';
import { Redemption, RedeemRedemptionCodeDocument } from '../src';

export default {
  title: 'Example/Redemption',
  component: Redemption
};

const Template: Story = () => <Redemption />;

export const Base: Story = Template.bind({});
Base.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: RedeemRedemptionCodeDocument,
          variables: {
            code: 'validCode'
          }
        },
        result: {
          data: {
            RedeemRedemptionCode: {
              valid: true,
              alreadyRedeemed: false,
              codeExpired: false
            }
          }
        }
      },
      {
        request: {
          query: RedeemRedemptionCodeDocument,
          variables: {
            code: 'invalidCode'
          }
        },
        result: {
          data: {
            RedeemRedemptionCode: {
              valid: false,
              alreadyRedeemed: false,
              codeExpired: false
            }
          }
        }
      },
      {
        request: {
          query: RedeemRedemptionCodeDocument,
          variables: {
            code: ''
          }
        },
        result: {
          data: {
            RedeemRedemptionCode: {
              valid: false,
              alreadyRedeemed: false,
              codeExpired: false
            }
          }
        }
      }
    ]
  }
};
