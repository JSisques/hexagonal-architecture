import { PaymentEntity } from '../entities/payment.entity';

export abstract class PaymentRepository {
  abstract create(payment: PaymentEntity): Promise<void>;
  abstract getById(id: string): Promise<PaymentEntity | null>;
}
