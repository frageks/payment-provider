import { PaymentProvider, OrderInterface, ORDER_STATUS } from './types';

class Order implements OrderInterface {
  public paymentProvider: PaymentProvider | undefined;
  public shipment: unknown;
  public status: ORDER_STATUS;
  public productLineItems: unknown[];
  public coupons: unknown[];
  public total: number;
  public tax: number;
  public created: Date;

  constructor() {
    this.status = ORDER_STATUS.CREATED;
  }

  setShipment(shipment: unknown) {
    this.shipment = shipment;
  }

  setPaymentProvider(paymentProvider: PaymentProvider) {
    this.paymentProvider = paymentProvider;
  }
}

export default Order;
