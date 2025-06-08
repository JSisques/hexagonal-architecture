import { Injectable } from 'src/context/shared/dependency-injection/injectable';
import { PaymentEntity } from '../../domain/entities/payment.entity';
import { PrimitivePayment } from '../../domain/interfaces/primitive-payment.interface';
import { PaymentRepository } from '../../domain/repositories/payment.repository';

@Injectable()
export class InMemoryPaymentRepository extends PaymentRepository {
  private payments: PrimitivePayment[] = [];

  async create(payment: PaymentEntity): Promise<void> {
    this.payments.push(payment.toValue());
  }

  async getById(id: string): Promise<PaymentEntity | null> {
    const payment = this.payments.find((payment) => payment.id === id) ?? null;

    return payment ? new PaymentEntity(payment) : null;
  }
}
