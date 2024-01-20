import { ORDER_STATUS, OrderInterface, PaymentProvider } from '../types';

class PayPalPaymentProvider implements PaymentProvider {
  public isActive = true;

  async authorise(order: OrderInterface): Promise<boolean> {
    // Implement PayPal payment processing logic
    order.status = ORDER_STATUS.AUTHORISED;
    return Promise.resolve(true);
  }

  async handle(order: OrderInterface): Promise<boolean> {
    // Implement PayPal payment processing logic
    order.status = ORDER_STATUS.PLACED;
    return Promise.resolve(true);
  }
}

export default PayPalPaymentProvider;
