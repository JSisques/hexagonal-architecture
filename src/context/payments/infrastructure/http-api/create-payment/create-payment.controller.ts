import { Body, Controller, Post } from '@nestjs/common';
import { CreatePayment } from '../../../application/create-payment/create-payment';
import { CreatePaymentHttpDto } from './create-payment.http-dto';
import { PrimitivePayment } from 'src/context/payments/domain/interfaces/primitive-payment.interface';

@Controller('payments')
export class CreatePaymentController {
  constructor(private readonly createPaymentUseCase: CreatePayment) {}

  @Post()
  async createPayment(
    @Body() createPaymentHttpDto: CreatePaymentHttpDto,
  ): Promise<PrimitivePayment> {
    return this.createPaymentUseCase.execute({
      amount: createPaymentHttpDto.amount,
      customerId: createPaymentHttpDto.customerId,
    });
  }
}
