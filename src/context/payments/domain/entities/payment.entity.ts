import { v4 as uuidv4 } from 'uuid';
import { PrimitivePayment } from '../interfaces/primitive-payment.interface';

export class PaymentEntity {
  constructor(private attributes: PrimitivePayment) {}

  static create(createPayment: {
    amount: number;
    customerId: string;
  }): PaymentEntity {
    return new PaymentEntity({
      id: uuidv4(),
      amount: createPayment.amount,
      customerId: createPayment.customerId,
    });
  }

  toValue(): PrimitivePayment {
    return {
      id: this.attributes.id,
      amount: this.attributes.amount,
      customerId: this.attributes.customerId,
    };
  }
}
