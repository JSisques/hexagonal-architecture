import { Module } from '@nestjs/common';
import { CreatePayment } from '../application/create-payment/create-payment';
import { InMemoryPaymentRepository } from './repositories/in-memory.repository';
import { CreatePaymentController } from './http-api/create-payment/create-payment.controller';
import { PaymentRepository } from '../domain/repositories/payment.repository';
import { FindPaymentByIdController } from './http-api/find-payment-by-id/find-payment-by-id.controller';
import { FindPaymentByIdUseCase } from '../application/find-payment-by-id-use-case/find-payment-by-id.use-case';

@Module({
  providers: [
    CreatePayment,
    FindPaymentByIdUseCase,
    InMemoryPaymentRepository,
    {
      provide: PaymentRepository,
      useExisting: InMemoryPaymentRepository,
    },
  ],
  controllers: [CreatePaymentController, FindPaymentByIdController],
  exports: [CreatePayment, FindPaymentByIdUseCase],
})
export class PaymentModule {}
