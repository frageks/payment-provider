import { PaymentProvider, ORDER_STATUS, OrderInterface } from '../types';

class StripePaymentProvider implements PaymentProvider {
  public isActive = true;

  async authorise(order: OrderInterface): Promise<boolean> {
    // Implement Stripe payment processing logic
    order.status = ORDER_STATUS.AUTHORISED;
    return Promise.resolve(true);
  }

  async handle(order: OrderInterface): Promise<boolean> {
    // Implement Stripe payment processing logic
    order.status = ORDER_STATUS.PLACED;
    return Promise.resolve(true);
  }
}

export default StripePaymentProvider;
