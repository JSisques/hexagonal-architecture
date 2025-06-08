import { Controller, Get, Param } from '@nestjs/common';
import { FindPaymentByIdUseCase } from 'src/context/payments/application/find-payment-by-id-use-case/find-payment-by-id.use-case';
import { FindPaymentByIdHttpDto } from './find-payment-by-id.http-dto';
import { PaymentNotFoundException } from 'src/context/payments/domain/exceptions/payment-not-found.exception';
import { PrimitivePayment } from 'src/context/payments/domain/interfaces/primitive-payment.interface';

@Controller('payments')
export class FindPaymentByIdController {
  constructor(
    private readonly findPaymentByIdUseCase: FindPaymentByIdUseCase,
  ) {}

  @Get(':id')
  async run(
    @Param() params: FindPaymentByIdHttpDto,
  ): Promise<PrimitivePayment> {
    try {
      return await this.findPaymentByIdUseCase.execute({
        id: params.id,
      });
    } catch (error) {
      throw error;
    }
  }
}
