---
sidebar_position: 5
---
# Start Funding and Trading

### Principle of Funding-Trading
Before start to do Funding-Trading, MappedSwap Protocol will use your deposited principal to trade first. Once the deposited principal is used up, the transaction hereafter will be under Funding-Trading mode via using your Funding Quota.

### Long Trades
If you are bullish about BTCM or ETHM, but the amount you want to trade has exceeded the deposited principal, you can finance USDM to buy BTCM or buy ETHM (sell USDM) within the range of the total tradable amount.

For instance:

The market price of buying 1BTCM is 50,000USDM on Day N, but the deposited principal is 5,000USDM, which means that 45,000USDM is financed to buy 1BTCM. (Transaction fees and interest are excluded in this case)

:::tip Explanation
 * If the price of BTCM rises: 
    ```Assuming that the market price of 1BTCM rises by 8.2% to 54,100USDM on Day N+1, the unrealized profit is 54,100USDM - 50,000USDM = 4,100USDM.```

 * If the price of BTCM drops: 
      Assuming that the market price of 1BTCM drops by 8.2% to 45,900USDM on Day N+1, the unrealized loss is 45,900USDM - 50,000USDM = -4,100USDM, making the Equity Value decrease from 5,000USDM to 900USDM. Hence, the risk level will be ```1 - 900USDM*10 / 45,000USDM = 80%```, which will trigger a forced liquidation.

:::

### Short Trades
If you are bearish about BTCM or ETHM, you can finance BTCM or ETHM to short sell BTCM or sell ETHM (buy USDM).

For instance:

The market price of selling 1BTCM is 50,000USDM on Day N, but the deposited principal is 5,000USDM, and your original BTCM holding quantity is 0, which means that 45,000USDM is financed to sell 1BTCM. (Transaction fees and interest are excluded in this case)

:::tip Explanation
 * If the price of BTCM rises: 
        Assuming that the market price of 1BTCM rises by ```8.2% to 54,100USDM on Day N+1```, the unrealized loss is 50,000USDM - 54,100USDM = -4,100USDM, making the Equity Value decrease from 5,000USDM to 900USDM. Hence, the risk level will be ```1 - 900USDM*10 / 45,000USDM = 80%```, which will trigger a forced liquidation.

 * If the price of BTCM drops: 
      Assuming that the market price of 1BTCM drops by 8.2% to 45,900USDM on Day N+1, the unrealized loss is 45,900USDM - 50,000USDM = -4,100USDM, making the Equity Value decrease from 5,000USDM to 900USDM. Hence, the risk level will be ```1 - 900USDM*10 / 45,000USDM = 80%```, which will trigger a forced liquidation.

:::