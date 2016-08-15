import csv as csv
import numpy as np

csv_file = csv.reader(open('csv/train.csv'))
header = next(csv_file)

data = []
for row in csv_file:
    data.append(row)

data = np.array(data)

passengers = data[0::,1].astype(np.float)
number_passengers    = np.size(passengers)
number_survivors     = np.sum(passengers)
proportion_survivors = number_survivors / number_passengers

# print("number_passengers: {}"t(number_passengers))
print("number_passengers: {0!s}" % [number_passengers])
#print("number_survivors: {}".format(number_survivors))
#print("proportion_survivors: {}".format(proportion_survivors))

