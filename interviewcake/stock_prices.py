"""
Suppose we could access yesterday's stock prices as a list, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.

So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.

stock_prices_yesterday = [10, 7, 5, 8, 11, 0]

 get_max_profit(stock_prices_yesterday)
# returns 6 (bying for $5 and selling for $11)
"""

def get_max_profit(stock_prices_yesterday):
    if len(stock_prices_yesterday) < 2:
        raise IndexError('Getting a profit requires at least 2 prices')

    min_price = stock_prices_yesterday[0]
    max_profit = stock_prices_yesterday[1] - min_price

    for index, current_price in enumerate(stock_prices_yesterday):
        if index == 0:
            continue

        potential_profit = current_price - min_price
        max_profit = max(max_profit, potential_profit)
        min_prie = min(min_price, current_price)

    return max_profit




