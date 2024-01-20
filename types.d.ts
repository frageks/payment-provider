export enum ORDER_STATUS {
  CREATED = 'CREATED',
  AUTHORISED = 'AUTHORISED',
  PLACED = 'PLACED',
  CANCELLED = 'CANCELLED',
  CONFIRMED = 'CONFIRMED',
  SHIPPED = 'SHIPPED',
  COMPLETED = 'COMPLETED',
  REFUNDED = 'REFUNDED'
}

export interface OrderInterface {
  status: ORDER_STATUS;
  productLineItems: unknown[];
  coupons: unknown[];
  shipment: unknown;
  total: number;
  paymentProvider: PaymentProvider | undefined;
  tax: number;
  created: Date;
  setShipment(shipment: unknown): void;
  setPaymentProvider(paymentProvider: PaymentProvider | undefined): void;
}

export interface PaymentProvider {
  isActive: boolean;
  authorise(order: OrderInterface): Promise<boolean>;
  handle(order: OrderInterface): Promise<boolean>;
}
