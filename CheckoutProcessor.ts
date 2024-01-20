import { OrderInterface } from './types';
import Order from './Order';

class CheckoutProcessor {
  public order: OrderInterface;

  constructor() {
    this.order = new Order();
  }

  async processOrder(): Promise<string> {
    let successful = false;
    const authorised = await this.order.paymentProvider?.authorise(this.order);

    if (authorised) {
      successful = Boolean(await this.order.paymentProvider?.handle(this.order));
    }

    return successful ? 'success' : 'failed';
  }
}
