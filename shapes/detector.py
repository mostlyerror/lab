
import numpy as np
import argparse
# import imutils
import cv2


parser = argparse.ArgumentParser()
parser.add_argument("-i", "--image", help="path to image file")
args = vars(parser.parse_args())

image = cv2.imread(args["image"])
truncated_file_name = args["image"].split(".")[0]

def flash(image):
	cv2.imshow("image", image)
	cv2.waitKey(0)

gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
cv2.imwrite("%s-gray.jpg" % truncated_file_name, gray)

blurred = cv2.GaussianBlur(gray, (5, 5), 0)
cv2.imwrite("%s-blurred.jpg" % truncated_file_name, blurred)

'''
experiment with a good start value for threshold. 205?

ret, thresh1 = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)
ret, thresh2 = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY_INV)
ret, thresh3 = cv2.threshold(gray, 127, 255, cv2.THRESH_TRUNC)
ret, thresh4 = cv2.threshold(blurred, 127, 255, cv2.THRESH_TOZERO)
ret, thresh5 = cv2.threshold(gray, 127, 255, cv2.THRESH_TOZERO_INV)

[flash(img, img.toString()) for img in [thresh1, thresh2, thresh3, thresh4, thresh5]]
flash(thresh4)


try a range of threshold values and review output to find a good candidate
imgs = []
[imgs.append(cv2.threshold(blurred, val, 255, cv2.THRESH_TOZERO)) for val in list(xrange(185, 255, 5))]

for img in imgs:
	ret, img = img
	print ret
	flash(img)
'''

# _, thresh = cv2.threshold(blurred, 200, 255, cv2.THRESH_TOZERO)
_, thresh = cv2.threshold(blurred, 230, 255, cv2.THRESH_BINARY)
# flash(thresh)
cv2.imwrite("%s-thresh.png" % truncated_file_name, thresh)

# find contours in thresholded image
cnts = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
# print "imutils.is_cv2(): ", imutils.is_cv2()
# cnts = cnts[0] if imutils.is_cv2() else cnts[1]
print "%d contours found" % len(cnts[0])


i = 0
for c in cnts[0]:
	# compute center
	# M = cv2.moments(c)
	# cX = int(M["m10"] / M["m00"])
	# cY = int(M["m01"] / M["m00"])
	# draw contour and center of the shape on the image
	cv2.drawContours(image, [c], -1, (0, 255, 0), 2)
	#cv2.circle(image, (cX, cY), 7, (255, 255, 255), -1)
	#cv2.putText(image, "center", (cX-20, cY-20), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2)

	# show the image
	i+=1
	name = "%s-%d.png" % (truncated_file_name, i)
	cv2.imshow(name, image)
	cv2.imwrite(name, image)
	cv2.waitKey(0)

