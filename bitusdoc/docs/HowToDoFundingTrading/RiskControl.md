---
sidebar_position: 3
---
# Risk Control

### Risk Level
The calculation of Risk Level is: 
```
Risk Level = 1 - Equity*10 / Funding Used
```
Equity is the sum of the deposited principal and the changes in the market value of the trading position.

### Forced Liquidation
When the risk level reaches 80%, your account will begin to get liquidated.
When the liquidation occurs, we will convert all positions into USDM

### Example
The price of buying 1BTCM is 50,000USDM on Day N, but the deposited principal is 5,000USDM, which means that 45,000USDM is financed to buy 1BTCM. The risk level on Day N is: 
```
Risk Level = 1- 5,000USDM*10 / 45,000USDM = -0.11 = 0% 
```
(If the risk level is negative, the system will display 0%)
Assuming that the market price of 1BTCM drops by 8.2% to 45,900USDM on Day N+1, the unrealized loss is 45,900USDM - 50,000USDM = -4,100USDM, making the Equity Value decrease from 5,000USDM to 900USDM. Hence, the risk level on Day N+1 is:
``` 
Risk Level = 1 - 900USDM*10 / 45,000USDM = 0.80 = 80%
```
The risk level of 80% will trigger a forced liquidation.