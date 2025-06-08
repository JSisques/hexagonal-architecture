import { Injectable } from 'src/context/shared/dependency-injection/injectable';
import { PaymentRepository } from '../../domain/repositories/payment.repository';
import { FindPaymentByIdDto } from './find-payment-by-id.dto';
import { PrimitivePayment } from '../../domain/interfaces/primitive-payment.interface';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class FindPaymentByIdUseCase {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async execute(dto: FindPaymentByIdDto): Promise<PrimitivePayment | null> {
    const payment = await this.paymentRepository.getById(dto.id);

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    return payment.toValue();
  }
}
