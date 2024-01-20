import { PaymentProvider } from './types';

class PaymentProviderHandler {
  constructor() {}

  disablePaymentProvider(paymentProvider: PaymentProvider) {
    paymentProvider.isActive = false;
  }

  enablePaymentProvider(paymentProvider: PaymentProvider) {
    paymentProvider.isActive = true;
  }
}
