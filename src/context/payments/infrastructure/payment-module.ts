import { Module } from '@nestjs/common';
import { CreatePayment } from '../application/create-payment/create-payment';
import { InMemoryPaymentRepository } from './repositories/in-memory.repository';
import { CreatePaymentController } from './http-api/create-payment/create-payment.controller';
import { PaymentRepository } from '../domain/repositories/payment.repository';

@Module({
  providers: [
    CreatePayment,
    InMemoryPaymentRepository,
    {
      provide: PaymentRepository,
      useExisting: InMemoryPaymentRepository,
    },
  ],
  controllers: [CreatePaymentController],
  exports: [CreatePayment],
})
export class PaymentModule {}
