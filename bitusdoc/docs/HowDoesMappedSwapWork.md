---
sidebar_position: 3
---
# ❓ How Does MappedSwap Work?


MappedSwap aggregates all assets into a liquidity pool and uses the Constant Product Market Maker Model algorithm for market making, which is a type of Automated Market Maker (AMM) model.
The so-called Constant Product model is a formula as:
$$
   x * y = k
$$
x and y are the numbers of tokens in the liquidity pool, and k is a constant. x and y can only vary in the opposite direction. No matter how x and y change, k always stays the same. In a MappedSwap transaction, the product of two ENC-20 tokens in the liquidity pool before and after a transaction is a constant value, that is, product before buying= product after buying.

For now, MappedSwap supports liquidity pools include:

* **[BTCM/USDM](https://decatsdevapp.eurus.dev/quote/BTCM)**
* **[ETHM/USDM](https://decatsdevapp.eurus.dev/quote/ETHM)**

For example: Buying USDM with BTCM will increase x (the number of BTCM in the pool) and decrease y (the number of USDM in the pool), so the price of BTCM/USDM will change accordingly.