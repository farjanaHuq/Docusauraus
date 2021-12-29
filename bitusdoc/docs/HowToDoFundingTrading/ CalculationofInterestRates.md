---
sidebar_position: 4
title: 📝 Calculation of Interest Rates
---
# 📝 Calculation of Interest Rates

### Calculation rules: 
Interest is counted on the hourly basis.
  * If a user finances 1BTCM at 10:45 and pays off 1BTCM at 10:55, there will be no need to pay any interest.
  * If a user finances 1BTCM at 10:45 and pays off 1BTCM at 11:00. One hour of interest is required. If the user keeps the funding till the next hour at 12:00, it will be considered as 2 hours of interest (the interest will be calculated once if it crosses 00:00 minutes).

    :::tip The formula will be: 
    Hourly Interest = Funding Amount of the Asset * Hourly Interest rate of the Asset
    :::

* Interest will generate more financed amount or deduct the principal, which may lead to the risk of forced liquidation. Users are requested to repay the interest periodically or keep sufficient balance in the account. 

* We may adjust the interest rate at any time. The latest interest rate is 0.0011% / hour, which can be found on the [asset page](https://decatsdevapp.eurus.dev/dashboard).