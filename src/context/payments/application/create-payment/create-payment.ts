import { Injectable } from 'src/context/shared/dependency-injection/injectable';
import { PaymentEntity } from '../../domain/entities/payment.entity';
import { PrimitivePayment } from '../../domain/interfaces/primitive-payment.interface';
import { PaymentRepository } from '../../domain/repositories/payment.repository';
import { CreatePaymentDto } from './create-payment.dto';

@Injectable()
export class CreatePayment {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async execute(dto: CreatePaymentDto): Promise<PrimitivePayment> {
    const payment = PaymentEntity.create(dto);
    await this.paymentRepository.create(payment);

    return payment.toValue();
  }
}
